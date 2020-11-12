class ModularFateConstants { 

    static getFateLadder(){
        return  {
                    "10":"",
                    "9":"",
                    "8":"Legendary",
                    "7":"Epic",
                    "6":"Fantastic",
                    "5":"Superb",
                    "4":"Great",
                    "3":"Good",
                    "2":"Fair",
                    "1":"Average",
                    "0":"Mediocre",
                    "-1":"Poor",
                    "-2":"Terrible",
                }
    }

    static getAdjective(r){
        const ladder = this.getFateLadder()
        return (ladder[r])
    }


    static getFateAcceleratedDefaultSkills(){
        
        return {
                "Careful":{
                            "name":"Careful",
                            "description":"A Careful action is when you pay close attention to detail and take your time to do the job right. Lining up a long-range arrow shot. Attentively standing watch. Disarming a bank’s alarm system.",
                            "overcome":"",
                            "caa":"",
                            "attack":"",
                            "defend":"",
                            "pc":true
                        },
                "Clever":{
                            "name":"Clever",
                            "description":"A Clever action requires that you think fast, solve problems, or account for complex variables. Finding the weakness in an enemy swordsman’s style. Finding the weak point in a fortress wall. Fixing a computer.",
                            "overcome":"",
                            "caa":"",
                            "attack":"",
                            "defend":"",
                            "pc":true
                        },
                "Flashy":{
                            "name":"Flashy",
                            "description":"A Flashy action draws attention to you; it’s full of style and panache. Delivering an inspiring speech to your army. Embarrassing your opponent in a duel. Producing a magical fireworks display.",
                            "overcome":"",
                            "caa":"",
                            "attack":"",
                            "defend":"",
                            "pc":true
                        },
                        "Forceful":{
                            "name":"Forceful",
                            "description":"A Forceful action isn’t subtle—it’s brute strength. Wrestling a bear. Staring down a thug. Casting a big, powerful magic spell.",
                            "overcome":"",
                            "caa":"",
                            "attack":"",
                            "defend":"",
                            "pc":true
                        },
                        "Quick":
                        {
                            "name":"Quick",
                            "description":"A Quick action requires that you move quickly and with dexterity. Dodging an arrow. Getting in the first punch. Disarming a bomb as it ticks 3… 2… 1…",
                            "overcome":"",
                            "caa":"",
                            "attack":"",
                            "defend":"",
                            "pc":true
                        },
                        "Sneaky":{
                            "name":"Sneaky",
                            "description":"A Sneaky action is done with an emphasis on misdirection, stealth, or deceit. Talking your way out of getting arrested. Picking a pocket. Feinting in a sword fight.",
                            "overcome":"",
                            "caa":"",
                            "attack":"",
                            "defend":"",
                            "pc":true
                        }
            }
    }
    static getFateCondensedDefaultSkills(){
        return {
            "Academics":{
                "name":"Academics",
                "description":"Mundane, everyday human knowledge and education, including history, sciences, and medicine. Academics stunts often refer to specialized areas of knowledge and medical skills.",
                "overcome":"",
                "caa":"",
                "attack":""
                ,"defend":"",
                "pc":true
        },
            "Athletics":{
                "name":"Athletics",
                "description":"A measurement of physical potential. Athletics stunts focus on movement—running, jumping, parkour—and dodging attacks.",
                "overcome":"",
                "caa":"",
                "attack":"",
                "defend":"",
                "pc":true
            },
            "Burglary":{
                "name":"Burglary",
                "description":"Knowledge of and ability to bypass security systems, pick pockets, and generally commit crimes. Burglary stunts give bonuses to the various stages of committing a crime, from the planning to the execution and escape.",
                "overcome":"",
                "caa":"",
                "attack":"",
                "defend":"",
                "pc":true
            },
            "Contacts":{
                "name":"Contacts",
                "description":"Knowledge of the right people and connections that can help you. Contacts stunts give you ready allies and an information network wherever you go in the world.",
                "overcome":"",
                "caa":"",
                "attack":"",
                "defend":"",
                "pc":true
            },
            "Crafts":{
                "name":"Crafts",
                "description":"Ability to make or break machinery, build contraptions, and pull off MacGyver-esque feats of ingenuity. Crafts stunts let you have the gizmo on hand, give bonuses to building and breaking things, and provide justification for using Crafts in place of skills like Burglary or Academics under certain circumstances.","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Deceive":{
                "name":"Deceive",
                "description":"Ability to lie and cheat convincingly and with aplomb. Deceive stunts might improve your ability to tell a particular breed of lie or help invent false identities.","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Drive":{
                    "name":"Drive",
                    "description":"Controlling vehicles under the most grueling circumstances, pulling wicked maneuvers, and simply getting the most out of your ride. Drive stunts can be signature maneuvers, a special vehicle of your own, or the ability to use Drive in place of a skill like Burglary or Academics under certain circumstances.","overcome":"","caa":"","attack":"","defend":"","pc":true
                },
            "Empathy":{
                "name":"Empathy",
                "description":"Ability to accurately judge someone’s mood and intentions. Empathy stunts can be about judging a crowd, picking up on lies, or helping others recover from mental consequences.","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Fight":{
                "name":"Fight",
                "description":"Ability to excel at hand-to-hand combat, whether with weapons or fists. Fight stunts include signature weapons and special techniques.","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Investigate":{
                "name":"Investigate",
                "description":"Deliberate, careful study and puzzling out mysteries. Use this to piece together clues or reconstruct a crime scene. Investigate stunts help you form brilliant deductions or piece together information more quickly.","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Lore":{
                "name":"Lore",
                "description":"Specialized, arcane knowledge that falls outside of the scope of Academics, including supernatural topics of one sort or another. This is where the weird stuff happens. Lore stunts often support practical applications of your arcane knowledge, such as casting spells. Some settings may remove Lore, replace it with a different skill, or combine it with Academics.","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Notice":{
                "name":"Notice",
                "description":"Ability to pick up details in the moment, spot trouble before it happens, and generally be perceptive. It contrasts Investigate, which is for slow, deliberate observation. Notice stunts sharpen your senses, improve your reaction time, or make you harder to sneak up on.","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Physique":{
                "name":"Physique",
                "description":"Raw power and durability. Physique stunts let you perform superhuman feats of strength, throw your weight around while wrestling, and shrug off physical consequences. In addition, a high Physique rating gives you more physical stress or consequence slots","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
                "Provoke":{"name":"Provoke","description":"Ability to push people to act the way you want them to. It’s coarse and manipulative, not a positive interaction. Provoke stunts let you push opponents into foolhardy action, draw aggression toward you, or scare enemies (assuming they can feel fear).","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Rapport":{
                "name":"Rapport","description":"Building connections with others and working together. Where Provoke is manipulation, Rapport is sincerity, trust, and goodwill. Rapport stunts let you sway the crowd, improve relationships, or build contacts.","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Resources":{
                "name":"Resources","description":"Access to material things, not just money or direct ownership. It might reflect your ability to borrow from friends or dip into an organization’s armory. Resources stunts let you use Resources in place of Rapport or Contacts or give you extra free invokes when you pay for the best.","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Shoot":{
                "name":"Shoot","description":"All forms of ranged combat, whether guns, throwing knives, or bow and arrow. Shoot stunts let you make called shots, quick-draw, or always have a gun handy.","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Stealth":{
                "name":"Stealth","description":"Staying unseen or unheard and escaping when you need to hide. Stealth stunts let you vanish in plain sight, blend into crowds, or advance through shadows unseen.","overcome":"","caa":"","attack":"","defend":"","pc":true
            },
            "Will":{
                "name":"Will","description":"Mental fortitude, the ability to overcome temptation and to withstand trauma. Will stunts let you ignore mental consequences, withstand the mental agony of strange powers, and hold steady against enemies who provoke you. In addition, a high Will rating gives you more mental stress or consequence slots.","overcome":"","caa":"","attack":"","defend":"","pc":true
            }
        }
    }
    
    
    static getFateCoreDefaultSkills(){
        
        return {
            "Athletics":{
                "name":"Athletics",
                "description":"The Athletics skill represents your character’s general level of physical fitness, whether through training, natural gifts, or genre-specific means (like magic or genetic alteration). It’s how good you are at moving your body. As such, it is a popular choice for nearly any action-y character. Athletics is all but ubiquitous among every genre appropriate for Fate—it would only be unnecessary in a game that focused exclusively on interpersonal interaction and had no physical conflict.","overcome":"Athletics allows you to overcome any obstacle that\nrequires physical movement—jumping, running, climbing, swimming, etc. If it resembles something you’d do in the decathlon, you roll Athletics. You use overcome actions with Athletics to move between zones in a conflict if there’s a situation aspect or other obstacle in your way. You also roll Athletics to chase or race in any contests or challenges that rely on these types of activities.","caa":"When you’re creating an advantage with Athletics, you’re jumping to high ground, running faster than the opponent can keep up with, or performing dazzling acrobatic maneuvers in order to confound your foes.",
                "attack":"Athletics is not meant as an attack skill.",
                "defend":"Athletics is a catchall skill to roll for defense in a physical conflict, against close quarters and ranged attacks. You can also use it to defend against characters trying to move past you, if you’re in a position to physically interfere with whoever’s making the attempt.",
                "pc":true
                },    
            "Burglary":{
                "name":"Burglary","description":"The Burglary skill covers your character’s aptitude for stealing things and getting into places that are off-limits.\nIn genres that rely on the use of a lot of technology, this skill also includes a proficiency in the related tech, allowing the character to hack security systems, disable alarm systems, and whatnot.","overcome":"Burglary allows you to overcome any obstacle related to theft or infiltration. Bypassing locks and traps, pickpocketing and filching, covering your tracks, and other such activities all fall under the purview of this skill.","caa":"You can case a location with Burglary, to determine how hard it will be to break into and what kind of security you’re dealing with, as well as discover any vulnerabilities you might exploit. You can also examine the work of other burglars to determine how a particular heist was done, and create or discover aspects related to whatever evidence they may have left behind.","attack":"Burglary isn’t used for attacks.","defend":"Same here. It’s not really a conflict skill, so there’s not a lot of opportunity to use it to defend.","pc":true
            },
            "Contacts":{
                "name":"Contacts","description":"Contacts is the skill of knowing and making connections with people. It presumes proficiency with all means of networking available in the setting.","overcome":"You use Contacts to overcome any obstacle related to finding someone you need to find. Whether that’s old-fashioned “man on the street” type of work, polling your information network, or searching archives and computer databases, you’re able to hunt down people or somehow get access to them.","caa":"Contacts allows you to know who the perfect person to talk to is for anything you might need, or to decide that you know the perfect person already. It’s likely that you’ll create story details with this skill, represented by aspects. (“Hey, guys, my contacts tell me that Joe Steel is the Best Mechanic For A Thousand Miles—we should talk to him.”) \n\nYou can also create an advantage that represents what the word on the street is about a particular individual, object, or location, based on what your contacts tell you. These aspects almost always deal with reputation more than fact, such as Known as a Mean Guy or Notorious Swindler. Whether that person lives up to their reputation is anybody’s guess, though that doesn’t invalidate the aspect—people often have misleading reputations that complicate their lives.\n\nContacts could also be used to create aspects that represent using your information network to plant or acquire information.","attack":"Contacts isn’t used for attacks; it’s hard to harm someone simply by knowing people.","defend":"Contacts can be used to defend against people creating social advantages against you, provided your information network can be brought to bear in the situation. You might also use it to keep someone from using Deceive or Contacts to go “off the grid”, or to interfere with Investigate attempts to find you.","pc":true
            },
            "Crafts":{
                "name":"Crafts","description":"Crafts is the skill of working with machinery, for good or ill. The default skill is called Crafts because it’s what we use in the examples,\nbut this skill might vary a great deal depending on the setting and what kind of technology is available. In a modern or sci-fi setting, this\nmight be Engineering or Mechanics instead.","overcome":"Crafts allows you to build, break, or fix machinery, presuming you have the time and tools you need. Often, actions with Crafts happen as one component of a more complex situation, making it a popular skill for challenges. For example, if you’re just fixing a broken door, neither success\nnor failure is interesting; you should just succeed and move on. Now, if you’re trying to get your car to start while a pack of werewolves is hunting\nyou…","caa":"You can use Crafts to create aspects representing features of a piece of machinery, pointing out useful features or strengths you can use to your advantage (Armor-Plated, Rugged Construction) or a vulnerability for you to exploit (Flaw in the Cross-Beam, Hasty Work). Creating Crafts advantages can also take the form of quick and dirty sabotage or jury-rigging on mechanical objects in the scene. For example, you might create a Makeshift Pulley to help you get to the platform above you, or throw something into the ballista that’s firing on you to give it a Jammed Pivoting Joint and make it harder to hit you.","attack":"You probably won’t use Crafts to attack in a conflict, unless the conflict is specifically about using machinery, like with siege weaponry. GMs and players, talk over the likelihood of this happening in your game if you have someone who is really interested in taking this skill. Usually, weapons you craft are likely to be used with other skills to attack—a guy who makes a sword still needs Fight to wield it well!","defend":"Defend: As with attacking, Crafts doesn’t defend, unless you’re somehow using it as the skill to control a piece of machinery that you block with.","pc":true
            },
            "Deceive":{
                "name":"Deceive","description":"Deceive is the skill about lying to and misdirecting people.","overcome":"Use Deceive to bluff your way past someone, or to get someone to believe a lie, or to get something out of someone because they believe in one of your lies. For nameless NPCs, this is just an overcome roll, but for PCs or named NPCs, it requires a contest, and the target opposes with Empathy. Winning this contest could justify placing a situation aspect on your target, if buying into your lie could help you in a future scene.\n\nDeceive is the skill you use for determining if a disguise works, whether on yourself or others. You’ll need to have the time and supplies to create the desired effect. (Note: This is mainly a Hearts of Steelthing; in some games, this may not be appropriate for Deceive by default and should require a stunt.)\n\nYou can also use Deceive to do small tricks of sleight-of-hand and misdirection.","caa":"Use Deceive to create momentary distractions, cover stories, or false impressions. You could feint in a sword-fight, putting an opponent Off-Balance and setting you up for an attack. You could do the whole, “What’s that over there!” trick to give you a Head Start when you run away. You could establish a Wealthy Noble Cover Story for when you attend a royal ball. You could trick someone into revealing one of their aspects or other information.","attack":"Deceive is an indirect skill that creates a lot of opportunities you can capitalize on, but it doesn’t do direct harm to an individual.","defend":"You can use Deceive to throw off Investigation attempts with false information and to defend against efforts made to discern your true motives with the Empathy skill.","pc":true
            },
            "Drive":{
                "name":"Drive","description":"The Drive skill is all about operating vehicles and things that go fast.\n\nLike Crafts, how the Drive skill appears in your games is going to depend a lot on how much action you intend to have inside of vehicles or other forms of transportation, and what kind of technology is available in your setting.\n\nFor example, a low-tech setting (like Hearts of Steel) might have Ride instead of Drive, because the main transportation is animal-based. A futuristic setting revolving around people in a space opera military might have Drive (for cars), Pilot (for starships), and Operate (for tanks or heavy military vehicles).\n\nDIFFERENT VEHICLES, DIFFERENT SKILLS\nThe advice is the same as for Crafts—don’t go nuts with reskinning this skill unless it makes a real, tangible difference in your game. Especially consider the option of having one skill that’s modified by stunts (see Building Stunts).","overcome":"Drive is the equivalent of Athletics when you’re in a vehicle—you use it to successfully accomplish movement in the face of difficult circumstances, like rough terrain, small amounts of clearance, or stunt driving. Obviously, Drive is also ripe for contests, especially chases and races.","caa":"You can use Drive to determine the best way to get somewhere in a vehicle, and a good enough roll might allow you to learn features of the route that get expressed as aspects, or declare that you know a Convenient Shortcut or something similar.\n\nYou can also just read the Athletics description, and then make it about a vehicle. Advantages created using Drive often revolve around getting good positioning, doing a fancy maneuver (Did a Barrel Roll, anyone?), or putting your opponent in a bad spot.","attack":"Drive isn’t usually used as an attack skill (though stunts can certainly alter this). If you want to ram a vehicle, you can attack with Drive, but you take the same shifts of harm you inflict.","defend":"Avoiding damage to a vehicle in a physical conflict is one of the most common uses of Drive. You can also use it to defend against advantages being created against you or overcome actions of someone trying to move past you in a vehicle.","pc":true
            },
            "Empathy":{
                "name":"Empathy","description":"Empathy involves knowing and being able to spot changes in a person’s mood or bearing. It’s basically the emotional Notice skill.","overcome":"You don’t really use Empathy to overcome obstacles directly—normally, you find out some information with it, and then use another skill to act. In some cases, though, you might use Empathy like you would Notice, to see if you catch a change in someone’s attitude or intent.","caa":"You can use Empathy to read a person’s emotional state and get a general sense of who they are, presuming you have some kind of interpersonal contact with them. Most often, you’ll use this to assess the aspects on another character’s sheet, but sometimes you’ll also be able to create new aspects, especially on NPCs. If the target has some reason to be aware that you’re trying to read them, they can defend with Deceive or Rapport.\n\nYou can also use Empathy to discover what circumstances will allow you to make mental attacks on someone, figuring out their breaking points.","attack":"Empathy can’t really be used in this capacity.","defend":"This is the skill to go to in order to defend against Deceive actions, allowing you to pierce through lies and see through to someone’s true intent. You can also use it to defend against those creating social advantages against you in general.\n\nSpecial: Empathy is the main skill you use to help others recover from consequences that are mental in nature.","pc":true
            },
            "Fight":{
                "name":"Fight","description":"The Fight skill covers all forms of close-quarters combat (in other words, within the same zone), both unarmed and using weapons. For the ranged weapons counterpart, see Shoot.","overcome":"Since you don’t really use Fight outside of a conflict, it’s not often used to overcome obstacles. You might use it to display your fighting prowess in a demonstration, or to participate in some kind of regulated bout or sport fighting, which would allow you to use this skill in a contest.","caa":"You’ll probably use Fight for most of the advantages you create in a physical conflict. Any number of special moves can be covered with advantages: a targeted strike to stun, a “dirty move,” disarming, and so on. You could even use Fight to assess another fighter’s style, spotting weaknesses in his or her form that you can exploit.","attack":"This is self-explanatory. You make physical attacks with Fight. Remember, this is for close-in work, so you have to be in the same zone as your opponent","defend":"You use Fight to defend against any other attack or create an advantage attempt made with Fight, as well as pretty much any action where violently interposing yourself could prevent it from happening. You can’t use this skill to defend against Shoot attacks, unless the setting is fantastical enough that you can catch missiles or swat them from the air or use laser swords to deflect blasters.\n\n","pc":true
            },
            "Investigate":{
                "name":"Investigate","description":"Investigate is the skill you use to find things out. It’s a counterpart to Notice—whereas Notice revolves around situational alertness and surface observation, Investigate revolves around concentrated effort and in-depth scrutiny.","overcome":"Investigate obstacles are all about information that’s hard to uncover for some reason. Analyzing a crime scene for clues, searching a cluttered room for the item you need, even poring over a musty old tome to try and find the passage that makes everything make sense.\n\nRacing against the clock to collect evidence before the cops show up or disaster occurs is a classic way to use Investigate in a challenge.","caa":"Investigate is probably one of the most versatile skills you can use to create an advantage. As long as you’re willing to take the time, you can find out just about anything about anyone, discover nearly any detail about a place or object, or otherwise make up aspects about nearly anything in the game world that your character could reasonably unearth.\n\nIf that sounds broad, consider the following as just a few of the possibilities for using Investigate: eavesdropping on a conversation, looking for clues at a crime scene, examining records, verifying the truth of a piece of information, conducting surveillance, and researching a cover story.","attack":"Investigate isn’t used to make attacks.","defend":"Same here.","pc":true
            },
            "Lore":{
                "name":"Lore","description":"The Lore skill is about knowledge and education. As with some other skills, we called it Lore because that fits the particular flavor of our examples—other games might call it Scholarship, or Academics, or something like that.\n\nIf your game has a reason to prioritize different fields of knowledge as being separate from one another, you might have several skills that follow the same basic template. For example, you might have a Lore skill that’s reserved for supernatural and arcane knowledge, and a Scholar skill for more traditional education.","overcome":"You can use Lore to overcome any obstacle that requires applying your character’s knowledge to achieve a goal. For example, you might roll Lore to decipher some ancient language on a tomb wall, under the presumption that your character might have researched it at some point.\n\nFrankly, you can use Lore as a go-to skill any time you need to know if your character can answer a difficult question, where some tension exists in not knowing the answer.","caa":" Like Investigate, Lore provides a lot of very flexible opportunities to create advantages, provided you can research the subject in question. More often than not, you’ll be using Lore to get a story detail, some obscure bit of information that you uncover or know already, but if that information gives you an edge in a future scene, it might take the form of an aspect. Likewise, you can use Lore to create advantages based on any subject matter your character might have studied, which gives you a fun way to add details to the setting.","attack":"Lore isn’t used in conflicts. (In our examples, the magic that Zird the Arcane uses is based on Lore, so that’s a unique exception to this—he could conceivably use Lore for magical attacks and defenses. See the Extras section for more details about ways to do magic and powers.)","defend":"Lore isn’t used to defend.","pc":true
            },
            "Notice":{
                    "name":"Notice","description":"The Notice skill involves just that—noticing things. It’s a counterpart to Investigate, representing a character’s overall perception, ability to pick out details at a glance, and other powers of observation. Usually, when you use Notice, it’s very quick compared to Investigate, so the kinds of details you get from it are more superficial, but you also don’t have to expend as much effort to find them.","overcome":"You don’t really use Notice to overcome obstacles too often but when you do it’s used in a reactive way: noticing something in a scene, hearing a faint sound, spotting the concealed gun in that guy’s waistband.\n\nNote that this isn’t license for GMs to call for Notice rolls left and right to see how generally observant the players’ characters are; that’s boring. Instead, call for Notice rolls when succeeding would result in something interesting happening and failing would result in something just as interesting.","caa":"You use Notice to create aspects based on direct observation—looking over a room for details that stand out, finding an escape route in a debris-filled building, noticing someone sticking out in a crowd, etc. When you’re watching people, Notice can tell you what’s going on with them externally; for internal changes, see Empathy. You might also use Notice to declare that your character spots something you can use to your advantage in a situation, such as a convenient Escape Route when you’re trying to get out of a building, or a Subtle Weakness in the enemy’s line of defense. For example, if you’re in a barroom brawl you could make a Notice roll to say that you spot a puddle on the floor, right next to your opponent’s feet that could cause him to slip.","attack":"Notice isn’t really used for attacks.","defend":"You can use Notice to defend against any uses of Stealth to get the drop on you or ambush you, or to discover that you’re being observed.","pc":true
                },
                "Physique":{
                    "name":"Physique","description":"The Physique skill is a counterpart to Athletics, representing the character’s natural physical aptitudes, such as raw strength and endurance. In our example game, we have this skill broken out as something separate in order to create two distinct types of physical characters—the nimble guy (represented by Athletics) and the strongman (represented by Physique).\n\nIn your game, you might not find this distinction necessary to make with separate skills—though you might still let players make that distinction with stunts and aspects.","overcome":"You can use Physique to overcome any obstacles that require the application of brute force—most often to overcome a situation aspect on a zone—or any other physical impedance, like prison bars or locked gates. Of course, Physique is the classic skill for arm-wrestling matches and other contests of applied strength, as well as marathons or other endurance-based challenges.","caa":"Physique has a lot of potential for advantages in physical conflict, usually related to grappling and holding someone in place, making them Pinned or Locked Down. You might also use it as a way of discovering physical impairments possessed by the target—grappling the old mercenary tells you that he has a Bum Leg or some such.","attack":"Physique is not used to harm people directly—see the Fight skill for that.","defend":"Though you don’t generally use Physique to defend against attacks, you can use it to provide active opposition to someone else’s movement, provided you’re in a small enough space that you can effectively use your body to block access. You might also interpose something heavy and brace it to stop someone from getting through.\n\nSpecial: The Physique skill gives you additional physical stress or consequence slots. Average (+1) or Fair (+2) gives you a 3-point stress box. Good (+3) or Great (+4) gives you a 3-point and a 4-point stress box. Superb (+5)and above give you an additional mild consequence slot along with the additional stress boxes. This slot can only be used for physical harm.\n","pc":true},
                "Provoke":{
                    "name":"Provoke","description":"Provoke is the skill about getting someone’s dander up and eliciting negative emotional response from them—fear, anger, shame, etc. It’s the “being a jerk” skill.\n\nTo use Provoke, you need some kind of justification. That could come entirely from situation, or because you have an aspect that’s appropriate, or because you’ve created an advantage with another skill (like Rapport or Deceive), or because you’ve assessed your target’s aspects (see Empathy).\n\nThis skill requires that your target can feel emotions—robots and zombies typically can’t be provoked.","overcome":"You can Provoke someone into doing what you want in a fit of emotional pique. You might intimidate them for information, piss them off so badly that they act out, or scare them into running away. This will often happen when you’re going up against nameless NPCs or it isn’t worthwhile to play out the particulars. Against PCs or important NPCs, you’ll need to win a contest. They oppose with Will.","caa":"You can create advantages representing momentary emotional states, like Enraged, Shocked, or Hesitant. Your target opposes with Will.","attack":"You can make mental attacks with Provoke, to do emotional harm to an opponent. Your relationship with the target and the circumstances you’re in figure a great deal into whether or not you can use this action.","defend":"Being good at provoking others doesn’t make you better at avoiding it yourself. You need Will for that.","pc":true
                },
                "Rapport":{
                    "name":"Rapport","description":"The Rapport skill is all about making positive connections to people and eliciting positive emotion. It’s the skill of being liked and trusted.","overcome":"Use Rapport to charm or inspire people to do what you want, or to establish a good connection with them. Charm your way past the guard, convince someone to take you into their confidence, or become the man of the hour at the local tavern. For nameless NPCs, this is just an overcome action, but you may have to enter a contest to sufficiently ingratiate yourself to a named NPC or PC.","caa":"Use Rapport to establish a positive mood on a target or in a scene or to get someone to confide in you out of a genuine sense of trust. You could pep talk someone into having Elevated Confidence, or stir a crowd into a Joyful Fervor, or simply make someone Talkative or Helpful.","attack":"Rapport doesn’t cause harm, so you don’t use it for attacks.","defend":"Rapport defends against any skill used to damage your reputation, sour a mood you’ve created, or make you look bad in front of other people. It does not, however, defend against mental attacks. That requires Will.","pc":true
                },
                "Resources":{
                    "name":"Resources","description":"Resources describes your character’s general level of material wealth in the game world and ability to apply it. This might not always reflect cash on hand, given the different ways you can represent wealth in a particular setting—in a medieval game, it might be tied to land or vassals as much as gold; in the modern day, it might mean a number of good lines of credit.\n\nThis skill is in the default list to give you a basic, easy way to handle wealth as an abstraction without getting into minutiae or bookkeeping. Some people might consider it odd to give a static skill rating for something that we’re used to seeing as a finite resource.","overcome":"You can use Resources to get yourself out of or past any situation where throwing money at the problem will help, such as committing bribery or acquiring rare and expensive things. Challenges or contests might involve auctions or bidding wars.","caa":"You might use Resources to grease the wheels and make people more friendly, whether that represents an actual bribe (I Scratch Your Back...) or simply buying drinks for people (In Vino Veritas). You can also use Resources to declare that you have something you need on hand, or can quickly acquire it, which could give you an aspect representing the object.","attack":"Resources isn’t used for attacks.","defend":"Resources isn’t used to defend.","pc":true
                },
                "Shoot":{
                    "name":"Shoot","description":"The counterpart to Fight, Shoot is the skill of using ranged weaponry, either in a conflict or on targets that don’t actively resist your attempts to shoot them (like a bull’s-eye or the broad side of a barn).\n\nAgain, as with Fight, if it’s important to your setting to make a distinction between different types of ranged weaponry, you might separate this out into skills like Bows, Guns, Energy Weapons, etc. Don’t go nuts with this unless it’s key to your game.","overcome":"Unless, for some reason, you need to demonstrate your Shoot ability in a non-conflict situation, you probably won’t be using this skill for normal obstacles much. Obviously, contests involving Shoot are a popular staple of adventure fiction, and we recommend you look for the opportunity to have them if you have a character who specializes in this.","caa":"In physical conflicts, Shoot can be used to perform a wide variety of moves, like trick shots, keeping someone under heavy fire, and the like. In cinematic games, you might even be able to disarm people and pin their sleeves to walls—pretty much anything you’ve seen in an action movie. You could also make the argument for creating aspects based on your knowledge of guns (like placing a Prone to Jams aspect on an opponent’s gun).","attack":"This skill makes physical attacks. You can make them from up to two zones away, unlike with Fight. (Sometimes the range will change with the weapon.)","defend":"Shoot is unique in that it doesn’t really have a defense component to it—you’d use Athletics for that. You could use it to lay down some covering fire—which might act as a defense for your allies or provide opposition to someone else’s movement—though it could just as easily be represented by creating an advantage (Covering Fire or Hail of Bullets, for example).","pc":true
                },
                "Stealth":{
                    "name":"Stealth","description":"The Stealth skill allows you to avoid detection, both when hiding in place and trying to move about unseen. It pairs well with the Burglary skill.","overcome":"You can use Stealth to get past any situation that primarily depends on you not being seen. Sneaking past sentries and security, hiding from a pursuer, avoiding leaving evidence as you pass through a place, and any other such uses all fall under the purview of Stealth.","caa":"You’ll mainly use Stealth to create aspects on yourself, setting yourself in an ideal position for an attack or ambush in a conflict. That way, you can be Well-Hidden when the guards pass by and take advantage of that, or Hard to Pin Down if you’re fighting in the dark.","attack":"Stealth isn’t used to make attacks.","defend":"You can use this to foil Notice attempts to pinpoint you or seek you out, as well as to try to throw off the scent of an Investigate attempt from someone trying to track you.","pc":true
                },
                "Will":{
                    "name":"Will","description":"The Will skill represents your character’s general level of mental fortitude, the same way that Physique represents your physical fortitude.","overcome":"You can use Will to pit yourself against obstacles that require mental effort. Puzzles and riddles can fall under this category, as well as any mentally absorbing task, like deciphering a code. Use Will when it’s only a matter of time before you overcome the mental challenge, and Lore if it takes something more than brute mental force to get past it. Many of the obstacles that you go up against with Will might be made part of challenges, to reflect the effort involved.\n\nContests of Will might reflect particularly challenging games, like chess, or competing in a hard set of exams. In settings where magic or psychic abilities are common, contests of Will are popular occurrences.","caa":"You can use Will to place aspects on yourself, representing a state of deep concentration or focus.","attack":" Will isn’t really used for attacks. That said, in settings where you allow psychic abilities, full-on psychic conflict might be something you can do with this skill. That’s the sort of thing that would be added to Will by taking a stunt or extra.","defend":"Will is the main skill you use to defend against mental attacks from Provoke, representing your control over your reactions.\n\nSpecial: The Will skill gives you additional mental stress boxes or consequence slots. Average (+1) or Fair (+2) gives you a 3-point stress box. Good (+3) or Great (+4) gives you a 3-point and a 4-point stress box. Superb (+5) and above give you an additional mild consequence slot along with the additional stress boxes. This slot can only be used for mental harm.","pc":true
                }
        }
    }

    static getFateCoreAspects(){
        return {
            "High Concept":{
                "name":"High Concept","description":"Your high concept is a phrase that sums up what your character is about—who they are and what they do. It’s an aspect, one of the first and most important ones for your character.\n\nThink of this aspect like your job, your role in life, or your calling—it’s what you’re good at, but it’s also a duty you have to deal with, and it’s constantly filled with problems of its own. That is to say, it comes with some good and some bad. There are a few different directions you can take this:\n\nYou could take the idea of “like your job” literally: Lead Detective, Knight of the Round, Low-level Thug.\n\nYou could throw on an adjective or other descriptor to further define the idea: Despicable Regent of Riverton, Reluctant Lead Detective, Ambitious Low-level Thug.\n\nYou could mash two jobs or roles together that most people would find odd: Wizard Private Eye, Singing Knight of the Round Table, Monster-slaying Accountant.\n\nYou could play off of an important relationship to your family or an organization you’re deeply involved with (especially if the family or organization are well-connected or well-known): Black Sheep of the Thompson Family, Low-level Thug for the Syndicate, Scar Triad’s Patsy in Riverton.\n\nThese aren’t the only ways to play with your high concept, but they’ll get you started. But don’t stress out over it—the worst thing you can do is make it into too big of a deal. You’ll come up with four other aspects after this one—you don’t have to get it all nailed right now"
            },
        "Trouble":{
            "name":"Trouble","description":"In addition to a high concept, every character has some sort of trouble aspect that’s a part of his life and story. If your high concept is what or who your character is, your trouble is the answer to a simple question: what complicates your character’s existence?\n\nTrouble brings chaos into a character’s life and drives him into interesting situations. Trouble aspects are broken up into two types: personal struggles and problematic relationships.\n\nPersonal struggles are about your darker side or impulses that are hard to control. If it’s something that your character might be tempted to do or unconsciously do at the worst possible moment, it’s this sort of trouble. Examples: Anger Management Issues, Sucker for a Pretty Face,The Bottle Calls to Me.\nProblematic relationships are about people or organizations that make your life hard. It could be a group of people who hate your guts and want you to suffer, folks you work for that don’t make your job easy, or even your family or friends that too often get caught in the crossfire. Examples: Family Man, Debt to the Mob, The Scar Triad Wants Me Dead.\nYour trouble shouldn’t be easy to solve. If it was, your character would have done that already, and that’s not interesting. But nor should it paralyze the character completely. If the trouble is constantly interfering with the character’s day-to-day life, he’s going to spend all his time dealing with it rather than other matters at hand. You shouldn’t have to deal with your trouble at every turn—unless that’s the core of one particular adventure in the story (and even then, that’s just one adventure).\n\nTroubles also shouldn’t be directly related to your high concept—if you have Lead Detective, saying your trouble is The Criminal Underworld Hates Me is a dull trouble, because it is already assumed with your high concept. (Of course, you can turn that up a notch to make it personal, like Don Giovanni Personally Hates Me, to make it work.)\n\nBefore you go any further, talk with the GM about your character’s trouble. Make sure you’re both on the same page in terms of what it means. Both of you may want to find one way this aspect might be invoked or compelled to make sure you’re both seeing the same things—or to give each other ideas. The GM should come away from this conversation knowing what you want out of your trouble."
        },
        "First Adventure":{
            "name":"First Adventure","description":"The first phase is your character’s first true adventure—his first book, episode, case, movie, whatever—starring him.\n\nYou need to think up and write down the basic details of this story for the phase’s summary. The story doesn’t need to have a lot of detail—in fact, a pair of sentences works pretty well—because your fellow players will add in their own details to this past adventure in the next two phases (as you will to theirs).\n\nIf you find yourself stuck, look to your character’s high concept and trouble. Find a dilemma that has a chance of throwing those ideas into focus. What problem do you get roped into because of your high concept or trouble? How does the other aspect help or complicate your life?"
        },
            "Crossing Paths 1":
            {
                "name":"Crossing Paths 1","description":"Once everyone has their adventure written down (which is where the index card suggestion comes in really handy), you’re ready for phase two. You can pass to the left or right, or shuffle the stack and hand them out randomly (trading with the person to your right until you each have one that isn’t yours). However you decide to do it, every player should now be holding someone else’s adventure.\n\nYour character has a supporting role in the story you’re holding, which you get to come up with right now. Briefly discuss it with the player whose adventure it is and add a sentence or phrase to the summary to reflect your character’s supporting role. Supporting roles come in three forms: they complicate the adventure, solve a situation, or both.\n\nComplicating the adventure: Your character managed to make some part of the adventure uncertain (possibly because of an issue or trouble aspect). Of course, since that happened in the past, it is known that you got out of it all right (or mostly all right, as indicated by the aspect you take). When describing this, don’t worry about how the situation is resolved—leave that for someone else, or leave it open. Descriptions like “Landon starts trouble when Cynere needs him quiet” or “Zird gets captured by mysterious brigands” are enough to get some ideas flowing.\n\nSolving a situation: Your character somehow solves a complication that the main character in the adventure had to deal with, or your character aids the main character in the central conflict (which is an opportunity to involve your high concept aspect). When describing this, you don’t have to mention how the situation was created, just how your character takes care of it. Descriptions like “Cynere holds off foes to give Landon time to escape” or “Zird uses his arcane knowledge to ask the ghosts for information” are enough to give us an idea of what happens.\n\nComplicating and solving: Here, your character either solves one situation but creates another, or creates a situation but later solves a different one. Mash up the two ideas, using the word “later” in between them, such as: “Landon starts a fight with the Scar Triad while Zird is trying to lay low. Later, he helps Zird by fighting off undead while Zird’s casting a spell.”"
            },
            "Crossing Paths 2":{
                "name":"Crossing Paths 2","description":"Once everyone’s done with phase two, you’ll trade adventures with whatever method you chose before, so long as everyone has an adventure that isn’t theirs or the one they just contributed to. Then you’re ready for phase three, where you’ll contribute to this second adventure and determine your next aspect. Follow the directions from phase two."
            }
        }
    }

    static getFateAcceleratedAspects(){
        return {
                "High Concept":{"name":"High Concept","description":"First, decide on your character’s high concept. This is a single phrase or sentence that neatly sums up your character, saying who you are, what you do, what your “deal” is. When you think about your high concept, try to think of two things: how this aspect could help you, and how it might make things harder for you. Good high concept aspects do both.\n\nExamples: Feline Captain of Cirrus Skimmer; Suncaller of the Andral Desert; Chief Field Agent of IGEMA"
            },
            "Trouble":{
                "name":"Trouble","description":"Next, decide on the thing that always gets you into trouble. It could be a personal weakness, or a recurring enemy, or an important obligation—anything that makes your life complicated.\n\nExamples: Steel Assassins Want Me Dead; Cast Now, Ask Questions Later; Gotta Look Out for My Little Brother"
            },
            "Other Aspect 1":{
                "name":"Other Aspect 1","description":"Now compose another aspect. Think of something really important or interesting about your character. Are they the strongest person in their hometown? Do they carry a mighty sword known through history? Do they talk too much? Are they filthy rich?"
            },
            "Other Aspect 2":{
                "name":"Other Aspect 2","description":"This aspect might describe your character’s relationship with other player characters or with an NPC. Or, like the third aspect you composed above, it might describe something especially interesting about your character."
            },
            "Other Aspect 3":{"name":"Other Aspect 3","description":"This aspect might describe your character’s relationship with other player characters or with an NPC. Or, like the third aspect you composed above, it might describe something especially interesting about your character."
            }
        }
    }

    static getFateCondensedAspects(){
        return {
            "High Concept":{
                "name":"High Concept","description":"Your high concept is a broad description of the character, covering the vital bits. It’s how you would open your pitch for the character when telling a friend about them."
            },
            "Trouble":{
                "name":"Trouble","description":"Next is your character’s trouble—something that makes your character’s life more complicated. It could be a personal weakness, family entanglements, or other obligations. Pick something you’ll enjoy roleplaying!"
                },
            "Relationship":{
                "name":"Relationship","description":"Your relationship describes a connection with another  PC. They may already know one another, or have just met.\n\nGood relationship aspects should introduce or hint at conflict, or at least an imbalance that gives the relationship a little momentum. This doesn’t mean they are openly antagonistic, but they shouldn’t be all roses either.\n\nIf you wish, you can wait to write down relationship aspects until everyone has more or less completed their characters."},
            "Free Aspect 1":{
                "name":"Free Aspect 1","description":"You can make your character’s last two aspects anything you want—there are no restrictions beyond the obligation to fit the setting. Choose anything which you think will make your character more interesting, more fun to play, or better connected to the world they occupy."
            },
            "Free Aspect 2":{
                "name":"Free Aspect 2","description":"You can make your character’s last two aspects anything you want—there are no restrictions beyond the obligation to fit the setting. Choose anything which you think will make your character more interesting, more fun to play, or better connected to the world they occupy."
            }
        }
    }

    static getFateCoreTracks(){
        return {
            "Physical Stress":{
                "name":"Physical Stress","category":"Combat","description":"Represents all the various reasons why you just barely avoid taking the full force of an attack. Maybe you twist away from the blow just right, or it looks bad but is really just a flesh wound, or you exhaust yourself diving out of the way at the last second.","universal":true,"unique":true,"recovery_type":"Fleeting","aspect":"No","when_marked":"When harm is taken. Each box can absorb an amount of harm equal to its index (1 in the first box, 2 in the second box, etc.)","recovery_conditions":"When you have a few moments to rest, usually at the end of the scene.","boxes":2,"label":"escalating","harm_can_absorb":0,"linked_skills":[{"linked_skill":"Physique","rank":1,"boxes":1,"enables":false},{"linked_skill":"Physique","rank":3,"boxes":1,"enables":false}]
            },
                "Mental Stress":{
                    "name":"Mental Stress","category":"Combat","description":"Represents the way you avoided the worst effects of a mental attack. Maybe you just barely manage to ignore an insult, or clamped down on an instinctive emotional reaction.","universal":true,"unique":true,"recovery_type":"Fleeting","aspect":"No","when_marked":"When harm is taken. Each box can absorb an amount of harm equal to its index (1 in the first box, 2 in the second box, etc.)","recovery_conditions":"When you have a few moments to rest, usually at the end of the scene.","boxes":2,"label":"escalating","harm_can_absorb":0,"linked_skills":[{"linked_skill":"Will","rank":1,"boxes":1,"enables":false},{"linked_skill":"Will","rank":3,"boxes":1,"enables":false}]
                },
                "Mild Consequence":{
                    "name":"Mild Consequence","category":"Combat","description":"Mild consequences don’t require immediate medical attention. They hurt, and they may present an inconvenience, but they aren’t going to force you into a lot of bed rest. On the mental side, mild consequences express things like small social gaffes or changes in your surface emotions. Examples: Black Eye, Bruised Hand, Winded, Flustered, Cranky, Temporarily Blinded.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"When taking harm.","recovery_conditions":"Requires a recovery action at Fair (+2) difficulty or Great (+4) difficulty if you're treating it yourself. If you succeed at the recovery action, or someone else succeeds on a recovery action for you, you get to rename the consequence aspect to show that it’s in recovery. For example, Bruised Hand could become Taped Hand. This doesn’t free up the consequence slot, but it serves as an indicator that you’re recovering, and it changes the ways the aspect’s going to be used while it remains.\n\nYou only have to wait one whole scene after the recovery action, and then you can remove the aspect and clear the slot.","boxes":0,"harm_can_absorb":2
                },
                "Physical Mild Consequence":{
                    "name":"Physical Mild Consequence","category":"Combat","description":"This is an extra mild consequence that can only be used to absorb physical harm.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"See Mild Consequence.","recovery_conditions":"See Mild Consequence.","boxes":0,"harm_can_absorb":2,"linked_skills":[{"linked_skill":"Physique","rank":5,"boxes":0,"enables":true}]
                },
                "Mental Mild Consequence":{
                    "name":"Mental Mild Consequence","category":"Combat","description":"This is an extra mild consequence that can only be used to absorb mental harm.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"See Mild Consequence.","recovery_conditions":"See Mild Consequence.","boxes":0,"harm_can_absorb":2,"linked_skills":[{"linked_skill":"Will","rank":5,"boxes":0,"enables":true}]
                },
                "Moderate Consequence":{
                    "name":"Moderate Consequence","category":"Combat","description":"Moderate       consequences represent fairly serious impairments that require dedicated effort toward recovery (including medical attention). On the mental side, they express things like damage to your reputation or emotional problems that you can’t just shrug off with an apology and a good night’s sleep. Examples: Deep Cut, First Degree Burn, Exhausted, Drunk, Terrified.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"When taking harm.","recovery_conditions":"Requires a recovery action at Great (+4) difficulty or Fantastic (+6) difficulty if you're treating it yourself. If you succeed at the recovery action, or someone else succeeds on a recovery action for you, you get to rename the consequence aspect to show that it’s in recovery. For example, Deep Cut could become Stitched Cut. This doesn’t free up the consequence slot, but it serves as an indicator that you’re recovering, and it changes the ways the aspect’s going to be used while it remains.","boxes":0,"harm_can_absorb":4
                },
                "Severe Consequence":{
                    "name":"Severe Consequence","category":"Combat","description":"Severe consequences go straight to the emergency room (or whatever the equivalent is in your game)—they’re extremely nasty and prevent you from doing a lot of things, and will lay you out for a while. On the mental side, they express things like serious trauma or relationship-changing harm. Examples: Second-Degree Burn, Compound Fracture, Guts Hanging Out, Crippling Shame, Trauma-Induced Phobia.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"When taking harm.","recovery_conditions":"Requires a recovery action at Fantastic (+6) difficulty or Legendary (+8) difficulty if you're treating it yourself. If you succeed at the recovery action, or someone else succeeds on a recovery action for you, you get to rename the consequence aspect to show that it’s in recovery. For example, Deep Cut could become Stitched Cut. This doesn’t free up the consequence slot, but it serves as an indicator that you’re recovering, and it changes the ways the aspect’s going to be used while it remains.","boxes":0,"harm_can_absorb":6}
                }
    }

    static getFateAcceleratedTracks(){
        return {
            "Mild Consequence":{
                "name":"Mild Consequence","category":"Combat","description":"Mild consequences don’t require immediate medical attention. They hurt, and they may present an inconvenience, but they aren’t going to force you into a lot of bed rest. On the mental side, mild consequences express things like small social gaffes or changes in your surface emotions. Examples: Black Eye, Bruised Hand, Winded, Flustered, Cranky, Temporarily Blinded.","universal":true,"unique":true,"recovery_type":"Sticky","aspect":"Defined when marked","when_marked":"When taking harm.","recovery_conditions":"Clear it at the end of the scene, provided you get a chance to rest.","boxes":0,"harm_can_absorb":2
            },
            "Moderate Consequence":{
                "name":"Moderate Consequence","category":"Combat","description":"Moderate consequences represent fairly serious impairments that require dedicated effort toward recovery (including medical attention). On the mental side, they express things like damage to your reputation or emotional problems that you can’t just shrug off with an apology and a good night’s sleep. Examples: Deep Cut, First Degree Burn, Exhausted, Drunk, Terrified.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"When taking harm.","recovery_conditions":"Clear it at the end of the next session, provided it makes sense within the story.\n\nModerate consequences stick around for a while. Therefore, at some point you may want to change the name of the aspect to better fit what’s going on in the story. For instance, after you get some medical help, Painful Broken Leg might make more sense if you change it to Hobbling on Crutches","boxes":0,"harm_can_absorb":4
            },
            "Severe Consequence":{
                "name":"Severe Consequence","category":"Combat","description":"Severe consequences go straight to the emergency room (or whatever the equivalent is in your game)—they’re extremely nasty and prevent you from doing a lot of things, and will lay you out for a while. On the mental side, they express things like serious trauma or relationship-changing harm. Examples: Second-Degree Burn, Compound Fracture, Guts Hanging Out, Crippling Shame, Trauma-Induced Phobia.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"When taking harm.","recovery_conditions":"Clear it at the end of the scenario, provided it makes sense within the story.\n\nSevere consequences stick around for a while. Therefore, at some point you may want to change the name of the aspect to better fit what’s going on in the story. For instance, after you get some medical help, Painful Broken Leg might make more sense if you change it to Hobbling on Crutches","boxes":0,"harm_can_absorb":6
            },
            "Stress":{
                "name":"Stress","category":"Combat","description":"If you get hit and don’t want to be taken out, you can choose to take stress.\n\nStress represents you getting tired or annoyed, taking a superficial wound, or some other condition that goes away quickly.","universal":true,"unique":true,"recovery_type":"Fleeting","aspect":"No","when_marked":"When you take a hit and check a stress box, the box absorbs a number of shifts equal to its number: one shift for Box 1, two for Box 2, or three for Box 3. You can only mark one stress box for each hit.","recovery_conditions":"At the end of each scene, clear all of your stress boxes.","boxes":3,"label":"escalating","harm_can_absorb":0}
            };
    }

    static getFateCondensedTracks(){
        return {
                "Mild Consequence":{"name":"Mild Consequence","category":"Combat","description":"When you take a consequence to absorb a hit, write an aspect in an empty consequence slot that describes what harm befalls your character. Use the severity of the consequence as a guide: If you were bitten by star spawn, a mild consequence might be Nasty Bite.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"When taking harm.","recovery_conditions":"To start the recovery process, the person treating you will need to succeed at an overcome action with an appropriate skill.This overcome action faces difficulty equal to the severity of the consequence: Fair (+2) for a mild consequence. This difficulty increases by two when you’re trying to treat yourself (it’s easier to have someone else do that).\n\nIf you succeed on this roll, rewrite the consequence to indicate that it is healing. A Broken Arm may be rewritten as Arm in a Cast, for instance.\n\nSuccess here is only the first hurdle—it takes time to clear the consequence.\n\nMild consequences take one full scene after treatment to clear.","boxes":0,"harm_can_absorb":2
            },
            "Moderate Consequence":{
                "name":"Moderate Consequence","category":"Combat","description":"When you take a consequence to absorb a hit, write an aspect in an empty consequence slot that describes what harm befalls your character. Use the severity of the consequence as a guide: If you were bitten by star spawn, a moderate consequence might be a Bite that Won't Stop Bleeding.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"When taking harm.","recovery_conditions":"To start the recovery process, the person treating you will need to succeed at an overcome action with an appropriate skill. This overcome action faces difficulty equal to the severity of the consequence: Great (+4) for moderate. This difficulty increases by two when you’re trying to treat yourself (it’s easier to have someone else do that).\n\nIf you succeed on this roll, rewrite the consequence to indicate that it is healing. A Broken Arm may be rewritten as Arm in a Cast, for instance.\n\nSuccess here is only the first hurdle—it takes time to clear the consequence.\n\nModerate consequences take a full session after treatment to clear.","boxes":0,"harm_can_absorb":4
            },
            "Severe Consequence":{
                "name":"Severe Consequence","category":"Combat","description":"Severe consequences go straight to the emergency room (or whatever the equivalent is in your game)—they’re extremely nasty and prevent you from doing a lot of things, and will lay you out for a while. On the mental side, they express things like serious trauma or relationship-changing harm. Examples: Second-Degree Burn, Compound Fracture, Guts Hanging Out, Crippling Shame, Trauma-Induced Phobia.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"When taking harm.","recovery_conditions":"To start the recovery process, the person treating you will need to succeed at an overcome action with an appropriate skill. This overcome action faces difficulty equal to the severity of the consequence: Fantastic (+6) for severe. This difficulty increases by two when you’re trying to treat yourself (it’s easier to have someone else do that).\n\nIf you succeed on this roll, rewrite the consequence to indicate that it is healing. A Broken Arm may be rewritten as Arm in a Cast, for instance.\n\nSuccess here is only the first hurdle—it takes time to clear the consequence.\n\nSevere consequences clear when you reach a breakthrough.","boxes":0,"harm_can_absorb":6
            },
            "Physical Stress":{
                "name":"Physical Stress","category":"Combat","description":"Simply put, stress is plot armor. It’s a resource used to keep your character up and in the fight when their foes hit them. When you mark stress boxes to absorb a hit, you’re saying things like, “That just missed me,” or “Whoa, that knocked the wind out of me but I’m okay.” That said, it’s a limited resource—most characters only have three boxes for physical stress, though characters with high Physique have more.\n\nYou’ll find two stress tracks on your character sheet, one for physical harm and one for mental harm. When you take a hit, you can mark empty stress boxes of the appropriate type to absorb it and stay in the fight. Each stress box you mark absorbs one shift. You can mark multiple stress boxes if you need to.\n\nThe boxes are binary—either they’re empty and can be used or they’re full and can’t. That’s okay, though. You’ll clear the stress track as soon as you make it through the scene—provided the monsters don’t eat you first.","universal":true,"unique":true,"recovery_type":"Fleeting","aspect":"No","when_marked":"When taking physical harm. When you take a hit, you can mark empty stress boxes of the appropriate type to absorb it and stay in the fight. Each stress box you mark absorbs one shift. You can mark multiple stress boxes if you need to.","recovery_conditions":"Clears at the end of each scene.","boxes":3,"label":"none","harm_can_absorb":1,"linked_skills":[{"linked_skill":"Physique","rank":1,"boxes":1,"enables":false},{"linked_skill":"Physique","rank":3,"boxes":2,"enables":false}]
            },
            "Mental Stress":{
                "name":"Mental Stress","category":"Combat","description":"Simply put, stress is plot armor. It’s a resource used to keep your character up and in the fight when their foes hit them. When you mark stress boxes to absorb a hit, you’re saying things like, “That just missed me,” or “Whoa, that knocked the wind out of me but I’m okay.” That said, it’s a limited resource—most characters only have three boxes for mental stress, though characters with high Will have more.\n\nYou’ll find two stress tracks on your character sheet, one for physical harm and one for mental harm. When you take a hit, you can mark empty stress boxes of the appropriate type to absorb it and stay in the fight. Each stress box you mark absorbs one shift. You can mark multiple stress boxes if you need to.\n\nThe boxes are binary—either they’re empty and can be used or they’re full and can’t. That’s okay, though. You’ll clear the stress track as soon as you make it through the scene—provided the monsters don’t eat you first.","universal":true,"unique":true,"recovery_type":"Fleeting","aspect":"No","when_marked":"When taking mental harm. When you take a hit, you can mark empty stress boxes of the appropriate type to absorb it and stay in the fight. Each stress box you mark absorbs one shift. You can mark multiple stress boxes if you need to.","recovery_conditions":"Clears at the end of each scene.","boxes":3,"label":"none","harm_can_absorb":1,"linked_skills":[{"linked_skill":"Will","rank":1,"boxes":1,"enables":false},{"linked_skill":"Will","rank":3,"boxes":2,"enables":false}]
            },
            "Mild Physical Consequence":{
                "name":"Mild Physical Consequence","category":"Combat","description":"See Mild Consequence.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"This is a mild consequence that can only be marked to absorb physical harm.","recovery_conditions":"To start the recovery process, the person treating you will need to succeed at an overcome action with an appropriate skill.This overcome action faces difficulty equal to the severity of the consequence: Fair (+2) for a mild consequence. This difficulty increases by two when you’re trying to treat yourself (it’s easier to have someone else do that).\n\nIf you succeed on this roll, rewrite the consequence to indicate that it is healing. A Broken Arm may be rewritten as Arm in a Cast, for instance.\n\nSuccess here is only the first hurdle—it takes time to clear the consequence.\n\nMild consequences take one full scene after treatment to clear.","boxes":0,"harm_can_absorb":2,"linked_skills":[{"linked_skill":"Physique","rank":5,"boxes":0,"enables":true}]
            },
            "Mild Mental Consequence":{
                "name":"Mild Mental Consequence","category":"Combat","description":"See Mild Consequence.","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"This is a mild consequence that can only be marked to absorb mental harm.","recovery_conditions":"To start the recovery process, the person treating you will need to succeed at an overcome action with an appropriate skill.This overcome action faces difficulty equal to the severity of the consequence: Fair (+2) for a mild consequence. This difficulty increases by two when you’re trying to treat yourself (it’s easier to have someone else do that).\n\nIf you succeed on this roll, rewrite the consequence to indicate that it is healing.\n\nSuccess here is only the first hurdle—it takes time to clear the consequence.\n\nMild consequences take one full scene after treatment to clear.","boxes":0,"harm_can_absorb":2,"linked_skills":[{"linked_skill":"Will","rank":5,"boxes":0,"enables":true}]
            }
        }
    }

    static getDFAtracks() {
        return {"Stress":{"name":"Stress","category":"Combat","description":"For details see page 188 of Dresden Files Accelerated","universal":true,"unique":true,"recovery_type":"Fleeting","aspect":"No","when_marked":"","recovery_conditions":"","boxes":6,"harm_can_absorb":1,"paid":false,"label":"none"},"Doomed":{"name":"Doomed","category":"Combat","description":"For details see page 117 of Dresden Files Accelerated","universal":true,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":6,"paid":false,"label":"none"},"Indebted":{"name":"Indebted","category":"Other","description":"For details see page 117 of Dresden Files Accelerated","universal":true,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":5,"harm_can_absorb":0,"paid":false,"label":"none"},"In Peril":{"name":"In Peril","category":"Combat","description":"For details see page 117 of Dresden Files Accelerated","universal":true,"unique":true,"recovery_type":"Sticky","aspect":"Defined when marked","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":4,"paid":false,"label":"none"},"Knowledge":{"name":"Knowledge","category":"Clued-In Mortal","description":"For details see page 120 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":5,"harm_can_absorb":0,"paid":false,"label":"none"},"In Too Deep":{"name":"In Too Deep","category":"Clued-In Mortal","description":"For details see page 120 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Heat":{"name":"Heat","category":"Criminal","description":"For details see page 122 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":5,"harm_can_absorb":0,"paid":false,"label":"none"},"Police Powers":{"name":"Police Powers","category":"Law Enforcement","description":"For details see page 124 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"No","when_marked":"This condition is always marked unless you're suspended.","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Warned":{"name":"Warned","category":"Law Enforcement","description":"","universal":false,"unique":true,"recovery_type":"Fleeting","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Suspended":{"name":"Suspended","category":"Law Enforcement","description":"For details see page 124 of Dresden Files Accelerated. When this condition is marked, unmarked Police Powers.","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Followers":{"name":"Followers","category":"Leader of the People","description":"For details see page 126 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":5,"harm_can_absorb":0,"paid":false,"label":"none"},"Disfavored":{"name":"Disfavored","category":"Leader of the People","description":"For details see page 126 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Medical License":{"name":"Medical License","category":"Medic","description":"For details see page 128 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"No","when_marked":"Always marked unless your license is not active.","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"In Pursuit":{"name":"In Pursuit","category":"Monster Hunter","description":"For details see page 130 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"Defined when marked","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Wealthy":{"name":"Wealthy","category":"One-Percenter","description":"For details see page 132 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":5,"harm_can_absorb":0,"paid":false,"label":"none"},"Press Credentials":{"name":"Press Credentials","category":"Reporter","description":"","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"No","when_marked":"Always marked unless you're Off the Air","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Off The Air":{"name":"Off The Air","category":"Reporter","description":"For details see page 134 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"The Third Eye":{"name":"The Third Eye","category":"Magical Practitioner","description":"For details see page 139 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Combat Wizard":{"name":"Combat Wizard","category":"Magical Practitioner","description":"For details see page 141 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Fleeting","aspect":"No","when_marked":"","recovery_conditions":"","boxes":2,"harm_can_absorb":0,"paid":false,"label":"1"},"Called":{"name":"Called","category":"Changeling","description":"For details see page 143 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":5,"harm_can_absorb":0,"paid":false,"label":"none"},"Exhausted":{"name":"Exhausted","category":"Practitioner","description":"For details see page 136 of Dresden Files Accelerated (Focused Practitioner) or 139 (Magical Practitioner)","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Burned Out":{"name":"Burned Out","category":"Practitioner","description":"For details see page 136 of Dresden Files Accelerated (Focused Practitioner) or 139 (Magical Practitioner)","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Impaled by Cold Iron":{"name":"Impaled by Cold Iron","category":"Fae","description":"For details see page 144 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Wyld Power":{"name":"Wyld Power","category":"Erlking's Huntmaster","description":"For details see page 144 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Fleeting","aspect":"No","when_marked":"","recovery_conditions":"","boxes":5,"harm_can_absorb":0,"paid":false,"label":"none"},"Erlking's Disfavor":{"name":"Erlking's Disfavor","category":"Erlking's Huntmaster","description":"See Disfavored, Dresden Files Accelerated page 144","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Summer Power":{"name":"Summer Power","category":"Knight of a Faerie Court","description":"For details see page 146 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Fleeting","aspect":"No","when_marked":"","recovery_conditions":"","boxes":5,"harm_can_absorb":0,"paid":false,"label":"none"},"Winter Power":{"name":"Winter Power","category":"Knight of a Faerie Court","description":"For details see page 146 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Fleeting","aspect":"No","when_marked":"","recovery_conditions":"","boxes":5,"harm_can_absorb":0,"paid":false,"label":"none"},"Summer's Disfavor":{"name":"Summer's Disfavor","category":"Knight of a Faerie Court","description":"For details see Disfavored, page 146 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Winter's Disfavor":{"name":"Winter's Disfavor","category":"Knight of a Faerie Court","description":"For details see Disfavored, page 146 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"On a Mission from God":{"name":"On a Mission from God","category":"Knight of the Cross","description":"For details see page 148 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Crisis of Faith":{"name":"Crisis of Faith","category":"Knight of the Cross","description":"For details see page 148 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Hunger for Blood":{"name":"Hunger for Blood","category":"Vampire","description":"See Hungry on page 151 for Red Court Virgins, or Hungry on page 164 for full Red Court Vampires","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":5,"harm_can_absorb":0,"paid":false,"label":"none"},"Hunger for Emotion":{"name":"Hunger for Emotion","category":"Vampire","description":"See Hungry on page 156 for White Court Virgins or Hungry on page 166 for full White Court Vampires","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":5,"harm_can_absorb":0,"paid":false,"label":"none"},"Hurt":{"name":"Hurt","category":"Combat","description":"Monster Hunter track. For details see page 130 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":4,"paid":false,"label":"none"},"Injured":{"name":"Injured","category":"Combat","description":"Valkyrie track - see page 152 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":6,"paid":false,"label":"none"},"Wounded":{"name":"Wounded","category":"Combat","description":"Monster Hunter track, for details see page 130 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":4,"paid":false,"label":"none"},"Physical Transformation":{"name":"Physical Transformation","category":"Werecreature","description":"For details see page 154 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"Defined when marked","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Vampire Heritage":{"name":"Vampire Heritage","category":"Vampire","description":"White Court track. See page Dresden Files Accelerated 156 for White Court Virgins and page 166 for full White Court Vampires.","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"No","when_marked":"Always marked.","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Burned by True Emotion":{"name":"Burned by True Emotion","category":"Vampire","description":"White Court track. For details see page 166 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Truth Bound":{"name":"Truth Bound","category":"Fae","description":"True Fae track. For details see page 158 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"No","when_marked":"Always marked.","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Feroburned":{"name":"Feroburned","category":"Fae","description":"For details see page 158 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Oathbreaker":{"name":"Oathbreaker","category":"Fae","description":"True Fae track. For details see page 158 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Summer Courtier":{"name":"Summer Courtier","category":"Fae","description":"True Fae track. For details see page 160 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"No","when_marked":"Always Marked","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Winter Courtier":{"name":"Winter Courtier","category":"Fae","description":"True Fae track. For details see page 160 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Lasting","aspect":"No","when_marked":"Always Marked","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Sunburned":{"name":"Sunburned","category":"Vampire","description":"Red Court Vampire track. See page 164 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"},"Saliva Addict":{"name":"Saliva Addict","category":"Vampire","description":"Red Court track. See page 164 of Dresden Files Accelerated","universal":false,"unique":true,"recovery_type":"Sticky","aspect":"No","when_marked":"","recovery_conditions":"","boxes":1,"harm_can_absorb":0,"paid":false,"label":"none"}};
    }

    static getDFATrackCategories () {
        return {"Combat":"Combat","Other":"Other","Clued-In Mortal":"Clued-In Mortal","Criminal":"Criminal","Law Enforcement":"Law Enforcement","Leader of the People":"Leader of the People","Medic":"Medic","Monster Hunter":"Monster Hunter","One-Percenter":"One-Percenter","Reporter":"Reporter","Magical Practitioner":"Magical Practitioner","Changeling":"Changeling","Practitioner":"Practitioner","Fae":"Fae","Erlking's Huntmaster":"Erlking's Huntmaster","Knight of a Faerie Court":"Knight of a Faerie Court","Knight of the Cross":"Knight of the Cross","Vampire":"Vampire","Werecreature":"Werecreature"};
    }

    static getDFASkills() {
        return {"Flair":{"name":"Flair","description":"For details see page 100 of Dresden Files Accelerated","overcome":"","caa":"","attack":"","defend":"","pc":true},"Focus":{"name":"Focus","description":"For details see page 100 of Dresden Files Accelerated","overcome":"","caa":"","attack":"","defend":"","pc":true},"Force":{"name":"Force","description":"For details see page 100 of Dresden Files Accelerated","overcome":"","caa":"","attack":"","defend":"","pc":true},"Guile":{"name":"Guile","description":"For details see page 100 of Dresden Files Accelerated","overcome":"","caa":"","attack":"","defend":"","pc":true},"Haste":{"name":"Haste","description":"For details see page 100 of Dresden Files Accelerated","overcome":"","caa":"","attack":"","defend":"","pc":true},"Intellect":{"name":"Intellect","description":"For details see page 100 of Dresden Files Accelerated","overcome":"","caa":"","attack":"","defend":"","pc":true}}
    }

    static getDFAAspects() {
        return {"High Concept":{"name":"High Concept","description":"For details see page 92 of Dresden Files Accelerated"},"Trouble":{"name":"Trouble","description":"For details see page 93 of Dresden Files Accelerated"},"Third Aspect":{"name":"Third Aspect","description":"For details see page 93 of Dresden Files Accelerated"},"Fourth Aspect":{"name":"Fourth Aspect","description":"For details see page 96 of Dresden Files Accelerated"},"Fifth Aspect":{"name":"Fifth Aspect","description":"For details see page 96 of Dresden Files Accelerated"}}
    }

    static awaitOKDialog(prompt, content, width, height){
        if (width === undefined){
            width = "500";
        }
        if (height === undefined){
            height = "auto";
        }
        
        return new Promise(resolve => {
            new Dialog({
                title: prompt,
                content: content,
                buttons: {
                    ok: {
                        label: "OK",
                        callback: () => {
                            resolve("OK");
                        }
                    }
                },
                default:"ok",
                close: ()=> {resolve("OK)")},
            },
            {
                width:width,
                height:height,
            }).render(true);
        })
    }

    static awaitYesNoDialog(prompt, content){
        return new Promise(resolve => {
            new Dialog({
                title: prompt,
                content: content,
                buttons: {
                    yes: {
                        label: "Yes",
                        callback: () => {
                            resolve("yes");
                        }
                    },
                    no: {
                        label: "No",
                        callback: () => {
                            resolve("no");
                        }
                    }
                },
                default:"no",
                close: ()=> {resolve("no")},
            }).render(true);
        })
    }

    static async confirmDeletion(){
        let confirm = game.settings.get("ModularFate","confirmDeletion");
        if (!confirm){
            return true;
        } else {
            let del = await ModularFateConstants.awaitYesNoDialog("Are you sure you want to delete this?");
            if (del=="yes"){
                return true;
            } else {
                return false;
            }
        }
    }

    static getInput(prompt){        
        return new Promise(resolve => {
            new Dialog({
                title: prompt,
                content: '<div align="center"><input id="dialog_box" style="width:375px" autofocus></input></div>',
                buttons: {
                    ok: {
                        label: "OK",
                        callback: () => {
                            resolve(document.getElementById("dialog_box").value)
                        }
                    }
                },
                default:"ok"
            }).render(true);
        });
    }

    static updateText(prompt, textToUpdate){
    return new Promise(resolve => {
        new Dialog({
            title: prompt, 
            content: `<div style="background-color:white; color:black;"><textarea rows="10" style="font-family:Montserrat; width:382px; background-color:white; border:1px solid lightsteelblue; color:black;" id="get_text_box">${textToUpdate}</textarea></div>`,
            buttons: {
                ok: {
                    label: "Save",
                    callback: () => {
                        resolve(document.getElementById("get_text_box").value)
                    }
                }
            },
        }).render(true);
    });
    }

    static sortByKey(json_object){
        let ordered_object = {}
        let unordered_object = json_object;
        Object.keys(unordered_object).sort().forEach(function(key) {ordered_object[key] = unordered_object[key];})
        return ordered_object;
    }

    static sortByRank(json_object){
        //Sort a JSON object by rank.
        let toSort = []
        for (let x in json_object){
            toSort.push(json_object[x])
        }
        this.sort_rank(toSort);
        return toSort;
    }
    //Sort an array of JSON objects by object.name
    static async sort_name(array){
        array.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);//This actually properly sorts by name; case sensitive.
    }
    //Sort an array of JSON objects by object.rank
    static async sort_rank(array){
        array.sort((a, b) => parseInt(b.rank) - parseInt(a.rank));
    }

    //Sort an array of JSON objects by a key
    static async sort_key(array, key){
        array.sort((a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0);//This actually properly sorts by name; case sensitive.
    }

    static moveKey (object, key, numPlaces){
        //If numPlaces is positive, we move down, if negative, up. 

        let current_object = object;
        let end_object = {};
        let key_to_move = key;
        let keys = Object.keys(current_object);

        let currentIndex = keys.indexOf(key);
        let newIndex = currentIndex + numPlaces;
        if (newIndex <0){
            newIndex = 0;
        }
        if (newIndex > keys.length){
            newIndex = keys.length;
        }

        let tempKey = keys.splice(currentIndex,1);
        keys.splice(newIndex, 0, tempKey[0]);

        //Now we iterate through the array and copy the keys to the new object, before assigning the old object to the new object to finish the job.

        keys.forEach(key => {
            end_object[key] = current_object[key]
        })
        
        return end_object;
    }

    static exportSettings (){
        //This function returns a text string in JSON notation containing all of the game's settings for backup or import into another world.
        let output = {};
        output.stunts = game.settings.get("ModularFate","stunts");
        output.skills = game.settings.get("ModularFate","skills");
        output.skillTotal = game.settings.get("ModularFate", "skillTotal");
        output.tracks = game.settings.get("ModularFate","tracks");
        output.aspects = game.settings.get("ModularFate","aspects");
        output.freeStunts = game.settings.get("ModularFate","freeStunts");
        output.refreshTotal = game.settings.get("ModularFate","refreshTotal");
        return JSON.stringify(output);
    }

    static async getSettings (){
        return new Promise(resolve => {
            new Dialog({
                title: "Paste data here; WILL REPLACE ALL WORLD SETTINGS",
                content: `<div style="background-color:white; color:black;"><textarea rows="20" style="font-family:Montserrat; width:382px; background-color:white; border:1px solid lightsteelblue; color:black;" id="import_settings"></textarea></div>`,
                buttons: {
                    ok: {
                        label: "Save",
                        callback: () => {
                            resolve (document.getElementById("import_settings").value);
                        }
                    }
                },
            }).render(true)
        });
    }

    static async importSettings (input){
        //This function parses a text string in JSON notation containing all of the game's settings and writes those settings to System.settings.
        input = JSON.parse(input);
        await game.settings.set("ModularFate","stunts",input.stunts);
        await game.settings.set("ModularFate","skills",input.skills);
        await game.settings.set("ModularFate","skillTotal",input.skillTotal);
        await game.settings.set("ModularFate","tracks",input.tracks);
        await game.settings.set("ModularFate","aspects",input.aspects);
        await game.settings.set("ModularFate","freeStunts",input.freeStunts);
        await game.settings.set("ModularFate","refreshTotal",input.refreshTotal);
    }
} 
