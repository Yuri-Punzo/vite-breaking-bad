<script>
import BreakingBadCastList from "./BreakingBadCastList.vue"

export default {
    name: "SiteMain",
    components: {
        BreakingBadCastList
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
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <!-- /dropdown btn -->
        <section class="cast">
            <p>Found 62 characters</p>

        </section>
        <BreakingBadCastList />
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