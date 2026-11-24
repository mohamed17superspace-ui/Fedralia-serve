const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
app.use(cors());

app.get('/data', async (req, res) => {
  try {
    const response = await axios.get('https://example.com');
    const $ = cheerio.load(response.data);
    const title = $('h1').text();
    res.json({ success: true, info: title });
  } catch (error) {
    res.json({ success: false, message: 'خطأ في جلب البيانات' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'));
