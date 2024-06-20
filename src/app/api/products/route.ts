import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  return NextResponse.json(products);
}
