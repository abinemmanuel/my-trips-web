
const service = 'http://localhost:3009/dev';

export const apiConfig = {
    baseUrl: service,
    trips: {
        url:`${service}/v1/trips`,
        method:'GET'
    }
};
