import { NextResponse } from "next/server";
// import data from "../../data.json";

export async function GET(request) {
  return NextResponse.json("badr eddine ouydir");
}

export async function POST(request) {
  let city = await request.json();
  try {
    let URL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.KEY}&q=${city}&days=7`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    if (data?.error) {
      return NextResponse.json(
        { error: true, message: "Problem in Server" },
        { status: 500 }
      );
    }
    return NextResponse.json({ ...data });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Problem in Server" },
      { status: 500 }
    );
  }
}
