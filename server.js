const mysql = require("mysql");
const fun = require("./utils/fun");

const db_connection = mysql.createPool({
    localAddress: "localhost",
    user: "root",
    password: "",
    database: "vrp_dev"
});

RegisterNetEvent('Citizen:SQL:executeQuery');
RegisterNetEvent('Citizen:SQL:executeQueryAndReturnValues');

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

/*let plates = [ "60Q2Q03N", "W066S0K0", "YJ1689X0", "42M1WV96", "60Q2Q03N", "3462NX6I" ];
let i = 0;

setInterval(() => {
    console.time("performance")
    let call = db_connection.query(`SELECT * FROM vrp_user_vehicles WHERE plate = '${plates[i]}'`, (err, results, fields) => {
        console.timeEnd("performance")
    });

    i++

    if (i > plates.length) {
        i = 0
    }

}, 500);*/