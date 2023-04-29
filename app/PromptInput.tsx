"use client";
import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function PromptInput() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const prompt = input;
    setInput("");
    router.push(`/summarize?url=${encodeURIComponent(prompt)}`);
  };
  return (
    <form
      className="p-3 flex items-center shadow-md border border-gray-300 rounded-md space-x-2 m-10"
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="w-full focus:outline-none bg-transparent"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an url..."
      />
      <button
        className="mx-4 hover:bg-gray-400/10 hover:shadow-md border p-2 text-gray-700"
        type="submit"
      >
        <ArrowUturnRightIcon className="h-5 w-5" />
      </button>
    </form>
  );
}

export default PromptInput;
