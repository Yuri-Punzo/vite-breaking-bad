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

<template>
    <div class="container">
        <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select Category
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">All</a></li>
                <li><a class="dropdown-item" href="#">Alive</a></li>
                <li><a class="dropdown-item" href="#">Deceased</a></li>
                <li><a class="dropdown-item" href="#">Presumed Dead</a></li>
                <li><a class="dropdown-item" href="#">Unknown</a></li>
            </ul>
        </div>
        <!-- /dropdown btn -->
    </div>
    <div class="container">
        <section class="cast">
            <!-- <section class="cast" v-if="store.characters.length === 62"> -->
            <p>Found
                <!--{{ store.characters.length }}-->characters
            </p>
            <div class="row row-cols-1 row-cols-xl-5">

                <BreakingBadCastCards />

            </div>
        </section>
        <!-- <div v-else>
            <h1 class="text-center">...LOADING...</h1>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
.dropdown {
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