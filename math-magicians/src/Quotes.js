import React, { useEffect, useState } from 'react';

const api = 'F8YLcsGyeeN6lwY5l4RU1Q==PzgrzvWMKoKka4iR';
const url = 'https://api.api-ninjas.com/v1/quotes?category=success';

function QuoteDisplay() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const data = await fetch(url, {
          headers: {
            'X-Api-Key': api,
          },
        });
        const json = await data.json();
        setQuotes(json);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchQuotes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>The Quote could not be displayed becouse of an error.</div>;
  }

  return (
    <div className="w-1/2 flex flex-col mx-auto p-4 bg-gray-200/50 shadow-md mt-16">
      <h1 className="text-center">Quotes of the Day</h1>
      {quotes.map((element) => (
        <div key={element.quote}>
          <h2 className="text-center">{element.quote}</h2>
          <h3 className="text-center text-orange-400">{element.author}</h3>
        </div>
      ))}
    </div>
  );
}

export default QuoteDisplay;
