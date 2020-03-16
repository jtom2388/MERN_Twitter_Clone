
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}

// module.exports = {
//     mongoURI: 'mongodb+srv://jtom2388:StephKlayDurant2018!@cluster0-bgmqm.mongodb.net/test?retryWrites=true&w=majority',
//     secretOrKey: 'secret'
// }