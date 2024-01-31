import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiList() {
  const [qqq, setQqq] = useState("");

  useEffect(() => {
    const qqq = async() => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random")
      setQqq(result.data.message)
      console.log(result)
    }
    void qqq()
  }, [])
}