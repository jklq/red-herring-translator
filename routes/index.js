var express = require('express');
var router = express.Router();
const axios = require('axios');

let translateText = (text) => {
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('results', { title: 'Bokmålsordboka' });
});


/* GET translate */
router.get('/t', function(req, res, next) {
  let textToBeTranslated = req.query.translate
  console.log(textToBeTranslated)
  translateText(textToBeTranslated)

  axios.get('https://www.apertium.org/apy/translate', {
    params: {
      langpair: 'nob|nno',
      q: textToBeTranslated,
      deformat: 'txt',
      reformat: 'txt'
    }
  }).then(response => {
    let translatedText = response.data.responseData.translatedText
    res.render('results', {title: "Bokmålsordboka", result: translatedText})
  })

});

module.exports = router;
