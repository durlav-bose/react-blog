import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    fetch(url).then(res => {
      if(!res.ok) {
        throw Error("Hello Error");
      }
      return res.json();
    }).then(data => {
      setData(data);
      setIsError(null);
      setIsLoading(false);
    }).catch(err => {
      setIsError(err.message)
      setIsLoading(false);
    })
  }, [url])

  return { data, isLoading, isError };
}

export default useFetch;