export default {
    name: "ssweb",
    category: "tools",
    command: ["ssweb"],
    run: async (conn, m, { Func }) => {
        if (!m.text) return m.reply("Masukin url");
        let lnk = Func.isUrl(m.text);
        try {
            if (lnk) {
                for (let i of lnk) {
                    conn.sendMessage(m.chat, {
                        image: {
                            url: `https://api.mightyshare.io/v1/19EIFDUEL496RA3F/jpg?url=${Func.isUrl(i) ? i : `https://${i}`}`
                        },
                        caption: "- fnz"
                    }, {
                        quoted: m
                    })
                }
            } else {
                conn.sendMessage(m.chat, {
                    image: {
                        url: `https://api.mightyshare.io/v1/19EIFDUEL496RA3F/jpg?url=${m.text}`
                    },
                    caption: "- fnz"
                }, {
                    quoted: m
                })
            }
        } catch (e) {
            console.log(e);
        }
    }
}