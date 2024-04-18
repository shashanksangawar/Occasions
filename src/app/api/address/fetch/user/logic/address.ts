// /api/address/fetch/address/logic/address.ts
import { getXataClient } from "../../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

// Fetch a Single User Credentials
export async function address_fetch(data: JSON | any) 
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
            const username: String | any = data['username'];
            
            let address: any = await connection.db.user_address.filter({
                'User_Id.Username': username
            }).getAll();
            address = JSON.parse(address);

            return {
                'returncode': 0,
                'message': "Address Fetched.",
                'output': address
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
