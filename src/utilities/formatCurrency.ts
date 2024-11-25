const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "PKR",
  style: "currency",
});

export function formatCurrency(num: number) {
  return CURRENCY_FORMATTER.format(num);
}
