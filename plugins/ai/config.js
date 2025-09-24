import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

export default {
    numP: 962796121703, // no bot
    ownerN: ["962796171203"], // edit owner di sini
    status: false, //self
    botN: pkg.name,
    botF: pkg.nickname,
    version: pkg.version,
    pack: "Sticker by Fanz",
    auth: "Auhtor nya Adi",
    wait: 'Harap Tunggu sebentar',
    owner: 'Fitur Ini Khusus Owner',
    group: 'Fitur Ini Khusus Group',
    admin: 'Fitur Ini Khusus Admin Group',
    botAdmin: 'Bot Harus Menjadi Admin Group',
    private: 'Fitur Ini Khusus Private',
    pairC: "FANZXSAD",
    wm: "<!> Powered by Dzyy"
}