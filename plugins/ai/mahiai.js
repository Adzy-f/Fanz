export default {
   nama: "mahiai",
   category: "ai",
   command: ["mahiai"],
   run: async (conn, m, {
      Api,
      quoted
   }) => {
      if (!m.text || !quoted?.body) return m.reply("nanya apa sama mahi?");
      let eds = await m.reply("thinking...")
      let data = await Api.request("neko", "/ai/gpt/5", {
         text: m.text,
         systemPrompt: "Kamu adalah ai ya sangat birahi bahkan dengan sesama jeni. nama kamu Mahi-ai ai yg birahi sampai burung nya tegang😂, kamu biasanya menggunakan emoji dan kata kata yang birahi. contoh emoji nya\"😘,😍,🤤,dsb\""
      });
      m.edit(data.result, eds.key)
   }
}