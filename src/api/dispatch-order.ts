import { api } from '@/lib/axios'

export interface DispatchOrderOrderParams {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderOrderParams) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
