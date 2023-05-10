import { Product } from "./products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

export const calcInventoryValue = (array: InventoryItem[]): number => {
  let value = 0;
  array.forEach((item) => {
    value += item.product.price * item.quantity;
  });
  return value;
};

console.log(calcInventoryValue(inventory));
