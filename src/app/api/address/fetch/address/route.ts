// http://localhost:3000/api/address/fetch/address

import { NextRequest, NextResponse } from "next/server";
import { address_fetch } from "./logic/address";

//  Delete a User Address
export async function POST(request: NextRequest)
{
    try 
    {
        const data: JSON | any = await request.json();
        const fetch_result: any = await address_fetch(data); 
        if(fetch_result.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': 'Address Fetched',
                    'output': fetch_result.output
                },
                {
                    status: 200,
                });
        
        }
        else
        {
            return NextResponse
            .json(
                {
                    'returncode': fetch_result.returncode,
                    'message': fetch_result.message,
                    'output': fetch_result.output
                },
                {
                    status: fetch_result.returncode,
                });
        
        }

    } 
    catch (error: any) 
    {
        return NextResponse.json(
            {
                'returncode': 400,
                'message': error.message,
                'output':[]
            },
            {
                status: 400
            }
        );
    }
}