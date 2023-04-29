"use client";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { MouseEvent, useState, useRef } from "react";
import { toast } from "react-hot-toast";

type Props = {
  url: string;
};

function SearchInfo({ url }: Props) {
  const router = useRouter();
  const textRef = useRef<HTMLParagraphElement>(null);

  const handleCopy = (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
    if (textRef.current) {
      const text = textRef.current.innerText;
      navigator.clipboard.writeText(text);
      toast.success(`Successfuly copied ${url}`, {
        icon: "📇",
        duration: 2000,
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#fff",
          backgroundColor: "#16a34a",
        },
      });
    }
  };

  return (
    <div className="lg:max-w-6xl max-w-lg mx-auto bg-slate-500/10 w-full h-30 hover:opacity-80 shadow-sm hover:shadow-md text-center cursor-pointer  transition-all duration-200 ease-out flex items-center px-20 p-2">
      <p
        className="flex-1 hover:underline underline-offset-2 decoration-slate-500"
        ref={textRef}
        onClick={() => router.push(url)}
      >
        {url}
      </p>
      <ClipboardDocumentIcon
        onClick={handleCopy}
        className="h-6 w-6 text-zinc-700 hover:bg-gray-300 rounded-sm p-[0.5px] m-1"
      />
    </div>
  );
}

export default SearchInfo;
