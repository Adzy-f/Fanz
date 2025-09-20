export default {
    name: "webpilot",
    category: "ai",
    command: ["webpilot"],
    run: async (conn, m, {
        Func
    }) => {
        if (!m.text && !m.quoted?.body) return m.reply("Nanya apa bro? ketik atau quoted pesan nya.");
       // const dri = m.chat;
        await m.react(m.chat, "😁");

        try {
            let api = await Func.fetchJson(`https://purrbits.lick.eu.org/api/v1/webpilot?q=${encodeURIComponent(m.text || m.quoted?.body)}`);
            let respon = api.data;
            m.reply(respon)
            await m.react(m.chat, "😍");
        } catch (e) {
            m.reply(e)
        }
    }
}