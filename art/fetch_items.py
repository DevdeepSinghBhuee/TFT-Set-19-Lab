"""Download TFT item icons from Riot's Data Dragon into img/items/ and write a manifest."""
import json, os, re, urllib.request
UA = {"User-Agent": "Mozilla/5.0"}
def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30).read()
slug = lambda s: re.sub(r"[^a-z0-9]", "", s.lower())
wanted = [l.strip() for l in open("art/items.txt") if l.strip()]
ver = json.loads(get("https://ddragon.leagueoflegends.com/api/versions.json"))[0]
data = json.loads(get(f"https://ddragon.leagueoflegends.com/cdn/{ver}/data/en_US/tft-item.json"))["data"]
by = {}
for key, it in data.items():
    s = slug(it.get("name", ""))
    plain = key.startswith("TFT_Item_") and not re.search(r"Radiant|Shadow|Ornn|Artifact|Support", key)
    if s and (s not in by or plain):
        by[s] = it
os.makedirs("img/items", exist_ok=True)
have = []
for name in wanted:
    s = slug(name)
    it = by.get(s)
    if not it:
        print("no icon yet:", name); continue
    path = f"img/items/{s}.png"
    if not os.path.exists(path):
        open(path, "wb").write(get(f"https://ddragon.leagueoflegends.com/cdn/{ver}/img/tft-item/{it['image']['full']}"))
    have.append(s)
json.dump(sorted(have), open("img/items/manifest.json", "w"))
print(f"version {ver}: {len(have)} of {len(wanted)} icons")
