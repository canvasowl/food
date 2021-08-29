import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term,
          limit: 50,
          location: "NYC",
        },
      });

      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return [searchApi, results, errorMsg];
};
