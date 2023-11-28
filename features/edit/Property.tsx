import dynamic from "next/dynamic";
import { TEST, TEST_ITEM } from "./Edit.constants";

let remoteListItems: any;

if (typeof window !== "undefined") {
  remoteListItems = require("items/listItems").default;
}

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
  const handleChange = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      List Property
      <RemoteProperty
        {...TEST}
        onChange={handleChange}
        // item={remoteListItems.getItem(TEST.id)}
        item={TEST_ITEM}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Property), {
  ssr: false,
});
