import { reactive } from "vue";

export const store = reactive({
    API_URL: "https://www.breakingbadapi.com/api/characters",
    BreakingBad_API_URL: "https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul",
    BetterCallSaul_API_URL: "https://www.breakingbadapi.com/api/characters?category=Breaking+Bad",
    characters: null,
    error: null,
    loading: true,
    selectSeries: "Select Series"
})