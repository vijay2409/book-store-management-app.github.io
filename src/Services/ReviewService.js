import axios from "axios";

const RVIEW_API_BASE_URL="http://localhost:8080/reviews";

class ReviewService{

    listAllReviews(){
        return axios.get(RVIEW_API_BASE_URL);
    }

}

export default new ReviewService()