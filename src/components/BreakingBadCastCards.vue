<script>
import { store } from "../store"

export default {
    name: "BreakingBadCastCards",
    props: {
        character: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="card">
            <div class="card-body">
                <img src="" alt="Name">
                <h3 class="card-title">{{ }}</h3>
                <p class="card-text">Series</p>
                <p class="card-text">Status</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* v-for="character in store.characters" */
</style>