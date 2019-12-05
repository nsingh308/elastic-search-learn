var expect  = require('chai').expect;
const ES_Service = require('../services/ES_Service') 

it('Test case-1 for Create index', async () => {
    const index = 'food1';
    const payload = {
        product:'plate 1',
        price:'23Rupee'
    }
    const result = await ES_Service.createIndex(index, payload);
    expect(result).to.true;
    
});