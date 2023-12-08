/* eslint no-use-before-define: 0 */

import dynamic from "next/dynamic";
// @ts-expect-error Import remote module
import remotePropertySymbols from "property/symbols";
import useEditStore from "./store";
// import { useState } from "react";

console.log({ remotePropertySymbols });

export const GEOMETRY = remotePropertySymbols?.symbols?.GEOMETRY;

// const TEST_PROPERTY = {
//   properties: {
//     geometry: {
//       label: "Geometry",
//       type: GEOMETRY,
//       value: {
//         width: 40,
//         height: null,
//       },
//     },
//   },
//   id: "Circle",
//   name: "Circle",
//   label: "Circle",
// };

// const RemoteProperty = dynamic(
//   () =>
//     import(
//       // @ts-expect-error Import remote module
//       "property/Property"
//     ),
//   {
//     ssr: false,
//   }
// );

const Property = () => {
  // const [test, setTest] = useState(TEST_PROPERTY);

  // const handleChange = (e: any) => {
  //   console.log("handleChange", e);
  //   setTest({
  //     ...test,
  //     properties: {
  //       ...test.properties,
  //       ...e,
  //     },
  //   });
  // } ;

  const selectedItems = useEditStore((state) => state.selectedItems);
  console.log({
    selectedItems,
  });

  return (
    <div>
      <div>List Property</div>

      {/* <RemoteProperty {...test} onChange={handleChange} /> */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Property), {
  ssr: false,
});
