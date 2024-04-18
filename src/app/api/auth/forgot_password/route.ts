// http://localhost:3000/api/auth/forgot_password

import { NextRequest, NextResponse } from "next/server";
import { forget_password } from "./logic/user";
export async function PUT(request: NextRequest) 
{
    try
    {

        // For Adding a Single Product
        const data: JSON | any = await request.json();

    
        const password_change_result: any = await forget_password(data); 
        if(password_change_result.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': 'Password Changed.',
                    'output': password_change_result.output
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
                    'returncode': password_change_result.returncode,
                    'message': password_change_result.message,
                    'output': password_change_result.output
                },
                {
                    status: password_change_result.returncode,
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