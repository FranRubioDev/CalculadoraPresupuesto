export type ServiceItemT = {
    id: number,
    name: string,
    price: number


}

export type OrderItemT = ServiceItemT & {
    quantity: number



}