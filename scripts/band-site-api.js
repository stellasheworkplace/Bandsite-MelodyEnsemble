class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async getComments() {
        const response = await axios.get (`${this.baseURL}/comments?api_key=${this.apiKey}`);
        const comments = response.data;
        comments.sort((a,b) => {
            return b.timestamp - a.timestamp;
        });
        return comments;
    }

    async postComments(newComment) {
        const response = await axios.post (`${this.baseURL}/comments?api_key=${this.apiKey}`, newComment);
        return response.data;    
    }

    async getShows() {
        const response = await axios.get (`${this.baseURL}/showdates?api_key=${this.apiKey}`);
        const shows = response.data.map((show) => ({
            date: new Date(show.date).toDateString(),
            venue: show.place,
            location: show.location,
          }));
        return shows;
    }
}


export default BandSiteApi;

