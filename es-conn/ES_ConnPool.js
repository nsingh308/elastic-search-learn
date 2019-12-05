const { Client } = require('@elastic/elasticsearch')
const ESCLIENT_CONN = new Client({ node: 'http://localhost:9200' })

module.exports=ESCLIENT_CONN