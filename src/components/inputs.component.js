import "./inputs.css";

const InputsComponent = ({ categories, updateColor, updateLabel }) => {
  return (
    <div className="inputs">
      {categories.segments.map((segment, i) => (
        <div className="segment-label">
          <input
            className="color"
            type="color"
            value={categories.colors[i]}
            onChange={({ target }) => updateColor(i, target.value)}
          />
          <input
            className="label"
            type="text"
            value={segment}
            onChange={({ target }) => updateLabel(i, target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default InputsComponent;
