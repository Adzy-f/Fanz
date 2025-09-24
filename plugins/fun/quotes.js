import(`../../lib/quo.js`);

export default {
    name: "quotes",
    category: "fun",
    command: ["quotes"],
    run: async (conn, m, { Func }) => {
        let tersedia = `Daftar quotes yg tersedia adalah\n\n+= senja 🌇 \n+= galau 😔\n+= renungan 🙄`
        if (!m.text) return m.reply(tersedia)
        let q = m.args[0] ? m.args[0].toLowerCase : null

        // kondisi semja
        if (q === "senja") {
            m.reply(Func.pickRandom(global.senja))
        } else if (q === "galau") {
            m.reply(Func.pickRandom(global.galau))
        } else if (q === "renungan") {
            m.reply({
                image: {
                    url: Func.pickRandom(global.renungan)
                }
            })
        } else {
            m.reply("Apaan itu ga tersedia 😂");
            await m.react(m.chat, "😹");
        }
    }
}