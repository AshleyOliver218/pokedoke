let pokemonArray=[
    {name:'Mewtwo', type:['Psychic','none'], id:150, randomFact: "Mewtwo is a genetically modified Pokemon created with Mew's DNA. Its only purpose is to battle"},
    {name:'Rayquaza', type:[ 'Dragon','Flying' ], id:384, randomFact:"Rayquaza is often called the 'Sk High Pokemon' due to its habitat being high in the O-Zone Layer!"},
    {name:'Lugia', type: [ 'Psychic','Flying' ], id:249, randomFact:"Lugia is know as the guardian of the seas. It sleeps in a deep ocean trench and only comes up to calm storms!"},
    {name:'Darkrai', type:['Dark','none'], id:491, randomFact: 'Darkrai pokemon can be found on the Newmoon Island, or Clamberclaw Cliffs'},
    {name:'Dialga', type:['Steel','none'], id:483, randomFact: 'The average Dialga weighs 1505.8 lbs!'},
    {name:'Ho-Oh', type:[ 'Fire','Flying' ], id:250, randomFact: "Leagend has it, the Ho-Oh's body glows seven different colors as it flies!"},
    {name:'Groudon', type:['Ground','none'], id:383, randomFact:'Groudon and Kyogre fought in many epic battles, both in the pursuit of gaining the power of nature.'},
    {name:'Genesect', type:[ 'Bug','Steel' ], id:649, randomFact: "Genesect Pokemon have been around for 300 million years!"},
    {name:'Celebi', type:[ 'Psychic','Grass' ], id:251, randomFact:"Celebi can travel through time to find beautiful forrests to make it's home"},
    {name:'Gengar', type:[ 'Ghost', 'Poison' ], id:94, randomFact:"This pokemon will hide in the shaddows of it's foes, waiting for the perfect time to stike!"},
    {name:'Zekrom', type:[ 'Dragon','Electric' ], id:644, randomFact:"Zekrom has a generator in its tail that generate electricity to use against those who want to destroy the world"},
    {name:'Heatran', type:[ 'Fire', 'Steel' ], id:485, randomFact:"Heatran has boiling blood because of it's dwelling place deep in the earth's crust inside volcanic caves"},
    {name:'Zapdos', type:[ 'Electric','Flying' ], id:145, randomFact:"The legendary bird can flap it's wings and  and cause summer lightning storms"},
    {name:'Chansey', type:['Normal','none'], id:113, randomFact:"All Chansey's are female!"},
    {name:'Jirachi', type:[ 'Steel', 'Flying' ], id:385, randomFact:"Jirachi can sense danger and defend it's self, all while sleeping!"},
    {name:'Feebas', type:['Water','none'], id:349, randomFact:"These fish pokemon can live in any body of water no matter how polluted. Feebas can even thrive in very little water!"},
    {name:'Hydreigon', type:[ 'Dark', 'Dragon' ], id:635, randomFact:"This type of pokemon has six wings, three heads and attacks anything in it's path that moves!" },
    {name:'Arceus', type:['Normal','none'], id:493, randomFact:"It is said that this pokemon was born in a empty void where it then decided to shape the world. Hisuian mythology stated that Arceus is the creator of all things"},
    {name:'Kyogre', type:['Water','none'], id:382, randomFact:"This pokemon has massive power and is the arch-nemesis of Groudon!"},
    {name:'Victini', type:[ 'Psychic', "Fire" ], id:494, randomFact:"Having this pokemon is said to ensure victory of any battle reguardess of encounter type and trainer skill!"},
    {name:'Landorus', type:[ 'Ground','Flying' ], id:645, randomFact:"Landorus is called the 'Abundance Pokemon' because the lands that are visited by them are blessed with bountiful crops and increased soil nutrients"},
    {name:'Cresselia', type:'Psychic', id:488, randomFact:"Holding one of her feathers  while sleeping, is known to gift dreamers with beautiful and joyful dreams!"},
    {name:'Lucario', type:[ 'Fighting', 'Steel' ], id:448, randomFact:"Lucario can sense the aura of all things, allowing it to read the thoughts and movements of others!"},
    {name:'Dragonite', type:[ 'Dragon', 'Flying' ], id:149, randomFact:"Dragonite can circumnavigate the globe in just 16 hours!"},
    {name:'Gyarados', type:[ 'Water', 'Flying' ], id:130, randomFact:"Gyarados can shoot a hyper beam from its mouth that incinerates every thing it touches"},
    {name:'JigglyPuff', type: [ 'Normal', 'Fairy' ], id:39, randomFact:" The songs that JigglyPuff sings will sound vastly different depending on what region they are from!"},
    {name:'Cosmoem', type:['Psychic','none'], id:790, randomFact:"The golden shell that surrounds Cosmoem is harder than any other material known to man!"},
    {name:'Tornadus', type:['Flying','none'], id:641, randomFact:"Tornadus can move across the sky at 200mph!"},
    {name:'Necrozma', type:['Psychic','none'], id:800, randomFact:"Necrozma has a crystal like armor that darkens from impurities as it sleeps underground. It sleeps for so long its body is usually black when it emerges from below!"},
    {name:'Kyurem', type:[ 'Dragon', 'Ice' ], id:646, randomFact: "The extreme cold of this pokemon's body keeps it from being able to harness it's emense power"},
    {name:'Tapu Koko', type:[ 'Electric','Fairy' ], id:785, randomFact:"Tapu Koko is the guardian diety of Melemele"},
    {name:'Regieleki', type:['Electric','none'], id:894, randomFact:"This pokemon is a cluster of electrical energy created by the only organ Regieleki has!"}]


    function featuredPokemon(){
        let random = pokemonArray[(Math.floor(Math.random()*     
         (pokemonArray.length)))]
      console.log(random)
    return random
      
    }
// featuredPokemon(pokemonArray)
export default  featuredPokemon