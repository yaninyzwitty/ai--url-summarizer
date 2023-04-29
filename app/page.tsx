import PromptInput from "./PromptInput";

function Homepage() {
  return (
    <main className="max-w-6xl mx-auto">
      <h2 className="text-5xl  font-bold text-center mt-2">
        Summarize articles with
        <br />
        <span className="bg-gradient-to-r from-orange-400 via-amber-600 to-yellow-500 bg-clip-text text-transparent">
          OPENAI, GPT-4
        </span>
      </h2>
      <div className="max-w-3xl mx-auto">
        <PromptInput />
      </div>
      <h3 className="text-center max-w-xl lg:max-w-3xl mx-auto m-3 text-gray-500">
        <span className="text-black font-bold">Summize</span> is an open-source
        article summarizer that simplifies your reading by transforming long
        articles into clear and concise summaries. With Summize, you no longer
        have to struggle with trying to extract the important information from a
        lengthy article. This tool allows you to quickly and easily understand
        the main ideas and key points of any article thus saving you time
      </h3>
    </main>
  );
}

export default Homepage;
