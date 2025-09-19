/**
FanzCode - say
**/

export default {
    name: "say",
    category: "fun",
    command: ["say"],
    run: async (conn, m) => {
        if (m.text) {
            m.reply(m.text);
        } else {
            m.reply("Masukan kata kata")
        }
    }
}