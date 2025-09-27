/**
FanzCode("fakestory");
**/

export default {
   name: "fakestory",
   category: "media",
   command: ["fakestory", "fstory"],
   settings: {
      loading: true
   },
   run: async (conn, m, {
      Api,
      Func,
      cfg
   }) => {
      if (!m.text) return m.reply("Ketik text yg mau di buat fakestory");
      const time = Func.getTime()
      try {
         let pp = await conn.profilePictureUrl(m.sender, "image").catch(_ => "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60");

         let yuk = await Api.createUrl("ryhar", "/api/maker/fakestory", {
            url: pp,
            caption: m.text,
            name: m.pushname || "dzyUser",
            apikey: cfg.ryhar
         })
         m.reply({
            image: {
               url: yuk
            },
            caption: "Fakestory berhasil di buat"
         })
      } catch (err) {
         m.reply("Error broh🤖")
         console.log(err)
      }
   }
}