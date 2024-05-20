// http://localhost:3000/api/product/add
import { NextRequest, NextResponse } from "next/server";
import ProductAdd from "./logic/product";

export async function POST(request: NextRequest) 
{
    try 
    {
        const data: JSON | any = request.json();
        const add_result = ProductAdd(data);

    } 
    catch (error: any)
    {
        
    }    
}