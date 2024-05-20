// api/product/insert/logic/product.ts

// Library Imports
import { XataFile } from "@xata.io/client";
import { getXataClient } from "../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export default async function ProductAdd(data: JSON | any) 
{
    // Database Connection not formed
    if (connection == undefined || connection == null) 
    {
        return {
            'returncode': 400,
            'message': "Connection With Xata wasn't established.",
            'output': []
        }
    }

    try 
    {
        // Request variables fetched
        const category: String | any = data['category'];
        const subcategory: String | any = data['subcategory'];
        const title: String | any = data['title'];
        const description: String | any = data['description'];
        const ratings: String | any = data['ratings'];
        const price: String | any = data['price'];
        const features: Array<String> | any = data['features'];
        const about_product: String | any = data['about_product'];
        const quantity: Float64Array | any = data['quantity'];
        const product_image: ImageData | any = data['product_image'];
        const experience_video: any = data['experience_video'];

        // User Request variables is Invalid
        const filter = data_values_checker(category, subcategory, title, description, ratings, price, features, about_product, quantity);
        if (filter) {
            return {
                'returncode': 400,
                'message': "Invalid Values, Please go through documentation once again.",
                'output': []
            }
        }

        // Add Product
        const add_product = await connection.db.product_details.create(
        {
            Category: category,
            SubCategory: subcategory,
            Title: title,
            Description: description,
            Ratings: ratings,
            Price: price,
            Features: features,
            AboutProduct: about_product,
            Quantity: quantity,
            ProductImages: [XataFile.fromBase64(product_image)],
            ExperienceVideo: [XataFile.fromBase64(experience_video)]
        });

        // Return Success
        return {
            'returncode': 0,
            'message': 'Product Added.',
            'output': add_product
        }
    }
    catch (error: any) 
    {
        return {
            'returncode': 500,
            'message': `Error Inserting Product ==> ${error.message}`,
            'output':[]
        }
    }
}

function data_values_checker(category: any, subcategory: any, title: any, description: any, ratings: any, price: any, features: any, about_product: any, quantity: any): boolean {
    if (invalid_values() || null_values() || undefined_values() || float_values()) {
        return true;
    }
    else {
        return false
    }

    // Empty Values
    function invalid_values(): boolean {
        return category === '' || subcategory === '' || title === '' || description === '' || ratings === '' || price === '' || features === '' || about_product === '' || quantity == '';
    }

    // Empty Values
    function null_values(): boolean {
        return category === null || subcategory === null || title === null || description === null || ratings === null || price === null || features === null || about_product === null || quantity === null;
    }

    // Undefined Values
    function undefined_values(): boolean {
        return category === undefined || subcategory === undefined || title === undefined || description === undefined || ratings === undefined || price === undefined || features === undefined || about_product === undefined || quantity === undefined;
    }

    // Undefined Values
    function float_values(): boolean {
        return quantity <= 0;
    }

}
