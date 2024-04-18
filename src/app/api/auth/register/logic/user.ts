// /api/auth/register/logic/user.ts

import { getXataClient } from "../../../../../xata";
import bcrypt from 'bcrypt';

// Database Connection Pool
const connection = getXataClient();

// Fetch a Single User Credentials
export async function signup(data: JSON | any) 
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
            const username: String = data['username'];
            const password: any = data['password'];
            const email: String = data['email'];

            let user_check: any = await connection.db.user_details.filter({Username: username}).getAll();
            let email_check: any = await connection.db.user_details.filter({Email: email}).getAll();
            user_check = JSON.parse(user_check);
            email_check = JSON.parse(email_check);

            // Check for Username
            try
            {
                if(user_check[0].Username==username)
                {
                    return {
                        'returncode': 400,
                        'message': "User account Exists, Please login.",
                        'output': []
                    }
                }
    
            }
            catch(error)
            {
                var pass = true;
            }

            // Check for Email
            try
            {
                
                if(email_check[0].Email==email)
                {
                    return {
                        'returncode': 400,
                        'message': "User account Exists, Please login.",
                        'output': []
                    }
                }
    
            }
            catch(error)
            {
                var pass = true;
            }
            

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await connection.db.user_details.create({
                Username: username,
                HashedPassword: hashedPassword,
                Email: email,
                SaltPassword: 'Appniche_Occasions'
            });

            return {
                'returncode': 0,
                'message': 'User Signed Up.',
                'output': user
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
