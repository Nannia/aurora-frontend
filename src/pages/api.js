import axios from "axios";

export const getPosts = async () => {
    const response = await axios.get('https://volunteer-site.herokuapp.com/api/v1/showAllPosts');
    return response.data;
}

