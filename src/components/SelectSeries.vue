<script>
import { store } from "../store"

export default {
    name: "SelectSeries",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <select class="series_selection" v-model="store.selectSeries" @change="$emit('selectSeries')">
            <option selected hidden>Select Series</option>
            <option value="All">All</option>
            <option value="Breaking Bad">Breaking Bad</option>
            <option value="Better Call Saul">Better Call Saul</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
.series_selection {
    margin: 0 0 1.5rem 1rem;
}
</style>