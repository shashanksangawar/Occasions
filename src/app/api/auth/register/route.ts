// http://localhost:3000/api/auth/register

import { NextRequest, NextResponse } from "next/server";
import { signup } from "./logic/user";


export async function POST(request: NextRequest) 
{
    try
    {

        // For Adding a Single Product
        const data: JSON | any = await request.json();    
        const user_add_result = await signup(data); 
        if(user_add_result.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': 'User Registered',
                    'output': user_add_result.output
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
                    'returncode': user_add_result.returncode,
                    'message': user_add_result.message,
                    'output': user_add_result.output
                },
                {
                    status: user_add_result.returncode,
                });
        
        }
    
    }
    catch (error: any) 
    {
        return NextResponse.json(
            {
                'returncode': 400,
                'message': error.message,
                'output': []
            },
            {
                status: 400,
            });
    }
}