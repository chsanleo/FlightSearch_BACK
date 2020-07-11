'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //Compañias REVISAR
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let iataCompanies = [];

    for (let char of letters) {
      for (let num of numbers) {
        var iata = {};
        iata.code = char.concat(num);
        iataCompanies.push(iata);
        iata = {};
        iata.code = num.concat(char);
        iataCompanies.push(iata);
      }
      for (let charl of letters) {
        var iata = {};
        iata.code = char.concat(charl);
        iataCompanies.push(iata);
        if (char != charl) {
          iata.code = charl.concat(char);
          iataCompanies.push(iata);
        }
      }
    }

    return queryInterface.bulkInsert('Iatacodes', [
      { code: "ABC" }, { code: "AEP" }, { code: "AFA" }, { code: "AGP" },
      { code: "AMS" }, { code: "AOL" }, { code: "ARI" }, { code: "ARN" },
      { code: "ASU" }, { code: "ATH" }, { code: "AUA" }, { code: "BCN" },
      { code: "BIN" }, { code: "BOD" }, { code: "BOG" }, { code: "BPM" },
      { code: "BRC" }, { code: "BSL" }, { code: "BST" }, { code: "BUD" },
      { code: "BYJ" }, { code: "CCC" }, { code: "CCP" }, { code: "CCS" },
      { code: "CDG" }, { code: "CGN" }, { code: "CLX" }, { code: "CMN" },
      { code: "CNQ" }, { code: "COC" }, { code: "CTC" }, { code: "CUE" },
      { code: "CUU" }, { code: "CVU" }, { code: "DAY" }, { code: "DJE" },
      { code: "DME" }, { code: "DOH" }, { code: "DXB" }, { code: "EAP" },
      { code: "EDI" }, { code: "EGE" }, { code: "EIN" }, { code: "EZE" },
      { code: "FDO" }, { code: "FLR" }, { code: "FLW" }, { code: "FMA" },
      { code: "FNC" }, { code: "FRA" }, { code: "FRS" }, { code: "FOR" },
      { code: "GDL" }, { code: "GHU" }, { code: "GIB" }, { code: "GPO" },
      { code: "GRU" }, { code: "GRW" }, { code: "GRX" }, { code: "GUA" },
      { code: "GYE" }, { code: "HAJ" }, { code: "HAM" }, { code: "HAV" },
      { code: "HBX" }, { code: "HEA" }, { code: "HEL" }, { code: "HGL" },
      { code: "HHN" }, { code: "HIR" }, { code: "HKG" }, { code: "HMO" },
      { code: "HND" }, { code: "HNL" }, { code: "HOR" }, { code: "HOU" },
      { code: "IBZ" }, { code: "ICN" }, { code: "INV" }, { code: "IPC" },
      { code: "IRJ" }, { code: "IST" }, { code: "IVL" }, { code: "JAA" },
      { code: "JER" }, { code: "JFK" }, { code: "JKL" }, { code: "JSR" },
      { code: "KBL" }, { code: "KDH" }, { code: "KEF" }, { code: "KGD" },
      { code: "LAD" }, { code: "LAS" }, { code: "LAX" }, { code: "LEU" },
      { code: "LGG" }, { code: "LGS" }, { code: "LHR" }, { code: "LIM" },
      { code: "LIR" }, { code: "LIS" }, { code: "LTN" }, { code: "LUQ" },
      { code: "MAD" }, { code: "MCS" }, { code: "MDE" }, { code: "MDQ" },
      { code: "MVD" }, { code: "MDZ" }, { code: "MEC" }, { code: "MGA" },
      { code: "MTY" }, { code: "MEX" }, { code: "MDX" }, { code: "MFM" },
      { code: "MIA" }, { code: "MKC" }, { code: "MLH" }, { code: "MLN" },
      { code: "MPN" }, { code: "MUC" }, { code: "MXP" }, { code: "MZR" },
      { code: "MCO" }, { code: "NAP" }, { code: "NIC" }, { code: "NLK" },
      { code: "OPO" }, { code: "ORA" }, { code: "ORD" }, { code: "ORK" },
      { code: "ORY" }, { code: "OYA" }, { code: "PBR" }, { code: "PDP" },
      { code: "PDL" }, { code: "PHL" }, { code: "PIX" }, { code: "PJC" },
      { code: "PRA" }, { code: "PRQ" }, { code: "PSY" }, { code: "PTY" },
      { code: "PUQ" }, { code: "PXO" }, { code: "QGY" }, { code: "QRC" },
      { code: "QSA" }, { code: "RAK" }, { code: "RES" }, { code: "REU" },
      { code: "RGA" }, { code: "RHD" }, { code: "RLO" }, { code: "ROS" },
      { code: "RRG" }, { code: "RSA" }, { code: "RUH" }, { code: "SAL" },
      { code: "SAP" }, { code: "SBZ" }, { code: "SCL" }, { code: "SDE" },
      { code: "SFM" }, { code: "SFN" }, { code: "SIN" }, { code: "SJO" },
      { code: "SJZ" }, { code: "SKG" }, { code: "SLA" }, { code: "SMA" },
      { code: "SVQ" }, { code: "SXB" }, { code: "SYD" }, { code: "TER" },
      { code: "TFN" }, { code: "TFS" }, { code: "TGD" }, { code: "TGU" },
      { code: "THF" }, { code: "TLS" }, { code: "TLV" }, { code: "TPE" },
      { code: "TRS" }, { code: "TSE" }, { code: "TTG" }, { code: "TUR" },
      { code: "UIO" }, { code: "USH" }, { code: "UZU" }, { code: "VCP" },
      { code: "VDC" }, { code: "VIE" }, { code: "VLC" }, { code: "VLL" },
      { code: "VME" }, { code: "VVI" }, { code: "WLG" }, { code: "XRY" },
      { code: "YFB" }, { code: "YHU" }, { code: "YHZ" }, { code: "YOW" },
      { code: "YQB" }, { code: "YRB" }, { code: "YUL" }, { code: "YVM" },
      { code: "YVR" }, { code: "YWG" }, { code: "YYY" }, { code: "YYZ" },
      { code: "ZAG" }, { code: "ZAZ" }, iataCompanies
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('IataCodes', null, {});
  }
};
