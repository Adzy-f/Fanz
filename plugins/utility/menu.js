export default {
   name: "menu",
   category: "utility",
   command: ["menu", "start"],
   run: async (conn, m, {
      bruh
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
> User : ${m.pushname}
> Tag : @${m.sender.split('@')[0]}
╰───────────────────────╯`;
      // menu
      let menu = "";
      if (!behh) {
         menu += `Hai 👋 ${m.pushname} ini daftar menu yg tersedia:\n${intro}\n\n`;
         menu += '╭───「 CATEGORY 」───╮\n';
         for (let category of Object.keys(grouped)) {
            menu += `> ${category || "Undefined"}\n`;
         }
         menu += `╰───────────────────────╯`;
         menu += '\nKetik *.menu <kategori>* untuk menampilkan menu\n';
         menu += 'Ketik *.menu all* untuk semua menu\n';
      } else if (behh === "all") {
         menu += `Hai kak ${m.pushname} ini "Allmenu":\n\n`
         for (let [category, items] of Object.entries(grouped)) {
            menu += `╭───「 ${category.toUpperCase() || "UNDEFINED"} 」───╮\n`;
            for (let item of items) {
               menu += `> ${m.prefix}${item.name || "Undefined"}\n`;
            }
            menu += `╰───────────────────────╯\n\n`;
         }
         menu += "\n\n<!> Powered by Dzyy";
      } else if (grouped[behh]) {
         menu += `Halo kak ${m.pushname} 👋 ini adalah "${behh}" menu\n\n`
         menu += `╭───「 ${behh.toUpperCase()} 」───╮\n`;
         for (let item of grouped[behh]) {
            menu += `> ${m.prefix}${item.name || "Undefined"}\n`;
         }
         menu += `╰───────────────────────╯\n\n`;
         menu += "<!> Powered By Dzyy";
      } else if (mek === c.botF) {
         return m.reply("Saya online kak!..")
      } else {
         return m.reply("Apaan itu bang ga tersedia di kategori 😅")
      }
      m.reply(menu);
   }
}