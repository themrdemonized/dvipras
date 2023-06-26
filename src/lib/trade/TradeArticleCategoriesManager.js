const axios = require('axios');

export default class TradeArticlesManager
{
    /*
    * Return format
    *
    * {
    *   items: [..., ..., ...],
    *   meta: {
    *     count: ..,
    *     page: ..,
    *     limit: ..
    *   }
    * }
    * */
    // {
    static async getArticleCategories(options = {})
    {
        return (await axios.get('/api/v1/article_categories', {
            params: options
        })).data;
    }
}