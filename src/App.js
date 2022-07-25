import { useEffect, useState } from "react";

import { useOptionContext } from "./components/context/OptionsContext";
import MultiSelect from "./components/MultiSelect/MultiSelect";

const dummyOptions = Array.from({ length: 5 }).map((_, i) => `Option ${i}`);

function App() {
  const [selectedOptions, setSelectedOptions] = useState([
    "Option 1",
    "Option 3",
  ]);

  const { setSelectedOptions: setOptions } = useOptionContext();

  useEffect(() => {
    setOptions(selectedOptions);
  }, [selectedOptions]);

  return (
    <>
      <input type="text" />
      <MultiSelect
        options={dummyOptions}
        selectedOptions={selectedOptions}
        onSelect={setSelectedOptions}
      />
      <input type="text" />
      {JSON.stringify(selectedOptions)}
    </>
  );
}

export default App;
