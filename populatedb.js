#! /usr/bin/env node

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Weapon = require("./models/weapon");
const Skin = require("./models/skin");
const SkinInstance = require("./models/skin_instance");

const weapons = [];
const skins = [];
const skininstances = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createWeapons();
  await createSkins();
  await createSkinInstances();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function weaponCreate(index, name) {
  const weapon = new Weapon({ name: name });
  await weapon.save();
  weapons[index] = weapon;
  console.log(`Added weapon: ${name}`);
}

async function skinCreate(index, name, weapon) {
  const skindetail = {
    name: name,
    weapon: weapon,
  };
  const skin = new Skin(skindetail);
  await skin.save();
  skins[index] = skin;
  console.log(`Added skin: ${name}`);
}

async function skinInstanceCreate(index, skin, float, price) {
  const skininstancedetail = {
    skin: skin,
    float: float,
    price: price,
  };
  
  let wear = "";
  if (float >= 0 && float < 0.07) {
    wear = "Factory New";
  } else if (float >= 0.07 && float < 0.15) {
    wear = "Minimal Wear";
  } else if (float >= 0.15 && float < 0.37) {
    wear = "Field-Tested";
  } else if (float >= 0.37 && float < 0.45) {
    wear = "Well-Worn";
  } else if (float >= 0.45 && float <= 1) {
    wear = "Battle-Scarred";
  }
  skininstancedetail.wear_condition = wear;

  const skininstance = new SkinInstance(skininstancedetail);
  await skininstance.save();
  skininstances[index] = skininstance;
  console.log(`Added skininstance: ${skin} - ${wear}`);
}

async function createWeapons() {
  console.log("Adding weapons");
  await Promise.all([
    weaponCreate(0, "AWP"),
    weaponCreate(1, "M4A1-S"),
    weaponCreate(2, "AK-47"),
    weaponCreate(3, "Desert Eagle"),
    weaponCreate(4, "USP-S"),
    weaponCreate(5, "Glock-18"),
    weaponCreate(6, "P2000"),
    weaponCreate(7, "FAMAS"),
    weaponCreate(8, "Five-Seven"),
    weaponCreate(9, "Tec-9"),
    weaponCreate(10, "P250"),
    weaponCreate(11, "CZ75-Auto"),
    weaponCreate(12, "R8 Revolver"),
    weaponCreate(13, "Nova Shotgun"),
    weaponCreate(14, "XM1014"),
    weaponCreate(15, "MAG-7"),
    weaponCreate(16, "Sawed-Off"),
    weaponCreate(17, "PP-Bizon"),
    weaponCreate(18, "UMP-45"),
    weaponCreate(19, "P90"),
  ]);
}

async function createSkins() {
  console.log("Adding Skins");
  await Promise.all([
    // AK
    skinCreate(0, "Inheritance", weapons[2]),
    skinCreate(1, "Assimov", weapons[2]),
    skinCreate(2, "Redline", weapons[2]),
    skinCreate(3, "Case Hardened", weapons[2]),
    // AWP
    skinCreate(4, "Dragon Lore", weapons[0]),
    skinCreate(5, "Containment Breach", weapons[0]),
    skinCreate(6, "Fade", weapons[0]),
    skinCreate(7, "Desert Hydra", weapons[0]),
    // USP-S
    skinCreate(8, "Kill Confirmed", weapons[4]),
    skinCreate(9, "Printstream", weapons[4]),
    skinCreate(10, "Black Lotus", weapons[4]),
    // Deagle
    skinCreate(11, "Printstream", weapons[3]),
    skinCreate(12, "Code Red", weapons[3]),
    skinCreate(13, "Crimson Web", weapons[3]),
    skinCreate(14, "Golden Koi", weapons[3]),
    // M4A1-S
    skinCreate(15, "Black Lotus", weapons[1]),
    skinCreate(16, "Cyrex", weapons[1]),
    skinCreate(17, "Knight", weapons[1]),
    skinCreate(18, "Blood Tiger", weapons[1]),
  ]);
}

async function createSkinInstances() {
  console.log("Adding skininstances");
  await Promise.all([
    // AK-47 Skins
    skinInstanceCreate(0, skins[0], getRandomFloat(0, 0.07), 1000), // Factory New Inheritance
    skinInstanceCreate(1, skins[1], getRandomFloat(0.07, 0.15), 800), // Minimal Wear Assimov
    skinInstanceCreate(2, skins[2], getRandomFloat(0.15, 0.37), 500), // Field-Tested Redline
    skinInstanceCreate(3, skins[3], getRandomFloat(0.37, 0.45), 300), // Well-Worn Case Hardened
    // AWP Skins
    skinInstanceCreate(4, skins[4], getRandomFloat(0.45, 1), 5000), // Battle-Scarred Dragon Lore
    skinInstanceCreate(5, skins[5], getRandomFloat(0, 0.07), 1200), // Factory New Containment Breach
    skinInstanceCreate(6, skins[6], getRandomFloat(0.07, 0.15), 2000), // Minimal Wear Fade
    skinInstanceCreate(7, skins[7], getRandomFloat(0.15, 0.37), 800), // Field-Tested Desert Hydra
    // USP-S Skins
    skinInstanceCreate(8, skins[8], getRandomFloat(0.37, 0.45), 400), // Well-Worn Kill Confirmed
    skinInstanceCreate(9, skins[9], getRandomFloat(0.45, 1), 200), // Battle-Scarred Printstream
    skinInstanceCreate(10, skins[10], getRandomFloat(0, 0.07), 600), // Factory New Black Lotus
    // Deagle Skins
    skinInstanceCreate(11, skins[11], getRandomFloat(0.07, 0.15), 300), // Minimal Wear Printstream
    skinInstanceCreate(12, skins[12], getRandomFloat(0.15, 0.37), 400), // Field-Tested Code Red
    skinInstanceCreate(13, skins[13], getRandomFloat(0.37, 0.45), 800), // Well-Worn Crimson Web
    skinInstanceCreate(14, skins[14], getRandomFloat(0.45, 1), 1500), // Battle-Scarred Golden Koi
    // M4A1-S Skins
    skinInstanceCreate(15, skins[15], getRandomFloat(0, 0.07), 700), // Factory New Black Lotus
    skinInstanceCreate(16, skins[16], getRandomFloat(0.07, 0.15), 500), // Minimal Wear Cyrex
    skinInstanceCreate(17, skins[17], getRandomFloat(0.15, 0.37), 900), // Field-Tested Knight
    skinInstanceCreate(18, skins[18], getRandomFloat(0.37, 0.45), 300), // Well-Worn Blood Tiger
  ]);
}

function getRandomFloat(min, max) {
  const randomFloat = Math.random() * (max - min) + min;
  return parseFloat(randomFloat.toFixed(9));
}
