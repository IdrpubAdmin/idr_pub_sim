<template>
    <div class="login-box">
        <h1>
            <img src="assets/images/navigation/Graph.png" alt="logo">
        </h1>
        <template v-if="hi">
            <div class="texts">
                <h3>Welcome back!</h3>
                <p>Login to your account</p>
            </div>
            <form class="login-form">
                <div class="id-box">
                    <div class="image">
                        <img src="assets/images/auth/Message.png" alt="Message icon">
                    </div>
                    <input type="text" placeholder="Email Address">
                </div>
                <div class="password-box">
                    <div class="image">
                        <img src="assets/images/auth/Lock.png" alt="Lock icon">
                    </div>
                    <input type="password" placeholder="Password">
                    <button>
                        <img src="assets/images/auth/fi_eye-off.png" alt="eye icon">
                    </button>
                </div>
            </form>
            <p class="b tar mt8">Recover Password</p>
            <button class="signup-btn" @click="hi = false">Don’t have an account? <span class="b">Sign Up</span></button>
            <!-- <router-link to="/" @click.native="$store.dispatch('checkLogin'),on()">Login</router-link> -->
            <!-- <router-link to="/dashboard" @click.native="$store.commit('checkLogin'),on()">Login</router-link> -->
            <!-- <button @click="$store.commit('checkLogin'),on()">Login</button> -->
        </template>
        <template v-else>
            <div class="texts">
                <h3>Get Started with <span class="b">Metrix</span></h3>
                <p>Create your free account</p>
            </div>
            <form class="login-form">
                <div class="id-box">
                    <div class="image">
                        <img src="assets/images/auth/Profile.png" alt="Profile icon">
                    </div>
                    <input type="text" placeholder="Your Full Name">
                </div>
                <div class="id-box mt30">
                    <div class="image">
                        <img src="assets/images/auth/Message.png" alt="Message icon">
                    </div>
                    <input type="text" placeholder="Your Email Address">
                </div>
                <div class="password-box">
                    <div class="image">
                        <img src="assets/images/auth/Lock.png" alt="Lock icon">
                    </div>
                    <input type="password" placeholder="Create a Strong Password">
                    <button>
                        <img src="assets/images/auth/fi_eye-off.png" alt="eye icon">
                    </button>
                </div>
            </form>
            <button class="signup-btn" @click="hi = true">Already have an account? <span class="b">Login</span></button>
        </template>
        <div class="btn">
            <button class="login-btn" type="submit" @click="$store.commit('checkLogin')">Login</button>
        </div>
    </div>
</template>

<script>
module.exports = {
    data(){
        return{
            hi : true
        } 
    },
    mounted() {
        console.log(this.$store.state.login)
    },
    methods:{
        on() {
            console.log(this.$store.state.login+'3')
        }
    }
}
</script>