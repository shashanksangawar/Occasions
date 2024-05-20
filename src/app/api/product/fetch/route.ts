import { NextRequest, NextResponse } from "next/server";
import fetch_products from "./logic/product";

export async function GET() 
{
    const fetch_result = fetch_products();
}