import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something Went Wrong.");
    }
  };

  useEffect(() => {
    searchApi("pasta");
    // Initial default search, just one time after the first render
  }, []);

  return [searchApi, results, errorMessage];
  // Return variables which we want to use in other components in an array
};
