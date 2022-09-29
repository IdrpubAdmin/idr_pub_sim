<template>
    <div class="login-box">
        <h1>
            <img src="assets/images/navigation/Graph.png" alt="logo">
        </h1>
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
        <router-link to="/signup" class="signup-btn">Don’t have an account?<span class="b">Sign Up</span></router-link>          
        <div class="btn">
            <router-link to="/" class="login-btn">Login</router-link>
        </div>
    </div>
</template>