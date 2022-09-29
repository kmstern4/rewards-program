import { purchases } from "../mock-data/mockPurchases";

export const getRewardPoints = (customerId) => {
    try {
        const mockResponse = purchases.find(object => object.id === customerId);

        return mockResponse;
    
    } catch (error) {
        throw error;
    }
}
