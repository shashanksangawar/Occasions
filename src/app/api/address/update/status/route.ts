// http://localhost:3000/api/address/update/status

import { NextRequest, NextResponse } from "next/server";
import { change_status } from "./logic/change";

//  Add a User Address
export async function PUT(request: NextRequest)
{
    try 
    {
        const data: JSON | any = await request.json();
        const status_change: any = await change_status(data); 
        if(status_change.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': 'Address Status Changed',
                    'output': status_change.output
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
                    'returncode': status_change.returncode,
                    'message': status_change.message,
                    'output': status_change.output
                },
                {
                    status: status_change.returncode,
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