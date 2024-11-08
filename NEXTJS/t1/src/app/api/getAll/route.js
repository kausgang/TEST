import { NextResponse } from "next/server";

export async function POST(req) {
  //   const res = await req.json();
  // const body = await req.json();
  // console.log("Received body:", body); // Log the parsed body

  console.log("worked");

  return new NextResponse({ test_response: "test_response" }, { status: 200 });
}
