export default function BoilingWater({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p>Water would boil</p>;
  }
  return <p>Water Wouldn't boil</p>;
}
