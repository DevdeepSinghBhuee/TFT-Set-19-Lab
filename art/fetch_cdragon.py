"""Download Set 19 augment, emblem and trait icons from CommunityDragon's PBE TFT data.

Writes img/augments/*.png, img/traits/*.png, adds emblem icons to img/items/, and keeps
a manifest.json in each folder listing the slugs that exist. Never fails the workflow:
anything it cannot find is skipped and reported.
"""
import json, os, re, sys, urllib.request

BASE = "https://raw.communitydragon.org/pbe"
UA = {"User-Agent": "Mozilla/5.0 (tft-set-19-lab art fetcher)"}


def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=120).read()


def slug(s):
    return re.sub(r"[^a-z0-9]", "", s.lower())


def norm(s):
    return slug(s.replace("K/DA", "K|DA").replace("KDA", "K|DA"))


def asset_url(path):
    p = path.lower()
    p = re.sub(r"\.(tex|dds)$", ".png", p)
    return f"{BASE}/game/{p}"


def save(url, dest):
    if os.path.exists(dest):
        return True
    try:
        data = get(url)
    except Exception as e:  # noqa: BLE001
        print("  failed", url, e)
        return False
    if len(data) < 100:
        return False
    with open(dest, "wb") as f:
        f.write(data)
    return True


def load_manifest(path):
    try:
        return set(json.load(open(path)))
    except Exception:  # noqa: BLE001
        return set()


def main():
    try:
        data = json.loads(get(f"{BASE}/cdragon/tft/en_us.json"))
    except Exception as e:  # noqa: BLE001
        print("could not load CommunityDragon data:", e)
        return

    items = data.get("items", [])
    print("items in data:", len(items))

    def score(it):
        api = it.get("apiName", "")
        return (2 if re.search(r"TFT19|Set19", api) else 0) + (1 if "Augment" in api else 0)

    by_name = {}
    for it in items:
        n, icon = it.get("name"), it.get("icon")
        if not n or not icon:
            continue
        k = norm(n)
        if k not in by_name or score(it) > score(by_name[k]):
            by_name[k] = it

    # Augments
    src = open("augments.js", encoding="utf-8").read().split("AUG_RAW=`", 1)[-1]
    names = re.findall(r"^([^~\n`]+)~[SGP]~", src, flags=re.M)
    os.makedirs("img/augments", exist_ok=True)
    have = load_manifest("img/augments/manifest.json")
    missing = []
    for n in names:
        it = by_name.get(norm(n))
        if it and save(asset_url(it["icon"]), f"img/augments/{slug(n)}.png"):
            have.add(slug(n))
        elif slug(n) not in have:
            missing.append(n)
    json.dump(sorted(have), open("img/augments/manifest.json", "w"))
    print(f"augment icons: {len(have)} of {len(names)}; missing: {missing[:40]}")

    # Emblems (into the item manifest the page already reads)
    emblems = ["Arcanist", "Beach Pop", "Bodyguard", "Choreographer", "Classical", "Frontman", "Heartsteel",
               "Hitmaker", "Hyperpop", "Illbeats", "Ionic Spark", "Jazz", "Juggernaut", "K|DA", "Manager",
               "Pentakill", "Prodigy", "Renegade", "Rock", "Slayer", "Swiftstriker", "True Damage"]
    os.makedirs("img/items", exist_ok=True)
    items_have = load_manifest("img/items/manifest.json")
    got = 0
    for t in emblems:
        cands = [it for it in items if norm(it.get("name", "")) == norm(t + " Emblem") and it.get("icon")]
        cands.sort(key=score, reverse=True)
        key = slug(t + "emblem")
        if cands and save(asset_url(cands[0]["icon"]), f"img/items/{key}.png"):
            items_have.add(key)
            got += 1
    json.dump(sorted(items_have), open("img/items/manifest.json", "w"))
    print(f"emblem icons: {got} of {len(emblems)}")

    # Trait icons for Set 19
    sets = data.get("setData", [])
    s19 = [s for s in sets if s.get("number") == 19 or "19" in str(s.get("mutator", ""))]
    os.makedirs("img/traits", exist_ok=True)
    tr_have = load_manifest("img/traits/manifest.json")
    if s19:
        for tr in s19[-1].get("traits", []):
            n, icon = tr.get("name"), tr.get("icon")
            if n and icon and save(asset_url(icon), f"img/traits/{slug(n.replace('K/DA', 'K|DA'))}.png"):
                tr_have.add(slug(n.replace("K/DA", "K|DA")))
    json.dump(sorted(tr_have), open("img/traits/manifest.json", "w"))
    print(f"trait icons: {len(tr_have)} (set 19 found: {bool(s19)})")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:  # noqa: BLE001
        print("art fetch error:", e)
    sys.exit(0)
