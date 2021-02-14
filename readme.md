## 🐌 DB Driver for FiveM (Citizen.fx)

### 🔥 Events ->

- ⚡ Citizen:SQL:executeQuery
- ⚡ Citizen:SQL:executeQueryAndReturnValues

### 🌚 Example in Lua ->

 - 🏈 executeQueryAndReturnValues
```lua
    function GetData()
        local event = "Citizen:SQL:executeQueryAndReturnValues"
        local sql = "SELECT * FROM vrp_user_vehicles WHERE PLATE = 'W066S0K0'"
        local callback = function(data, time)
            -- data
            -- time in ms
        end
        TriggerEvent(event, sql, callback)
    end
    Citizen.CreateThread(GetData)
```
 - 🏈 executeQuery
 ```lua
    function SetData()
        local event = "Citizen:SQL:executeQuery"
        local sql = "SELECT * FROM vrp_user_vehicles WHERE PLATE = 'W066S0K0'"
        TriggerEvent(event, sql)
    end
    Citizen.CreateThread(SetData)
```