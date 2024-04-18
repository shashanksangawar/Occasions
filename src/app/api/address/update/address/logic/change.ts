// /api/address/update/status/logic/add.ts

import { getXataClient } from "../../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

// Add a Address of a user 
export async function change_address(data: JSON | any) 
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

        const address_id: String | any = data['address_id'];
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

            let address_check: any = await connection.db.user_address.filter({id: address_id}).getAll();
            address_check = JSON.parse(address_check);

            // Check for UserId
            try
            {
                if(address_check[0].id==address_id)
                {
                    try 
                    {
                        const address = await connection.db.user_address.update(address_id, 
                        {
                            Apartment: apartment,
                            Road: road,
                            Landmark: landmark,
                            City: city,
                            State: state,
                            Country: country,
                            ZipCode: zip_code,
                            Room: room
                        });
                
                        return {
                            'returncode': 0,
                            'message': 'Address Status Changed.',
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
                    'message': "Address Not Found.",
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