const ESCLIENT_CONN = require('./ES_ConnPool');

const child = ESCLIENT_CONN.child({
    headers: { 'x-foo': 'bar' },
    requestTimeout: 1000
})
  
//ESCLIENT_CONN.info(console.log)

module.exports = child;