export default {
  name: "status",
  category: "",
  command: "status",
  settings: {
    owner: true
  },
  run: async (conn, m, {
    bruh
  }) => {
    const status = m.args[0]?.toLowerCase();

    if (status === 'public') {
      bruh.status = true;
      m.reply("Berhasil ke mode public");
    } else if (status === 'self') {
      bruh.status = false;
      m.reply("Berhasil ke mode self");
    } else {
      m.reply(`Hai sekarang ini mode bot *${bruh.status ? 'public' : 'self'}*`)
    }
  }
}