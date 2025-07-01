import axios from 'axios'
const api = 'http://192.168.122.181.nip.io:38080/'

export const AllApi = {
    // FlightController
    getFlight: ({ page = 0, size = 100, sort = ['string'] }) => axios.get(`${api}/api/flight`, { params: { page, size, sort } }),
    putFlight: () => axios.put(`${api}/api/flight`),
    postFlight: () => axios.post(`${api}/api/flight`),
    getFlightById: (id) => axios.get(`${api}/api/flight/${id}`),
    deleteFlightById: (id) => axios.delete(`${api}/api/flight/${id}`),

    // TicketController
    getTicket: ({ page = 0, size = 100, sort = ['string'] }) => axios.get(`${api}/api/ticket`, { params: { page, size, sort } }),
    postTicket: () => axios.post(`${api}/api/ticket`),
    getTicketById: (id) => axios.get(`${api}/api/ticket/${id}`),
    getMyTicket: ({ page = 0, size = 100, sort = ['string'] }) => axios.get(`${api}/api/ticket/my`, { params: { page, size, sort } }),
    getTicketHold: (ticketID) => axios.get(`${api}/api/ticket/hold/${ticketID}`),
    getTicketCancel: (ticketID) => axios.get(`${api}/api/ticket/cancel/${ticketID}`),
    getTicketBuy: (ticketID) => axios.get(`${api}/api/ticket/buy/${ticketID}`),
    getTicketAvailable: ({ from, to, page = 0, size = 100, sort = ['string'] }) => axios.get(`${api}/api/ticket/available`, { params: { from, to, page, size, sort } }),
    getTicketAvailableRoundTrip: ({ from, to, page = 0, size = 100, sort = ['string'], page = 0, size = 100, sort = ['string'] }) => axios.get(`${api}/api/ticket/available/roundtrip`, { params: { from, to,  page, size, sort, page, size, sort } }),
    getTicketAvailableDatePeriod: ({ from, to, startDate, endDate, page = 0, size = 100, sort = ['string'] }) => axios.get(`${api}/api/ticket/available/date/period`, { params: { from, to, startDate, endDate, page, size, sort } }),
    deleteTicketById: (id) => axios.delete(`${api}/api/ticket/${id}`),

    // CityController
    getCity: ({ page = 0, size = 100, sort = ['string'] }) => axios.get(`${api}/api/city`, { params: { page, size, sort } }),
    postCity: () => axios.post(`${api}/api/city`),
    getCityById: (id) => axios.get(`${api}/api/city/${id}`),
    deleteCityById: (id) => axios.delete(`${api}/api/city/${id}`),
    getCityByName: (cityName) => axios.get(`${api}/api/city/name/${cityName}`),
    getCityByIataCode: (iataCode) => axios.get(`${api}/api/city/iata/${iataCode}`),
}