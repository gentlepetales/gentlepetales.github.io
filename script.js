const DELIVERY_FEE = 50;

const charms = [
  {
    "name": "Art Charm 001",
    "category": "Art",
    "price": 20,
    "image": "images/art01_01_01.jpg"
  },
  {
    "name": "Art Charm 002",
    "category": "Art",
    "price": 20,
    "image": "images/art01_01_02.jpg"
  },
  {
    "name": "Art Charm 003",
    "category": "Art",
    "price": 20,
    "image": "images/art01_01_03.jpg"
  },
  {
    "name": "Art Charm 004",
    "category": "Art",
    "price": 20,
    "image": "images/art01_02_01.jpg"
  },
  {
    "name": "Art Charm 005",
    "category": "Art",
    "price": 20,
    "image": "images/art01_02_02.jpg"
  },
  {
    "name": "Art Charm 006",
    "category": "Art",
    "price": 20,
    "image": "images/art01_02_03.jpg"
  },
  {
    "name": "Art Charm 007",
    "category": "Art",
    "price": 20,
    "image": "images/art01_03_01.jpg"
  },
  {
    "name": "Art Charm 008",
    "category": "Art",
    "price": 20,
    "image": "images/art01_03_02.jpg"
  },
  {
    "name": "Art Charm 009",
    "category": "Art",
    "price": 20,
    "image": "images/art01_03_03.jpg"
  },
  {
    "name": "Art Charm 010",
    "category": "Art",
    "price": 20,
    "image": "images/art01_04_01.jpg"
  },
  {
    "name": "Art Charm 011",
    "category": "Art",
    "price": 20,
    "image": "images/art01_04_02.jpg"
  },
  {
    "name": "Art Charm 012",
    "category": "Art",
    "price": 20,
    "image": "images/art01_04_03.jpg"
  },
  {
    "name": "Art Charm 013",
    "category": "Art",
    "price": 20,
    "image": "images/art02_01_01.jpg"
  },
  {
    "name": "Art Charm 014",
    "category": "Art",
    "price": 20,
    "image": "images/art02_01_02.jpg"
  },
  {
    "name": "Art Charm 015",
    "category": "Art",
    "price": 20,
    "image": "images/art02_01_03.jpg"
  },
  {
    "name": "Art Charm 016",
    "category": "Art",
    "price": 20,
    "image": "images/art02_01_04.jpg"
  },
  {
    "name": "Art Charm 017",
    "category": "Art",
    "price": 20,
    "image": "images/art02_01_05.jpg"
  },
  {
    "name": "Art Charm 018",
    "category": "Art",
    "price": 20,
    "image": "images/art02_01_06.jpg"
  },
  {
    "name": "Art Charm 019",
    "category": "Art",
    "price": 20,
    "image": "images/art02_02_01.jpg"
  },
  {
    "name": "Art Charm 020",
    "category": "Art",
    "price": 20,
    "image": "images/art02_02_02.jpg"
  },
  {
    "name": "Art Charm 021",
    "category": "Art",
    "price": 20,
    "image": "images/art02_02_03.jpg"
  },
  {
    "name": "Art Charm 022",
    "category": "Art",
    "price": 20,
    "image": "images/art02_02_04.jpg"
  },
  {
    "name": "Art Charm 023",
    "category": "Art",
    "price": 20,
    "image": "images/art02_02_05.jpg"
  },
  {
    "name": "Art Charm 024",
    "category": "Art",
    "price": 20,
    "image": "images/art02_02_06.jpg"
  },
  {
    "name": "Art Charm 025",
    "category": "Art",
    "price": 20,
    "image": "images/art02_03_01.jpg"
  },
  {
    "name": "Art Charm 026",
    "category": "Art",
    "price": 20,
    "image": "images/art02_03_02.jpg"
  },
  {
    "name": "Art Charm 027",
    "category": "Art",
    "price": 20,
    "image": "images/art02_03_03.jpg"
  },
  {
    "name": "Art Charm 028",
    "category": "Art",
    "price": 20,
    "image": "images/art02_03_04.jpg"
  },
  {
    "name": "Art Charm 029",
    "category": "Art",
    "price": 20,
    "image": "images/art02_03_05.jpg"
  },
  {
    "name": "Art Charm 030",
    "category": "Art",
    "price": 20,
    "image": "images/art02_03_06.jpg"
  },
  {
    "name": "Art Charm 031",
    "category": "Art",
    "price": 20,
    "image": "images/art02_04_01.jpg"
  },
  {
    "name": "Art Charm 032",
    "category": "Art",
    "price": 20,
    "image": "images/art02_04_02.jpg"
  },
  {
    "name": "Art Charm 033",
    "category": "Art",
    "price": 20,
    "image": "images/art02_05_02.jpg"
  },
  {
    "name": "Art Charm 034",
    "category": "Art",
    "price": 20,
    "image": "images/art02_05_04.jpg"
  },
  {
    "name": "Art Charm 035",
    "category": "Art",
    "price": 20,
    "image": "images/art02_05_06.jpg"
  },
  {
    "name": "Art Charm 036",
    "category": "Art",
    "price": 20,
    "image": "images/art02_06_02.jpg"
  },
  {
    "name": "Art Charm 037",
    "category": "Art",
    "price": 20,
    "image": "images/art02_06_04.jpg"
  },
  {
    "name": "Art Charm 038",
    "category": "Art",
    "price": 20,
    "image": "images/art02_06_06.jpg"
  },
  {
    "name": "Art Charm 039",
    "category": "Art",
    "price": 20,
    "image": "images/art02_07_02.jpg"
  },
  {
    "name": "Art Charm 040",
    "category": "Art",
    "price": 20,
    "image": "images/art02_07_04.jpg"
  },
  {
    "name": "Art Charm 041",
    "category": "Art",
    "price": 20,
    "image": "images/art02_07_06.jpg"
  },
  {
    "name": "Art Charm 042",
    "category": "Art",
    "price": 20,
    "image": "images/art03_01_01.jpg"
  },
  {
    "name": "Art Charm 043",
    "category": "Art",
    "price": 20,
    "image": "images/art03_01_02.jpg"
  },
  {
    "name": "Art Charm 044",
    "category": "Art",
    "price": 20,
    "image": "images/art03_01_03.jpg"
  },
  {
    "name": "Art Charm 045",
    "category": "Art",
    "price": 20,
    "image": "images/art03_01_04.jpg"
  },
  {
    "name": "Art Charm 046",
    "category": "Art",
    "price": 20,
    "image": "images/art03_02_01.jpg"
  },
  {
    "name": "Art Charm 047",
    "category": "Art",
    "price": 20,
    "image": "images/art03_02_02.jpg"
  },
  {
    "name": "Art Charm 048",
    "category": "Art",
    "price": 20,
    "image": "images/art03_02_03.jpg"
  },
  {
    "name": "Art Charm 049",
    "category": "Art",
    "price": 20,
    "image": "images/art03_02_04.jpg"
  },
  {
    "name": "Art Charm 050",
    "category": "Art",
    "price": 20,
    "image": "images/art03_03_01.jpg"
  },
  {
    "name": "Art Charm 051",
    "category": "Art",
    "price": 20,
    "image": "images/art03_03_02.jpg"
  },
  {
    "name": "Art Charm 052",
    "category": "Art",
    "price": 20,
    "image": "images/art03_03_03.jpg"
  },
  {
    "name": "Art Charm 053",
    "category": "Art",
    "price": 20,
    "image": "images/art03_03_04.jpg"
  },
  {
    "name": "Art Charm 054",
    "category": "Art",
    "price": 20,
    "image": "images/art03_04_01.jpg"
  },
  {
    "name": "Art Charm 055",
    "category": "Art",
    "price": 20,
    "image": "images/art03_04_02.jpg"
  },
  {
    "name": "Art Charm 056",
    "category": "Art",
    "price": 20,
    "image": "images/art03_04_03.jpg"
  },
  {
    "name": "Art Charm 057",
    "category": "Art",
    "price": 20,
    "image": "images/art03_04_04.jpg"
  },
  {
    "name": "Art Charm 058",
    "category": "Art",
    "price": 20,
    "image": "images/art03_05_01.jpg"
  },
  {
    "name": "Art Charm 059",
    "category": "Art",
    "price": 20,
    "image": "images/art03_05_02.jpg"
  },
  {
    "name": "Art Charm 060",
    "category": "Art",
    "price": 20,
    "image": "images/art04_01_01.jpg"
  },
  {
    "name": "Art Charm 061",
    "category": "Art",
    "price": 20,
    "image": "images/art04_01_02.jpg"
  },
  {
    "name": "Art Charm 062",
    "category": "Art",
    "price": 20,
    "image": "images/art04_01_03.jpg"
  },
  {
    "name": "Art Charm 063",
    "category": "Art",
    "price": 20,
    "image": "images/art04_01_04.jpg"
  },
  {
    "name": "Art Charm 064",
    "category": "Art",
    "price": 20,
    "image": "images/art04_01_05.jpg"
  },
  {
    "name": "Art Charm 065",
    "category": "Art",
    "price": 20,
    "image": "images/art04_01_06.jpg"
  },
  {
    "name": "Art Charm 066",
    "category": "Art",
    "price": 20,
    "image": "images/art04_01_07.jpg"
  },
  {
    "name": "Art Charm 067",
    "category": "Art",
    "price": 20,
    "image": "images/art04_02_01.jpg"
  },
  {
    "name": "Art Charm 068",
    "category": "Art",
    "price": 20,
    "image": "images/art04_02_02.jpg"
  },
  {
    "name": "Art Charm 069",
    "category": "Art",
    "price": 20,
    "image": "images/art04_02_03.jpg"
  },
  {
    "name": "Art Charm 070",
    "category": "Art",
    "price": 20,
    "image": "images/art04_02_04.jpg"
  },
  {
    "name": "Art Charm 071",
    "category": "Art",
    "price": 20,
    "image": "images/art04_02_05.jpg"
  },
  {
    "name": "Art Charm 072",
    "category": "Art",
    "price": 20,
    "image": "images/art04_02_06.jpg"
  },
  {
    "name": "Art Charm 073",
    "category": "Art",
    "price": 20,
    "image": "images/art04_02_07.jpg"
  },
  {
    "name": "Art Charm 074",
    "category": "Art",
    "price": 20,
    "image": "images/art04_03_01.jpg"
  },
  {
    "name": "Art Charm 075",
    "category": "Art",
    "price": 20,
    "image": "images/art04_03_02.jpg"
  },
  {
    "name": "Art Charm 076",
    "category": "Art",
    "price": 20,
    "image": "images/art04_03_03.jpg"
  },
  {
    "name": "Art Charm 077",
    "category": "Art",
    "price": 20,
    "image": "images/art04_03_04.jpg"
  },
  {
    "name": "Art Charm 078",
    "category": "Art",
    "price": 20,
    "image": "images/art04_03_05.jpg"
  },
  {
    "name": "Art Charm 079",
    "category": "Art",
    "price": 20,
    "image": "images/art04_03_06.jpg"
  },
  {
    "name": "Art Charm 080",
    "category": "Art",
    "price": 20,
    "image": "images/art04_03_07.jpg"
  },
  {
    "name": "Art Charm 081",
    "category": "Art",
    "price": 20,
    "image": "images/art04_04_01.jpg"
  },
  {
    "name": "Art Charm 082",
    "category": "Art",
    "price": 20,
    "image": "images/art04_04_02.jpg"
  },
  {
    "name": "Art Charm 083",
    "category": "Art",
    "price": 20,
    "image": "images/art04_04_03.jpg"
  },
  {
    "name": "Art Charm 084",
    "category": "Art",
    "price": 20,
    "image": "images/art04_04_04.jpg"
  },
  {
    "name": "Art Charm 085",
    "category": "Art",
    "price": 20,
    "image": "images/art04_04_05.jpg"
  },
  {
    "name": "Art Charm 086",
    "category": "Art",
    "price": 20,
    "image": "images/art04_04_06.jpg"
  },
  {
    "name": "Art Charm 087",
    "category": "Art",
    "price": 20,
    "image": "images/art04_04_07.jpg"
  },
  {
    "name": "Art Charm 088",
    "category": "Art",
    "price": 20,
    "image": "images/art04_05_01.jpg"
  },
  {
    "name": "Art Charm 089",
    "category": "Art",
    "price": 20,
    "image": "images/art04_05_02.jpg"
  },
  {
    "name": "Art Charm 090",
    "category": "Art",
    "price": 20,
    "image": "images/art04_05_03.jpg"
  },
  {
    "name": "Art Charm 091",
    "category": "Art",
    "price": 20,
    "image": "images/art04_05_04.jpg"
  },
  {
    "name": "Art Charm 092",
    "category": "Art",
    "price": 20,
    "image": "images/art04_05_05.jpg"
  },
  {
    "name": "Art Charm 093",
    "category": "Art",
    "price": 20,
    "image": "images/art04_05_06.jpg"
  },
  {
    "name": "Art Charm 094",
    "category": "Art",
    "price": 20,
    "image": "images/art04_05_07.jpg"
  },
  {
    "name": "Art Charm 095",
    "category": "Art",
    "price": 20,
    "image": "images/art04_06_01.jpg"
  },
  {
    "name": "Art Charm 096",
    "category": "Art",
    "price": 20,
    "image": "images/art04_06_02.jpg"
  },
  {
    "name": "Art Charm 097",
    "category": "Art",
    "price": 20,
    "image": "images/art04_06_03.jpg"
  },
  {
    "name": "Art Charm 098",
    "category": "Art",
    "price": 20,
    "image": "images/art04_06_04.jpg"
  },
  {
    "name": "Art Charm 099",
    "category": "Art",
    "price": 20,
    "image": "images/art04_06_05.jpg"
  },
  {
    "name": "Art Charm 100",
    "category": "Art",
    "price": 20,
    "image": "images/art04_06_06.jpg"
  },
  {
    "name": "Art Charm 101",
    "category": "Art",
    "price": 20,
    "image": "images/art04_06_07.jpg"
  },
  {
    "name": "Art Charm 102",
    "category": "Art",
    "price": 20,
    "image": "images/art04_07_01.jpg"
  },
  {
    "name": "Art Charm 103",
    "category": "Art",
    "price": 20,
    "image": "images/art04_07_02.jpg"
  },
  {
    "name": "Art Charm 104",
    "category": "Art",
    "price": 20,
    "image": "images/art04_07_03.jpg"
  },
  {
    "name": "Art Charm 105",
    "category": "Art",
    "price": 20,
    "image": "images/art04_07_04.jpg"
  },
  {
    "name": "Art Charm 106",
    "category": "Art",
    "price": 20,
    "image": "images/art04_07_05.jpg"
  },
  {
    "name": "Art Charm 107",
    "category": "Art",
    "price": 20,
    "image": "images/art04_07_06.jpg"
  },
  {
    "name": "Art Charm 108",
    "category": "Art",
    "price": 20,
    "image": "images/art04_07_07.jpg"
  },
  {
    "name": "Art Charm 109",
    "category": "Art",
    "price": 20,
    "image": "images/art05_01_01.jpg"
  },
  {
    "name": "Art Charm 110",
    "category": "Art",
    "price": 20,
    "image": "images/art05_01_02.jpg"
  },
  {
    "name": "Art Charm 111",
    "category": "Art",
    "price": 20,
    "image": "images/art05_01_03.jpg"
  },
  {
    "name": "Art Charm 112",
    "category": "Art",
    "price": 20,
    "image": "images/art05_01_04.jpg"
  },
  {
    "name": "Art Charm 113",
    "category": "Art",
    "price": 20,
    "image": "images/art05_01_05.jpg"
  },
  {
    "name": "Art Charm 114",
    "category": "Art",
    "price": 20,
    "image": "images/art05_01_06.jpg"
  },
  {
    "name": "Art Charm 115",
    "category": "Art",
    "price": 20,
    "image": "images/art05_02_01.jpg"
  },
  {
    "name": "Art Charm 116",
    "category": "Art",
    "price": 20,
    "image": "images/art05_02_02.jpg"
  },
  {
    "name": "Art Charm 117",
    "category": "Art",
    "price": 20,
    "image": "images/art05_02_03.jpg"
  },
  {
    "name": "Art Charm 118",
    "category": "Art",
    "price": 20,
    "image": "images/art05_02_04.jpg"
  },
  {
    "name": "Art Charm 119",
    "category": "Art",
    "price": 20,
    "image": "images/art05_02_05.jpg"
  },
  {
    "name": "Art Charm 120",
    "category": "Art",
    "price": 20,
    "image": "images/art05_02_06.jpg"
  },
  {
    "name": "Art Charm 121",
    "category": "Art",
    "price": 20,
    "image": "images/art05_03_01.jpg"
  },
  {
    "name": "Art Charm 122",
    "category": "Art",
    "price": 20,
    "image": "images/art05_03_02.jpg"
  },
  {
    "name": "Art Charm 123",
    "category": "Art",
    "price": 20,
    "image": "images/art05_03_03.jpg"
  },
  {
    "name": "Art Charm 124",
    "category": "Art",
    "price": 20,
    "image": "images/art05_03_04.jpg"
  },
  {
    "name": "Art Charm 125",
    "category": "Art",
    "price": 20,
    "image": "images/art05_03_05.jpg"
  },
  {
    "name": "Art Charm 126",
    "category": "Art",
    "price": 20,
    "image": "images/art05_03_06.jpg"
  },
  {
    "name": "Art Charm 127",
    "category": "Art",
    "price": 20,
    "image": "images/art05_04_01.jpg"
  },
  {
    "name": "Art Charm 128",
    "category": "Art",
    "price": 20,
    "image": "images/art05_04_02.jpg"
  },
  {
    "name": "Art Charm 129",
    "category": "Art",
    "price": 20,
    "image": "images/art05_04_03.jpg"
  },
  {
    "name": "Art Charm 130",
    "category": "Art",
    "price": 20,
    "image": "images/art05_04_04.jpg"
  },
  {
    "name": "Art Charm 131",
    "category": "Art",
    "price": 20,
    "image": "images/art05_04_05.jpg"
  },
  {
    "name": "Art Charm 132",
    "category": "Art",
    "price": 20,
    "image": "images/art05_04_06.jpg"
  },
  {
    "name": "Art Charm 133",
    "category": "Art",
    "price": 20,
    "image": "images/art05_05_01.jpg"
  },
  {
    "name": "Art Charm 134",
    "category": "Art",
    "price": 20,
    "image": "images/art05_05_02.jpg"
  },
  {
    "name": "Art Charm 135",
    "category": "Art",
    "price": 20,
    "image": "images/art05_05_03.jpg"
  },
  {
    "name": "Art Charm 136",
    "category": "Art",
    "price": 20,
    "image": "images/art05_05_04.jpg"
  },
  {
    "name": "Art Charm 137",
    "category": "Art",
    "price": 20,
    "image": "images/art05_05_05.jpg"
  },
  {
    "name": "Art Charm 138",
    "category": "Art",
    "price": 20,
    "image": "images/art05_05_06.jpg"
  },
  {
    "name": "Art Charm 139",
    "category": "Art",
    "price": 20,
    "image": "images/art05_06_01.jpg"
  },
  {
    "name": "Art Charm 140",
    "category": "Art",
    "price": 20,
    "image": "images/art05_06_02.jpg"
  },
  {
    "name": "Art Charm 141",
    "category": "Art",
    "price": 20,
    "image": "images/art05_06_03.jpg"
  },
  {
    "name": "Art Charm 142",
    "category": "Art",
    "price": 20,
    "image": "images/art05_06_04.jpg"
  },
  {
    "name": "Art Charm 143",
    "category": "Art",
    "price": 20,
    "image": "images/art05_06_05.jpg"
  },
  {
    "name": "Art Charm 144",
    "category": "Art",
    "price": 20,
    "image": "images/art05_06_06.jpg"
  },
  {
    "name": "Art Charm 145",
    "category": "Art",
    "price": 20,
    "image": "images/art05_07_01.jpg"
  },
  {
    "name": "Art Charm 146",
    "category": "Art",
    "price": 20,
    "image": "images/art05_07_02.jpg"
  },
  {
    "name": "Art Charm 147",
    "category": "Art",
    "price": 20,
    "image": "images/art05_07_03.jpg"
  },
  {
    "name": "Art Charm 148",
    "category": "Art",
    "price": 20,
    "image": "images/art05_07_04.jpg"
  },
  {
    "name": "Art Charm 149",
    "category": "Art",
    "price": 20,
    "image": "images/art05_07_05.jpg"
  },
  {
    "name": "Art Charm 150",
    "category": "Art",
    "price": 20,
    "image": "images/art05_07_06.jpg"
  },
  {
    "name": "Art Charm 151",
    "category": "Art",
    "price": 20,
    "image": "images/art05_08_01.jpg"
  },
  {
    "name": "Art Charm 152",
    "category": "Art",
    "price": 20,
    "image": "images/art05_08_02.jpg"
  },
  {
    "name": "Art Charm 153",
    "category": "Art",
    "price": 20,
    "image": "images/art05_08_03.jpg"
  },
  {
    "name": "Art Charm 154",
    "category": "Art",
    "price": 20,
    "image": "images/art05_08_04.jpg"
  },
  {
    "name": "Art Charm 155",
    "category": "Art",
    "price": 20,
    "image": "images/art05_08_05.jpg"
  },
  {
    "name": "Art Charm 156",
    "category": "Art",
    "price": 20,
    "image": "images/art05_08_06.jpg"
  },
  {
    "name": "Art Charm 157",
    "category": "Art",
    "price": 20,
    "image": "images/art05_09_01.jpg"
  },
  {
    "name": "Art Charm 158",
    "category": "Art",
    "price": 20,
    "image": "images/art05_09_02.jpg"
  },
  {
    "name": "Art Charm 159",
    "category": "Art",
    "price": 20,
    "image": "images/art05_09_03.jpg"
  },
  {
    "name": "Art Charm 160",
    "category": "Art",
    "price": 20,
    "image": "images/art05_09_04.jpg"
  },
  {
    "name": "Art Charm 161",
    "category": "Art",
    "price": 20,
    "image": "images/art05_09_05.jpg"
  },
  {
    "name": "Art Charm 162",
    "category": "Art",
    "price": 20,
    "image": "images/art05_09_06.jpg"
  },
  {
    "name": "Art Charm 163",
    "category": "Art",
    "price": 20,
    "image": "images/art05_10_01.jpg"
  },
  {
    "name": "Art Charm 164",
    "category": "Art",
    "price": 20,
    "image": "images/art05_10_02.jpg"
  },
  {
    "name": "Art Charm 165",
    "category": "Art",
    "price": 20,
    "image": "images/art05_10_03.jpg"
  },
  {
    "name": "Art Charm 166",
    "category": "Art",
    "price": 20,
    "image": "images/art05_10_04.jpg"
  },
  {
    "name": "Art Charm 167",
    "category": "Art",
    "price": 20,
    "image": "images/art05_10_05.jpg"
  },
  {
    "name": "Art Charm 168",
    "category": "Art",
    "price": 20,
    "image": "images/art05_10_06.jpg"
  },
  {
    "name": "Art Charm 169",
    "category": "Art",
    "price": 20,
    "image": "images/art05_11_01.jpg"
  },
  {
    "name": "Art Charm 170",
    "category": "Art",
    "price": 20,
    "image": "images/art05_11_02.jpg"
  },
  {
    "name": "Art Charm 171",
    "category": "Art",
    "price": 20,
    "image": "images/art05_11_03.jpg"
  },
  {
    "name": "Art Charm 172",
    "category": "Art",
    "price": 20,
    "image": "images/art05_11_04.jpg"
  },
  {
    "name": "Art Charm 173",
    "category": "Art",
    "price": 20,
    "image": "images/art05_11_05.jpg"
  },
  {
    "name": "Art Charm 174",
    "category": "Art",
    "price": 20,
    "image": "images/art05_11_06.jpg"
  },
  {
    "name": "Art Charm 175",
    "category": "Art",
    "price": 20,
    "image": "images/art05_12_01.jpg"
  },
  {
    "name": "Art Charm 176",
    "category": "Art",
    "price": 20,
    "image": "images/art05_12_02.jpg"
  },
  {
    "name": "Art Charm 177",
    "category": "Art",
    "price": 20,
    "image": "images/art05_12_03.jpg"
  },
  {
    "name": "Art Charm 178",
    "category": "Art",
    "price": 20,
    "image": "images/art05_12_04.jpg"
  },
  {
    "name": "Art Charm 179",
    "category": "Art",
    "price": 20,
    "image": "images/art05_12_05.jpg"
  },
  {
    "name": "Art Charm 180",
    "category": "Art",
    "price": 20,
    "image": "images/art05_12_06.jpg"
  }
];

let braceletSize = 16;
let bracelet = Array(braceletSize).fill(null);
let selectedSlot = 0;
let activeCategory = "Art";
let dragIndex = null;
let customBraceletQty = 1;
let customFiles = [];

const braceletEl = document.getElementById("bracelet");
const gridEl = document.getElementById("charmGrid");
const tabsEl = document.getElementById("categoryTabs");
const selectedCountEl = document.getElementById("selectedCount");
const charmTotalEl = document.getElementById("charmTotal");
const grandTotalEl = document.getElementById("grandTotal");
const orderPreviewEl = document.getElementById("orderPreview");

function peso(n) {
  return `₱${Number(n).toLocaleString()}`;
}

function renderBracelet() {
  braceletEl.innerHTML = "";
  bracelet.forEach((item, index) => {
    const slot = document.createElement("div");
    slot.className = `slot ${item ? "filled" : "empty"} ${index === selectedSlot ? "selected" : ""}`;
    slot.draggable = !!item;
    slot.title = item ? `${item.name} — ${peso(item.price)}. Double-click to remove.` : "Click to select this slot.";

    if (item) {
      slot.innerHTML = `<img class="slot-charm-image" src="${item.image}" alt="${item.name}">`;
    }

    slot.addEventListener("click", () => {
      selectedSlot = index;
      renderBracelet();
    });

    slot.addEventListener("dblclick", () => {
      bracelet[index] = null;
      selectedSlot = index;
      renderAll();
    });

    slot.addEventListener("dragstart", () => { dragIndex = index; });
    slot.addEventListener("dragover", e => e.preventDefault());
    slot.addEventListener("drop", () => {
      if (dragIndex === null || dragIndex === index) return;
      const moved = bracelet[dragIndex];
      bracelet[dragIndex] = bracelet[index];
      bracelet[index] = moved;
      dragIndex = null;
      selectedSlot = index;
      renderAll();
    });

    braceletEl.appendChild(slot);
  });
}

function addCharm(charm) {
  let target = selectedSlot;
  if (bracelet[target]) {
    const firstEmpty = bracelet.findIndex(x => !x);
    if (firstEmpty === -1) {
      alert("Your bracelet is full.");
      return;
    }
    target = firstEmpty;
  }
  bracelet[target] = charm;
  const nextEmpty = bracelet.findIndex((x, i) => !x && i > target);
  selectedSlot = nextEmpty !== -1 ? nextEmpty : target;
  renderAll();
}

function renderTabs() {
  const categories = ["Art", "Customized Bracelet"];
  tabsEl.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = activeCategory === cat ? "active" : "";
    btn.onclick = () => {
      activeCategory = cat;
      renderTabs();
      renderCharms();
    };
    tabsEl.appendChild(btn);
  });
}

function renderCharms() {
  gridEl.innerHTML = "";

  if (activeCategory === "Customized Bracelet") {
    renderCustomBraceletPanel();
    return;
  }

  charms.forEach(charm => {
    const card = document.createElement("button");
    card.className = "charm-card";
    card.innerHTML = `
      <div class="charm-visual"><img src="${charm.image}" alt="${charm.name}" loading="lazy"></div>
      <strong>${charm.name}</strong>
      <span>Art • ${peso(charm.price)} per link</span>
    `;
    card.onclick = () => addCharm(charm);
    gridEl.appendChild(card);
  });
}

function renderCustomBraceletPanel() {
  const panel = document.createElement("div");
  panel.className = "custom-bracelet-panel";
  panel.innerHTML = `
    <div class="custom-copy">
      <span class="eyebrow">Customized Bracelet</span>
      <h3>Turn your own photos into a bracelet.</h3>
      <p>Upload up to 3 pictures for each customized bracelet.</p>
    </div>

    <div class="custom-price-options">
      <button type="button" class="custom-price-btn ${customBraceletQty === 1 ? "active" : ""}" data-qty="1">
        <strong>1 bracelet</strong>
        <span>₱250 • 3 customized pictures</span>
      </button>
      <button type="button" class="custom-price-btn ${customBraceletQty === 2 ? "active" : ""}" data-qty="2">
        <strong>2 bracelets</strong>
        <span>₱450 • 3 customized pictures each</span>
      </button>
    </div>

    <label class="upload-box">
      <strong>Upload your pictures</strong>
      <span>${customBraceletQty === 1 ? "Choose up to 3 images" : "Choose up to 6 images total"}</span>
      <input id="customUpload" type="file" accept="image/*" multiple>
    </label>

    <div class="upload-note">
      Your photos stay on your device while using this free static website. The order summary will list the selected file names, and the customer should send the actual photos through Messenger when confirming the order.
    </div>

    <div id="customPreviewGrid" class="custom-preview-grid"></div>

    <button type="button" id="addCustomToOrder" class="primary-btn custom-add-btn">
      Add Customized Bracelet to Order
    </button>
  `;
  gridEl.appendChild(panel);

  panel.querySelectorAll(".custom-price-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      customBraceletQty = Number(btn.dataset.qty);
      customFiles = [];
      renderCharms();
      updateSummary();
    });
  });

  const upload = panel.querySelector("#customUpload");
  upload.addEventListener("change", () => {
    const limit = customBraceletQty === 1 ? 3 : 6;
    customFiles = Array.from(upload.files).slice(0, limit);
    if (upload.files.length > limit) {
      alert(`Please select only ${limit} pictures for this option.`);
    }
    renderCustomPreviews();
    updateSummary();
  });

  panel.querySelector("#addCustomToOrder").addEventListener("click", () => {
    const needed = customBraceletQty === 1 ? 3 : 6;
    if (customFiles.length !== needed) {
      alert(`Please choose exactly ${needed} pictures first.`);
      return;
    }
    alert("Customized bracelet added to your order summary.");
    updateSummary();
  });

  renderCustomPreviews();
}

function renderCustomPreviews() {
  const preview = document.getElementById("customPreviewGrid");
  if (!preview) return;
  preview.innerHTML = "";
  customFiles.forEach((file, i) => {
    const card = document.createElement("div");
    card.className = "custom-preview-card";
    const img = document.createElement("img");
    img.alt = `Custom image ${i + 1}`;
    img.src = URL.createObjectURL(file);
    const label = document.createElement("span");
    label.textContent = file.name;
    card.appendChild(img);
    card.appendChild(label);
    preview.appendChild(card);
  });
}

function getCustomTotal() {
  if (!customFiles.length) return 0;
  const needed = customBraceletQty === 1 ? 3 : 6;
  return customFiles.length === needed ? (customBraceletQty === 1 ? 250 : 450) : 0;
}

function updateSummary() {
  const selected = bracelet.filter(Boolean);
  const artTotal = selected.reduce((sum, item) => sum + item.price, 0);
  const customTotal = getCustomTotal();
  const combined = artTotal + customTotal;

  selectedCountEl.textContent = `${selected.length} / ${braceletSize}`;
  charmTotalEl.textContent = peso(combined);
  grandTotalEl.textContent = peso(combined + DELIVERY_FEE);
  if (orderPreviewEl) updateOrderPreview();
}

function updateOrderPreview() {
  const selected = bracelet
    .map((item, i) => item ? `${i + 1}. ${item.name} (${peso(item.price)})` : null)
    .filter(Boolean);

  const artTotal = bracelet.filter(Boolean).reduce((sum, item) => sum + item.price, 0);
  const customTotal = getCustomTotal();
  const methodEl = document.getElementById("method");
  const method = methodEl ? methodEl.value : "Delivery";
  const fee = method === "Delivery" ? DELIVERY_FEE : 0;

  let customText = "";
  if (customFiles.length) {
    customText = `\n\nCustomized Bracelet:\n${customBraceletQty} bracelet${customBraceletQty > 1 ? "s" : ""} — ${peso(customBraceletQty === 1 ? 250 : 450)}\nFiles: ${customFiles.map(f => f.name).join(", ")}`;
  }

  orderPreviewEl.textContent =
    `Gentle Petales Italian Charm Order

Bracelet size: ${braceletSize} links

Art charm arrangement:
${selected.length ? selected.join("\n") : "No Art charms selected"}${customText}

Art charms total: ${peso(artTotal)}
Customized bracelet total: ${peso(customTotal)}
${method === "Delivery" ? `Delivery fee: ${peso(DELIVERY_FEE)}\n` : ""}Estimated total: ${peso(artTotal + customTotal + fee)}

For customized bracelets, please send the actual uploaded photos through Messenger when confirming your order.`;
}

function renderAll() {
  renderBracelet();
  updateSummary();
}

document.querySelectorAll("#sizePicker button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#sizePicker button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const newSize = Number(btn.dataset.size);
    if (newSize > braceletSize) {
      bracelet = bracelet.concat(Array(newSize - braceletSize).fill(null));
    } else {
      bracelet = bracelet.slice(0, newSize);
    }
    braceletSize = newSize;
    selectedSlot = Math.min(selectedSlot, braceletSize - 1);
    renderAll();
  });
});

const clearBtn = document.getElementById("clearBtn");
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    bracelet = Array(braceletSize).fill(null);
    customFiles = [];
    selectedSlot = 0;
    renderAll();
    renderCharms();
  });
}

renderTabs();
renderCharms();
renderAll();

