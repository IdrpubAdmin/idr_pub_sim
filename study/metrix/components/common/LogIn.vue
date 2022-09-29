<template>
    <div class="login-box">
        <div class="greetings">
            <h3>Welcome back!</h3>
            <p>Login to your account</p>
        </div>
        <form class="login-form">
            <div class="id-box input-box">
                <div class="image">
                    <img src="assets/images/auth/Message.png" alt="Message icon">
                </div>
                <input type="text" placeholder="Email Address">
            </div>
            <div class="password-box input-box">
                <div class="image">
                    <img src="assets/images/auth/Lock.png" alt="Lock icon">
                </div>
                <input type="password" placeholder="Password">
                <button>
                    <img src="assets/images/auth/fi_eye-off.png" alt="eye icon">
                </button>
            </div>
        </form>
        <p class="lock-link">Recover Password</p>
        <p class="join-us-link"><router-link to="/signup">Don’t have an account? <span class="b">Sign Up</span></router-link></p>          
    </div>
</template>