//dilarang ubah bagian ini
export default {
   name: "creator",
   category: "info",
   command: ["creator", "dev"],
   run: async (conn, m) => {
   
      const vcard = `BEGIN:VCARD
VERSION:3.0
N:Adzy-f;;;;
FN:Adzy-f (Owner)
ORG:Desainer Grafis;
TITLE:Graphic Designer
EMAIL;type=INTERNET:null@gmail.com
URL:https://github.com/Adzy-f
TEL;type=WORK;waid=962796121703:+962796121703
ADR:;;Jordan;;;;
X-WA-BIZ-DESCRIPTION:The Developer Fanz
X-WA-BIZ-NAME:FanzDev
END:VCARD`

     await m.vcard("Adi", vcard)
   }
}