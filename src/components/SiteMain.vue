<script>
import BreakingBadCastCards from "./BreakingBadCastCards.vue"
import { store } from "../store"

export default {
    name: "SiteMain",
    components: {
        BreakingBadCastCards
    },
    data() {
        return {
            store
        }
    }
}
</script>
<!--  -->
<template>
    <div class="container">
        <select class="series_selection" v-model="store.selectSeries" @change="$emit('selectSeries')">
            <option value="" selected hidden>{{ store.selectSeries }}</option>
            <option value="Breaking Bad">Breaking Bad</option>
            <option value="Better Call Saul">Better Call Saul</option>
        </select>
    </div>
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
.series_selection {
    margin: 0 0 1.5rem 1rem;
}

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