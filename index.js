const cheerio = require('cheerio');
const request = require('superagent');

const URL = 'https://scrapethissite.com/pages/';

const scrape = async() => {
    const data = await request.get(URL);

    const $ = cheerio.load(data.text);

    $('.lead').each((i, it) => {
        const el = $(it.children[0]);
        const text = el.text().trim();

        console.log(text);
    });
};

scrape();
