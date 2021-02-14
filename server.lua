
Citizen.CreateThread(function()
    TriggerEvent("Citizen:SQL:executeQueryAndReturnValues", 
    "SELECT * FROM vrp_user_vehicles WHERE PLATE = 'W066S0K0'",
    function(data, time)
        print(data)
        print(time)
    end
)
end)