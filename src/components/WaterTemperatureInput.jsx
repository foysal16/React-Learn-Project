import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
  k: "Kelvin",
};

export default function WaterTemperatureInput({
  temperature,
  scale,
  onTemperatureChange,
}) {
  return (
    <div className="w-full h-screen bg-black/70">
      <fieldset>
        <legend>Enter Temperture in {scaleNames[scale]}: </legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </div>
  );
}
