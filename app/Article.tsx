type Props = {
  articles: {
    summary: string;
  };
};
function Article({ articles: { summary } }: Props) {
  return (
    <div className="max-w-6xl mx-auto p-10 bg-slate-300 rounded-md text-gray-600">
      {summary}
    </div>
  );
}

export default Article;
