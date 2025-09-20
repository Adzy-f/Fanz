export default {
   name: "yupraai",
   category: "ai",
   command: ["ypai", "yupraai"],
   run: async (conn, m, {
      Func,
      quoted
   }) => {
      if (!m.text && !quoted?.body) return m.reply("Nanya apa lo?");
      await m.react(m.chat, "🤪")
      let apikey = await Func.fetchJson(`https://api.yupra.my.id/api/ai/ypai?text=${encodeURIComponent(m.text || quoted?.body)}`);
      let pesan = apikey.result;
      m.reply(pesan)
      await m.react(m.chat, "✅")
   }
}