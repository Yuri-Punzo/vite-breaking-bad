import { reactive } from "vue";

export const store = reactive({
    API_URL: "https://www.breakingbadapi.com/api/characters",
    characters: null,
    error: null
    //settando loading: true posso poi risettarelo in false quando finisce la chiamata per usare un loader che nasconda qualcosa fino a quando nn è finita la chiamata
})