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
  array.forEach((item) => {
    return item.product.price * item.quantity;
  });
};

console.log(calcInventoryValue(inventory));
