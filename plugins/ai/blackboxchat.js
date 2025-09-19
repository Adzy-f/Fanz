export default {
    nama: "blackboxchat",
    category: "ai",
    command: ["blackboxchat", "bbc"],
    run: async (conn, m, {
        Func
    }) => {
        if (!m.text && !m.quoted?.body) return m.reply("Nanya apa bro? ketik atau quoted pesan nya.");
       // const dri = m.chat;
        await m.react(m.chat, "🗿");

        try {
            let api = await Func.fetchJson(`https://api.sxtream.xyz/ai/blackbox-chat?user=${encodeURIComponent(m.pushname)}&prompt=${encodeURIComponent(m.text || m.quoted?.body)}&system=pro`);
            let respon = api.data;
            m.reply(respon)
            await m.react(m.chat, "😊");
        } catch (e) {
            m.reply(e)
        }
    }
}