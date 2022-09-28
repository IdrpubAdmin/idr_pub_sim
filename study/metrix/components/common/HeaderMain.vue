<template>
    <header>
        <div class="page-head">
            <!-- <div class="title" v-for="(category, i) in categoryData" :key="i.category" v-show="categoryData[i].path === $route.path">
                <h3>{{$route.name}}</h3>
            </div> -->
            <div class="title">
                <h3>{{title()}}</h3>
            </div>
            <ul class="user">
                <li class="select-box">
                    <span>Nanny’s Shop</span>
                    <img src="assets/images/header/fi_chevron-down.png" alt="down icon">
                </li>
                <li class="alarm-icon">
                    <router-link to="/">
                        <img src="assets/images/header/Notification.png" alt="notification icon">
                    </router-link>
                </li>
                <li class="profile">
                    <router-link to="/">
                        <img src="assets/images/header/profile1.png" alt="profile img">
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="location">
            <div class="home-icon">
                <img src="assets/images/header/Home.png" alt="home icon">
            </div>
            <div class="breadcrumb">
                <ul>
                    <li v-for="(key,i) in breadcrumb" :key="i+key" v-show="breadcrumb[i].length > 0">
                        <router-link :to="{name:breadcrumb[i]}">
                            {{breadcrumb[i]}}
                        </router-link>
                    </li>
                </ul>
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
        breadcrumb() {
            return this.$route.path.split('/');
        }
    },
    methods: {
        title() {
            return this.$route.meta.title
        }
    },
}
</script>