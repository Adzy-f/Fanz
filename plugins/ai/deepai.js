export default {
    name: "deepai",
    category: "ai",
    command: ["deepai", "deep"],
    run: async (conn, m, {
        Func
    }) => {
        if (!m.text && !m.quoted?.body) return m.reply("Nanya apa bro? ketik atau quoted pesan nya.");
        await m.reply("Menanyakan pertanyaan tersebut");

        try {
            let api = await Func.fetchJson(`https://www.laurine.site/api/ai/deepai?query=${encodeURIComponent(m.text || m.quoted?.body)}`);
            let respon = api.data;
            m.reply(respon)
        } catch (e) {
            m.reply(e)
        }
    }
}