-- To send a message to the listener, use the following code:

-- SendNUIMessage("Hello, listener!")
-- SendNUIMessage({
--     message = "Hello, listener!",
--     data = {
--         key1 = "value1",
--         key2 = "value2"
--     }
-- })

-- To receive a message from the listener, use the following code:

-- RegisterNUICallback("receive", function(data, cb)
--     cb("OK")
-- end)

-- Citizen.CreateThread(function()
--     while true do
--         Citizen.Wait(1500)

--         local isPauseMenuActive = IsPauseMenuActive()
--         SendNUIMessage({
--             action = "pauseMenuStatus",
--             status = isPauseMenuActive
--         })
    
--     end
-- end)