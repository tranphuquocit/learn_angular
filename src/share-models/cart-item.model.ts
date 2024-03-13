export interface CartItem {
  id?: number,
  image?: string,
  description?: string,
  price?: number,
  quantity?: number,
  subtotal?: number,
  deliveryOption?: string,
  delivery?: number,
  total?: number,
  isChecked?: boolean
}
