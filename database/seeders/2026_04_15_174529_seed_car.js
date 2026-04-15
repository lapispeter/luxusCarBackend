import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Car) {
    await db.Car.bulkCreate([
        {
    "id": 1,
    "brand": "Ferrari",
    "model": "488 GTB",
    "licensePlate": "KOF-835",
    "year": 2022,
    "dailyPrice": 870
  },
  {
    "id": 2,
    "brand": "Ferrari",
    "model": "488 GTB",
    "licensePlate": "IZR-193",
    "year": 2021,
    "dailyPrice": 372
  },
  {
    "id": 3,
    "brand": "Ferrari",
    "model": "Portofino",
    "licensePlate": "TCP-340",
    "year": 2018,
    "dailyPrice": 958
  },
  {
    "id": 4,
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "licensePlate": "MTM-500",
    "year": 2020,
    "dailyPrice": 966
  },
  {
    "id": 5,
    "brand": "Ferrari",
    "model": "488 GTB",
    "licensePlate": "FWR-652",
    "year": 2022,
    "dailyPrice": 551
  },
  {
    "id": 6,
    "brand": "Ferrari",
    "model": "488 GTB",
    "licensePlate": "IIW-807",
    "year": 2022,
    "dailyPrice": 780
  },
  {
    "id": 7,
    "brand": "Ferrari",
    "model": "488 GTB",
    "licensePlate": "INH-709",
    "year": 2021,
    "dailyPrice": 770
  },
  {
    "id": 8,
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "licensePlate": "IFT-828",
    "year": 2020,
    "dailyPrice": 938
  },
  {
    "id": 9,
    "brand": "Ferrari",
    "model": "488 GTB",
    "licensePlate": "KIQ-537",
    "year": 2022,
    "dailyPrice": 597
  },
  {
    "id": 10,
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "licensePlate": "FZN-135",
    "year": 2019,
    "dailyPrice": 954
  },
  {
    "id": 11,
    "brand": "Lamborghini",
    "model": "Huracan",
    "licensePlate": "AJE-428",
    "year": 2018,
    "dailyPrice": 328
  },
  {
    "id": 12,
    "brand": "Lamborghini",
    "model": "Urus",
    "licensePlate": "AUR-991",
    "year": 2020,
    "dailyPrice": 987
  },
  {
    "id": 13,
    "brand": "Lamborghini",
    "model": "Urus",
    "licensePlate": "SIN-409",
    "year": 2022,
    "dailyPrice": 402
  },
  {
    "id": 14,
    "brand": "Lamborghini",
    "model": "Aventador",
    "licensePlate": "NRI-226",
    "year": 2024,
    "dailyPrice": 841
  },
  {
    "id": 15,
    "brand": "Lamborghini",
    "model": "Huracan",
    "licensePlate": "LZI-109",
    "year": 2022,
    "dailyPrice": 764
  },
  {
    "id": 16,
    "brand": "Lamborghini",
    "model": "Urus",
    "licensePlate": "RUB-794",
    "year": 2024,
    "dailyPrice": 694
  },
  {
    "id": 17,
    "brand": "Lamborghini",
    "model": "Urus",
    "licensePlate": "BNL-673",
    "year": 2022,
    "dailyPrice": 377
  },
  {
    "id": 18,
    "brand": "Lamborghini",
    "model": "Aventador",
    "licensePlate": "BYE-303",
    "year": 2024,
    "dailyPrice": 895
  },
  {
    "id": 19,
    "brand": "Lamborghini",
    "model": "Urus",
    "licensePlate": "DRE-657",
    "year": 2022,
    "dailyPrice": 986
  },
  {
    "id": 20,
    "brand": "Lamborghini",
    "model": "Aventador",
    "licensePlate": "JZO-624",
    "year": 2018,
    "dailyPrice": 941
  },
  {
    "id": 21,
    "brand": "Porsche",
    "model": "Cayenne",
    "licensePlate": "SBJ-597",
    "year": 2024,
    "dailyPrice": 882
  },
  {
    "id": 22,
    "brand": "Porsche",
    "model": "911 Carrera",
    "licensePlate": "XTA-173",
    "year": 2024,
    "dailyPrice": 396
  },
  {
    "id": 23,
    "brand": "Porsche",
    "model": "911 Carrera",
    "licensePlate": "MLD-569",
    "year": 2019,
    "dailyPrice": 913
  },
  {
    "id": 24,
    "brand": "Porsche",
    "model": "911 Carrera",
    "licensePlate": "GGR-128",
    "year": 2023,
    "dailyPrice": 526
  },
  {
    "id": 25,
    "brand": "Porsche",
    "model": "911 Carrera",
    "licensePlate": "GUA-248",
    "year": 2021,
    "dailyPrice": 908
  },
  {
    "id": 26,
    "brand": "Porsche",
    "model": "911 Carrera",
    "licensePlate": "OYA-495",
    "year": 2019,
    "dailyPrice": 308
  },
  {
    "id": 27,
    "brand": "Porsche",
    "model": "Cayenne",
    "licensePlate": "FPV-643",
    "year": 2022,
    "dailyPrice": 519
  },
  {
    "id": 28,
    "brand": "Porsche",
    "model": "Panamera",
    "licensePlate": "EBL-684",
    "year": 2019,
    "dailyPrice": 528
  },
  {
    "id": 29,
    "brand": "Porsche",
    "model": "Cayenne",
    "licensePlate": "LMP-913",
    "year": 2019,
    "dailyPrice": 897
  },
  {
    "id": 30,
    "brand": "Porsche",
    "model": "Panamera",
    "licensePlate": "FUE-550",
    "year": 2024,
    "dailyPrice": 384
  },
  {
    "id": 31,
    "brand": "Bentley",
    "model": "Bentayga",
    "licensePlate": "ZMH-818",
    "year": 2020,
    "dailyPrice": 784
  },
  {
    "id": 32,
    "brand": "Bentley",
    "model": "Bentayga",
    "licensePlate": "WNM-638",
    "year": 2019,
    "dailyPrice": 685
  },
  {
    "id": 33,
    "brand": "Bentley",
    "model": "Continental GT",
    "licensePlate": "IZV-874",
    "year": 2020,
    "dailyPrice": 629
  },
  {
    "id": 34,
    "brand": "Bentley",
    "model": "Bentayga",
    "licensePlate": "DBQ-454",
    "year": 2022,
    "dailyPrice": 425
  },
  {
    "id": 35,
    "brand": "Bentley",
    "model": "Continental GT",
    "licensePlate": "RGI-819",
    "year": 2020,
    "dailyPrice": 381
  },
  {
    "id": 36,
    "brand": "Bentley",
    "model": "Continental GT",
    "licensePlate": "KUZ-616",
    "year": 2020,
    "dailyPrice": 849
  },
  {
    "id": 37,
    "brand": "Bentley",
    "model": "Bentayga",
    "licensePlate": "IJG-858",
    "year": 2023,
    "dailyPrice": 974
  },
  {
    "id": 38,
    "brand": "Bentley",
    "model": "Bentayga",
    "licensePlate": "YRR-500",
    "year": 2018,
    "dailyPrice": 596
  },
  {
    "id": 39,
    "brand": "Bentley",
    "model": "Bentayga",
    "licensePlate": "GTP-864",
    "year": 2019,
    "dailyPrice": 515
  },
  {
    "id": 40,
    "brand": "Bentley",
    "model": "Bentayga",
    "licensePlate": "VMH-475",
    "year": 2020,
    "dailyPrice": 582
  },
  {
    "id": 41,
    "brand": "Maserati",
    "model": "Ghibli",
    "licensePlate": "CZQ-251",
    "year": 2023,
    "dailyPrice": 646
  },
  {
    "id": 42,
    "brand": "Maserati",
    "model": "GranTurismo",
    "licensePlate": "VME-856",
    "year": 2021,
    "dailyPrice": 632
  },
  {
    "id": 43,
    "brand": "Maserati",
    "model": "Ghibli",
    "licensePlate": "QSW-865",
    "year": 2018,
    "dailyPrice": 750
  },
  {
    "id": 44,
    "brand": "Maserati",
    "model": "GranTurismo",
    "licensePlate": "YHW-209",
    "year": 2022,
    "dailyPrice": 818
  },
  {
    "id": 45,
    "brand": "Maserati",
    "model": "GranTurismo",
    "licensePlate": "DHJ-716",
    "year": 2022,
    "dailyPrice": 951
  },
  {
    "id": 46,
    "brand": "Maserati",
    "model": "Ghibli",
    "licensePlate": "CQX-557",
    "year": 2021,
    "dailyPrice": 759
  },
  {
    "id": 47,
    "brand": "Maserati",
    "model": "Ghibli",
    "licensePlate": "KHA-528",
    "year": 2021,
    "dailyPrice": 714
  },
  {
    "id": 48,
    "brand": "Maserati",
    "model": "GranTurismo",
    "licensePlate": "VBY-193",
    "year": 2018,
    "dailyPrice": 485
  },
  {
    "id": 49,
    "brand": "Maserati",
    "model": "Ghibli",
    "licensePlate": "KQM-797",
    "year": 2022,
    "dailyPrice": 350
  },
  {
    "id": 50,
    "brand": "Maserati",
    "model": "GranTurismo",
    "licensePlate": "SDN-182",
    "year": 2019,
    "dailyPrice": 774
  },
  {
    "id": 51,
    "brand": "Aston Martin",
    "model": "Vantage",
    "licensePlate": "GYK-591",
    "year": 2022,
    "dailyPrice": 781
  },
  {
    "id": 52,
    "brand": "Aston Martin",
    "model": "DB11",
    "licensePlate": "VXO-323",
    "year": 2019,
    "dailyPrice": 484
  },
  {
    "id": 53,
    "brand": "Aston Martin",
    "model": "Vantage",
    "licensePlate": "BUQ-619",
    "year": 2023,
    "dailyPrice": 309
  },
  {
    "id": 54,
    "brand": "Aston Martin",
    "model": "DB11",
    "licensePlate": "FZK-572",
    "year": 2022,
    "dailyPrice": 912
  },
  {
    "id": 55,
    "brand": "Aston Martin",
    "model": "DB11",
    "licensePlate": "JXH-964",
    "year": 2020,
    "dailyPrice": 508
  },
  {
    "id": 56,
    "brand": "Aston Martin",
    "model": "DB11",
    "licensePlate": "DPN-407",
    "year": 2023,
    "dailyPrice": 668
  },
  {
    "id": 57,
    "brand": "Aston Martin",
    "model": "DB11",
    "licensePlate": "EFO-793",
    "year": 2024,
    "dailyPrice": 963
  },
  {
    "id": 58,
    "brand": "Aston Martin",
    "model": "DB11",
    "licensePlate": "NUB-817",
    "year": 2019,
    "dailyPrice": 370
  },
  {
    "id": 59,
    "brand": "Aston Martin",
    "model": "Vantage",
    "licensePlate": "VPQ-768",
    "year": 2022,
    "dailyPrice": 774
  },
  {
    "id": 60,
    "brand": "Aston Martin",
    "model": "Vantage",
    "licensePlate": "OOL-584",
    "year": 2022,
    "dailyPrice": 810
  },
  {
    "id": 61,
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "licensePlate": "UCM-791",
    "year": 2024,
    "dailyPrice": 563
  },
  {
    "id": 62,
    "brand": "Rolls-Royce",
    "model": "Wraith",
    "licensePlate": "TEU-986",
    "year": 2021,
    "dailyPrice": 615
  },
  {
    "id": 63,
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "licensePlate": "CSF-346",
    "year": 2018,
    "dailyPrice": 324
  },
  {
    "id": 64,
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "licensePlate": "YOA-991",
    "year": 2018,
    "dailyPrice": 526
  },
  {
    "id": 65,
    "brand": "Rolls-Royce",
    "model": "Wraith",
    "licensePlate": "MOY-521",
    "year": 2020,
    "dailyPrice": 390
  },
  {
    "id": 66,
    "brand": "Rolls-Royce",
    "model": "Wraith",
    "licensePlate": "CFG-407",
    "year": 2020,
    "dailyPrice": 964
  },
  {
    "id": 67,
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "licensePlate": "ONC-169",
    "year": 2022,
    "dailyPrice": 982
  },
  {
    "id": 68,
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "licensePlate": "WXZ-621",
    "year": 2020,
    "dailyPrice": 904
  },
  {
    "id": 69,
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "licensePlate": "KVF-837",
    "year": 2018,
    "dailyPrice": 312
  },
  {
    "id": 70,
    "brand": "Rolls-Royce",
    "model": "Wraith",
    "licensePlate": "WTZ-785",
    "year": 2019,
    "dailyPrice": 547
  },
  {
    "id": 71,
    "brand": "BMW",
    "model": "M8",
    "licensePlate": "IHX-190",
    "year": 2023,
    "dailyPrice": 820
  },
  {
    "id": 72,
    "brand": "BMW",
    "model": "M5",
    "licensePlate": "OTO-159",
    "year": 2021,
    "dailyPrice": 904
  },
  {
    "id": 73,
    "brand": "BMW",
    "model": "M8",
    "licensePlate": "UFD-327",
    "year": 2018,
    "dailyPrice": 871
  },
  {
    "id": 74,
    "brand": "BMW",
    "model": "i8",
    "licensePlate": "HXQ-108",
    "year": 2019,
    "dailyPrice": 875
  },
  {
    "id": 75,
    "brand": "BMW",
    "model": "M5",
    "licensePlate": "HXV-177",
    "year": 2020,
    "dailyPrice": 701
  },
  {
    "id": 76,
    "brand": "BMW",
    "model": "M5",
    "licensePlate": "BGK-261",
    "year": 2024,
    "dailyPrice": 934
  },
  {
    "id": 77,
    "brand": "BMW",
    "model": "M5",
    "licensePlate": "GMF-844",
    "year": 2021,
    "dailyPrice": 677
  },
  {
    "id": 78,
    "brand": "BMW",
    "model": "M8",
    "licensePlate": "JZA-528",
    "year": 2022,
    "dailyPrice": 483
  },
  {
    "id": 79,
    "brand": "BMW",
    "model": "M8",
    "licensePlate": "OTY-176",
    "year": 2019,
    "dailyPrice": 897
  },
  {
    "id": 80,
    "brand": "BMW",
    "model": "M8",
    "licensePlate": "HTQ-559",
    "year": 2019,
    "dailyPrice": 381
  },
  {
    "id": 81,
    "brand": "Mercedes-Benz",
    "model": "AMG GT",
    "licensePlate": "RAQ-625",
    "year": 2021,
    "dailyPrice": 834
  },
  {
    "id": 82,
    "brand": "Mercedes-Benz",
    "model": "S-Class",
    "licensePlate": "MUK-101",
    "year": 2019,
    "dailyPrice": 849
  },
  {
    "id": 83,
    "brand": "Mercedes-Benz",
    "model": "AMG GT",
    "licensePlate": "RGX-865",
    "year": 2022,
    "dailyPrice": 532
  },
  {
    "id": 84,
    "brand": "Mercedes-Benz",
    "model": "AMG GT",
    "licensePlate": "UVE-979",
    "year": 2018,
    "dailyPrice": 416
  },
  {
    "id": 85,
    "brand": "Mercedes-Benz",
    "model": "S-Class",
    "licensePlate": "VLH-548",
    "year": 2019,
    "dailyPrice": 656
  },
  {
    "id": 86,
    "brand": "Mercedes-Benz",
    "model": "AMG GT",
    "licensePlate": "FYY-698",
    "year": 2024,
    "dailyPrice": 813
  },
  {
    "id": 87,
    "brand": "Mercedes-Benz",
    "model": "S-Class",
    "licensePlate": "RFO-701",
    "year": 2018,
    "dailyPrice": 747
  },
  {
    "id": 88,
    "brand": "Mercedes-Benz",
    "model": "S-Class",
    "licensePlate": "CFS-558",
    "year": 2019,
    "dailyPrice": 349
  },
  {
    "id": 89,
    "brand": "Mercedes-Benz",
    "model": "AMG GT",
    "licensePlate": "ZQP-941",
    "year": 2019,
    "dailyPrice": 525
  },
  {
    "id": 90,
    "brand": "Mercedes-Benz",
    "model": "AMG GT",
    "licensePlate": "WXJ-109",
    "year": 2018,
    "dailyPrice": 783
  },
  {
    "id": 91,
    "brand": "Audi",
    "model": "R8",
    "licensePlate": "NIJ-323",
    "year": 2021,
    "dailyPrice": 617
  },
  {
    "id": 92,
    "brand": "Audi",
    "model": "RS7",
    "licensePlate": "JCX-889",
    "year": 2024,
    "dailyPrice": 683
  },
  {
    "id": 93,
    "brand": "Audi",
    "model": "A8",
    "licensePlate": "FGV-318",
    "year": 2020,
    "dailyPrice": 722
  },
  {
    "id": 94,
    "brand": "Audi",
    "model": "A8",
    "licensePlate": "XSZ-250",
    "year": 2019,
    "dailyPrice": 419
  },
  {
    "id": 95,
    "brand": "Audi",
    "model": "R8",
    "licensePlate": "ALJ-451",
    "year": 2021,
    "dailyPrice": 361
  },
  {
    "id": 96,
    "brand": "Audi",
    "model": "A8",
    "licensePlate": "GAL-873",
    "year": 2023,
    "dailyPrice": 736
  },
  {
    "id": 97,
    "brand": "Audi",
    "model": "R8",
    "licensePlate": "EOP-706",
    "year": 2022,
    "dailyPrice": 700
  },
  {
    "id": 98,
    "brand": "Audi",
    "model": "A8",
    "licensePlate": "ALH-923",
    "year": 2022,
    "dailyPrice": 744
  },
  {
    "id": 99,
    "brand": "Audi",
    "model": "A8",
    "licensePlate": "VLJ-763",
    "year": 2024,
    "dailyPrice": 762
  },
  {
    "id": 100,
    "brand": "Audi",
    "model": "R8",
    "licensePlate": "WRG-796",
    "year": 2018,
    "dailyPrice": 930
  }
      
    ]);
  }else {
    await QueryInterface.bulkInsert('cars', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('cars');
}

export { up, down }
