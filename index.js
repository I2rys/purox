"use strict";

// Dependencies
const ipMatching = require("ip-matching")
const request = require("request-async")

// Main
function purox(ip){
    return new Promise(async(resolve)=>{
        var proxy = false
        var response = await request("https://raw.githubusercontent.com/revoltchat/lists_vpn/main/ipv4.txt", {
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
            }
        })
    
        response = response.body.split("\n")
    
        for( const cidr of response ) if(cidr) if(ipMatching.matches(ip, cidr)) proxy = true

        resolve(proxy)
    })
}

module.exports = purox