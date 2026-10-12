import axios from "axios";

export const getAccessToken = async () => {
    const credentials = 
      `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`;

    const encodedCredentials = Buffer.from(credentials).toString("base64");

    const response = await axios.get(
        "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
        {
            headers: {
                Authorization: `Basic ${encodedCredentials}`
            }
        }
    );

    return response.data.access_token;

};