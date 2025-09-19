import axios from "axios";

/**
FanzCode - githubstalk
**/

export default {
    name: "githunstalk",
    category: "fun",
    command: ["githubstalk", "ghstalk"],
    run: async (conn, m) => {
        if (!m.text) return m.reply("Username?")

        try {
            const api = await axios.get(`https://restapiikyjs.vercel.app/stalk/github?user=${encodeURIComponent(m.text)}`);
            if (!api.data || !api.data.result) {
                return m.reply("Data tidak ditemukan 😅");
            }

            let f = api.data.result;
            let kirim = `Github stalk 😁

User: ${f.username || "-"},
Nick: ${f.nickname || "-"},
Bio: ${f.bio || "-"},
Followers: ${f.followers || "0"},
Following: ${f.following || "0"},
Repo: ${f.public_repo || "0"},
Gist: ${f.public_gists || "0"},
Type: ${f.type || "-"},
Admin: ${f.admin || "-"},
Url: ${f.url || "-"}

- Fnz`;

            m.reply(kirim);
        } catch (e) {
            console.error(e);
            m.reply("Gagal stalk github, coba lagi nanti ⚡");
        }
    }
}