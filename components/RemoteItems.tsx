import { useEffect, useState } from "react";
// load content of all files in components folder
let xxx: any;
// @ts-ignore
import("items/components").then((res) => {
  //   console.log(res);
  xxx = res;
});

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return <div></div>;
  if (!xxx) return <div></div>;

  return (
    <div>
      {Object.keys(xxx).map((i) => {
        return xxx[i] && xxx[i]();
      })}
    </div>
  );
};

export default Page;
