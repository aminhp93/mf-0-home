import { useEffect, useState } from "react";

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const [xxx, setXxx] = useState<any>(null);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // load content of all files in components folder
    let xxx: any;
    // @ts-ignore
    import("items/components").then((res) => {
      xxx = res;
      setXxx(xxx);
    });
  }, []);

  if (!isClient || !xxx) return <div />;

  return (
    <div>
      {Object.keys(xxx).map((i) => {
        return xxx[i] && xxx[i]();
      })}
    </div>
  );
};

export default Page;
