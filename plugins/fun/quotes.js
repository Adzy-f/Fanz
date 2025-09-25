import(`../../lib/quo.js`);

export default {
   name: "quotes",
   category: "fun",
   command: ["quotes"],
   run: async (conn, m, {
      Func,
      Api
   }) => {
      const quotesMenu = `
╭─❖  DAFTAR QUOTES
│
├─ 🌇 Senja
├─ 😔 Galau
├─ 🙄 Renungan
├─ 😍 Bucin
├─ 🗿 Bacot
├─ 🎭 Truth
├─ 🎲 Dare
├─ 💘 Gombal
├─ 💡 Motivasi
├─ 🤪 Ngasal
├─ 👨‍💻 Programer
├─ 😢 Sadboy
│
╰─ Ketik: += <pilihan>
`;
      if (!m.text) return m.reply(quotesMenu)
      let q = m.args[0] ? m.args[0].toLowerCase() : null

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
      } else if (q === "bucin") {
         let api = await Api.request("sxtream", "/randomtext/bucin")
         m.reply(api.data)
      } else if (q === "bacot") {
         let api = await Api.request("sxtream", "/randomtext/bacot")
         m.reply(api.data)
      } else if (q === "senja") {
         let api = await Api.request("sxtream", "/randomtext/senja")
         m.reply(api.data)
      } else if (q === "truth") {
         let api = await Api.request("sxtream", "/randomtext/truth")
         m.reply(api.data)
      } else if (q === "dare") {
         let api = await Api.request("sxtream", "/randomtext/dare")
         m.reply(api.data)
      } else if (q === "gombal") {
         let api = await Api.request("sxtream", "/randomtext/gombal")
         m.reply(api.data)
      } else if (q === "motivasi") {
         let api = await Api.request("sxtream", "/randomtext/motivasi")
         m.reply(api.data)
      } else if (q === "ngasal") {
         let api = await Api.request("sxtream", "/randomtext/ngasal")
         m.reply(api.data)
      } else if (q === "programer") {
         let api = await Api.request("sxtream", "/randomtext/programer")
         m.reply(api.data)
      } else if (q === "sadboy") {
         let api = await Api.request("sxtream", "/randomtext/sadboy")
         m.reply(api.data)
      } else {
         m.reply("Apaan itu ga tersedia 😂");
         await m.react(m.chat, "😹");
      }
   }
}