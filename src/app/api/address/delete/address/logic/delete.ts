// /api/address/delete/address/logic/delete.ts
import { getXataClient } from "../../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

// Fetch a Single User Credentials
export async function address_delete(data: JSON | any) 
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
            const address_id: String | any = data['address_id'];
            let user_check: any = await connection.db.user_address.filter({id: address_id}).getAll();
            user_check = JSON.parse(user_check);

            // Check for UserId
            try
            {
                if(user_check[0].id==address_id)
                {
                    let user: any = await connection.db.user_address.delete(address_id);
                    return {
                        'returncode': 0,
                        'message': "Address Deleted.",
                        'output': user
                    }
                }
    
            }
            catch(error: any)
            {
                console.log(error.message);
                return {
                    'returncode': 400,
                    'message': "Address Not Found.",
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
