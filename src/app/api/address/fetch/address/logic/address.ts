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
            const address_id: String | any = data['address_id'];
            let address: any = await connection.db.user_address.filter({id: address_id}).getAll();
            address = JSON.parse(address);
            return {
                'returncode': 0,
                'message': "Address Deleted.",
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
