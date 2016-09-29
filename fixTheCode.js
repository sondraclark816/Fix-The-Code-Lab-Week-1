// DO NOT CHANGE THIS SECTION
var adventuringParty = {
    wizard: {
        name: "Gandalf",
        class: "Wizard",
        health: 43,
        mana: 248,
        weapons: [
            { name: "Staff", damage: 5 },
            { name: "Dagger", damage: 1}
        ]
    },
    warrior: {
        name: "Conan",
        class: "Warrior",
        health: 206,
        mana: 0,
        weapons: [
            { name: "Axe", damage: 50 },
            { name: "Bow", arrow: [
                { name: "+1 Arrows of Punishing", damage: 40, qty: 3},
                { name: "Wooden Arrows", damage: 10, qty: 4}
            ]}
        ]
    }
}

// This function lists all characters in the party
var wizard = adventuringParty.wizard;
var warrior = adventuringParty.warrior;
function listCharacters(adventuringParty) {
    console.log("Characters:");
    var i;
    for (i in adventuringParty) {
        console.log(" * " + adventuringParty[i].name);
    }
}




// This function should list all weapons for the character
function listWeapons(character) {
    console.log("Listing weapons for " + character.name + ":");
    for(i in character.weapons) {
        var weapon = character.weapons[i];
        console.log(" * " + weapon.name);
    }
}



// This function should attack with the specified weapon
// It uses the weapon damage from the object to determine the maximum damage of this weapon
function weaponAttack(character, weaponName) {
    console.log(character.name + " attacks with his " + weaponName);
    for(i in character.weapons) {
        var weapon = character.weapons[i];
         if(weapon.name.toUpperCase() == weaponName.toUpperCase()) {
         var maxDamage = weapon.damage;
        }
    }
    console.log("He hits for " + Math.round(Math.random()*maxDamage) + " damage");
}





// Run the functions
listCharacters(adventuringParty);
listWeapons(wizard);
listWeapons(warrior);
weaponAttack(warrior, "Axe");
weaponAttack(wizard, "Staff");


/*
EXAMPLE OUTPUT:


Characters:                                                                                                                                                                                                  
 * Gandalf                                                                                                                                                                                                   
 * Conan                                                                                                                                                                                                     
Listing weapons for Gandalf:                                                                                                                                                                                 
 * Staff                                                                                                                                                                                                     
 * Dagger                                                                                                                                                                                                    
Listing weapons for Conan:                                                                                                                                                                                   
 * Axe                                                                                                                                                                                                       
 * Bow                                                                                                                                                                                                       
Conan attacks with his axe                                                                                                                                                                                   
He hits for 17 damage                                                                                                                                                                                        
Gandalf attacks with his STAFF                                                                                                                                                                               
He hits for 3 damage         
*/