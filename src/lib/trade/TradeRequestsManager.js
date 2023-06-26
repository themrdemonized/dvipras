const axios = require('axios');

export default class TradeRequestsManager
{
    static async create(options = {})
    {
        return (await axios.post('/api/v1/requests/create', options)).data;
    }
}