<template>
    <header>
        <div class="page-head">
            <div class="title">
                <h3>{{$route.meta.title}}</h3>
            </div>
            <ul class="user">
                <li class="sel-btn-area">
                    <select-box
                        class="sel-ty02"
                        :select-data = selectData.headerSelect01
                    ></select-box>
                </li>
                <li class="btn-area notice-btn-area">
                    <button class="notice-btn"></button>    
                </li>
                <li class="btn-area">
                    <router-link to="/">
                        <img src="assets/images/header/profile1.png" alt="profile img">
                    </router-link>
                </li>
                <li class="btn-area gnb-btn-area" @click="mobileActive">
                    <button class="gnb-btn"></button>                
                </li>
            </ul>
        </div>
        <div class="location">
            <i class="home-icon"></i>
            <div class="breadcrumb" v-for="(breadcrumb,i) in breadCrumbData" :key="i" v-if="breadCrumbData[i].name.includes($route.name)">
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
            return this.$store.getters["navigationData"].categoryData
        },
        breadCrumbData() {
            return this.$store.getters["breadCrumbData"].BreadCrumb
        },
        selectData() {
            return this.$store.getters["selectData"].selectBox
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