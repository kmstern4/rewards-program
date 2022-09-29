import { purchases } from "../mock-data/mockPurchases";

export const getRewardPoints = (customerId) => {
    try {
        // const requestInit = {
        //     method: 'GET',
        //     headers: 'headers'
        // };

        // return await fetch(`api.endpoint.goes/here/${customerId}`, requestInit)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .catch((error) => {
        //         throw error;
        //     })

        const mockResponse = purchases.find(object => object.id === customerId);

        return mockResponse;
    } catch (error) {
        throw error;
    }
}
