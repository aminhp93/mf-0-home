// load content of all files in components folder
let xxx: any;
// @ts-ignore
import("items/components").then((res) => {
  console.log(res);
  xxx = res;
});

const Page = () => {
  if (!xxx) return;

  return (
    <div>
      {Object.keys(xxx).map((i) => {
        return xxx[i] && xxx[i]();
      })}
    </div>
  );
};

export default Page;
