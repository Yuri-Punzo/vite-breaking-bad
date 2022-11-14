<script>
import { store } from "../store"

export default {
    name: "BreakingBadCastCards",
    props: {
        character: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col mb-5" v-for="character in store.characters">
        <div class="my_card">
            <div class="my_card-body text-center">
                <img :src="character.img" alt="Name">
                <h5 class="card_title">{{ character.name.toUpperCase() }}</h5>
                <div class="card_text">{{ character.category }}</div>
                <div class="card_text">{{ character.status }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my_card {
    height: 420px;
    background-color: #2e3a46;

    img {
        max-width: 100%;
        padding: 1rem;
    }

    .card_title {
        color: white;
        margin-bottom: 0.8rem;
    }

    .card_text {
        color: gray;
    }
}
</style>