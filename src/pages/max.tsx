import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const max: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#209153] to-[#0a754f]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Nice to see you <span className="text-[hsl(119,49%,53%)]">Max</span> 
          </h1>
    
        </div>
        <Link
            //   className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/"
            //   target="_blank"
            >
            <h3 className="text-2xl font-bold from-[#8cdcb0]">Back to home →</h3>
        </Link>
      </main>
    </>
  );
};

export default max;
