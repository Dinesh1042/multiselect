import { useOptionContext } from "../context/OptionsContext";

const SelectedOptions = () => {
  const { selectedOptions } = useOptionContext();

  return (
    <div>SelectedOptions Component : {JSON.stringify(selectedOptions)}</div>
  );
};
export default SelectedOptions;
