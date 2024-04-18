// http://localhost:3000/api/address/insert

import { NextRequest, NextResponse } from "next/server";
import { add_address } from "./logic/add";

//  Add a User Address
export async function POST(request: NextRequest)
{
    try 
    {
        const data: JSON | any = await request.json();
        const address_add: any = await add_address(data); 
        if(address_add.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': 'Address Added',
                    'output': address_add.output
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
                    'returncode': address_add.returncode,
                    'message': address_add.message,
                    'output': address_add.output
                },
                {
                    status: address_add.returncode,
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