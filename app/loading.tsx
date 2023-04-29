import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";

function Loading() {
  return (
    <div className="bg-gradient-to-br from-[#394568] to-[#18387E] min-h-screen flex flex-col items-center justify-center text-slate-500">
      <ClipboardDocumentCheckIcon
        className="animate-spin h-24 w-24 text-yellow-500"
        color="yellow"
      />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Summarizing the article...
      </h1>
      <h2 className="text-xl font-bold text-center animate-pulse mb-10">
        Hold on..
      </h2>
    </div>
  );
}

export default Loading;
