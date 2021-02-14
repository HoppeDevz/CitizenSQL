
class Utils {
    GetQueryDuration = (pre_query, post_query) => {
        return (post_query - pre_query)
    }

    GetNewDateTime = () => new Date().getTime();
}

module.exports = new Utils();