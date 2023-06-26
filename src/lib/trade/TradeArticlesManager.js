const axios = require('axios');

const cachedArticles = new Map();
const cachedArraysArticles = new Map();

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


    static async getArticles(options = {})
    {
        const key = `${options.category_id}/${options.limit}/${options.page}`;
        let promise = cachedArraysArticles.get(key);

        if(!promise)
        {
            promise = await axios.get('/api/v1/articles', {
                params: options
            });
            cachedArraysArticles.set(key, promise);

            const data = (await promise).data;

            console.log(data);

            for(const article of data.items)
            {
                cachedArticles.set(article.id.toString(), new Promise(function(resolve, reject) {
                    resolve({data: article});
                }));
            }
        }

        return (await promise).data;
    }

    static async getArticleById(id, options = {})
    {
        id = id.toString();

        let promise = cachedArticles.get(id);

        if(!promise)
        {
            promise = axios.get('/api/v1/articles/' + id, {
                params: options
            });
            cachedArticles.set(id, promise);
        }

        return (await promise).data;
    }
}