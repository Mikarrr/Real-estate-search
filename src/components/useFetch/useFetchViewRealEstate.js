import { useEffect, useState } from "react";

const useFetchViewRealEstate = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        const data = await response.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
};

export default useFetchViewRealEstate;
