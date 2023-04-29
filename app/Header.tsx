"use client";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  return (
    <header
      className="flex  items-center justify-between p-5 lg:max-w-6xl lg:mx-auto 
    "
    >
      <div
        className="flex items-center space-x-1 cursor-pointer"
        onClick={() => router.push(`/`)}
      >
        <Cog8ToothIcon className="h-8 w-8 text-red-400" />
        <h2 className="font-bold text-xl">Sumz</h2>
      </div>

      <button className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-xl text-white">
        github
      </button>
    </header>
  );
}

export default Header;
