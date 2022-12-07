export function toConvertPrice(price: number): string {
  return price.toFixed(2).replace('.', ',') + ' €'
}