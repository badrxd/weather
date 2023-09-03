"use client";
import React, { useEffect, useState, Suspense } from "react";
import { LiaSearchLocationSolid } from "react-icons/lia";
// import getData from "@/utils/fetch";
import Body from "@/components/body/Body";
import Loading from "@/components/body/Loading";
import { useQuery } from "@tanstack/react-query";

async function getData(city) {
  const options = {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "your-api-key",
      "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
    },
    body: JSON.stringify(city),
  };
  const response = await fetch("http://localhost:3000/api/", options);
  let data = await response.json();
  if (data?.error) {
    throw new Error("Network response was not ok");
  }
  return data;
}

function Search({ DATA }) {
  const [city, setCity] = useState("beni mellal");
  const [Data, setData] = useState(false);

  useEffect(() => {
    setData(DATA);
  }, [DATA]);

  const { isError, data, error, refetch, isFetching, isSuccess } = useQuery({
    enabled: false,
    queryKey: ["badr"],
    queryFn: () => getData(city),
  });
  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="w-full p-4 bg-sky-600 rounded box-content	">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          refetch();
        }}
        className="flex flex-row justify-between items-center"
      >
        {isError ? <label htmlFor=""> wrong city</label> : null}
        <input
          className="h-10 rounded-full placeholder:italic placeholder:text-slate-400 pl-5 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          type="text"
          placeholder="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button
          type="submit"
          style={{
            color: "black",
            transform: "scalex(-1)",
            fontSize: "24px",
          }}
          className="flex justify-center items-center bg-white h-10 w-10 rounded-full"
        >
          <LiaSearchLocationSolid />
        </button>
      </form>
      {Data ? <Body data={isSuccess ? data : Data} /> : <Loading />}
      <div className="flex justify-center items-center pt-2 text-white">
        BADR XD
      </div>
    </div>
  );
}

export default Search;
