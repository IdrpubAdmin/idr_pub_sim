<template>
    <header>
        <div class="page-head">
            <div class="title" v-for="(category, i) in categoryData" :key="i.category" v-show="categoryData[i].path === $route.path">
                <template>
                    {{category.title}}
                </template>
            </div>
            <div class="user">

            </div>
        </div>
        <div class="location">
            <div class="home-icon">
                <img src="" alt="">
            </div>
            <div class="breadcrumb">
                <span></span>
            </div>
        </div>
    </header>
</template>

<script>
module.exports = {
    computed: {
        categoryData() {
            return this.$store.getters["NavigationData"].categoryData
        },
    },
}
</script>