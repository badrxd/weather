"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="h-screen w-screen">
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
