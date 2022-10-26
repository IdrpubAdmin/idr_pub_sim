<template>
    <div class="signup-box">
        <div class="greetings">
            <h3>Get Started with <span>Metrix</span></h3>
            <p>Create your free account</p>
        </div>
        <ul class="form">
            <li class="input-box">
                <i class="icon-box name-icon"></i>
                <input type="text" placeholder="Your Full Name">
            </li>
            <li class="email-box input-box">
                <i class="icon-box mail-icon"></i>
                <input type="text" placeholder="Your Email Address">
            </li>
            <li class="password-box input-box">
                <i class="icon-box lock-icon"></i>
                <input :type="visible === false ? 'password' : 'text'" placeholder="Create a Strong Password">
                <button class="eye-off-icon" @click="PasswordType"></button>
            </li>
        </ul>
        <p class="link-btn">
            <router-link to="/login">
                Already have an account? <span>Login</span>
            </router-link>
        </p>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            visible : false
        }
    },
    methods: {
        PasswordType(){
            this.visible = !this.visible
        }
    },
}
</script>