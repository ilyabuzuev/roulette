const stones = {
  moonstone: {
    stoneName: "Moonstone",
    stoneRarity: "universe",
    stoneChance: 0.1,
    stoneImg: "./img/stones/moonstone.png"
  },
  redQuartz: {
    stoneName: "Red Quartz",
    stoneRarity: "ancient",
    stoneChance: 0.2,
    stoneImg: "./img/stones/red-quartz.png"
  },
  ruby: {
    stoneName: "Ruby",
    stoneRarity: "arcana",
    stoneChance: 0.6,
    stoneImg: "./img/stones/ruby.png"
  },
  clearQuartz: {
    stoneName: "Clear Quartz",
    stoneRarity: "immortal",
    stoneChance: 1.1,
    stoneImg: "./img/stones/clear-quartz.png"
  },
  bloodstone: {
    stoneName: "Bloodstone",
    stoneRarity: "immortal",
    stoneChance: 1.5,
    stoneImg: "./img/stones/bloodstone.png"
  },
  lapisLazuli: {
    stoneName: "Lapis Lazuli",
    stoneRarity: "legendary",
    stoneChance: 4,
    stoneImg: "./img/stones/lapis-lazuli.png"
  },
  fuchsite: {
    stoneName: "Fuchsite",
    stoneRarity: "legendary",
    stoneChance: 5,
    stoneImg: "./img/stones/fuchsite.png"
  },
  jade: {
    stoneName: "Jade",
    stoneRarity: "mythical",
    stoneChance: 8,
    stoneImg: "./img/stones/jade.png"
  },
  turquoise: {
    stoneName: "Turquoise",
    stoneRarity: "mythical",
    stoneChance: 8.5,
    stoneImg: "./img/stones/turquoise.png"
  },
  obsidian: {
    stoneName: "Obsidian",
    stoneRarity: "rare",
    stoneChance: 14,
    stoneImg: "./img/stones/obsidian.png"
  },
  amethyst: {
    stoneName: "Amethyst",
    stoneRarity: "rare",
    stoneChance: 15,
    stoneImg: "./img/stones/amethyst.png"
  },
  citrine: {
    stoneName: "Citrine",
    stoneRarity: "rare",
    stoneChance: 15.5,
    stoneImg: "./img/stones/citrine.png"
  },
  jasper: {
    stoneName: "Jasper",
    stoneRarity: "uncommon",
    stoneChance: 20,
    stoneImg: "./img/stones/jasper.png"
  },
  tigersEye: {
    stoneName: "Tiger's Eye",
    stoneRarity: "common",
    stoneChance: 90,
    stoneImg: "./img/stones/tigers-eye.png"
  }
}

const data = {
  chests: [
    {
      chestID: 0,
      chestName: "Сундук древних камней",
      chestRarity: "ancient",
      chestImg: "./img/chests/chest.jpg",
      chestDescription: "Камни, находящиеся в данном сундуке почти невозможно найти",
      chestStones: [
        stones.moonstone,
        stones.redQuartz,
        stones.lapisLazuli,
        stones.turquoise,
        stones.obsidian,
        stones.amethyst,
        stones.jasper,
        stones.tigersEye,
      ]
    },
    {
      chestID: 1,
      chestName: "Сундук редких камней",
      chestRarity: "arcana",
      chestImg: "./img/chests/chest.jpg",
      chestDescription: "Они действительно редкие",
      chestStones: [
        stones.ruby,
        stones.fuchsite,
        stones.turquoise,
        stones.obsidian,
        stones.amethyst,
        stones.citrine,
        stones.tigersEye,
      ]
    },
    {
      chestID: 2,
      chestName: "Сундук редких камней",
      chestRarity: "immortal",
      chestImg: "./img/chests/chest.jpg",
      chestDescription: "Они действительно редкие",
      chestStones: [
        stones.clearQuartz,
        stones.bloodstone,
        stones.fuchsite,
        stones.turquoise,
        stones.obsidian,
        stones.amethyst,
        stones.jasper,
        stones.tigersEye,
      ]
    },
    {
      chestID: 3,
      chestName: "Сундук редких камней",
      chestRarity: "legendary",
      chestImg: "./img/chests/chest.jpg",
      chestDescription: "Они действительно редкие",
      chestStones: [
        stones.lapisLazuli,
        stones.fuchsite,
        stones.jade,
        stones.turquoise,
        stones.obsidian,
        stones.amethyst,
        stones.citrine,
        stones.jasper,
        stones.tigersEye,
      ]
    },
  ]
}

export default data;