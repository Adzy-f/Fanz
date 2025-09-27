import axios from 'axios';

export default {
    name: "ssweb",
    category: "tools",
    command: ["ssweb"],
    run: async (conn, m) => {
        const prefix = m.prefix
        const text = m.isQuoted ? m.quoted.text : m.text
        if (!text) {
            return m.reply(`📸 *Screenshot Website*\n\n*Usage:* ${prefix}ssweb <url> [device]\n\n*Device Options:*\n• mobile\n• tablet\n• desktop (default)\n\n*Example:*\n${prefix}ssweb https://google.com\n${prefix}ssweb https://google.com mobile\n${prefix}ssweb https://google.com tablet`);
        }
        const args = text.split(' ');
        let url = args[0];
        let device = args[1] || 'desktop';
    
        const validDevices = ['mobile', 'tablet', 'desktop'];
        if (!validDevices.includes(device.toLowerCase())) {
            return m.reply(`❌ *Invalid device type!*\n\n*Valid devices:*\n• mobile\n• tablet\n• desktop\n\n*Example:* ${prefix}ssweb https://google.com mobile`);
        }
    
        if (!url) {
            return m.reply(`❌ *URL is required!*\n\n*Usage:* ${prefix}ssweb <url> [device]\n*Example:* ${prefix}ssweb https://google.com desktop`);
        }
    
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        try {
            new URL(url);
        } catch (error) {
            return m.reply(`❌ *Invalid URL format!*\n\n*Please provide a valid URL*\n*Example:* https://google.com`);
        }
        
        try {
        m.reply(`📸 *Taking screenshot...*\n\n*URL:* ${url}\n*Device:* ${device}\n*Please wait...*`);
        
        const apiUrl = `https://api.siputzx.my.id/api/tools/ssweb?url=${encodeURIComponent(url)}&theme=light&device=${device}`;
            
         const response = await fetch(apiUrl)
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        await conn.sendMessage(m.chat, {
            image: {url: apiUrl},
            caption: `📸 *Screenshot Website*\n\n*URL:* ${url}\n*Device:* ${device}\n*Theme:* Light*`
        }, { quoted: m });
        } catch (error) {
            console.error('Screenshot error:', error);
            let errorMessage = '❌ *Gagal Mengambil Screenshot!*\n\n';

            if (error.message.includes('fetch')) {
            errorMessage += '*Error:* Network connection failed\n*Try again later*';
            } else if (error.message.includes('HTTP error')) {
            errorMessage += '*Error:* API service unavailable\n*Please try again*';
            } else {
            errorMessage += '*Error:* Unable to capture website\n*Make sure the URL is accessible*';
            }
            m.reply(errorMessage);
        }
    }
}