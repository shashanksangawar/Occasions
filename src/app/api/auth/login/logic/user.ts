// /api/auth/login/logic/user.ts

import { getXataClient } from "../../../../../xata";
import bcrypt from 'bcrypt';
const connection = getXataClient();

// Fetch a Single User Credentials
export async function sign_in(username: any, password: any) 
{
    try
    {
        if(connection==undefined || connection==null)
        {
            return {
                'returncode': 404,
                'message': "Connection With Xata wasn't established.",
                'output': []
            }
        }

        try 
        {
            let user: any = await connection.db.user_details.filter({Username: username}).getAll();
            user = JSON.parse(user);

            if(user==undefined || user==null)
            {
                return {
                    'returncode': 400,
                    'message': "User account not Found, Please recheck the entered username.",
                    'output': []
                }
            }

            const match = await bcrypt.compare(password, user[0].HashedPassword);

            if (match)
            {
                // Passwords match
                return {
                    'returncode': 0,
                    'message': 'User Authenticated',
                    'output': user
                }
            }
            else {
                // Passwords don't match
                return {
                    'returncode': 400,
                    'message': 'Incorrect Password',
                    'output': []
                }
            }
             
            
        } 
        catch (error: any)
        {
            return {
                'returncode': 500,
                'message': error.message,
                'output': []
            }
        }

    }
    catch(error: any)
    {
        return {
            'returncode': 503,
            'message': error.message,
            'output': []
        }
    }
}
