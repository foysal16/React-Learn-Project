export function toCelsiusConveter(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheitConveter(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function tokelvinConveter(fahrenheit, Celsius) {
  return ((fahrenheit - 32) * 5) / 9 + 273.13;
}

export function convert(temperature, convertTo) {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return "";
  }

  const output = convertTo(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
