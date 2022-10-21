<template>
    <div class="navigation">
        <h1 class="logo">
            <router-link to="/">
                <img src="assets/images/navigation/Graph.png" alt="logo">
                <span v-show="isActive">Metrix</span>
            </router-link>
        </h1>
        <menu>
            <nav> 
                <ul>
                    <li v-for="(category, i) in categoryData" :key="category.id">
                        <router-link :to="category.path" :exact="i===0">
                            <img class="before category-img" :src="'assets/images/navigation/'+category.icon+'.png'" :alt="category.title+' icon'">
                            <img class="after category-img" :src="'assets/images/navigation/hover/'+category.icon+'.png'" :alt="category.title+' icon'">
                            <span class="hidden-title" v-show="isActive">{{category.title}}</span>
                            <div class="alarm" :class="category.push.class" v-if="category.push"><span>{{category.push.alarm}}</span></div>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <div class="btns">
                <ul>
                    <li class="headphone-box">
                        <router-link to="/">
                            <img class="category-img" src="assets/images/navigation/fi_headphones.png" alt="Headphone icon">
                            <span class="hidden-title" v-show="isActive">Contact Support</span>
                        </router-link>
                    </li>
                    <li class="gift-box">
                        <router-link to="/">
                            <img class="category-img" src="assets/images/navigation/fi_gift.png" alt="gift icon">
                            <span class="hidden-title" v-show="isActive">Free Gift Awaits You!</span>
                            <span class="hidden-title2" v-show="isActive">Upgrade your account</span>
                            <img class="hidden-img" v-show="isActive" src="assets/images/navigation/fi_chevron-right.png" alt="right icon">
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="logout-box">
                <router-link to="/login">
                    <img class="category-img" src="assets/images/navigation/Logout.png" alt="Logout icon">
                    <span class="hidden-title" v-show="isActive">Logout</span>
                </router-link>
            </div>
        </menu>
    </div>
</template>

<script>
module.exports = {
    methods: {
        on() {
            this.$store.getters.isActive
        }
    },
    computed: {
        categoryData() {
            return this.$store.getters["navigationData"].categoryData
        },
        isActive() {
            return this.$store.getters["isActive"]
        },
    },
}
</script>