// karena saya malas ketik jadi saya tambahkan ini 🗿🗿
export default {
   name: "code",
   category: "tools",
   command: ["code"],
   settings: {
      owner: true
   },
   run: async (conn, m) => {
      let tulis = `/**
FanzCode();
**/

  export default {
  name: "",
  category: "",
  command: [""],
  run: async (conn, m) => {
  // di buat untuk di copy-paste
  }
}`
      m.reply(tulis)
   }
}