import {OrderItemDTO} from "./OrderItemDTO.ts";

export interface OrderPayload {
    items: OrderItemDTO[]
}