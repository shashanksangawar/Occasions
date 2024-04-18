// /api/address/insert/logic/add.ts

import { getXataClient } from "../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

// Add a Address of a user 
export async function add_address(data: JSON | any) 
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

        const user_id: String | any = data['user_id'];
        const room: String | any = data['room'];
        const apartment: String | any = data['apartment'];
        const road: String | any = data['road'];
        const landmark: String | any = data['landmark'];
        const city: String | any = data['city'];
        const state: String | any = data['state'];
        const country: String | any = data['country'];
        const zip_code: String | any = data['zip_code'];

        try 
        {

            let user_check: any = await connection.db.user_details.filter({id: user_id}).getAll();
            user_check = JSON.parse(user_check);

            // Check for UserId
            try
            {
                if(user_check[0].id==user_id)
                {
                    try 
                    {
                        const address = await connection.db.user_address.create({
                            User_Id: user_id,
                            Apartment: apartment,
                            Road: road,
                            Landmark: landmark,
                            City: city,
                            State: state,
                            Country: country,
                            ZipCode: zip_code,
                            AddressType: "Active",
                            Room: room
                        });
                
                        return {
                            'returncode': 0,
                            'message': 'Address Added.',
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
    
            }
            catch(error: any)
            {
                return {
                    'returncode': 400,
                    'message': "Account Not Found.",
                    'output': []
                }
            }
    
        } 
        catch (error:any)
        {
            return(
                {
                    'returncode': 500,
                    'message': error.message,
                    'output':[]
                }
            );
        }
        
    } 
    catch (error:any) 
    {
        return(
            {
                'returncode': 500,
                'message': error.message,
                'output':[]
            }
        );
    }    
}