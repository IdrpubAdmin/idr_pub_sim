<template>
    <article>
        <div class="settings-header">
            <h5>Account Settings</h5>
            <div class="btn">
                <button>Update</button>
            </div>           
        </div>
        <div class="contents">
            <div class="profile">
                <ul>
                    <li class="input-box-area">
                        <p>First Name</p>
                        <div class="input-box input-ty03">
                            <i class="icon-box name-icon"></i>
                            <input type="text" value="Usman">
                        </div>
                    </li>
                    <li class="input-box-area">
                        <p>Last Name</p>
                        <div class="input-box input-ty03">
                            <i class="icon-box name-icon"></i>
                            <input type="text" value="Ndako">
                        </div>
                    </li>
                    <li class="input-box-area">
                        <p>Email</p>
                        <div class="input-box input-ty03">
                            <i class="icon-box mail-icon"></i>
                            <input type="text" value="usmanndako@gmail.com">
                        </div>
                    </li>
                    <li class="input-box-area">
                        <p>Phone Number</p>
                        <div class="input-box input-ty02 input-ty03 phone-box">
                            <select-box
                                :select-data = selectData.settingSelect04
                            ></select-box>
                            <input type="text" value="08065650633">
                        </div>
                    </li>
                    <li class="input-box-area">
                        <p>Address</p>
                        <div class="input-box input-ty03">
                            <i class="icon-box location2-icon"></i>
                            <input type="text" value="No. 93 Skyfield Apartments">
                        </div>
                    </li>
                    <li class="input-box-area">
                        <p>City</p>
                        <div class="input-box input-ty02 input-ty03">
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
                    <div class="img-btn-area">
                        <button class="cloud-icon"></button>
                        <button class="delete-icon"></button>
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
    },
}
</script>