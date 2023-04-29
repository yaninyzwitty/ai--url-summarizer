import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import Article from "../Article";
import SearchInfo from "./SearchInfo";
export const revalidate = 60;

type Props = {
  searchParams: {
    url: string;
  };
};

async function ArticlePage({ searchParams: { url } }: Props) {
  const data = await fetchData(url);
  return (
    <main className="max-w-5xl mx-auto">
      <h2 className="text-4xl  font-bold text-center mt-2">
        Summarize articles with
        <br />
        <span className="bg-gradient-to-r from-orange-400 via-amber-600 to-yellow-500 bg-clip-text text-transparent">
          OPENAI, GPT-4
        </span>
      </h2>

      <h3 className="text-center max-w-xl lg:max-w-3xl mx-auto m-3 text-gray-500">
        <span className="text-blue-600 font-bold">Summize</span> is an
        open-source article summarizer that simplifies your reading by
        transforming long articles into clear and concise summaries
      </h3>

      <SearchInfo url={url} />
      <div className="py-2 max-w-3xl m-5 shadow-sm lg:mx-auto">
        <Article articles={data} />
      </div>
    </main>
  );
}

export default ArticlePage;

async function fetchData(url: string) {
  const res = await fetch(
    `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${url}&length=3`,
    {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "7558e83404msh2a9bd6f5cc293e2p151258jsn18abcf066b2d",
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    }
  );

  return res.json();
}
