const  ESCLIENT_CONN = require('../es-conn/ES_ConnChild');
const LOG4JS = require('../utils/Log4jsUtils')

//LOG4JS.connectLogger(LOG4JS.getLogger("es-service"), { level: 'auto' });
const log = LOG4JS.getLogger("ES_Service");
class ES_Service {

    constructor(){}

    /**
     * This method would create index.
     * @param {*} index Key of index.
     * @param {*} body data to pass for this index.
     */
    async createIndex (index, body) {
        try{
            log.debug("This line is to debug index and body values: ",index,body);
            await ESCLIENT_CONN.index({ index, body });
            
            return true;
        }catch(e){
            log.error("Error occured while indexing your record:", e);
            return false;
        }
    }

    /**
     * This method would force an index refresh.
     * @param {*} index key of index to refresh.
     */
    async refreshIndex(index){
        try{
            await ESCLIENT_CONN.indices.refresh({ index});
            return true;
        }catch(e){
            log.error("Error occured while refreshing your index "+index, e);
            return false;
        }
    }

    /**
     * This method would Search your data.
     * @param {*} index key of index to search.
     * @param {*} body  data to search inside provided index.
     */
    async searchData(index, body){
        try{

            const { responseBody } = await client.search({ index, body })
            return responseBody;
        }catch(e){
            log.error('Error occured while searching your index '+index);
            return null;
        }
        

    }
}

module.exports = new ES_Service();
