// http://localhost:3000/api/address/delete/address

import { NextRequest, NextResponse } from "next/server";
import { address_delete } from "./logic/delete";

//  Delete a User Address
export async function DELETE(request: NextRequest)
{
    try 
    {
        const data: JSON | any = await request.json();
        const delete_result: any = await address_delete(data); 
        if(delete_result.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': 'Address Deleted',
                    'output': delete_result.output
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
                    'returncode': delete_result.returncode,
                    'message': delete_result.message,
                    'output': delete_result.output
                },
                {
                    status: delete_result.returncode,
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