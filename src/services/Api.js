import axios from "axios";
import { useState, useEffect } from "react";
// import { Card } from "@chakra-ui/react";

function ApiResults() {
  // Function to get data from API
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000/g1");
      setData(result.data);
    };

    fetchData();
  }, []);

  return data;
}

export default ApiResults;
