<template>
    <header>
        <div class="page-head">
            <div class="title">
                <h3>{{$route.meta.title}}</h3>
            </div>
            <ul class="user">
                <li class="sel-btn">
                    <select-box
                        :option="['Nanny’s Shop', 'Nanny’s Shop', 'Nanny’s Shop']"
                        :selected="'Nanny’s Shop'"
                        :name="'headerSelect01'"
                    ></select-box>
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
                <li class="nav-btn" @click="mobileActive">
                    <button>
                        <img src="assets/images/header/Hamburger.png" alt="hamburger icon">
                    </button>                
                </li>
            </ul>
        </div>
        <div class="location">
            <div class="home-icon">
                <img src="assets/images/header/Home.png" alt="home icon">
            </div>
            <div class="breadcrumb" v-for="(breadcrumb,i) in BreadCrumbData" :key="i" v-show="BreadCrumbData[i].name.includes($route.name)">
                <ul>
                    <li v-for="data in breadcrumb.data" :key="data.id">
                        <router-link :to="{name: data.path}">
                            {{data.title}}
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
        BreadCrumbData() {
            return this.$store.getters["BreadCrumbData"].BreadCrumb
        }
    },
    components: {
        'select-box' : SelectBox
    },
    methods: {
        mobileActive(){
            this.$store.commit('mobileActive')
        },
    },
    mounted() {
        this.$store.commit('bodyFixed')
    },
}
</script>