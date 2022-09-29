<template>
    <div class="login-box">
        <h1>
            <img src="assets/images/navigation/Graph.png" alt="logo">
        </h1>
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
            <router-link to="/login" class="signup-btn">Already have an account? <span class="b">Login</span></router-link>
        <div class="btn">
            <router-link to="/" class="login-btn">Login</router-link>
        </div>
    </div>
</template>