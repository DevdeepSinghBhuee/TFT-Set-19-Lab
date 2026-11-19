// Set 19 augments from the PBE build (patch 19.1 preview), read from tactics.tools on 19 Nov 2026.
// Format: name~tier~text. Tier: S silver, G gold, P prismatic. Hero augments are listed in AUG_HERO.
const AUG_HERO=["Axe Crescendo","Bite Marks","Dancin' n' Prancin'","He's Electric","Punch Line","Lifeguard on Duty","Tibbers! I Can't See the Stage"];
const AUG_RAW=`3/4 Time~S~Gain 3 gold, 3 player Health and 3 rerolls now, and a random 3-cost champion in 4 rounds.
4/4 Time~S~Gain 4 gold, 4 player Health and 4 rerolls now, and a random 4-cost champion in 4 rounds.
Augmented Power~S~Your next augment is one tier higher.
Axe Crescendo~S~Gain an Olaf. Your strongest Olaf becomes a ranged Attack Marksman with a single-target ability that gets stronger with each cast.
Backup Bows~S~Gain a Recurve Bow. After your champions attack 1000 times, get 2 more.
Band of Thieves~S~Gain 1 Thief's Gloves.
Beltsmith~S~Gain 1 random completed item that builds from Giant's Belt.
Bite Marks~S~Gain an Elise. Your strongest Elise becomes a Magic Assassin with a bite that she recasts on low-Health enemies on kill.
Blind Box~S~Gain a random Gold augment, but lose gold (three versions: 5, 8 or 11 gold).
Boxing Lessons~S~Your team gains 30 Health for each ally that starts combat in the front row.
Branching Out~S~Gain a random Emblem.
Branching Out+~S~Gain a random Emblem and a Reforger.
Bundle o' Shrooms~S~Gain 6 mushrooms, each granting 1 reroll, 2 XP or 3 Tactician Health. Mushrooms have a small chance to be HUGE and grant double loot.
Called Shot~S~Set your win streak to +4. Gain 4 gold.
Capital Gains~S~Store gold equal to the interest you earn. On 3-3, gain 100% of the stored gold. Gain 1 gold now.
Caretaker's Ally~S~Gain a random 2-cost champion now, and the same one again every time you level up.
Carve a Path~S~Gain a B.F. Sword. After your champions deal 65,000 physical damage, gain 2 more.
Caster Apprentice~S~Gain a Tear of the Goddess. After 3 player combats, gain a Needlessly Large Rod.
Celestial Blessing~S~Your team gains 12% Omnivamp. Excess healing becomes a shield of up to 200 Health.
Champ Delivery~S~Gain 3 2-cost champions. After 6 rounds, gain 3 more.
Champ Delivery+~S~Gain 3 3-cost champions. After 6 rounds, gain 3 more.
Champ Delivery++~S~Gain 3 4-cost champions. After 6 rounds, gain 3 more.
Cheat Code~S~Now and at the start of each stage, get a new cheat code. The first time you perform that exact sequence of actions, gain a reward.
Component Buffet~S~Whenever you would get a component, gain a component anvil (4 choices) instead. Gain a random component.
Corrosion~S~Enemies in the first two rows lose 3 Armor and Magic Resist every 2 seconds.
Crafted Crafting~S~Whenever you craft a completed item, gain 2 rerolls.
Crit Rune~S~Gain 8 gold. Your team gains 1% Critical Strike Chance.
Crit Rune+~S~Gain 14 gold. Your team gains 1% Critical Strike Chance.
Dancin' n' Prancin'~S~Gain a Lillia. Your strongest Lillia becomes a Magic Fighter that prances around the board and deals stacking magic damage over time.
Dummify~S~Lose all champions on your board and bench. Gain a Training Dummy with 60% of their combined Health that gains 1150 Health per stage, and a random non-tank 2-star 2-cost champion.
Electrocharge~S~Every 4 attacks an ally takes, they deal 25-80 magic damage (by stage) to nearby enemies (1 second cooldown).
Expedition~S~At the start of every round, lose the champion in your rightmost bench slot. After losing 33 gold of champions this way, gain a powerful reward. Gain a 3-cost champion now.
Extra Buckles~S~Gain a Giant's Belt. After your champions take 75,000 damage, get 2 more.
Feeling Lucky~S~Gain 12 gold, then flip a coin. If heads, gain 4 more gold.
Feeling Lucky+~S~Gain 18 gold, then flip a coin. If heads, gain 6 more gold.
Fighter Apprentice~S~Gain Sparring Gloves. After 3 player combats, gain a Chain Vest.
Fighter Flight~S~Your Fighters and Assassins move faster and gain 10% Attack Speed, doubled while below 50% Health.
Find Your Center~S~The champion that starts combat in the center of your front row gains 15% Damage Amp and 25% max Health.
Flowing Tears~S~Gain a Tear of the Goddess. After your champions spend 7000 Mana, gain 2 more.
Focused Fire~S~Your team gains 10% Attack Damage, plus 4% more every 5 seconds.
Forge A Friend~S~The next 1-cost champion you buy is 3-star. Gain 5 gold.
Future Focused~S~Your Tactician loses 20 Health, but after 5 player combats, gain 3 4-cost champions and 5 gold.
Glass Cannon~S~Allies that start combat in the back row begin at 80% Health but gain 16% Damage Amp.
Good For Something~S~Champions not holding items have a 40% chance to drop 1 gold on death.
Group Hug~S~Combat start: allies grant other adjacent allies 7 Armor and Magic Resist. Stacks.
He's Electric~S~Gain a Kennen. Your strongest Kennen becomes a Magic Assassin who permanently adds True Damage to his spell on kills.
Healing Orbs~S~When an enemy dies, a nearby ally is healed for 250 Health.
Iron Assets~S~Gain a component anvil and 3 gold.
Item Grab Bag~S~Gain 1 random completed item.
Keeping Tempo~S~After winning player combat, gain a free Shop reroll.
Kick Start~S~Gain a random 2-star 2-cost champion and 1 gold.
Kingslayer~S~After winning player combat, gain 1 gold, or 6 gold if they had more Health than you. Gain 1 gold now.
Knowledge Download~S~Gain 20 XP.
Late Game Specialist~S~When you reach level 9, gain 27 gold.
Latent Forge~S~After 8 player combats, gain an Artifact Anvil.
Makeshift Armor~S~Champions without items gain 30 Armor and Magic Resist.
Marksman Apprentice~S~Gain a Recurve Bow. After 3 player combats, gain a B.F. Sword.
Missed Connections~S~Gain a copy of each 1-cost champion.
One Twos Three~S~Gain 2 1-cost, 2 2-cost and 1 3-cost champions.
One, Two, Five!~S~Gain 1 random component, 2 gold and 1 random 5-cost champion.
Pandora's Bench~S~At the start of every round, champions in your 3 rightmost bench slots transform into random champions of the same cost. Gain 1 gold.
Pandora's Items~S~Round start: items on your bench are randomized. Gain 1 random component.
Partial Ascension~S~After 12 seconds of combat, your units gain 20% Damage Amp.
Patience Is A Virtue~S~Gain 5 rerolls now. Each round, gain 1 free reroll if you did not buy a champion last round.
Punch Line~S~Gain a Sett. Your strongest Sett becomes an Attack Fighter with a punch that can execute enemies, sending them flying.
Quick Streaks~S~You gain twice as much progress towards win and loss streaks. Gain 2 gold.
Recombobulator~S~Champions on your board permanently transform into random champions 1 cost tier higher (max 5). Gain 2 Magnetic Removers and 3 free rerolls.
Reunion Show~S~Gain 10 gold of champions that all share a trait.
Rolling For Days~S~Gain 10 free Shop rerolls.
Silver Destiny~S~Gain a random Silver augment and 2 gold.
Silver Destiny+~S~Gain a random Silver augment and 4 gold.
Silver Destiny++~S~Gain a random Silver augment and 7 gold.
Silver Spoon~S~Gain 10 XP.
Slice of Life~S~Twice per stage, gain a random champion whose cost rises with the stage. Ends after you receive one 5-cost.
Slightly Magic Roll~S~Roll a die. Gain rewards based on the number rolled.
Small Grab Bag~S~Gain 2 random components.
Staffsmith~S~Gain 1 random completed item that builds from Needlessly Large Rod.
Stats On Stats~S~Now and every 5 rounds, gain 3 stat-boosting consumables.
Strange Duet~S~Allies that start combat isolated in pairs gain 3% Durability and 5% Damage Amp.
Swordsmith~S~Gain 1 random completed item that builds from B.F. Sword.
Tank Apprentice~S~Gain a Giant's Belt. After 3 player combats, gain a Negatron Cloak.
Team Building~S~Gain a Lesser Champion Duplicator (copies a 3-cost or cheaper champion), and another after 5 player combats.
The Drop~S~After 12 seconds of combat, your team heals 20% max Health and enemies take 8% max Health true damage.
The Tower~S~Gain a giant Training Dummy. Every 4 seconds, it zaps the 3 nearest enemies for 5% max Health true damage.
Twin Guardians~S~If you have exactly 2 allies in your first row, they gain 100 Health, 35 Armor and 35 Magic Resist.
Verticality~S~Champions gain 1.5% AD, 1.5% AP, 1.5 Armor and 1.5 Magic Resist for each ally that shares a trait with them.
World Tour~S~After every 6 player combats, gain a completed item anvil.
Young and Wild and Free~S~You can always move freely on Carousel rounds. Gain 5 gold.
Advanced Loan~G~Gain 22 gold. Your next augment is one tier lower.
Advanced Loan+~G~Gain 33 gold. Your next augment is one tier lower.
Aim High~G~The first 2 times you buy a unique unlockable 5-cost champion, gain a recommended item for it.
All That Shimmers~G~Choose a gold-generating Artifact. Gain a Magnetic Remover.
All That Shimmers+~G~Choose a gold-generating Artifact. Gain a Magnetic Remover and 4 gold.
Arcane Viktor-y~G~After 8 seconds of combat, stun the enemy team for 1.5 seconds. Repeat after 18 seconds.
Armed and Generous~G~Gain a Hextech Gunblade. Your Gunblades' ally heal also hits a second target at 75% effectiveness.
Armor Stand~G~Gain a Training Dummy with Thief's Gloves that always rolls Tank items.
Ascension~G~After 12 seconds of combat, your units gain 35% Damage Amp.
Backline Blueprint~G~Gain a 3-cost non-Tank champion and an Emblem that matches their class.
Battle of the Bands~G~With 2 or more active Bands, your team gains 18% Attack Damage and Ability Power.
Beltsmith II~G~Gain 1 random completed item that builds from Giant's Belt now and another in 1 round.
Big Solo~G~Your Heartsteel Biases gain 150% more of all active Heartsteel bonuses. Gain 3 Heartsteel champions.
Birthday Reunion~G~Gain a random 2-star 2-cost champion. At level 6, gain a random component; at level 9, a random 2-star 5-cost champion.
Blind Box II~G~Gain a random Prismatic augment, but lose gold (two versions: 8 or 12 gold).
Bodyguard Training~G~Allies gain 15 Armor and Magic Resist, plus 2 per player level.
Bonus Gifts~G~Whenever you open a loot orb, 25% chance to gain a gray loot orb. Gain 1 gray loot orb.
Bonus Gifts+~G~Whenever you open a loot orb, 25% chance to gain a gray loot orb. Gain 2 gray loot orbs.
Booster Pack~G~Gain 12 gold of random champions (at least one 3-cost).
Booster Pack+~G~Gain 18 gold of random champions (at least one 4-cost).
Booster Pack++~G~Gain 26 gold of random champions (at least one 5-cost).
Bundle o' Shrooms II~G~Gain 9 mushrooms, each granting 1 reroll, 2 XP or 3 Tactician Health, with a small chance of double loot.
Calculated Loss~G~After losing a combat, gain 2 gold and a free Shop reroll.
Capital Gains II~G~Store gold equal to the interest you earn. On 3-3, gain 125% of the stored gold. Gain 3 gold now.
Caretaker's Favor~G~Gain a component anvil (4 choices) when you reach level 5, 6, 7 and 8.
Celestial Blessing II~G~Your team gains 18% Omnivamp. Excess healing becomes a shield of up to 400 Health.
Chalice of Power~G~Gain a Chalice of Power: 25% Ability Power and 1 Mana Regen for the holder and allies within 2 hexes in the same row.
Champion Airdrop~G~Gain 3 2-cost champions now and 3 more after 5 rounds. Each airdrop adds 1 round of delay and 1 champion.
Cheat Code II~G~Now and at the start of each stage, get a new cheat code. The first time you perform that exact sequence, gain a reward.
Clear Mind~G~If your bench has no champions at the end of player combat, gain 3 XP.
Cluttered Mind~G~Gain 4 1-cost champions now. If your bench is full at the end of player combat, gain 3 XP.
Cognitive Overload~G~Gain 7 gold, a 2-star 1-cost, a 2-cost, two 3-cost champions, 1 XP and 1 reroll.
Construct a Companion~G~The next 1-cost champion you buy is 3-star. Gain 2 gold.
Cooking Pot~G~At the start of each round, allies holding a Frying Pan or Spatula item give the nearest champion 70 permanent Health. Gain a Frying Pan.
Counting Stars~G~Gain 5 gold. Each time you 3-star a champion, gain 5 gold for each 3-star you have.
Cry Me A River~G~Gain a Tear of the Goddess. Your team gains 1 Mana Regen, rising to 3 after 12 seconds of combat.
Cybernetic Implants~G~Champions holding an item gain 100 Health and 15% Attack Damage. Gain a B.F. Sword.
Cybernetic Uplink~G~Champions holding an item gain 100 Health and 2 Mana Regen. Gain a Tear of the Goddess.
Dance Party~G~When you win combat, each surviving champion has a 5% chance to drop 1 gold, +15% per Choreographer you field. Gain 2 Choreographers.
Death by a Thousand Cuts~G~After 250 and again after 1000 Swiftstriker attacks, gain a Completed Item Anvil and 12 gold. Gain a Ziggs and a Yunara.
Deathbringer~G~Every 2 takedowns by Rock champions or the Infernal Idol permanently give the Idol 15 Health and 2% AD and AP. Gain 3 Rock champions.
Dig on This~G~Your Jazz champions get 150% more Health and Damage Amp from Jazz. Gain a Lucian and a Galio.
Double Trouble~G~With exactly 2 copies of a champion fielded, both gain 25% AD and AP and 25 Armor and Magic Resist. When you 3-star, gain a 2-star copy.
Duo Queue~G~Gain 2 random 5-cost champions and 2 copies of a random component.
Early Learnings~G~Your team gains 3% AD and AP, +1% after each player combat. 1-cost champions gain double.
Electrocharge II~G~Every 4 attacks an ally takes, they deal 35-120 magic damage (by stage) to nearby enemies (1 second cooldown).
Epic Rolldown~G~When you reach level 8, gain 20 Shop rerolls.
Epoch~G~Now and at the start of every stage, gain 4 XP and 2 free rerolls.
Epoch+~G~Now and at the start of every stage, gain 8 XP and 2 free rerolls.
Espresso~G~Gain a Recurve Bow. Your team gains 10% Attack Speed, rising to 30% after 12 seconds of combat.
Exclusive Customization~G~Gain a Lucky Item Chest, a Magnetic Remover and 7 gold.
FOURcing~G~Gain a random 4-cost champion. Your team gains 100 Health for each item on that champion.
Fighter Flight II~G~Your Fighters and Assassins move faster and gain 18% Attack Speed, doubled while below 50% Health.
Forever Burning Brighter~G~Ionic Spark champions gain 8% AD and AP, +1% permanently for every 30 fan gifts. Gain 3 Ionic Spark champions.
Frontline Foundation~G~Gain a 2-star 1-cost Tank and an Emblem matching its class.
Gain 21 Gold~G~Gain 21 gold.
Gain 21 Gold+~G~Gain 32 gold.
Gathering Storm~G~Pentakill champions permanently gain 10 Health each time Pentakill executes an enemy. Gain 3 Pentakill champions.
Gilded Steel~G~Gain two 5-cost champions. While you field a 5-cost, your 1- to 4-cost champions gain 8% Durability.
Glass Cannon II~G~Allies that start combat in the back row begin at 80% Health but gain 25% Damage Amp.
Gold Destiny~G~Gain a random Gold augment and 3 gold.
Gold Destiny+~G~Gain a random Gold augment and 5 gold.
Good FOURtune~G~Open a shop of 2-star 4-cost champions; you can buy only 1. Gain 16 gold.
Group Hug II~G~Combat start: allies grant other adjacent allies 10 Armor and Magic Resist. Stacks.
Hard Bargain~G~You cannot choose Carousel rewards. Gain 6 player Health and 8 gold each Carousel; if you pick nothing, you get an unpicked champion and its item.
Healing Orbs II~G~When an enemy dies, a nearby ally is healed for 575 Health.
Heart of Steel~G~Gain a Steadfast Heart. Every 10 seconds of combat its holder survives, it gains 18 permanent max Health.
Heroic Grab Bag~G~Gain 2 Lesser Champion Duplicators and 6 gold.
Heroic Grab Bag+~G~Gain 2 Lesser Champion Duplicators and 8 gold.
Heroic Grab Bag++~G~Gain 2 Lesser Champion Duplicators and 14 gold.
High Rolling~G~Renegade kills can drop loot, scaling with Critical Strike Chance, and the loot itself can crit. Gain a Qiyana.
Hustler~G~You no longer gain interest, but gain 3 gold at the start of every player combat round. Gain 3 gold now.
Immortalized in Theater~G~The first 3 allies to die each combat become statues that Captivate adjacent enemies for 4 seconds when destroyed. Gain a Katarina and a Renata Glasc.
Infinity Protection~G~Gain 3 gold now. On 3-7, gain an Infinity Force: allies in its row get a 12% Health shield.
Investment Strategy~G~Your champions gain 8 permanent max Health per interest you earn. Gain 3 gold now.
It's Me, Baby~G~Gain a championship hex in the bottom-right corner. The champion in it gains 15% Damage Amp and 15% Attack Speed and drops 1 gold every 5 takedowns.
Knowledge Download II~G~Gain 30 XP.
Late Game Scaling~G~Gain 2 XP at the start of player combat rounds. Your 5-cost champions gain 12% Health and 12% Attack Speed.
Legion Of Threes~G~Gain a random Emblem. Your 3-cost champions and all Emblem holders gain 150 Health and 12% Attack Speed.
Lifeguard on Duty~G~Gain a Renekton. Your strongest Renekton becomes an Attack Fighter who starts combat sunbathing and dives into action when an ally is in danger.
Light up the Sky~G~Every 3 seconds, the 3 highest-Health enemies take 5% max Health magic damage + 1% per Ionic Spark champion fielded. Gain 3 Ionic Spark champions.
Magic Roll~G~Roll 3 dice. Gain rewards based on their total.
Makeshift Armor II~G~Champions without items gain 50 Armor and Magic Resist.
Max Build~G~Gain 10 free rerolls. At level 9, gain 3 more and a Champion Duplicator.
Money Hungry~G~Gain 7 gold now and 7 at the start of every stage. Picking up gold makes your Tactician larger.
Money Hungry+~G~Gain 13 gold now and 7 at the start of every stage. Picking up gold makes your Tactician larger.
NO SCOUT NO PIVOT~G~Champions that fight in player combat cannot be benched or sold. After each player combat, your champions gain 1% Health, AD and AP.
Our Hearts Aligned~G~Every time Ionic Spark champions collectively spend 600 Mana, they all gain a 10% max Health Shield for 6 seconds. Gain 3 Ionic Spark champions.
Pandora's Items II+~G~Round start: items on your bench are randomized. Gain 2 random components and 4 gold.
Patient Study~G~After player combat, gain 2 XP if you won or 3 XP if you lost.
Pilfer~G~Each round, gain a 1-star copy of the first champion you killed last combat. The first time this gives 21 gold of champions, gain Thief's Gloves.
Piñata~G~Gain a Training Dummy with 3 Giant's Belts. Your dummies drop 1 gold for every 700 damage they take.
Plot Armor~G~Your team gains 10 Armor and Magic Resist, rising to 40 below 50% Health for the rest of combat.
Portable Forge~G~Choose 1 of 4 Artifacts.
Promised Protection~G~Gain a Protector's Vow that gives its holder 20% more Mana from all sources and 175 max Health.
Randuin's Omen~G~Gain a Randuin's Omen: 30 Armor and Magic Resist for the holder and allies within 1 hex.
Rare Collection~G~Your team gains 50 Health and 3% Attack Speed per unique unlockable champion fielded.
Replication~G~Choose 1 of 3 components. For the next 2 rounds, gain a copy of it.
Reunion Show II~G~Gain 16 gold of champions that all share a trait.
Rock All Nite~G~Rock champions gain 10% AD and AP, +1% every 2 seconds the Infernal Idol lives. Gain 3 Rock champions.
Running Wild~G~At combat start, your 2 strongest K|DA champions without 3 items get a temporary recommended item and 250 Health. Gain a Neeko and a Lillia.
Sacrificial Dummy~G~Gain a Training Dummy with 50% Durability. While it lives, all damage your champions would take goes to the dummy.
Salvage Bin~G~Gain 1 random completed item now and 1 component after 8 player combats. Selling champions breaks their items into components (not Tactician's items or Emblems).
Salvage Bin+~G~Gain 1 random completed item now and 1 component after 4 player combats. Selling champions breaks their items into components (not Tactician's items or Emblems).
Seraphim's Staff~G~Gain an Archangel's Staff that gives 2 extra Mana Regen if its holder has 110% or more Ability Power.
Slammin'~G~Gain 3 gold. After each player combat, if no items sit on your bench (consumables aside), gain 2 XP.
Slammin'+~G~Gain 4 gold and 10 XP now. After each player combat, if no items sit on your bench, gain 2 XP.
Small Squad~G~With 3 or fewer Heartsteel champions fielded, their bonuses are 100% stronger. Gain 2 Heartsteel champions.
Solo Leveling~G~For the next 5 combats your team size is 1, but that champion has massively increased stats and earns 1 XP per kill. Afterwards, gain 2 components.
Solo Plate~G~Gain a Gargoyle Stoneplate. Stoneplate holders gain 17% max Health if they start combat alone in their row.
Speedy Double Kill~G~Gain a Guinsoo's Rageblade. When 2 players are eliminated, gain 40 gold.
Spirit Of Redemption~G~Gain a Spirit Visage. Every 5 seconds it heals allies within 1 hex for 9% of their missing Health.
Spreading Roots~G~Gain a random Emblem. After 3 combats, gain another.
Spreading Roots+~G~Gain 2 random Emblems and 2 gold.
Staffsmith II~G~Gain 1 random completed item that builds from Needlessly Large Rod now and another in 1 round.
Stakeholder Management~G~Gain 2 more Manager hexes; Managers in them gain 10% max Health and 50% more of the hex bonuses. In 4 rounds, gain a Leona and 2 Prodigy champions.
Stakeholder Management+~G~Gain 2 more Manager hexes; Managers in them gain 10% max Health and 50% more of the hex bonuses. Gain a Leona and 2 Prodigy champions now.
Star Power~G~When you 2-star a K|DA champion, gain a free K|DA champion. Gain a Lillia and a Neeko.
Stats On Stats II~G~Now and every 5 rounds, gain 4 stat-boosting consumables.
Strange Duet II~G~Allies that start combat isolated in pairs gain 5% Durability and 8% Damage Amp.
Submit to the Pit~G~Allies gain 3% AD and AP for every second they spend in the center 4 rows.
Swordsmith II~G~Gain 1 random completed item that builds from B.F. Sword now and another in 1 round.
The Drop II~G~After 12 seconds of combat, your team heals 30% max Health and enemies take 12% max Health true damage.
The Golden Dragon~G~Gain a Mogul's Mail: its holder takes +1 team slot but gains 600 Health and 15% Durability, and it generates gold.
Tibbers! I Can't See the Stage~G~Gain an Annie and unlock Tibbers. Your strongest Annie becomes a Magic Caster that leaps onto your strongest Tibbers at the start of combat.
Time Skip~G~Your Shop is disabled for the next 3 rounds. Then gain 32 XP.
Tons of Stats!~G~Your team gains 44 Health, 4% AD, 4% AP, 4 Armor, 4 Magic Resist, 4% Attack Speed and 4 Mana.
Trade Sector~G~Gain a Shop reroll every round. Gain 2 gold.
Trade Sector+~G~Gain a Shop reroll every round. Gain 8 gold.
U.R.F~G~Gain a Spatula. Spatula and Frying Pan items gain 20% Attack Speed and 3 Mana Regen.
Verticality II~G~Champions gain 2.5% AD, 2.5% AP, 2 Armor and 2 Magic Resist for each ally that shares a trait with them.
Warpath~G~Gain a 2-star 2-cost champion. After dealing 80 player damage, gain a chest of high-cost champions and items.
Weight The Worth~G~The first time you 3-star a champion, gain a copy of it every round for the rest of the game (more if you 3-star it again). Gain a Lesser Champion Duplicator.
Worth the Wait~G~Gain a random 1-cost champion, then another copy at the start of every round for the rest of the game.
Woven Magic~G~Gain a random component. Every 2200 Mana your champions spend gives another (max 3).
Zeke's Herald~G~Gain a Zeke's Herald: 30% Attack Speed for the holder and allies within 2 hexes in the same row.
Zz'Rot Portal~G~Gain a Zz'Rot Portal that summons a large Voidspawn.
reroll.exe~G~At the start of every stage, including this one, gain 2 free rerolls plus 1 per 250 Hyperpop Hype. Gain a 2-star Ziggs.
Arcanist Circlet~P~Gain an Arcanist Emblem, a Tear of the Goddess and a Swain.
Arcanist Crown~P~Gain an Arcanist Emblem, a Jeweled Gauntlet and a Swain.
Band of Thieves II~P~Gain 2 Thief's Gloves. After 5 player combats, gain another.
Band of Thieves II+~P~Gain 2 Thief's Gloves. After 5 player combats, gain another.
Band of Thieves II++~P~Gain 2 Thief's Gloves. After 3 player combats, gain another.
Baron's Lair~P~Gain a random Tank item. After 8 seconds of combat, your team gains 4% AD and AP every second for the rest of combat.
Beach Pop Circlet~P~Gain a Beach Pop Emblem, Sparring Gloves and a Syndra.
Beach Pop Crown~P~Gain a Beach Pop Emblem, a Blue Buff and a Syndra.
Belt Overflow~P~Gain 4 Giant's Belts. Your Giant's Belts grant +85 Health.
Birthday Present~P~Each level-up gives a 2-star champion (cost = your level minus 4, max 5) and 1 gold.
Booster Box~P~Now and at the start of the next 2 stages, gain a pack of champions (at least one holographic).
Build A Bud~P~Gain a random 3-star 1-cost champion and 9 gold.
Buried Treasures III~P~Gain a random component now and at the start of the next 6 rounds.
Call To Chaos~P~Gain a powerful random reward.
Celestial Blessing III~P~Your team gains 25% Omnivamp. Excess healing becomes a shield of up to 1000 Health.
Cheat Code III~P~Now and at the start of each stage, get a new cheat code. The first time you perform that exact sequence, gain a reward.
Choreographer Circlet~P~Gain a Choreographer Emblem, a Giant's Belt and a Garen.
Choreographer Crown~P~Gain a Choreographer Emblem, an Adaptive Helm and a Syndra.
Classical Circlet~P~Gain a Classical Emblem, a Tear of the Goddess and a 2-star Renata Glasc.
Classical Crown~P~Gain a Classical Emblem, a Spirit Visage and a Nasus.
Cloning~P~After each player combat, gain a copy of a random champion on your board (or gold, with fewer than 3 unique champions).
Comeback Story~P~Your team gains 4 Health and 0.4% Attack Speed per missing player Health.
Commerce Core~P~Gain 16 free rerolls now and 3 every round for the rest of the game.
Component Quest~P~Gain a random component and 1 gold. Your next 7 player-combat wins each give a different component, then 1 gold.
Cursed Crown~P~Gain +2 max team size, but take double player damage when you lose a player combat.
Deadlier Blades~P~Gain a Deathblade. Deathblades permanently gain 1% AD whenever their holder scores a takedown.
Deadlier Caps~P~Gain a Rabadon's Deathcap. Deathcaps give 1 Mana Regen and permanently gain 1% AP whenever their holder scores a takedown.
Duplicator Deal~P~Gain 3 Champion Duplicators. You can no longer 3-star champions.
Expected Unexpectedness~P~Now and at the start of the next 2 stages, roll 3 dice for rewards.
Flexible~P~Gain a random Emblem now and every stage. Your team gains 30 Health per Emblem held.
Forged In Strength~P~Gain a random Artifact. Below 35 Health, gain another Artifact, a completed item and 3 components.
Giant and Mighty~P~Your team becomes large, gaining 225 Health and 10% max Health.
Golden Gamble~P~Gain 2 gold and flip a coin: heads, a Radiant Lucky Item Chest; tails, 2 Completed Item anvils.
Golden Gamble+~P~Gain 3 gold and flip a coin: heads, a Radiant Lucky Item Chest; tails, 2 Completed Item anvils.
Golden Gamble++~P~Gain 6 gold and flip a coin: heads, a Radiant Lucky Item Chest; tails, 2 Completed Item anvils.
Hard Commit~P~Gain a random Emblem. Now and every stage, gain a 1-star champion of that trait costing the current stage (max 5) and 3 gold.
Heartsteel Circlet~P~Gain a Heartsteel Emblem, Sparring Gloves and a K'Sante.
Heartsteel Crown~P~Gain a Heartsteel Emblem, a Steadfast Heart and a K'Sante.
Heartsteel Prismatic Tour~P~Gain the Heartsteel Prismatic Quest, 3 Heartsteel champions, a Lucky Item Chest and 7 gold. Quest: with 7 Heartsteel active, have Heartsteel allies deal damage, block damage and heal.
Heartsteel Prismatic Tour+~P~Gain the Heartsteel Prismatic Quest, 3 Heartsteel champions, 3 components and 2 gold. Quest: with 7 Heartsteel active, have Heartsteel allies deal damage, block damage and heal.
Hedge Fund~P~Gain 22 gold. Your max interest becomes 10.
Hitmaker Circlet~P~Gain a Hitmaker Emblem, a B.F. Sword and a Senna.
Hitmaker Crown~P~Gain a Hitmaker Emblem, an Infinity Edge and a Senna.
Hold the Line~P~Allies in your back 2 rows gain 11% AP and 11% AD for each ally that starts in your front row.
Illbeats Circlet~P~Gain an Illbeats Emblem, a Tear of the Goddess and a Draven.
Illbeats Crown~P~Gain an Illbeats Emblem, a Gargoyle Stoneplate and a Braum.
Invested+~P~Gain 26 gold. At the start of each round, gain 1 reroll per 10 gold above 50 (max 80 gold).
Invested++~P~Gain 45 gold. At the start of each round, gain 1 reroll per 10 gold above 50 (max 80 gold).
Investment Strategy II~P~Your champions gain 10 permanent max Health per interest earned. Max interest +2. Gain 6 gold now.
Ionic Spark Circlet~P~Gain an Ionic Spark Emblem, a Needlessly Large Rod and a Briar.
Ionic Spark Crown~P~Gain an Ionic Spark Emblem, an Ionic Spark and an Annie.
Ionic Spark Prismatic Tour~P~Gain the Ionic Spark Prismatic Quest, 3 Ionic Spark champions, a Lucky Item Chest and 7 gold. Quest: with 7 Ionic Spark active, collect album signatures over 10 rounds, then field 10 Ionic Spark.
Ionic Spark Prismatic Tour+~P~Gain the Ionic Spark Prismatic Quest, 3 Ionic Spark champions, 2 components and 10 gold. Quest: with 7 Ionic Spark active, collect album signatures over 10 rounds, then field 10 Ionic Spark.
Jazz Circlet~P~Gain a Jazz Emblem, a Recurve Bow and a Bard.
Jazz Crown~P~Gain a Jazz Emblem, a Spear of Shojin and a Lucian.
K|DA Circlet~P~Gain a K|DA Emblem, a Needlessly Large Rod and a Kai'Sa.
K|DA Crown~P~Gain a K|DA Emblem, a Guinsoo's Rageblade and a Kai'Sa.
K|DA Prismatic Tour~P~Gain the K|DA Prismatic Quest, 3 K|DA champions, 2 Tiny Duplicators, a Lesser Champion Duplicator and 10 gold. Quest: reach 21 star levels of K|DA champions.
K|DA Prismatic Tour+~P~Gain the K|DA Prismatic Quest, 3 K|DA champions, 2 Tiny Duplicators, 2 Lesser Champion Duplicators and 6 free rerolls. Quest: reach 21 star levels of K|DA champions.
Level Up!~P~When you buy XP, gain 2 extra. Gain 10 XP now.
Living Forge~P~Gain an Artifact Anvil now and after every 10 player combats.
Lucky Gloves~P~Thief's Gloves always give your champions ideal items. Gain 2 Sparring Gloves and 4 gold.
Lucky Gloves+~P~Thief's Gloves always give your champions ideal items. Gain 2 Sparring Gloves now and another after 4 player combats.
Luxury Subscription~P~Gain a package of a 5-cost champion, a 2-star 1-cost champion and 5 gold, again at the start of the next 2 stages.
Mad Science~P~Each ally becomes huge (12% max Health, 20% AD and AP) or tiny (11% Durability, 20% Attack Speed) at random.
Management Track~P~Gain a Manager Emblem and a Leona. Manager bonuses have a 60% chance to give 1 gold; after 20 gold, gain a Dr. Mundo and a Warmog's Armor.
Manager Circlet~P~Gain a Manager Emblem, a Chain Vest and a Leona.
Min-Max~P~Gain a Golden Item Remover, 4 random components and 4 gold.
Money Monsoon~P~Gain 7 gold now and every round for the rest of the game.
Nesting Anvils~P~Gain an Artifact Anvil; opening it gives a Component Anvil; opening that gives 6 gold.
Nesting Anvils+~P~Gain an Artifact Anvil; opening it gives a Component Anvil; opening that gives 8 gold.
One Buff Two Buff~P~Gain a Red Buff, a Blue Buff and a Champion Duplicator.
Pain into Passion~P~A-Side: True Damage champions gain 1% Attack Speed and 10 Health per 20 Bling collected. B-Side: gain 3 gold after losing combat. Gain 3 True Damage champions.
Pandora's Box~P~Your board permanently transforms one cost tier higher (max 5), your items reforge, and you gain a random Gold augment and a completed item.
Pandora's Items III~P~Round start: items on your bench are randomized. Gain 1 Radiant item.
Pentakill Circlet~P~Gain a Pentakill Emblem, a Negatron Cloak and a Viego.
Pentakill Crown~P~Gain a Pentakill Emblem, a Giant Slayer and a Viego.
Pentakill Prismatic Tour~P~Gain the Pentakill Prismatic Quest, 3 Pentakill champions, a Lucky Item Chest and 7 gold. Quest: reach level 10 and have a Pentakill ally score multikills with 7 Pentakill active.
Pentakill Prismatic Tour+~P~Gain the Pentakill Prismatic Quest, 3 Pentakill champions, 2 components and 10 gold. Quest: reach level 10 and have a Pentakill ally score multikills with 7 Pentakill active.
Prismatic Destiny~P~Gain a random Prismatic augment and 2 gold.
Prismatic Destiny+~P~Gain a random Prismatic augment and 7 gold.
Prismatic Ticket~P~Each Shop reroll has a 45% chance to give a free reroll.
Pyramid Scheme~P~After fighting a player not in the Scheme, steal 3 gold and give them a weaker copy of this augment. Round start: gain 1 gold per player in the Scheme, or 10 if every player is in it.
Radiant Rascal~P~Gain Radiant Thief's Gloves that equip 2 random Radiant items every round.
Radiant Relics~P~Choose 1 of 5 Radiant items. Gain a Magnetic Remover.
Renegade Circlet~P~Gain a Renegade Emblem, Sparring Gloves and a 2-star Qiyana.
Renegade Crown~P~Gain a Renegade Emblem, a Hand of Justice and a Qiyana.
Rock Circlet~P~Gain a Rock Emblem, a Needlessly Large Rod and a Swain.
Rock Crown~P~Gain a Rock Emblem, a Hand of Justice and a Camille.
Royalties~P~Gain a Tactician's Crown and 2 gold, then 2 gold every round for the rest of the game.
Shimmerscale Essence~P~Gain a Gambler's Blade. After 6 player combats, gain a Mogul's Mail.
Shopping Spree~P~When you level up, gain Shop refreshes equal to your level +1. Gain 7 gold.
Slayer Circlet~P~Gain a Slayer Emblem, a Chain Vest and a Briar.
Slayer Crown~P~Gain a Slayer Emblem, a Titan's Resolve and a Briar.
Soul Awakening~P~Combat start: your team gains 1.5% AD and AP per second for 10 seconds; at max stacks, deal 12% bonus true damage.
Star of the Show~P~Gain a 2-star 1-cost non-Tank champion and an Emblem for one of its traits. On 3-1, gain 6 more copies of it.
Strange Duet III~P~Allies that start combat isolated in pairs gain 8% Durability and 14% Damage Amp.
Sweet Treats~P~Gain an Artifact anvil. Your team gains 16 Health per equipped item.
Swiftstriker Circlet~P~Gain a Swiftstriker Emblem, a Recurve Bow and a Bard.
Swiftstriker Crown~P~Gain a Swiftstriker Emblem, a Hextech Gunblade and a Bard.
Sword Overflow~P~Gain 4 B.F. Swords. Your B.F. Swords grant +4% Attack Speed.
TONS of Stats!~P~Your team gains 88 Health, 8% AD, 8% AP, 8 Armor, 8 Magic Resist, 8% Attack Speed and 8 Mana.
Tactician's Kitchen~P~Gain a random Emblem. After 3 rounds, gain a Tactician's Cape.
The Golden Egg~P~Gain a golden egg that hatches in 11 rounds for a huge amount of loot. Each player-combat win speeds it up by a round.
The Immortal Journey~P~Gain a Xayah, a Spear of Shojin and 3 gold.
The Trait Tree~P~Gain 3 random Emblems and 2 gold.
The Trait Tree+~P~Gain 3 random Emblems, a Reforger and 4 gold.
Three Steps Ahead~P~The next 3 times you lose a player combat, gain a 5-cost champion and 2 components.
Trait Ladder~P~Gain a random Emblem. After fielding 2 non-unique traits in a player combat, gain a reward; the traits needed and the reward then grow.
True Damage Circlet~P~Gain a True Damage Emblem, a Giant's Belt and an Ekko.
True Damage Crown~P~Gain a True Damage Emblem, an Infinity Edge and a Senna.
True Damage Prismatic Tour~P~Gain the True Damage Prismatic Quest, 3 True Damage champions, 3 components and 2 gold. Quest: with 5 True Damage active, hit the right sequence of wins and losses.
Unearthed Treasure~P~After player combat, each unique Beach Pop champion empowered by a Beach Pop instrument has a chance to uncover loot. Gain a Taric, a Zoe and a Renekton.
Upward Mobility~P~Buying XP costs 1 less. Gain 2 Health and 2 rerolls whenever you level up.
Urf's Grab Bag~P~Gain a Spatula, 3 random components and 5 gold.
Verticality III~P~Champions gain 4% AD, 4% AP, 3.5 Armor and 3.5 Magic Resist for each ally that shares a trait with them.
Wand Overflow~P~Gain 4 Needlessly Large Rods. Your Rods grant +5% Attack Speed.
We Stick Together~P~Gain an Emblem for a random trait and a completed item anvil. Allies with that trait gain 25% Attack Speed.
Worth the Wait II~P~Gain 2 copies of a random 2-cost champion, then another at the start of every round for the rest of the game.`;
