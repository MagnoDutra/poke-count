import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useState } from "react";

const allCards = [
  {
    id: "a1001",
    cardName: "bulbasaur",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1002",
    cardName: "weedle",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1003",
    cardName: "kakuna",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1004",
    cardName: "venonat",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1005",
    cardName: "scyther",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1006",
    cardName: "cottonee",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1007",
    cardName: "petilil",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1008",
    cardName: "ponyta",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1009",
    cardName: "heatmor",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1010",
    cardName: "salandit",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1011",
    cardName: "salazzle",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1012",
    cardName: "sizzlipede",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1013",
    cardName: "psyduck",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1014",
    cardName: "tentacool",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1015",
    cardName: "shellder",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1016",
    cardName: "krabby",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1017",
    cardName: "snom",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1018",
    cardName: "blitzle",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1019",
    cardName: "tynamo",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1020",
    cardName: "helioptile",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1021",
    cardName: "heliolisk",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1022",
    cardName: "slowpoke",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1023",
    cardName: "gastly",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1024",
    cardName: "jynx",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1025",
    cardName: "ralts",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1026",
    cardName: "woobat",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1027",
    cardName: "swoobat",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1028",
    cardName: "golett",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1029",
    cardName: "sandshrew",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1030",
    cardName: "cubone",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1031",
    cardName: "hitmonlee",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1032",
    cardName: "rhyhorn",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1033",
    cardName: "clobbopus",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1034",
    cardName: "ekans",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1035",
    cardName: "zubat",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1036",
    cardName: "grimer",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1037",
    cardName: "koffing",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1038",
    cardName: "pawniard",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1039",
    cardName: "dratini",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1040",
    cardName: "pidgey",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1041",
    cardName: "pidgeotto",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1042",
    cardName: "rattata",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1043",
    cardName: "raticate",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1044",
    cardName: "farfetchd",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1045",
    cardName: "doduo",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1046",
    cardName: "eevee",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1047",
    cardName: "minccino",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1048",
    cardName: "wooloo",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1049",
    cardName: "dubwool",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1050",
    cardName: "old-amber",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1051",
    cardName: "charizard-ex",
    pack: ["mewtwo"],
    rarity: "crown", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00013,
    percent5: 0.00053,
    acquired: false,
  },
  {
    id: "a1052",
    cardName: "pikachu-ex",
    pack: ["mewtwo"],
    rarity: "crown", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00013,
    percent5: 0.00053,
    acquired: false,
  },
  {
    id: "a1053",
    cardName: "mewtwo-ex",
    pack: ["mewtwo"],
    rarity: "crown", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00013,
    percent5: 0.00053,
    acquired: false,
  },
  {
    id: "a1054",
    cardName: "mewtwo-ex",
    pack: ["mewtwo"],
    rarity: "immersive", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00222,
    percent5: 0.00888,
    acquired: false,
  },
  {
    id: "a1055",
    cardName: "venusaur-ex",
    pack: ["mewtwo"],
    rarity: "super", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00055,
    percent5: 0.00222,
    acquired: false,
  },
  {
    id: "a1056",
    cardName: "articuno-ex",
    pack: ["mewtwo"],
    rarity: "super", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00055,
    percent5: 0.00222,
    acquired: false,
  },
  {
    id: "a1057",
    cardName: "gengar-ex",
    pack: ["mewtwo"],
    rarity: "super", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00055,
    percent5: 0.00222,
    acquired: false,
  },
  {
    id: "a1058",
    cardName: "mewtwo-ex",
    pack: ["mewtwo"],
    rarity: "super", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00055,
    percent5: 0.00222,
    acquired: false,
  },
  {
    id: "a1059",
    cardName: "marowak-ex",
    pack: ["mewtwo"],
    rarity: "super", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00055,
    percent5: 0.00222,
    acquired: false,
  },
  {
    id: "a1060",
    cardName: "koga",
    pack: ["mewtwo"],
    rarity: "super", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00055,
    percent5: 0.00222,
    acquired: false,
  },
  {
    id: "a1061",
    cardName: "giovanni",
    pack: ["mewtwo"],
    rarity: "super", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00055,
    percent5: 0.00222,
    acquired: false,
  },
  {
    id: "a1062",
    cardName: "articuno-ex-rainbow",
    pack: ["mewtwo"],
    rarity: "super", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00055,
    percent5: 0.00222,
    acquired: false,
  },
  {
    id: "a1063",
    cardName: "gengar-ex-rainbow",
    pack: ["mewtwo"],
    rarity: "super", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00055,
    percent5: 0.00222,
    acquired: false,
  },
  {
    id: "a1064",
    cardName: "bulbasaur",
    pack: ["mewtwo"],
    rarity: "art", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00321,
    percent5: 0.01286,
    acquired: false,
  },
  {
    id: "a1065",
    cardName: "cubone",
    pack: ["mewtwo"],
    rarity: "art", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00321,
    percent5: 0.01286,
    acquired: false,
  },
  {
    id: "a1066",
    cardName: "golbat",
    pack: ["mewtwo"],
    rarity: "art", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00321,
    percent5: 0.01286,
    acquired: false,
  },
  {
    id: "a1067",
    cardName: "weezing",
    pack: ["mewtwo"],
    rarity: "art", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00321,
    percent5: 0.01286,
    acquired: false,
  },
  {
    id: "a1068",
    cardName: "dragonite",
    pack: ["mewtwo"],
    rarity: "art", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00321,
    percent5: 0.01286,
    acquired: false,
  },
  {
    id: "a1069",
    cardName: "pidgeot",
    pack: ["mewtwo"],
    rarity: "art", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00321,
    percent5: 0.01286,
    acquired: false,
  },
  {
    id: "a1070",
    cardName: "ditto",
    pack: ["mewtwo"],
    rarity: "art", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00321,
    percent5: 0.01286,
    acquired: false,
  },
  {
    id: "a1071",
    cardName: "porygon",
    pack: ["mewtwo"],
    rarity: "art", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00321,
    percent5: 0.01286,
    acquired: false,
  },
  {
    id: "a1072",
    cardName: "venusaur-ex",
    pack: ["mewtwo"],
    rarity: "double", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00333,
    percent5: 0.01332,
    acquired: false,
  },
  {
    id: "a1073",
    cardName: "articuno-ex",
    pack: ["mewtwo"],
    rarity: "double", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00333,
    percent5: 0.01332,
    acquired: false,
  },
  {
    id: "a1074",
    cardName: "gengar-ex",
    pack: ["mewtwo"],
    rarity: "double", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00333,
    percent5: 0.01332,
    acquired: false,
  },
  {
    id: "a1075",
    cardName: "mewtwo-ex",
    pack: ["mewtwo"],
    rarity: "double", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00333,
    percent5: 0.01332,
    acquired: false,
  },
  {
    id: "a1076",
    cardName: "marowak-ex",
    pack: ["mewtwo"],
    rarity: "double", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00333,
    percent5: 0.01332,
    acquired: false,
  },
  {
    id: "a1077",
    cardName: "venusaur",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1078",
    cardName: "beedrill",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1079",
    cardName: "vaporeon",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1080",
    cardName: "articuno",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1081",
    cardName: "eelektross",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1082",
    cardName: "gengar",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1083",
    cardName: "mewtwo",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1084",
    cardName: "gardevoir",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1085",
    cardName: "muk",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1086",
    cardName: "weezing",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1087",
    cardName: "dragonite",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1088",
    cardName: "pidgeot",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1089",
    cardName: "ditto",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1090",
    cardName: "aerodactyl",
    pack: ["mewtwo"],
    rarity: "rare", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.00357,
    percent5: 0.01428,
    acquired: false,
  },
  {
    id: "a1091",
    cardName: "ivysaur",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1092",
    cardName: "venomoth",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1093",
    cardName: "pinsir",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1094",
    cardName: "whimsicott",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1095",
    cardName: "lilligant",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1096",
    cardName: "rapidash",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1097",
    cardName: "centiskorch",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1098",
    cardName: "golduck",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1099",
    cardName: "tentacruel",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1100",
    cardName: "cloyster",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1101",
    cardName: "kingler",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1102",
    cardName: "bruxish",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1103",
    cardName: "frosmoth",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1104",
    cardName: "zebstrika",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1105",
    cardName: "eelektrik",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1106",
    cardName: "pincurchin",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1107",
    cardName: "slowbro",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1108",
    cardName: "haunter",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1109",
    cardName: "mr-mime",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1110",
    cardName: "kirlia",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1111",
    cardName: "golurk",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1112",
    cardName: "sandslash",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1113",
    cardName: "marowak",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1114",
    cardName: "rhydon",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1115",
    cardName: "grapploct",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1116",
    cardName: "arbok",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1117",
    cardName: "golbat",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1118",
    cardName: "bisharp",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1119",
    cardName: "dragonair",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1120",
    cardName: "dodrio",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1121",
    cardName: "licktung",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1122",
    cardName: "porygon",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1123",
    cardName: "cinccino",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1124",
    cardName: "koga",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  {
    id: "a1125",
    cardName: "giovanni",
    pack: ["mewtwo"],
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 0.02571,
    percent5: 0.01714,
    acquired: false,
  },
  // {
  //   id: "asdda",
  //   cardName: "ivysaur",
  //   pack: "mewtwo",
  //   rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
  //   percent1To3: 0,
  //   percent4: 1 / 1,
  //   percent5: 1 / 1,
  //   acquired: false,
  // },
  // {
  //   id: "fgfh",
  //   cardName: "oddish",
  //   pack: "charizard",
  //   rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
  //   percent1To3: 1 / 1,
  //   percent4: 0,
  //   percent5: 0,
  //   acquired: false,
  // },
  // {
  //   id: "bnm",
  //   cardName: "caterpie",
  //   pack: "pikachu",
  //   rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
  //   percent1To3: 1 / 1,
  //   percent4: 0,
  //   percent5: 0,
  //   acquired: false,
  // },
];

function App() {
  const [cards, setCards] = useState(allCards);

  function handleAcquireCard(id) {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, acquired: !card.acquired } : card
    );
    setCards(updatedCards);
  }

  function handleToggle() {
    if (cards.some((card) => !card.acquired)) {
      const updatedCards = cards.map((card) => ({ ...card, acquired: true }));
      setCards(updatedCards);
    } else {
      const updatedCards = cards.map((card) => ({ ...card, acquired: false }));
      setCards(updatedCards);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Homepage
              cards={cards}
              handleAcquireCard={handleAcquireCard}
              toggleCards={handleToggle}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
