import axios from "axios";

export default {
  name: "ssweb",
  category: "tools",
  command: ["ssweb"],
  run: async (conn, m, { Api }) => {
    if (!m.text) return m.reply("Ex: " + m.cmd + " https://example.com");
    await m.reply("⏳ Tunggu bentar bang...");

    try {
      const ss = await ssweb(m.text); // pakai await biar hasilnya bukan Promise

      if (!ss.success) return m.reply("❌ Gagal screenshot: " + ss.error);

      await m.reply({
        image: { url: ss.fileUrl },
        caption: "✅ Sudah tak scrinsut bang",
      });
    } catch (e) {
      console.log("❌ Error:", e);
      m.reply("Ada error bang, cek console.");
    }
  },
};

/*
 • Fitur By Anomaki Team
 • Created : xyzan code
 • Screenshot website (scrape)
 • Jangan Hapus Wm
 • https://whatsapp.com/channel/0029Vaio4dYC1FuGr5kxfy2l
*/

async function ssweb(url) {
  const h = {
    accept: "*/*",
    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    origin: "https://imagy.app",
    priority: "u=1, i",
    referer: "https://imagy.app/",
    "sec-ch-ua":
      '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
  };

  const data = {
    url: url,
    browserWidth: 1280,
    browserHeight: 720,
    fullPage: false,
    deviceScaleFactor: 1,
    format: "png",
  };

  try {
    const res = await axios.post(
      "https://gcp.imagy.app/screenshot/createscreenshot",
      data,
      { headers: h }
    );

    return {
      id: res.data.id,
      fileUrl: res.data.fileUrl,
      success: true,
    };
  } catch (e) {
    return {
      success: false,
      error: e.message,
    };
  }
}