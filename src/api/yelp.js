import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 2xybZUrBUE8P_LFWfAPjofwQYP8phQkPO_TLzanBbEyOES2i-RkCzP1SI2WaQNh-S8WUzRNlGmR_1gUUqD447fW3-RSrhUUrXINheOT_WVLBtH80Fcy2N1iVlo-xXXYx'
    }
});
