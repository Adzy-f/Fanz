export default {
   name: "jadwalsholat",
   category: "info",
   command: ["jadwalsholat", "jdwsholat"],
   run: async (conn, m, {
      Func
   }) => {
      if (!m.text) return m.reply("Masukin pertanyaannya dekk")
      await m.react(m.chat, "⏰")
      try {
         let api = await Func.fetchJson(`https://api-furina.vercel.app/islami/jadwalsholat?kota=${m.text}`)
         let res = api.result;
         let waktu = res.waktu;
         let info = `Jadwal sholat di ${m.text} pada ${res.tanggal}
> Subuh: ${waktu.subuh}
> Duha: ${waktu.dhuha}
> Dzuhur: ${waktu.dzuhur}
> Ashar: ${waktu.ashar}
> Maghrib: ${waktu.maghrib}
> Isya: ${waktu.isya}`
         m.reply(info)
         await m.react(m.chat, "✅")
      } catch (err) {
         m.reply("Upps err\n" + err)
      }
   }
}