import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    API_URL: "https://www.breakingbadapi.com/api/characters",
    characters: null,
    error: null,
    loading: true,
    selectSeries: "Select Series",
    callApi: (url) => {
        axios.get(url)
            .then(response => {
                //console.log(response);
                //console.log(response.data);
                store.characters = response.data
                store.charactersLength = response.data.length
                store.loading = false
            })
            .catch(error => {
                console.error(error.message);
                error = error.message
            })
    }
});