import dynamic from "next/dynamic";
// @ts-ignore
import remotePropertySymbols from "property/symbols";
import useEditStore from "./store";
import { useState } from "react";

export const GEOMETRY = remotePropertySymbols?.symbols?.GEOMETRY;

const TEST_PROPERTY = {
  properties: {
    geometry: {
      label: "Geometry",
      type: GEOMETRY,
      value: {
        width: 40,
        height: null,
      },
    },
  },
  id: "Circle",
  name: "Circle",
  label: "Circle",
};

const RemoteProperty = dynamic(
  () =>
    import(
      // @ts-ignore
      "property/Property"
    ),
  {
    ssr: false,
  }
) as any;

const Property = () => {
  const [test, setTest] = useState(TEST_PROPERTY);

  const handleChange = (e: any) => {
    console.log("handleChange", e);
    setTest({
      ...test,
      properties: {
        ...test.properties,
        geometry: {
          ...test.properties.geometry,
          value: {
            ...test.properties.geometry.value,
            ...e.geometry,
          },
        },
      },
    });
  };

  const selectedItems = useEditStore((state) => state.selectedItems);
  console.log({
    selectedItems,
  });

  return (
    <div>
      <div>List Property</div>
      <RemoteProperty {...test} onChange={handleChange} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Property), {
  ssr: false,
});
