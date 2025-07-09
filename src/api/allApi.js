import axios from 'axios'
const api = axios.create({
    baseURL: 'http://192.168.122.181.nip.io:38080',
});

export const AllApi = {

    // Interceptor
    // TicketController
    getTicket: ({ page = 0, size = 100 }) =>
        api.get('/api/ticket',
            {
                params: { page, size },
                headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTUwMTQ3NzUwMDc4MjE1OTczNDgiLCJlbWFpbCI6ImFsdWFucmx5YmVrb3ZhQGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzUxMzQ1Nzc1LCJleHAiOjUyNTQyOTY1MjU0fQ.DkjqSsr4QQCLaVy7_PHy5KFcnPqpjb2z5qCdgHQ0UVk' },
            }),
    getTicketAvailable: ({ from, to, page = 0, size = 100 }) =>
        api.get('/api/ticket/available', {
            params: { from, to, page, size },
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTUwMTQ3NzUwMDc4MjE1OTczNDgiLCJlbWFpbCI6ImFsdWFucmx5YmVrb3ZhQGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzUxMzQ1Nzc1LCJleHAiOjUyNTQyOTY1MjU0fQ.DkjqSsr4QQCLaVy7_PHy5KFcnPqpjb2z5qCdgHQ0UVk' },
        }),


    // CityController
    getCity: ({ page = 0, size = 100 }) =>
        api.get('/api/city', {
            params: { page, size },
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTUwMTQ3NzUwMDc4MjE1OTczNDgiLCJlbWFpbCI6ImFsdWFucmx5YmVrb3ZhQGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzUxMzQ1Nzc1LCJleHAiOjUyNTQyOTY1MjU0fQ.DkjqSsr4QQCLaVy7_PHy5KFcnPqpjb2z5qCdgHQ0UVk' },
        }),

}