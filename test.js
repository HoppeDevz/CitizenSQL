const fun = require("./utils/fun");

let fetchAll = (sql, params) => {
    const pre_query = fun.GetNewDateTime();
    let query = sql;

    for (key in params) {
        if (typeof(params[key]) == "string") {
            query = query.replace(key, `'${params[key]}'`);
        }
    }
}

fetchAll("SELECT * FROM vrp_user_vehicles WHERE plate = @plate", {
    ["@plate"]: "3462NX6I"
});