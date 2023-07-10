import "./styles.css";
import CustomWheelComponent from "./components/wheel.component";
import InputsComponent from "./components/inputs.component";
import { CATEGORIES } from "./data";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [categories, setCategories] = useLocalStorage(CATEGORIES, "wheel");
  const [show, setShow] = useState(true);

  const updateLabel = (idx, value) => {
    setCategories({
      ...categories,
      segments: categories.segments.map((seg, i) => (i === idx ? value : seg))
    });
    setShow(false);
    setTimeout(() => setShow(true));
  };

  const updateColor = (idx, value) => {
    setCategories({
      ...categories,
      colors: categories.colors.map((color, i) => (i === idx ? value : color))
    });
    setShow(false);
    setTimeout(() => setShow(true));
  };

  return (
    <div className="App">
      <CustomWheelComponent categories={categories} show={show} />
      <InputsComponent
        categories={categories}
        updateColor={updateColor}
        updateLabel={updateLabel}
      />
    </div>
  );
}
