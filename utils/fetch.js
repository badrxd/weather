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
  return data;
}
export default getData;
