export interface CartItem {
  id?: number,
  type?: string,
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
