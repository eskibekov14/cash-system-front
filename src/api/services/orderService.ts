import httpClient from '../httpClient';
import {OrderPayload} from "../../domain/models/OrderPayload.ts";
import {OrderResponse} from "../../domain/models/OrderResponse.ts";


export const orderService = {
    createOrder: (payload: OrderPayload) =>
        httpClient.post<OrderResponse>('/orders', payload).then(res => res.data),

}