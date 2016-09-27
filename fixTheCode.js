// You will use this Object for the answers
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

// MAKE CHANGES AFTER THIS

 var wizard = adventuringParty.wizard.name;
 var warrior = adventuringParty.warrior.name;
 var Staff = adventuringParty.wizard.weapons.name;
 var Axe = adventuringParty.warrior.weapons.name;


 

// This function lists all characters in the party
function listCharacters(adventuringParty) {
    console.log("Characters:");
    for(wizard in adventuringParty) {
        console.log(" * " + adventuringParty[wizard].name);
    }
  
    
}


// This function should list all weapons for the character
function listWeapons(wizard) {
    console.log("Listing weapons for " + adventuringParty.wizard.name + ":");
    for(i in adventuringParty ) {
        var weapon = adventuringParty.wizard.weapons.name;
        console.log(" * " + adventuringParty.wizard[weapons].name);
    }
}

function weaponsList(warrior) {
    console.log("Listing weapons for " + adventuringParty.warrior.name + ":");
    for(i in warrior.weapons) {
        var weapons = adventuringParty.warrior.weapons[i];
        console.log(" * " + adventuringParty.wizard.weapons);
    }
}

// This function should attack with the specified weapon
// It uses the weapon damage from the object to determine the maximum damage of this weapon
function weaponAttack(wizard, Staff) {
    console.log(adventuringParty.wizard.name + " attacks with his " + adventuringParty.wizard.weapons[0].name);
    var maxDamage = adventuringParty.wizard.weapons[0].damage;
    for(i in wizard.weapons) {
        var weapon = adventuringParty.wizard.weapons;
        if(weapon.name == Staff.toUpperCase()) {
           
        }
    }
    console.log("He hits for " + Math.round( Math.random() * maxDamage ) + " damage");
}

function weapon(warrior, Axe) {
    console.log(adventuringParty.warrior.name + " attacks with his " + adventuringParty.warrior.weapons[0].name);
    var maxDamage = adventuringParty.warrior.weapons[0].damage;
    for(i in warrior.weapons) {
        var weapon = adventuringParty.warrior.weapons[i];
        if(weapon.name == Axe.toUpperCase()) {
         
        }
    }
    console.log("He hits for " + Math.round(Math.random() * maxDamage ) + " damage");
}

// Run the functions
listCharacters(adventuringParty);
listWeapons(wizard);
weaponsList(warrior);
weaponAttack(wizard, Staff);
weapon(warrior, Axe);





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