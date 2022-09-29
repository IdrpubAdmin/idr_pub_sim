<template>
    <div class="signup-box">
        <div class="greetings">
            <h3>Get Started with <span class="b">Metrix</span></h3>
            <p>Create your free account</p>
        </div>
        <form class="signup-form">
            <div class="name-box input-box">
                <div class="image">
                    <img src="assets/images/auth/Profile.png" alt="Profile icon">
                </div>
                <input type="text" placeholder="Your Full Name">
            </div>
            <div class="email-box input-box">
                <div class="image">
                    <img src="assets/images/auth/Message.png" alt="Message icon">
                </div>
                <input type="text" placeholder="Your Email Address">
            </div>
            <div class="password-box input-box">
                <div class="image">
                    <img src="assets/images/auth/Lock.png" alt="Lock icon">
                </div>
                <input type="password" placeholder="Create a Strong Password">
                <button class="hidden-btn">
                    <img src="assets/images/auth/fi_eye-off.png" alt="eye icon">
                </button>
            </div>
        </form>
        <p class="join-us-link"><router-link to="/login">Already have an account? <span class="point">Login</span></router-link></p>
    </div>
</template>