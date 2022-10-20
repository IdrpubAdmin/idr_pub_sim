<template>
    <div class="popup-wrap popup-filter" v-if="btnActive.includes('filterPop')">
        <div class="popup-header">
            <h3>Filter</h3>
        </div>
        <section>
            <p>Order Type</p>
            <div class="double">
                <div class="checkbox-area">
                    <input type="checkbox">
                    <label for="">Home Delivery</label>
                </div>
                <div class="checkbox-area">
                    <input type="checkbox">
                    <label for="">Pick Up</label>
                </div>
            </div>
            <hr>
            <hr>
            <ul>
                <li class="input-box-area">
                    <p>Status</p>
                    <select-box
                        :select-data = selectData.filPopSelect01
                    ></select-box>
                </li>                          
                <li class="input-box-area">
                    <p>Customer</p>
                    <select-box
                        :select-data = selectData.filPopSelect02
                    ></select-box>
                </li>
                <li class="input-box-area">
                    <p>Amount</p>
                    <div class="double">
                        <div class="double-item">
                            <p>From</p>
                            <div class="input-box">
                                <input type="text" value="0.00">
                            </div>
                        </div>
                        <div class="double-item">
                            <p>To</p>
                            <div class="input-box">
                                <input type="text" value="0.00">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="popup-close">
                <button @click="toggleBtn('filterPop')">Filter</button>
            </div>
        </section>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            btnActive : this.$store.getters.btnActive,
        }
    },
    methods: {
        toggleBtn(payload){
            this.$store.commit('toggleBtn', payload)
        },
    },
    components: {
        'select-box' : SelectBox
    },
    computed: {
        selectData() {
            return this.$store.getters["selectData"].selectBox
        }
    },
}
</script>