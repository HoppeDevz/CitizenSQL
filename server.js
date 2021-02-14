const db_connection = require("./database");
const fun = require("./utils/fun");
const settings = require("./settings");

RegisterNetEvent('Citizen:SQL:executeQuery');
RegisterNetEvent('Citizen:SQL:executeQueryAndReturnValues');
RegisterNetEvent('Citizen:SQL:fetchAllWithNamedParams')

onNet('Citizen:SQL:executeQuery', sql => {
    db_connection.query(sql);
});

onNet('Citizen:SQL:executeQueryAndReturnValues', (sql, callback) => {
    const pre_query = fun.GetNewDateTime();
    db_connection.query(sql, (err, results, fields) => {
        const post_query = fun.GetNewDateTime();
        
        callback(results, fun.GetQueryDuration(pre_query, post_query));
    });
});

onNet('Citizen:SQL:fetchAllWithNamedParams', (sql, params, callback) => {
    const pre_query = fun.GetNewDateTime();
    let query = sql;

    if ( params != 0 ) {
        for (key in params) {
            if (typeof(params[key]) == "string") {
                query = query.replace(key, `'${params[key]}'`);
            }

            if (typeof(params[key] == "number")) {
                query = query.replace(key, `${params[key]}`);
            }
        }
    }

    db_connection.query(query, (err, results, fields) => {
        const post_query = fun.GetNewDateTime();
        const time = fun.GetQueryDuration(pre_query, post_query)

        if (settings.show_debug_messages) {
            console.log(`[CITIZEN_SQL] [${time}ms] [${query}]`)
        }
        
        let data = fun.FormatTinyIntToBooleanFields(results, fields)
        callback(data, time);
    });
});