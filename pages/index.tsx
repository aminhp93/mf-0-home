import dynamic from "next/dynamic";
import { capitalizeText } from "mf-packages";

import Link from "next/link";

const IndexPage = () => {
  console.log(capitalizeText("hello world"));

  return (
    <div>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/view/123">view id</Link>
        </li>
        <li>
          <Link href="/edit/123">edit id</Link>
        </li>
      </ul>
    </div>
  );
};

export default dynamic(() => Promise.resolve(IndexPage), {
  ssr: false,
});
