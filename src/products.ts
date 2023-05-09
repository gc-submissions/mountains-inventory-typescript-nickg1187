export interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Jellybeans", price: 3 },
  { name: "Snickers", price: 4 },
  { name: "Reeses", price: 5 },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  return (
    array.reduce((acc, cv) => {
      return acc + cv.price;
    }, 0) / array.length
  );
};

console.log(calcAverageProductPrice(products));
