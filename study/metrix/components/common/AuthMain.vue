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
                    <div class="btn-area">
                        <router-link to="/">Login</router-link>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>