<script>
import BreakingBadCastCards from "./BreakingBadCastCards.vue"
import SelectSeries from "./SelectSeries.vue"
import { store } from "../store"

export default {
    name: "SiteMain",
    components: {
        BreakingBadCastCards,
        SelectSeries
    },
    data() {
        return {
            store
        }
    },
    methods: {
        changeSelectedSeries() {
            //console.log("changed");
            let url = this.store.API_URL;
            //console.log(url);
            if (this.store.selectSeries !== 'All') {
                const selectSeries = this.store.selectSeries
                //console.log(this.store.selectSeries);
                url = `${this.store.API_URL}?category=${selectSeries}`
            }
            store.callApi(url)
        },
    }
}
</script>
<!--  -->
<template>
    <SelectSeries @selectSeries="changeSelectedSeries" />

    <div class="container">
        <section class="cast" v-if="this.store.loading == false">
            <p>Found {{ store.charactersLength }} characters</p>
            <div class="row row-cols-1 row-cols-xl-5">

                <BreakingBadCastCards />

            </div>
        </section>
        <div v-else class="text-center text-light">
            <img src="https://media1.giphy.com/media/l4FGIO2vCfJkakBtC/giphy.gif?cid=ecf05e47a64oxen3n95rmaxhctwj8q94yqceap528ntq14au&rid=giphy.gif&ct=s"
                alt="...LOADING...">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cast {
    background-color: white;
    padding: 2rem;

    p {
        background-color: black;
        color: white;
        padding: 1rem;
    }
}
</style>