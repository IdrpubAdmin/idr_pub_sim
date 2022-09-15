<template>
    <div class="navigation">
        <h1>
            <router-link to="/">
                <img src="static/images/navigation/Graph.png" alt="logo">
                <span v-show="$store.getters.isActive">Metrix</span>
            </router-link>
        </h1>
        <menu>
            <nav> 
                <ul>
                    <li v-for="(category, i) in categoryData" :key="i.category">
                        <router-link :to="category.path" exact>
                            <img class="before category-img" :src="'static/images/navigation/'+category.icon+'.png'" :alt="category.title+' icon'">
                            <img class="after category-img" :src="'static/images/navigation/hover/'+category.icon+'.png'" :alt="category.title+' icon'">
                            <span class="hidden-title" v-show="$store.getters.isActive">{{category.title}}</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <div class="btns">
                <ul>
                    <li>
                        <img class="category-img" src="static/images/navigation/fi_headphones.png" alt="Headphone icon">
                        <span class="hidden-title" v-show="$store.getters.isActive">Contact Support</span>
                    </li>
                    <li>
                        <img class="category-img" src="static/images/navigation/fi_gift.png" alt="gift icon">
                        <span class="hidden-title" v-show="$store.getters.isActive">Free Gift Awaits You!</span>
                        <span class="hidden-title2" v-show="$store.getters.isActive">Upgrade your account</span>
                        <img class="hidden-img" v-show="$store.getters.isActive" src="static/images/navigation/fi_chevron-right.png" alt="right icon">
                    </li>
                </ul>
                <div class="log-out">
                    <img src="static/images/navigation/Logout.png" alt="Logout icon">
                </div>     
            </div>
        </menu>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {

        }
    },
    methods: {
        on() {
            this.$store.getters.isActive
        }
    },
    computed: {
        categoryData() {
            return this.$store.getters["NavigationData"].categoryData
        },
    },
}
</script>