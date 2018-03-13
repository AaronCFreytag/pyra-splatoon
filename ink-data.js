const EventEmitter = require("events");
const got = require("got");

/**
    A class which both retrieves data from splatoon2.ink
    and caches the data 
*/
module.exports = class InkData extends EventEmitter {
    constructor() {
        this.cache = {
            locale: null,
            gear: null
        };
    }
    
    async downloadAll(baseUrl) {
        
    }
    
    async updateLocale(url) {
    }
    
    async updateGear(url) {
    }
    
    async on(event, fn) {
    }
};