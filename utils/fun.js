
class Utils {
    GetQueryDuration = (pre_query, post_query) => {
        return (post_query - pre_query)
    }

    GetNewDateTime = () => new Date().getTime();

    FormatTinyIntToBooleanFields = (_data, _fields) => {
        
        for (let dkey in _data) {
            let index = 0;
            for (let k in _data[dkey]) {

                if (_data[dkey][k] == 0 && _fields[index].type == 1) {
                    _data[dkey][k] = false;
                }

                if (_data[dkey][k] == 1 && _fields[index].type == 1) {
                    _data[dkey][k] = true;
                }

                index++;
            }
        }

        return _data
    }
}

module.exports = new Utils();