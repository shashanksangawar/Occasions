// http://localhost:3000/api/address/update/status

import { NextRequest, NextResponse } from "next/server";
import { change_address } from "./logic/change";

//  Add a User Address
export async function PUT(request: NextRequest)
{
    try 
    {
        const data: JSON | any = await request.json();
        const address_change: any = await change_address(data); 
        if(address_change.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': 'Address Changed',
                    'output': address_change.output
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
                    'returncode': address_change.returncode,
                    'message': address_change.message,
                    'output': address_change.output
                },
                {
                    status: address_change.returncode,
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