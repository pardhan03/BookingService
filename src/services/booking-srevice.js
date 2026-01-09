const axios = require('axios');

const { BookingRepository } = require('../repository/index');
const { FLIGHT_SERVICE_PATH } = require('../config/serverConfig');
const { ServiceError } = require('../utils/errors/index');

class BookingService {
    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    // async createBooking() {
    //     try {
           
    //     } catch (error) { 
            
    //     }
    // }
}

module.exports = BookingService;