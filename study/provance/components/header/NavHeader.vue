<template>
    <div class="nav-header-wrap">
        <div class="nav-header">
            <ul class="nav-depth1">
                <li class="gnb" v-for="(navList,i) in navData" :key="i.navList">
                    <router-link :to="'/'+navList.url">{{navList.title}}</router-link>
                    <ul class="nav-depth2">
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

    methods: {
    
    },
    props: {
        navData : Array
    }
}
</script>