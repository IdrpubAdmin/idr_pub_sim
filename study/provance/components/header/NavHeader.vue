<template>
    <div class="nav-header-wrap">
        <div class="nav-header">
            <ul class="nav-depth1">
                <li class="gnb" v-for="(navList,i) in navData" :key="i.navList" @mouseover="gnbOn(i)" @mouseout="gnbOff(i)">
                    <router-link :to="'/'+navList.url">
                        <span class="title">{{navList.title}}</span>
                        <span class="ko-title">{{navList.koTitle}}</span>
                    </router-link>
                    <ul class="nav-depth2" v-if="navList.subNavData && navList.subNavData.length > 0">
                        <li class="lnb" v-for="(subNavList,i) in navList.subNavData" :key="i.subNavList">
                            <router-link :to="navList.url">{{subNavList.subTitle}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    mounted() {
        
    },
    methods: {
        gnbOn(i){
            const gnb = document.querySelectorAll('.nav-depth1 .gnb')
            const lnb = document.querySelectorAll('.nav-depth2')
            gnb[i].classList.add('active')
            if(lnb[i]){
                lnb[i].classList.add('active')
            }
        },
        gnbOff(i){
            const gnb = document.querySelectorAll('.nav-depth1 .gnb')
            const lnb = document.querySelectorAll('.nav-depth2')
            gnb[i].classList.remove('active')
            if(lnb[i]){
                lnb[i].classList.remove('active')
            }
        }
    },
    props: {
        navData : Array,
    }
}
</script>