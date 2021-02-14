MySQL = {
    Async = {},
    Sync = {}
}

function MySQL.Sync.fetchAll(query, params)
    assert(type(query) == "string" or type(query) == "number", "The SQL Query must be a string")

    local res = {}
    local finishedQuery = false

    if params == nil then 
        params = 0 
    end

    TriggerEvent("Citizen:SQL:fetchAllWithNamedParams", query, params, function(data, time)
        res = data
        finishedQuery = true
    end)
    repeat Citizen.Wait(0) until finishedQuery == true
    return res
end