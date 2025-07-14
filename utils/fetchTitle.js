const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async function fetchTitle(url) {
  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);
    const title = $('title').text();
    return title || 'Untitled';
  } catch (err) {
    return 'Untitled';
  }
};
