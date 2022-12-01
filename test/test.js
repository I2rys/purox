"use strict";

// Dependencies
const purox = require("../index")

// Main
describe("Is VPN", ()=>{
    test("VPN", async()=>{
        const result = await purox("185.122.223.38")
    
        expect(result).toBe(true)
    })

    test("Not VPN", async()=>{
        const result = await purox("1.1.1.1")
    
        expect(result).toBe(false)
    })
})