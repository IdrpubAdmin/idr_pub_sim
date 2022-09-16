<template>
    <header>
        <div class="page-head">
            <!-- 이것보다는 부모에게 받아오는 방식으로 바꾸기 -->
            <div class="title" v-for="(category, i) in categoryData" :key="i.category" v-show="categoryData[i].path === $route.path">
                <h3>{{category.title}}</h3>
            </div>
            <ul class="user">
                <li class="select-box">
                    <span>Nanny’s Shop</span>
                    <img src="static/images/header/fi_chevron-down.png" alt="down icon">
                </li>
                <li class="alarm-icon">
                    <router-link to="/">
                        <img src="static/images/header/Notification.png" alt="notification icon">
                    </router-link>
                </li>
                <li class="profile">
                    <router-link to="/">
                        <img src="static/images/header/profile1.png" alt="profile img">
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="location">
            <div class="home-icon">
                <img src="static/images/header/Home.png" alt="home icon">
            </div>
            <div class="breadcrumb">
                <span>{{$route.path.slice(1)}}</span>
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