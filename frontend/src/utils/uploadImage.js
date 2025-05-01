import { API_PATHS } from "./apipaths";
import axiosInstance from "./axiosinstance";

const uploadImage = async (imageFile) => {
    const formData = new FormData();
    //   Append image file to form data
    formData.append("image", imageFile);

    try {
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Set header for upload
            },
        });

        return response.data; // return response data

    } catch (error) {
        console.error("Image upload failed:", error);
        throw error; // Rethrow error for handling
    }
}


export default uploadImage;