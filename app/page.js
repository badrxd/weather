import Search from "@/components/head/Search";
import Image from "next/image";
import { Suspense } from "react";
import Provider from "@/components/providers/Provider";
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

  if (!response) {
    throw new Error("Failed to fetch data");
  }
  let data = await response.json();
  return data;
}

export default async function Home() {
  const DATA = await getData("beni mellal");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className="flex gap-4 flex-col items-center w-96 p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Provider>
            <Search DATA={DATA} />
          </Provider>
        </Suspense>
      </section>
    </main>
  );
}
