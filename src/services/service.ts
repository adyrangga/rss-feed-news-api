import axios from "axios";

export const ApiGet = async (url: string) => {
    try {
        const { data, status } = await axios.get<any>(url);
        // console.log('ApiGet success', data, status);
        return { data, status };
    } catch (error) {
        // console.log('ApiGet error: ', error);
        return { data: 'An unexpected error occurred', status: 500 };
    }
}
