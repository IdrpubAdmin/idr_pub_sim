<template>
    <div class="auth-wrap">
        <div class="header-wrap">
            <header>
                <h1 class="logo">
                    <router-link to="/">
                        <img src="assets/images/navigation/Graph.png" alt="logo">
                    </router-link>
                </h1>
            </header>
        </div>
        <div class="auth-container">
            <div class="auth-cnt" :class="{'height-plus': $route.path.includes('/signup')}">
                <section>
                    <h1 class="logo">
                        <router-link to="/">
                            <img src="assets/images/navigation/Graph.png" alt="logo">
                        </router-link>
                    </h1>
                    <router-view></router-view>
                    <div class="login-btn">
                        <router-link to="/">Login</router-link>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    // 로그인 페이지 이동시 nav active되는거 해제
    mounted() {
        this.$store.commit('checkActive');
    },
}
</script>