import { CITIES } from "../../utils/constants";

const CitySelector = ({ city, setCity }) => {
  return (
    <select value={city} onChange={(e) => setCity(e.target.value)}>
      {CITIES.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
