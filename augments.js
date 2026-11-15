// Set 19 augments from the Dev Drop reveal (15 Nov 2026). Format: name~tier~summary. Tier: S silver, G gold, P prismatic.
// Numbers are not published yet. Summaries are shortened. "+" variants are folded into the base entry.
const AUG_RAW=`3|4 Time~S~Gold, player Health and rerolls now, then a random champion after a delay. Also a 4|4 version.
Augmented Power~S~Your next augment is one tier higher.
Backup Bows~S~Gain a Recurve Bow. Gain more after your champions attack enough.
Band of Thieves~S~Gain Thief's Gloves.
Beltsmith~S~Gain random completed items that build from Giant's Belt.
Bite Marks~S~Gain an Elise. Your strongest Elise becomes a Magic Assassin and her bite recasts on low-Health enemies after a kill.
Blind Box~S~Gain a random Gold augment, but lose gold.
Boxing Lessons~S~Team Health for each ally that starts in the front row.
Branching Out~S~Gain a random Emblem. The + version adds a Reforger.
Bundle o' Shrooms~S~Gain mushrooms that give rerolls, XP or Tactician Health, with a small chance of double loot.
Called Shot~S~Set your win streak and gain gold.
Capital Gains~S~Stores gold equal to your interest and pays part of it out at a later stage. Gold now.
Caretaker's Ally~S~Gain a random 2-cost now and again every time you level up.
Carve a Path~S~Gain a B.F. Sword. Gain more after your champions deal physical damage.
Caster Apprentice~S~Gain a Tear of the Goddess, then a Needlessly Large Rod after some player combats.
Celestial Blessing~S~Team Omnivamp; excess healing becomes a shield.
Champ Delivery~S~Gain champions now and more after a delay. Has + and ++ versions.
Cheat Code~S~Get a cheat code each stage; perform its exact action sequence once for a reward.
Component Buffet~S~Components you would receive become Component Anvils with 4 choices. Gain a component.
Corrosion~S~Enemies in the first two rows periodically lose Armor and Magic Resist.
Crafted Crafting~S~Gain rerolls whenever you craft a completed item.
Crit Rune~S~Gold, and team Critical Strike Chance. Has a + version.
Dummify~S~Lose your whole board and bench for a Training Dummy with their combined Health, plus a 2-star non-tank 2-cost.
Electrocharge~S~Allies that take enough attacks zap nearby enemies for magic damage (cooldown).
Expedition~S~Each round you lose the champion in your rightmost bench slot; lose enough value for a big reward. Gain a 3-cost.
Extra Buckles~S~Gain a Giant's Belt. Gain more after your champions take damage.
Feeling Lucky~S~Gold, then a coin flip for more gold. Has a + version.
Fighter Apprentice~S~Gain Sparring Gloves, then a Chain Vest after some player combats.
Fighter Flight~S~Fighters and Assassins move faster and gain Attack Speed, doubled at low Health.
Find Your Center~S~The champion in the centre of your front row gains Damage Amp and max Health.
Flowing Tears~S~Gain a Tear of the Goddess. Gain more rewards as your champions spend Mana.
Focused Fire~S~Team Attack Damage that grows during combat.
Forge A Friend~S~The next champion you buy comes starred up. Gain gold.
Future Focused~S~Lose Tactician Health, then gain 4-costs and gold after some player combats.
Glass Cannon~S~Back-row allies start at reduced Health and gain Damage Amp.
Good For Something~S~Champions without items can drop gold when they die.
Group Hug~S~At combat start, allies give Armor and Magic Resist to adjacent allies. Stacks.
Healing Orbs~S~When an enemy dies, a nearby ally is healed.
Iron Assets~S~Gain a component anvil and gold.
Item Grab Bag~S~Gain 1 random completed item.
Keeping Tempo~S~Free reroll after each player-combat win.
Kick Start~S~Gain a random champion and gold.
Kingslayer~S~Gold after wins, more if the opponent had more Health than you.
Knowledge Download~S~Gain XP.
Late Game Specialist~S~Gain gold when you reach a certain level.
Latent Forge~S~Gain an Artifact Anvil after some player combats.
Makeshift Armor~S~Champions without items gain Armor and Magic Resist.
Marksman Apprentice~S~Gain a Recurve Bow, then a B.F. Sword after some player combats.
Missed Connections~S~Gain a copy of each 1-cost champion.
One Twos Three~S~Gain two 1-costs, two 2-costs and one 3-cost.
One, Two, Five!~S~Gain a component, 2 gold and a random 5-cost.
Pandora's Bench~S~Champions in your rightmost bench slots reroll into the same cost each round. Gain gold.
Pandora's Items~S~Bench items are randomised each round. Gain components.
Partial Ascension~S~After combat has run a while, your units gain Damage Amp.
Patience Is A Virtue~S~Rerolls now, plus a free reroll each round after a round where you bought no champion.
Quick Streaks~S~Streaks build twice as fast. Gain gold.
Recombobulator~S~Your board permanently transforms into champions one cost higher (max 5). Gain removers and rerolls.
Reunion Show~S~Gain champions that all share a trait.
Rolling For Days~S~Gain free rerolls.
Silver Destiny~S~Gain a random Silver augment and gold. Has + and ++ versions.
Silver Spoon~S~Gain XP.
Slice of Life~S~Twice per stage, gain a champion whose cost rises with the stage, until you receive the max cost.
Slightly Magic Roll~S~Roll a die for rewards.
Small Grab Bag~S~Gain random components.
Staffsmith~S~Gain random completed items that build from Needlessly Large Rod.
Stats On Stats~S~Gain stat consumables now and at intervals.
Strange Duet~S~Allies isolated in pairs gain Durability and Damage Amp.
Swordsmith~S~Gain random completed items that build from B.F. Sword.
Tank Apprentice~S~Gain a Giant's Belt, then a Negatron Cloak after some player combats.
Team Building~S~Gain Lesser Champion Duplicators over time (copy a 3-cost or lower).
The Drop~S~After a delay in combat, your team heals a share of max Health and enemies take max-Health true damage.
The Tower~S~Gain a giant Training Dummy that zaps the nearest enemies for max-Health true damage.
Twin Guardians~S~When your first row has exactly the right number of allies, they gain Health, Armor and Magic Resist.
Verticality~S~Champions gain AD, AP, Armor and Magic Resist for each ally sharing a trait with them.
World Tour~S~Gain a completed item anvil periodically.
Young and Wild and Free~S~Always move freely on Carousel rounds. Gain gold.
Advanced Loan~G~Gain gold. Your next augment is one tier lower. Has a + version.
Aim High~G~The first time you buy each unlockable 5-cost, gain a recommended item for it.
All That Shimmers~G~Choose a gold-generating Artifact and gain a Magnetic Remover. The + version adds gold.
Arcane Viktor-y~G~Stuns the enemy team after a delay, and again later in the fight.
Armed and Generous~G~Gain a Hextech Gunblade. Gunblade ally-healing hits a second target.
Armor Stand~G~Gain a Training Dummy with Thief's Gloves that always rolls tank items.
Ascension~G~After a delay in combat, your units gain Damage Amp.
Backline Blueprint~G~Gain a 3-cost non-tank and an Emblem matching its class.
Battle of the Bands~G~With enough active Bands, your team gains Attack Damage and Ability Power.
Beltsmith II~G~A Giant's Belt completed item now and another later.
Big Solo~G~Your Heartsteel Biases gain more of all active Heartsteel bonuses. Gain Heartsteel champions.
Birthday Reunion~G~Gain a champion now, a component at a later level, then another champion.
Blind Box II~G~Gain a random Prismatic augment, but lose gold.
Bodyguard Training~G~Team Armor and Magic Resist that scales with player level.
Bonus Gifts~G~Start with gray loot orbs; opening orbs can give more. Has a + version.
Booster Pack~G~Gain random champions with at least one guaranteed. Has + and ++ versions.
Bundle o' Shrooms II~G~Gold-tier version: more mushrooms giving rerolls, XP or Tactician Health.
Calculated Loss~G~After losing a combat, gain gold and a free reroll.
Capital Gains II~G~Stores gold equal to your interest and pays a share out later. Gold now.
Caretaker's Favor~G~Gain a 4-choice component anvil at levels 5, 6, 7 and 8.
Celestial Blessing II~G~Team Omnivamp; excess healing becomes a shield.
Chalice of Power~G~Gain a Chalice of Power: AP and Mana Regen for the holder and allies in the row.
Challenger's Grace~G~Allies start with temporary Attack Speed; on takedown they dash and regain it.
Champion Airdrop~G~Champions now and in growing airdrops later.
Cheat Code II~G~Get a cheat code each stage; perform its exact action sequence once for a reward.
Clear Mind~G~Gain XP after player combat if your bench has no champions.
Cluttered Mind~G~Gain champions. Gain XP after player combat if your bench is full.
Cognitive Overload~G~Gain gold, starred champions, XP and rerolls.
Construct a Companion~G~The next champion you buy is starred up. Gain gold.
Cooking Pot~G~Allies holding a Spatula or Frying Pan item give the nearest champion permanent Health each turn. Gain a Frying Pan.
Counting Stars~G~Gain gold. Each 3-star pays gold for every 3-star you own.
Cry Me A River~G~Gain a Tear of the Goddess. Team Mana Regen that rises later in combat.
Cybernetic Implants~G~Item holders gain Health and Attack Damage. Gain a B.F. Sword.
Cybernetic Uplink~G~Item holders gain Health and Mana Regen. Gain a Tear of the Goddess.
Dance Party~G~On a win, each survivor can drop gold; the chance rises per Choreographer fielded. Gain 2 Choreographers.
Death by a Thousand Cuts~G~Enough Swiftstriker attacks pay a Completed Item Anvil and gold. Gain a Ziggs and a Yunara.
Deathbringer~G~Takedowns by Rock champions or the Infernal Idol permanently buff the Idol. Gain 3 Rock champions.
Dig on This~G~Jazz champions get more Health and Damage Amp from Jazz. Gain a Lucian and a Galio.
Double Trouble~G~Fielding exactly 2 copies of a champion buffs both. On 3-star, gain a 2-star copy.
Duo Queue~G~Gain 2 random 5-costs and 2 copies of a component.
Early Learnings~G~Team AD and AP that grows after each player combat. 1-costs gain double.
Electrocharge II~G~Allies that take enough attacks zap nearby enemies for magic damage (cooldown).
Epic Rolldown~G~Gain rerolls when you level up.
Epoch~G~XP and free rerolls now and every stage. Has a + version.
Espresso~G~Gain a Recurve Bow. Team Attack Speed that rises later in combat.
Exclusive Customization~G~Gain a Lucky Item Chest, a Magnetic Remover and gold.
Fighter Flight II~G~Fighters and Assassins move faster and gain Attack Speed, doubled at low Health.
Forever Burning Brighter~G~Ionic Spark champions gain AD and AP that grow permanently with each fan gift milestone. Gain 3 Ionic Spark champions.
FOURcing~G~Gain a random 4-cost. Your team gains Health for each item on that champion.
Frontline Foundation~G~Gain a 2-star 1-cost tank and an Emblem matching its class.
Gain 21 Gold~G~Gain gold. Has a + version.
Gathering Storm~G~Pentakill champions permanently gain Health with each Pentakill execute. Gain 3 Pentakill champions.
Gilded Steel~G~Gain two 5-costs. While you field a 5-cost, your 1- to 4-costs gain Durability.
Glass Cannon II~G~Back-row allies start at reduced Health and gain Damage Amp.
Gold Destiny~G~Gain a random Gold augment and gold. Has a + version.
Good FOURtune~G~Opens a shop of 2-star 4-costs; buy one. Gain gold.
Group Hug II~G~At combat start, allies give Armor and Magic Resist to adjacent allies. Stacks.
Hard Bargain~G~You cannot choose on Carousels, but each one pays player Health, gold and an unpicked champion with its item.
Healing Orbs II~G~When an enemy dies, a nearby ally is healed.
Heart of Steel~G~Steadfast Heart keeps gaining permanent max Health as its holder survives combat.
Heroic Grab Bag~G~Gain 2 Lesser Champion Duplicators and gold. Has + and ++ versions.
High Rolling~G~Renegade kills can drop loot, scaling with crit chance, and the loot itself can crit. Gain a Qiyana.
Hustler~G~No more interest; gain flat gold every player-combat round. Gold now.
Immortalized in Theater~G~The first allies to die each combat become statues that Captivate adjacent enemies when destroyed. Gain a Katarina and a Renata Glasc.
Infinity Protection~G~Gold now, then an Infinity Force that shields allies in its row.
Investment Strategy~G~Champions gain permanent max Health for each interest you earn. Gold now.
It's Me, Baby~G~A championship hex in the bottom-right corner gives Damage Amp, Attack Speed and gold on takedowns.
Knowledge Download II~G~Gain XP.
Late Game Scaling~G~XP each player-combat round. Your 5-costs gain Health and Attack Speed.
Legion Of Threes~G~Gain a random Emblem. 3-costs and Emblem holders gain Health and Attack Speed.
Light up the Sky~G~The highest-Health enemies periodically take max-Health magic damage, more per Ionic Spark champion fielded. Gain 3 Ionic Spark champions.
Magic Roll~G~Roll 3 dice for rewards.
Makeshift Armor II~G~Champions without items gain Armor and Magic Resist.
Max Build~G~Free rerolls now; at a level threshold, more rerolls and a Champion Duplicator.
Money Hungry~G~Gold now and every stage. Has a + version.
NO SCOUT NO PIVOT~G~Champions that fight cannot be benched or sold, but gain Health, AD and AP after each player combat.
Our Hearts Aligned~G~When Ionic Spark champions spend enough Mana together, each gains a max-Health shield. Gain 3 Ionic Spark champions.
Pandora's Items II~G~Bench items are randomised each round. Gain components and gold.
Patient Study~G~XP after each player combat, depending on win or loss.
Piñata~G~Gain a Training Dummy with Giant's Belts. Your dummies drop gold as they take damage.
Pilfer~G~Each round, gain a 1-star copy of the first champion you killed last combat. Enough value also pays Thief's Gloves.
Plot Armor~G~Team Armor and Magic Resist, increased once a unit drops low.
Portable Forge~G~Choose 1 of 4 Artifacts.
Promised Protection~G~Gain an upgraded Protector's Vow (more Mana gain and max Health).
Randuin's Omen~G~Gain a Randuin's Omen: Armor and Magic Resist for the holder and nearby allies.
Rare Collection~G~Team Health and Attack Speed for each unique unlockable champion fielded.
Replication~G~Choose 1 of 3 components and receive copies over the next rounds.
reroll.exe~G~Free rerolls every stage, plus more based on your Hyperpop Hype. Gain a 2-star Ziggs.
Reunion Show II~G~Gain champions that all share a trait.
Rock All Nite~G~Rock champions gain AD and AP, growing the longer the Infernal Idol stays alive. Gain 3 Rock champions.
Running Wild~G~At combat start, your strongest K|DA champions with few items get a temporary recommended item and Health. Gain a Neeko and a Lillia.
Sacrificial Dummy~G~Gain a Training Dummy that absorbs all damage your champions would take while it lives.
Salvage Bin~G~A completed item now, then a component later. Selling champions breaks their items into components. Has a + version.
Seraphim's Staff~G~Gain an Archangel's Staff that gives extra Mana Regen above an AP threshold.
Slammin'~G~Gold now. XP after each player combat if no items sit on your bench. Has a + version.
Small Squad~G~Fielding only a few Heartsteel champions increases their bonuses. Gain Heartsteel champions.
Solo Leveling~G~For a few combats your team size is restricted but the fielded champion is massively buffed. Then gain components.
Solo Plate~G~Gain a Gargoyle Stoneplate. Stoneplate holders alone in their row gain max Health.
Speedy Double Kill~G~Gain a Guinsoo's Rageblade. Gain gold after enough players are eliminated.
Spirit Of Redemption~G~Gain a Spirit Visage that periodically heals nearby allies.
Spreading Roots~G~Gain a random Emblem, and another after some combats. The + version gives Emblems and gold now.
Staffsmith II~G~A Needlessly Large Rod completed item now and another later.
Stakeholder Management~G~Gain 2 more Manager hexes; Managers in them gain max Health and a bigger share of hex bonuses. Gain a Leona. Has a + version.
Star Power~G~2-starring a K|DA champion gives a free K|DA champion. Gain a Lillia and a Neeko.
Stats On Stats II~G~Gain stat consumables now and at intervals.
Strange Duet II~G~Allies isolated in pairs gain Durability and Damage Amp.
Submit to the Pit~G~Allies gain AD and AP each second they spend in the centre 4 rows.
Swordsmith II~G~A B.F. Sword completed item now and another later.
The Drop II~G~After a delay in combat, your team heals a share of max Health and enemies take max-Health true damage.
The Golden Dragon~G~Gain a Mogul's Mail: its holder takes extra team slots but gains Health and Durability, and it generates gold.
Time Skip~G~Your Shop is disabled for a while, then you gain XP.
Tons of Stats!~G~Team Health, AD, AP, Armor, Magic Resist, Attack Speed and Mana.
Trade Sector~G~A free reroll every round, plus gold. Has a + version.
U.R.F~G~Gain a Spatula. Holders of Spatula or Frying Pan items gain Attack Speed and Mana Regen.
Verticality II~G~Champions gain AD, AP, Armor and Magic Resist for each ally sharing a trait with them.
Warpath~G~Gain a 2-star 2-cost. After dealing enough player damage, gain a chest of high-cost champions and items.
Weight The Worth~G~The first champion you 3-star gives you a copy every round for the rest of the game. Gain a Lesser Duplicator.
Worth the Wait~G~Gain a random 1-cost, then another copy every round for the rest of the game.
Woven Magic~G~Gain a component, and more as your champions spend Mana (capped).
Zeke's Herald~G~Gain a Zeke's Herald: Attack Speed for the holder and allies in its row.
Zz'Rot Portal~G~Gain a Zz'Rot Portal that summons a large Voidspawn.
Arcanist Circlet~P~Gain an Arcanist Emblem, a Tear of the Goddess and an Ahri.
Arcanist Crown~P~Gain an Arcanist Emblem, a Jeweled Gauntlet and a Swain.
Band of Thieves II~P~Gain Thief's Gloves now and another later. Has + and ++ versions.
Baron's Lair~P~Gain a tank item. After a delay, your team gains AD and AP every second.
Beach Pop Circlet~P~Gain a Beach Pop Emblem, Sparring Gloves and a Graves.
Beach Pop Crown~P~Gain a Beach Pop Emblem, a Blue Buff and a Syndra.
Belt Overflow~P~Gain Giant's Belts. Your Giant's Belts grant bonus Health.
Birthday Present~P~Each level-up gives a 2-star champion (cost below your level) and gold.
Booster Box~P~A pack of champions now and at upcoming stages.
Build A Bud~P~Gain a random champion and gold.
Buried Treasures III~P~A random component now and at the start of the next rounds.
Call To Chaos~P~Gain a powerful random reward.
Celestial Blessing III~P~Team Omnivamp; excess healing becomes a shield.
Cheat Code III~P~Get a cheat code each stage; perform its exact action sequence once for a reward.
Choreographer Circlet~P~Gain a Choreographer Emblem, a Giant's Belt and a Garen.
Choreographer Crown~P~Gain a Choreographer Emblem, an Adaptive Helm and a Syndra.
Classical Circlet~P~Gain a Classical Emblem, a B.F. Sword and a Jhin.
Classical Crown~P~Gain a Classical Emblem, a Spirit Visage and a Nasus.
Cloning~P~After each player combat, gain a copy of a random champion on your board (or gold with few unique champions).
Comeback Story~P~Team Health and Attack Speed for each point of player Health you are missing.
Commerce Core~P~Free rerolls now and every round for the rest of the game.
Component Quest~P~A component and gold now; your next 7 player-combat wins each give another component, then gold.
Cursed Crown~P~+1 team size, but you take double player damage on a loss.
Deadlier Blades~P~Gain a Deathblade. Deathblades permanently gain AD on takedowns.
Deadlier Caps~P~Gain a Rabadon's Deathcap. Deathcaps give Mana Regen and permanently gain AP on takedowns.
Duplicator Deal~P~Gain Champion Duplicators, but you can no longer 3-star champions.
Expected Unexpectedness~P~Now and at the next 2 stages, roll 3 dice for rewards.
Flexible~P~A random Emblem now and every stage. Team Health for each Emblem held.
Forged In Strength~P~Gain an Artifact. Dropping below a Health threshold gives more Artifacts, an item and components.
Giant and Mighty~P~Your team becomes large and gains Health.
Golden Gamble~P~Gold and a coin flip: a Radiant Lucky Item Chest or Completed Item anvils. Has + and ++ versions.
Hard Commit~P~Gain a random Emblem. Each stage, gain a champion of that trait matching the stage's cost, and 3 gold.
Heartsteel Circlet~P~Gain a Heartsteel Emblem, Sparring Gloves and a Yone.
Heartsteel Crown~P~Gain a Heartsteel Emblem, a Steadfast Heart and a K'Sante.
Hedge Fund~P~Gain gold. Your maximum interest becomes 10.
Hitmaker Circlet~P~Gain a Hitmaker Emblem, a B.F. Sword and a Xayah.
Hitmaker Crown~P~Gain a Hitmaker Emblem, an Infinity Edge and a Senna.
Hold the Line~P~Allies in your back 2 rows gain AP and AD for each ally starting in your front row.
Illbeats Circlet~P~Gain an Illbeats Emblem, a Tear of the Goddess and a Draven.
Illbeats Crown~P~Gain an Illbeats Emblem, a Gargoyle Stoneplate and a Braum.
Invested~P~Gain 26 gold (45 on ++). Each round, 1 reroll per 10 gold you hold above 50, up to 80.
Investment Strategy II~P~Champions gain permanent max Health per interest earned. Max interest increases. Gold now.
Ionic Spark Circlet~P~Gain an Ionic Spark Emblem, a Needlessly Large Rod and an Aurora.
Ionic Spark Crown~P~Gain an Ionic Spark Emblem, an Ionic Spark item and an Annie.
Jazz Circlet~P~Gain a Jazz Emblem, a Recurve Bow and a Bard.
Jazz Crown~P~Gain a Jazz Emblem, a Spear of Shojin and a Lucian.
K|DA Circlet~P~Gain a K|DA Emblem, a Needlessly Large Rod and a Leona.
K|DA Crown~P~Gain a K|DA Emblem, a Guinsoo's Rageblade and a Kai'Sa.
Level Up!~P~Buying XP gives extra XP. Gain XP now.
Living Forge~P~An Artifact Anvil now and at recurring intervals.
Lucky Gloves~P~Thief's Gloves always roll ideal items. Gain Sparring Gloves and gold. The + version gives a second pair of gloves later.
Luxury Subscription~P~A package of a champion, a 2-star champion and gold now and at the following stages.
Mad Science~P~Each ally becomes huge (Health, AD, AP) or tiny (Durability, Attack Speed) at random.
Management Track~P~Gain a Manager Emblem. Manager bonuses can drop gold; collect enough for a 2-star Dr. Mundo and Warmog's Armor.
Manager Circlet~P~Gain a Manager Emblem, a Chain Vest and a Leona.
Min-Max~P~Gain a Golden Item Remover, 4 components and gold.
Money Monsoon~P~Gold now and every round for the rest of the game.
Nesting Anvils~P~An Artifact Anvil that leads to a Component Anvil that leads to gold. Has a + version.
One Buff Two Buff~P~Gain a Red Buff, a Blue Buff and a Champion Duplicator.
Pain into Passion~P~A-Side: True Damage champions gain Attack Speed and Health per Bling collected. B-Side: gold after losses. Gain 3 True Damage champions.
Pandora's Box~P~Your board transforms one cost tier higher (max 5), your items reforge, and you gain a Gold augment and a completed item.
Pandora's Items III~P~Bench items are randomised each round. Gain Radiant items.
Pentakill Circlet~P~Gain a Pentakill Emblem, a Negatron Cloak and a Yorick.
Pentakill Crown~P~Gain a Pentakill Emblem, a Giant Slayer and a Viego.
Prismatic Destiny~P~Gain a random Prismatic augment and gold. Has a + version.
Prismatic Ticket~P~Each reroll has a chance to give a free reroll.
Radiant Rascal~P~Gain Radiant Thief's Gloves that equip two random Radiant items each round.
Radiant Relics~P~Choose 1 of 5 Radiant items. Gain a Magnetic Remover.
Renegade Circlet~P~Gain a Renegade Emblem, Sparring Gloves and an Aurora.
Renegade Crown~P~Gain a Renegade Emblem, a Hand of Justice and a Qiyana.
Rock Circlet~P~Gain a Rock Emblem, a Needlessly Large Rod and a Locke.
Rock Crown~P~Gain a Rock Emblem, a Hand of Justice and a Camille.
Royalties~P~Gain a Tactician's Crown and gold every round for the rest of the game.
Shimmerscale Essence~P~Gain a Gambler's Blade, then a Mogul's Mail later.
Shopping Spree~P~Level-ups give Shop refreshes based on your level. Gain gold.
Slayer Circlet~P~Gain a Slayer Emblem, a Chain Vest and a Yone.
Slayer Crown~P~Gain a Slayer Emblem, a Titan's Resolve and a Briar.
Soul Awakening~P~Team AD and AP build every second from combat start; at max stacks, bonus true damage.
Star of the Show~P~Gain a non-tank champion and an Emblem for one of its traits. Later, gain more copies of it.
Strange Duet III~P~Allies isolated in pairs gain Durability and Damage Amp.
Sweet Treats~P~Gain an Artifact anvil. Team Health for each item equipped.
Swiftstriker Circlet~P~Gain a Swiftstriker Emblem, a Recurve Bow and a Bard.
Swiftstriker Crown~P~Gain a Swiftstriker Emblem, a Hextech Gunblade and a Bard.
Sword Overflow~P~Gain B.F. Swords. Your B.F. Swords grant Attack Speed.
Tactician's Kitchen~P~Gain a random Emblem, and a Tactician's Cape after a delay.
The Golden Egg~P~An egg that eventually hatches into a huge amount of loot. Wins speed it up.
The Immortal Journey~P~Gain a Xayah, a Spear of Shojin and gold.
The Trait Tree~P~Gain random Emblems and gold. The + version adds a Reforger.
Three Steps Ahead~P~Each of your next player-combat losses gives a 5-cost and components.
TONS of Stats!~P~Team Health, AD, AP, Armor, Magic Resist, Attack Speed and Mana.
Trait Ladder~P~Gain a random Emblem. Field enough non-unique traits for a reward; the requirement and reward then grow.
True Damage Circlet~P~Gain a True Damage Emblem, a Giant's Belt and an Ekko.
True Damage Crown~P~Gain a True Damage Emblem, an Infinity Edge and a Senna.
Unearthed Treasure~P~After player combat, each Beach Pop champion empowered by an instrument can uncover loot. Gain a Taric, a Zoe and a Renekton.
Upward Mobility~P~Buying XP costs less. Gain Health and rerolls on level-up.
Urf's Grab Bag~P~Gain a Spatula, components and gold.
Verticality III~P~Champions gain AD, AP, Armor and Magic Resist for each ally sharing a trait with them.
Wand Overflow~P~Gain Needlessly Large Rods. Your Rods grant Attack Speed.
We Stick Together~P~Gain an Emblem for a random trait and a completed item anvil. Allies with that trait gain Attack Speed.
Worth the Wait II~P~Gain 2 copies of a random 2-cost, then another copy every round for the rest of the game.
Renekton hero augment~H~Name not confirmed (heard on stream as something like "Lifeguard to the Rescue"). Renekton sits out the start of combat, then jumps in once a unit drops low (about 30% Health was mentioned), gains a shield and goes on an attack frenzy.
Annie hero augment~H~Name not confirmed. Annie rides on the back of Tibbers and throws fireballs.
Lillia hero augment~H~Name not confirmed. Lillia leaps into the enemy backline and applies poison.`;
