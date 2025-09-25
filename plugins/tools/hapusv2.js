export default {
    name: "hapusv2",
    category: "tools",
    command: ["hapusv2", "delv2"],
    run: async (conn, m, { isAdmin, isBotAdmin }) => {
        if (!m.quoted) return m.reply(`Reply pesan yang ingin dihapus dengan caption ${m.cmd}`)
        if (m.quoted.fromMe) {
            m.reply({ delete: m.quoted.key })
        } else {
            if (m.isGroup) return
            if (!isBotAdmin) return m.reply(mess.botAdmin);
            if (!isAdmin) return m.reply(mess.admin);
            m.reply({ delete: m.quoted.key })
        }
    }
};