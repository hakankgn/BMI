import React, { useState, useMemo } from "react";
import "./styles.css";

export default function Home() {
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(140);

  const calculateBmi = useMemo(() => {
    const heightToMt = height / 100;
    const bmiValue = (weight / Math.pow(heightToMt, 2)).toFixed(2);
    return bmiValue;
  }, [weight, height]);

  const getBmiCategory = useMemo(() => {
    if (calculateBmi < 18.5) {
      return { label: "Zayıf", color: "darkgoldenrod" };
    } else if (calculateBmi < 25) {
      return { label: "Normal kilolu", color: "green" };
    } else if (calculateBmi < 30) {
      return { label: "Fazla kilolu", color: "orange" };
    } else {
      return { label: "Obez", color: "red" };
    }
  }, [calculateBmi]);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  return (
    <main className="main">
      <div className="container">
        <div className="title">
          <h1>Vücut Kitle İndeksi Hesaplayıcı</h1>
        </div>
        <div className="input-container">
          <div>Kilonuz: {weight} kg</div>
          <input
            type="range"
            name="weight"
            id="weight"
            min={40}
            max={180}
            value={weight}
            onChange={handleWeightChange}
          />
          <div>Boyunuz: {height} cm</div>
          <input
            type="range"
            name="height"
            id="height"
            min={140}
            max={210}
            value={height}
            onChange={handleHeightChange}
          />
        </div>
        <div className="bmi-container">
          <div className="bmi">VKI: {calculateBmi}</div>
          <div className="result" style={{ color: getBmiCategory.color }}>
            {getBmiCategory.label}
          </div>
        </div>
      </div>
    </main>
  );
}
