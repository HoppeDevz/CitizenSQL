Citizen.CreateThread(function()
    local rows = MySQL.Sync.fetchAll("SELECT * FROM vrp_user_vehicles WHERE plate = @plate", {
        ["@plate"] = "YJ1689X0"
    })

    print('rows', rows[1].model)
end)

