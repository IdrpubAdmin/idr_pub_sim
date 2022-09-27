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
        <div class="container">
            <section>
                <log-in></log-in>
            </section>
        </div>
    </div>
</template>

<script>
module.exports = {
    components : {
        'log-in': httpVueLoader('components/common/LogIn.vue'),
    }
}
</script>