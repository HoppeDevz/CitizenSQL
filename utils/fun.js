
class Utils {
    GetQueryDuration = (pre_query, post_query) => {
        return (post_query - pre_query) / 1000;
    }
}

module.exports = new Utils();