export default {
   name: "tqto",
   category: "info",
   command: ["tqto"],
   run: async (conn, m, {
      Api
   }) => {

      const teks = Object.entries(Api.listUrl())
         .map(([name, {
            baseURL
         }]) => `${name}: ${baseURL}`)
         .join("\n");

      let res = `Terimakasih pada:
Pembuat base: github.com/AgusXzz 

Thz juga buat:
${teks}

Bailyes: Whiskeysoket`

      m.reply(res)
   }
}