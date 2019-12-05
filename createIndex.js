const ES_Service = require('./services/ES_Service') 

console.log('Index creation started...');

const index = 'food';

const payload = {
    product:'phone motorola',
    price:'23$'
}

async function createIndexAndRefresh(){
    try{
        await ES_Service.createIndex(index, payload);
        const refreshStatus = await ES_Service.refreshIndex(index);
        
        console.log('Index refresh status '+ refreshStatus);
        
    }catch(e){
        
        console.log('Could not create Index, Please refer problem: '+ e)
    }
}

createIndexAndRefresh();
