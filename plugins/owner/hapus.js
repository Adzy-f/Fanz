export default {
    nama: "hapus",
    category: "owner",
    command: ["hapus", "del"],
    settings: {
      owner: true
    },
    run: async (m) => {
     if (quoted) {
       m.delet(m.quoted)
     } else {
       m.reply("Not Found ${m.quoted}")
     }
    }
};
