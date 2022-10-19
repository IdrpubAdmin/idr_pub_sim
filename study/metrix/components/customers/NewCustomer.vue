<template>
    <div class="modal-wrap">
        <div class="modal-container new-customer" :class="{'big-modal':btnActive.includes('newCustomBtn01')}">
            <div class="header">
                <h3>Add a New Customer</h3>
                <div class="btn">
                    <button @click="toggleModal('newCustomer')">
                        <img src="assets/images/orders/fi_x.png" alt="">
                    </button>
                </div>
            </div>
            <section>
                <article>
                    <div class="modal-title">
                        <h5>Customer Information</h5>
                    </div>
                    <ul class="form">
                        <li class="input-box-area">
                            <div class="input-box">
                                <input type="text" placeholder="Customer Name">
                            </div>
                        </li>                          
                        <li class="input-box-area">
                            <div class="input-box">
                                <input type="text" placeholder="Customer Email">
                            </div>
                        </li>
                        <li class="input-box-area">
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
                                <input type="text" placeholder="08065650633">
                            </div>
                        </li>
                    </ul>
                </article>
                <article>
                    <div class="modal-title active-title">
                        <h5>Add Address</h5>
                        <div class="btn-area">
                            <div class="toggle-btn" @click="toggleBtn('newCustomBtn01')" :class="{'btn-active':btnActive.includes('newCustomBtn01')}">
                                <button></button>
                            </div>
                        </div>
                    </div>
                    <template v-if="btnActive.includes('newCustomBtn01')">
                        <ul class="form">
                            <li class="input-box-area">
                                <div class="input-box">
                                    <input type="text" placeholder="Building No., Street Address">
                                </div>
                            </li>                          
                            <li class="input-box-area">
                                <div class="input-box">
                                    <input type="text" placeholder="City">
                                </div>
                            </li>
                            <li class="input-box-area double">
                                <select-box
                                    :select-data = selectData.customSelect07
                                ></select-box>
                                <select-box
                                    :select-data = selectData.customSelect08
                                ></select-box>
                            </li>
                        </ul>
                        <div class="modal-title">
                            <h5>Billing Address</h5>
                            <div class="btn-area">
                                <p>Same as Customer Address</p>
                                <div class="toggle-btn" @click="toggleBtn('newOrderBtn02')" :class="{'btn-active':btnActive.includes('newOrderBtn02')}">
                                    <button></button>
                                </div>
                            </div>
                        </div>
                    </template>
                </article>
            </section>
            <div class="modal-btns">
                <button @click="toggleModal('newCustomer')">Cancel</button>
                <button class="point" @click="toggleModal('newCustomer')">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            btnActive : this.$store.getters.btnActive
        }
    },
    methods: {
        toggleModal(payload){
            this.$store.commit('toggleModal', payload)
        },
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