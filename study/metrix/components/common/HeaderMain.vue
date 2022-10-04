<template>
    <header>
        <div class="page-head">
            <!-- <div class="title" v-for="(category, i) in categoryData" :key="i.category" v-show="categoryData[i].path === $route.path">
                <h3>{{$route.name}}</h3>
            </div> -->
            <div class="title">
                <h3>{{$route.meta.title}}</h3>
            </div>
            <ul class="user">
                <li>
                    <div class="select-box">
                        <div class="selected" @click="toggleBtn('headerSelect01')">
                            <div class="value">Nanny’s Shop</div>
                        </div>
                        <ul v-show="btnActive.includes('headerSelect01')">
                            <li class="option">Nanny’s Shop</li>
                            <li class="option">Nanny’s Shop</li>
                            <li class="option">Nanny’s Shop</li>
                        </ul>
                    </div>
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
    data() {
        return {
            btnActive : this.$store.getters.btnActive
        }
    },
    methods: {
        toggleBtn(payload){
            this.$store.commit('toggleBtn', payload)
        }
    },
    computed: {
        categoryData() {
            return this.$store.getters["NavigationData"].categoryData
        },
        breadcrumb() {
            return this.$route.path.split('/');
        }
    },
}
</script>