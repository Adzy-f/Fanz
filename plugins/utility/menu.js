export default {
   name: "menu",
   category: "utility",
   command: ["menu", "start"],
   run: async (conn, m, {
      bruh,
      Func
   }) => {

      let plugins = Object.values(conn.plugins);

      let grouped = {};
      for (let plugin of plugins) {
         if (!plugin || !plugin.name || !plugin.category) continue; // skip yg ga valid
         if (!grouped[plugin.category]) grouped[plugin.category] = [];
         grouped[plugin.category].push(plugin);
      }

      let behh = m.args[0] ? m.args[0].toLowerCase() : null
      let mek = m.text;
      let c = bruh;
      let intro = `╭───「 INTFO 」───╮
> Name : ${c.botN}
> Version : ${c.version}
> runtime : ${Func.runtime(process.uptime())}
> User : ${m.pushname}
> Tag : @${m.sender.split('@')[0]}
╰───────────────────────╯`;
      // menu
      let menu = "";
      if (!behh) {
         menu += `╭─❖「  Hai ${m.pushname} 👋 」\n`
         menu += `│  Berikut daftar kategori menu:\n`
         menu += `╰───────────────❖\n\n`
         for (let category of Object.keys(grouped)) {
            menu += `⟡ ${category || "Undefined"}\n`
         }
         menu += `\n╭───────────────❖\n`
         menu += `│  Ketik *.menu <kategori>*\n`
         menu += `│  Ketik *.menu all* untuk semua\n`
         menu += `╰───────────────❖\n`
      } else if (behh === "all") {
         menu += `╭─❖「  Halo ${m.pushname} 👋 」\n`
         menu += `│  Berikut *ALLMENU* ✨\n`
         menu += `│  Total: ${Object.keys(conn.plugins).length} plugins\n`
         menu += `╰───────────────❖\n\n`

         for (let [category, items] of Object.entries(grouped)) {
            menu += `╭─「 ${category.toUpperCase() || "UNDEFINED"} 」\n`
            for (let item of items) {
               menu += `│ ⟡ ${m.prefix}${item.name || "Undefined"}\n`
            }
            menu += `╰───────────────❖\n\n`
         }

         menu += `\n───「 ${bruh.wm} 」───\n`
      } else if (grouped[behh]) {
         menu += `╭─❖「  Halo ${m.pushname} 👋  」\n`
         menu += `│  Ini adalah menu *${behh.toUpperCase()}*\n`
         menu += `╰───────────────❖\n\n`

         for (let item of grouped[behh]) {
            menu += `⟡ ${m.prefix}${item.name || "Undefined"}\n`
         }

         menu += `\n╭───────────────❖\n`
         menu += `│  Gunakan perintah di atas ✨\n`
         menu += `╰───────────────❖\n\n`
      } else if (mek === c.botF) {
         return m.reply("Saya online kak!..")
      } else {
         return m.reply("Apaan itu bang ga tersedia di kategori 😅")
      }
      m.reply(menu);
   }
}