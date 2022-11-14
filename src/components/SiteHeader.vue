<script>
export default {
    name: "SiteHeader"
}
</script>

<template>
    <div id="site_header">
        <img src="../assets/img/Breaking_Bad_logo.png" alt="Breaking Bad Logo">
        <h1>Breaking Bad Api</h1>
    </div>
    <!-- /#site_header -->
</template>

<style lang="scss" scoped>
#site_header {
    color: white;
    display: flex;
    align-items: center;
    margin: 2rem;

    img {
        height: 60px;
        margin-right: 0.5rem;
    }
}
</style>