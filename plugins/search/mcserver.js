// Dengan bantuan ai 😁
// btw tq ya buat xyzancode anu skrep nya hehe
import axios from "axios";
import * as cheerio from "cheerio";

export default {
  name: "cariserver",
  category: "search",
  command: ["cariservers"],
  run: async (conn, m) => {
    if (!m.text) return m.reply(`Ex: ${m.cmd} survival`);

    try {
      const servers = await srvrmcSearch(m.text); // pakai await
      if (!servers.length) return m.reply("⚡ Server gak ketemu bre.");

      // contoh reply format list (biar ga kebanyakan teks)
      const hasil = servers
        .slice(0, 5) // batasi 5 server teratas
        .map(
          (s, i) =>
            `#${s.rank || i + 1} ${s.name}\nIP: ${s.ip}\nPlayers: ${s.players}\nVersion: ${s.version}\nMode: ${s.gamemode}\nStatus: ${s.status}\n`
        )
        .join("\n-------------------\n");

      m.reply(hasil);
    } catch (err) {
      m.reply(`❌ Error: ${err.message}`);
    }
  },
};

async function srvrmcSearch(query) {
  try {
    const url = `https://minecraft.buzz/search/${encodeURIComponent(query)}`;
    const res = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    const $ = cheerio.load(res.data);
    const servers = [];

    $("tr.server-row").each((index, element) => {
      const $row = $(element);

      const server = {
        rank:
          parseInt($row.find("td:first-child span.fw-bold").text().trim()) || 0,
        name: $row.find("h3.fs-6").text().trim(),
        image: $row.find('img[width="64"][height="64"]').attr("src"),
        banner: $row.find("img.img-fluid.rounded-top").attr("src"),
        ip:
          $row.find("data.ip-block").attr("value") ||
          $row.find("data.ip-block").text().trim(),
        version: $row
          .find('span.badge:contains("Version")')
          .text()
          .replace("Version", "")
          .trim(),
        gamemode: $row.find('a[href^="category/"] span.badge').text().trim(),
        type: $row.find('span.badge:contains("Cross Platform")').text().trim(),
        players: $row.find("td:eq(5)").text().trim(),
        status: $row.find('data[value="Online"]').text().trim() || "Offline",
        description: $row.find("td.text-black-50 p").text().trim(),
      };

      servers.push(server);
    });

    return servers;
  } catch (e) {
    throw new Error(`${e.message}`);
  }
}