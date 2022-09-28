<template>
    <article>
        <div class="settings-header">
            <h5>Account Settings</h5>
            <div class="btn">
                <button>
                    Update
                </button>
            </div>           
        </div>
        <div class="contents">
            <div class="profile">
                <ul>
                    <li>
                        <p>First Name</p>
                        <div class="input-box">
                            <div class="image">
                                <img src="assets/images/settings/Profile.png" alt="profile icon">
                            </div>
                            <input type="text" value="Usman">
                        </div>
                    </li>
                    <li>
                        <p>Last Name</p>
                        <div class="input-box">
                            <div class="image">
                                <img src="assets/images/settings/Profile.png" alt="profile icon">
                            </div>
                            <input type="text" value="Ndako">
                        </div>
                    </li>
                    <li>
                        <p>Email</p>
                        <div class="input-box">
                            <div class="image">
                                <img src="assets/images/settings/Message.png" alt="message icon">
                            </div>
                            <input type="text" value="usmanndako@gmail.com">
                        </div>
                    </li>
                    <li>
                        <p>Phone Number</p>
                        <div class="input-box no-img">
                            <select name="" id="">
                                <option value="" selected>+234</option>
                            </select>
                            <input type="text" value="08065650633">
                        </div>
                    </li>
                    <li>
                        <p>Address</p>
                        <div class="input-box phone-num">
                            <div class="image">
                                <img src="assets/images/settings/Location.png" alt="location icon">
                            </div>
                            <input type="text" value="No. 93 Skyfield Apartments">
                        </div>
                    </li>
                    <li>
                        <p>City</p>
                        <div class="input-box no-img">
                            <input type="text" value="Yaba">
                        </div>
                    </li>
                    <li>
                        <p>Country</p>
                        <select name="" id="">
                            <option value="" selected>Nigeria</option>
                        </select>
                    </li>
                    <li>
                        <p>State</p>
                        <select name="" id="">
                            <option value="" selected>Lagos</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div class="image">
                <img src="assets/images/settings/image1.png" alt="profile img">
                <div class="btns">
                    <button>
                        <img src="" alt="">
                    </button>
                    <button>
                        <img src="" alt="">
                    </button>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
module.exports = {

}
</script>