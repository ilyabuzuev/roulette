export const stones = {
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
  sapphire: {
    stoneName: "Sapphire",
    stoneRarity: "arcana",
    stoneChance: 0.7,
    stoneImg: "./img/stones/sapphire.png"
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
  sodalite: {
    stoneName: "Sodalite",
    stoneRarity: "mythical",
    stoneChance: 8,
    stoneImg: "./img/stones/sodalite.png"
  },
  turquoise: {
    stoneName: "Turquoise",
    stoneRarity: "mythical",
    stoneChance: 8.5,
    stoneImg: "./img/stones/turquoise.png"
  },
  jade: {
    stoneName: "Jade",
    stoneRarity: "mythical",
    stoneChance: 8.6,
    stoneImg: "./img/stones/jade.png"
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
  rubyFuchsite: {
    stoneName: "Ruby Fuchsite",
    stoneRarity: "rare",
    stoneChance: 15.3,
    stoneImg: "./img/stones/ruby-fuchsite.png"
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
  amber: {
    stoneName: "Amber",
    stoneRarity: "uncommon",
    stoneChance: 21,
    stoneImg: "./img/stones/amber.png"
  },
  blueTopaz: {
    stoneName: "Blue Topaz",
    stoneRarity: "uncommon",
    stoneChance: 22,
    stoneImg: "./img/stones/blue-topaz.png"
  },
  tigersEye: {
    stoneName: "Tiger's Eye",
    stoneRarity: "common",
    stoneChance: 89,
    stoneImg: "./img/stones/tigers-eye.png"
  },
  carnelianStone: {
    stoneName: "Carnelian Stone",
    stoneRarity: "common",
    stoneChance: 90,
    stoneImg: "./img/stones/carnelian-stone.png"
  },
}

export const data = {
  chests: [
    {
      chestID: 0,
      chestName: "Сундук древних камней",
      chestRarity: "universe",
      chestImg: "./img/chests/chest.jpg",
      chestDescription: "Камни, находящиеся в данном сундуке почти невозможно найти",
      chestStones: [
        stones.moonstone,
        stones.lapisLazuli,
        stones.sodalite,
        stones.rubyFuchsite,
        stones.citrine,
        stones.amber,
        stones.jasper,
        stones.carnelianStone
      ]
    },
    {
      chestID: 1,
      chestName: "Сундук редких камней",
      chestRarity: "ancient",
      chestImg: "./img/chests/chest.jpg",
      chestDescription: "Они действительно редкие",
      chestStones: [
        stones.redQuartz,
        stones.turquoise,
        stones.jade,
        stones.obsidian,
        stones.amethyst,
        stones.blueTopaz,
        stones.tigersEye
      ]
    },
    {
      chestID: 2,
      chestName: "Сундук редких камней",
      chestRarity: "arcana",
      chestImg: "./img/chests/chest.jpg",
      chestDescription: "Они действительно редкие",
      chestStones: [
        stones.ruby,
        stones.sapphire,
        stones.fuchsite,
        stones.sodalite,
        stones.rubyFuchsite,
        stones.citrine,
        stones.jasper,
        stones.carnelianStone
      ]
    },
    {
      chestID: 3,
      chestName: "Сундук редких камней",
      chestRarity: "immortal",
      chestImg: "./img/chests/chest.jpg",
      chestDescription: "Они действительно редкие",
      chestStones: [
        stones.clearQuartz,
        stones.bloodstone,
        stones.lapisLazuli,
        stones.turquoise,
        stones.jade,
        stones.obsidian,
        stones.amethyst,
        stones.blueTopaz,
        stones.tigersEye
      ]
    },
    {
      chestID: 4,
      chestName: "Сундук редких камней",
      chestRarity: "legendary",
      chestImg: "./img/chests/chest.jpg",
      chestDescription: "Они действительно редкие",
      chestStones: [
        stones.lapisLazuli,
        stones.fuchsite,
        stones.sodalite,
        stones.turquoise,
        stones.jade,
        stones.amethyst,
        stones.rubyFuchsite,
        stones.jasper,
        stones.carnelianStone
      ]
    },
    {
      chestID: 5,
      chestName: "Сундук редких камней",
      chestRarity: "mythical",
      chestImg: "./img/chests/chest.jpg",
      chestDescription: "Они действительно редкие",
      chestStones: [
        stones.sodalite,
        stones.turquoise,
        stones.jade,
        stones.obsidian,
        stones.amethyst,
        stones.rubyFuchsite,
        stones.citrine,
        stones.jasper,
        stones.amber,
        stones.blueTopaz,
        stones.tigersEye,
        stones.carnelianStone
      ]
    },
  ]
}
