import {
   readFileSync
} from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

export default {
   // seting bot dan owner
   numP: 962796121703, // no bot
   ownerN: ["962796171203"], // edit owner di sini
   status: false, //self
   //bagian ini edit di package.json
   botN: pkg.name,
   botF: pkg.nickname,
   version: pkg.version,
   // buat setiker pack
   pack: "Sticker by Fanz",
   auth: "Auhtor nya Adi",
   // perpesanan 
   wait: 'Harap Tunggu sebentar',
   owner: 'Fitur Ini Khusus Owner',
   group: 'Fitur Ini Khusus Group',
   admin: 'Fitur Ini Khusus Admin Group',
   botAdmin: 'Bot Harus Menjadi Admin Group',
   private: 'Fitur Ini Khusus Private',
   //pair kode Luh 
   pairC: "FANZXSAD",
   // bebas
   wm: "<!> Powered by Dzyy",
   // apikay ryhar
   ryhar: "y7r35v1jrzh4z9myfsj2ut"
}