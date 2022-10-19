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
                    <li class="input-box-area">
                        <p>First Name</p>
                        <div class="input-box">
                            <div class="image">
                                <img src="assets/images/settings/Profile.png" alt="profile icon">
                            </div>
                            <input type="text" value="Usman">
                        </div>
                    </li>
                    <li class="input-box-area">
                        <p>Last Name</p>
                        <div class="input-box">
                            <div class="image">
                                <img src="assets/images/settings/Profile.png" alt="profile icon">
                            </div>
                            <input type="text" value="Ndako">
                        </div>
                    </li>
                    <li class="input-box-area">
                        <p>Email</p>
                        <div class="input-box">
                            <div class="image">
                                <img src="assets/images/settings/Message.png" alt="message icon">
                            </div>
                            <input type="text" value="usmanndako@gmail.com">
                        </div>
                    </li>
                    <li class="input-box-area">
                        <p>Phone Number</p>
                        <div class="input-box no-icon phone-box">
                            <div class="select-box">
                                <div class="selected" @click="toggleBtn('settingSelect01')">
                                    <div class="value">
                                        <img src="assets/images/settings/ng1.png" alt="nigeria">
                                        +234
                                    </div>
                                </div>
                                <ul v-show="btnActive.includes('settingSelect01')">
                                    <li class="option">
                                        <img src="assets/images/settings/ng1.png" alt="nigeria">
                                        +234
                                    </li>
                                    <li class="option">
                                        <img src="assets/images/settings/ng1.png" alt="nigeria">
                                        +234
                                    </li>
                                    <li class="option">
                                        <img src="assets/images/settings/ng1.png" alt="nigeria">
                                        +234
                                    </li>
                                    <li class="option">
                                        <img src="assets/images/settings/ng1.png" alt="nigeria">
                                        +234
                                    </li>
                                </ul>
                            </div>
                            <input type="text" value="08065650633">
                        </div>
                    </li>
                    <li class="input-box-area">
                        <p>Address</p>
                        <div class="input-box">
                            <div class="image">
                                <img src="assets/images/settings/Location.png" alt="location icon">
                            </div>
                            <input type="text" value="No. 93 Skyfield Apartments">
                        </div>
                    </li>
                    <li class="input-box-area">
                        <p>City</p>
                        <div class="input-box no-icon">
                            <input type="text" value="Yaba">
                        </div>
                    </li>
                    <li class="input-box-area double">
                        <div class="select-box-area">
                            <p>Country</p>
                            <select-box
                                :select-data = selectData.settingSelect02
                            ></select-box>
                        </div>
                        <div class="select-box-area">
                            <p>State</p>
                            <select-box
                                :select-data = selectData.settingSelect03
                            ></select-box>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="user-image">
                <div class="image-box">
                    <img src="assets/images/settings/image1.png" alt="profile img">
                    <div class="btns">
                        <button>
                            <img src="assets/images/settings/fi_upload-cloud.png" alt="cloud icon">
                        </button>
                        <button>
                            <img src="assets/images/settings/Delete.png" alt="delete icon">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
module.exports = {
    data() {
        return {
            btnActive : this.$store.getters.btnActive
        }
    },
    methods: {
        toggleBtn(payload){
            this.$store.commit('toggleBtn', payload)
        }
    },
    components: {
        'select-box' : SelectBox
    },
    computed: {
        selectData() {
            return this.$store.getters["selectData"].selectBox
        },
    }
}
</script>