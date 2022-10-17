import React, { Component } from "react";
import WaterTemperatureInput from "./WaterTemperatureInput";
import BoilingWater from "./BoilingWater";
import {
  convert,
  toCelsiusConveter,
  toFahrenheitConveter,
  tokelvinConveter,
} from "../lib/TemperatureConveter";

export default class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;

    const celsius =
      scale === "f" ? convert(temperature, toCelsiusConveter) : temperature;
    const faharenhit =
      scale === "c" ? convert(temperature, toFahrenheitConveter) : temperature;
    const kelvin =
      scale === "f" ? convert(temperature, tokelvinConveter) : temperature;

    return (
      <div>
        <WaterTemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <WaterTemperatureInput
          scale="f"
          temperature={faharenhit}
          onTemperatureChange={this.handleChange}
        />
        <WaterTemperatureInput
          scale="k"
          temperature={kelvin}
          onTemperatureChange={this.handleChange}
        />
        <BoilingWater celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
