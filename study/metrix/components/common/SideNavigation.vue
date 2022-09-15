<template>
    <div class="navigation">
        <h1>
            <router-link to="/">
                <img src="static/images/navigation/Graph.png" alt="">
                <span class="after">Metrix</span>
            </router-link>
        </h1>
        <nav>
            <ul>
                <li v-for="(category, i) in categoryData" :key="i.category">
                    <router-link :to="category.title.toLowerCase()" >
                        <img class="before" :src="'static/images/navigation/'+category.icon+'.png'" :alt="category.title+' icon'">
                        <img class="after" :src="'static/images/navigation/hover/'+category.icon+'.png'" :alt="category.title+' icon'">
                        <span class="after">{{category.title}}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {

        }
    },
    methods: {
        gnbOn(){
            console.log('on')
        },
        gnbOff(){
            console.log('off')
        }
    },
    computed: {
        categoryData() {
            return this.$store.getters["NavigationData"].categoryData
        },
    }
}
</script>