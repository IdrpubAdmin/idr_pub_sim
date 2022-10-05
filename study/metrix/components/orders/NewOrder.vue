<template>
    <div class="modal-wrap">
        <div class="modal-container new-order">
            <div class="header">
                <h3>Create New Order</h3>
                <div class="btn">
                    <button @click="toggleModal('newOrder')">
                        <img src="assets/images/orders/fi_x.png" alt="">
                    </button>
                </div>
            </div>
            <section>
                <article>
                    <div class="modal-title">
                        <h5>Order Details</h5>
                        <div class="btn-area">
                            <p>New Customer</p>
                            <div class="btn" @click="toggleBtn('newOrderBtn01')" :class="{btnactive:btnActive.includes('newOrderBtn01')}">
                                <button></button>
                            </div>
                        </div>
                    </div>
                    <ul class="form">
                        <li class="form-item">
                            <select-box
                                :option="['Select Customer', 'Select Customer1', 'Select Customer2', 'Select Customer3']"
                                :selected="'Select Customer'"
                                :name="'newOrderSelect01'"
                            ></select-box>
                        </li>   
                        <li class="form-item double">
                            <select-box
                                :option="['Payment Type', 'Payment Type1', 'Payment Type2', 'Payment Type3']"
                                :selected="'Payment Type'"
                                :name="'newOrderSelect02'"
                            ></select-box>
                            <select-box
                                :option="['Order Type', 'Order Type1', 'Order Type2', 'Order Type3']"
                                :selected="'Order Type'"
                                :name="'newOrderSelect03'"
                            ></select-box>
                        </li>
                        <li class="form-item">
                            <p>Order Time & Date</p>
                            <div class="double">
                                <div class="input-box">
                                    <div class="image">
                                        <img src="assets/images/orders/Calendar.png" alt="calendar icon">
                                    </div>
                                    <input type="text" value="12/12/2020">
                                </div>
                                <div class="input-box">
                                    <div class="image">
                                        <img src="assets/images/orders/fi_clock.png" alt="clock icon">
                                    </div>
                                    <input type="text" value="12:00 PM">
                                </div>
                            </div>
                        </li>
                        <li class="form-item state-sel">
                            <p>Order Status</p>
                            <select-box
                                :option="['Pending', 'Completed', 'In-Progress']"
                                :selected="'Pending'"
                                :name="'newOrderSelect04'"
                            ></select-box>
                        </li>
                        <li class="form-item">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Order Note"></textarea>
                        </li>
                    </ul>
                </article>
                <article>
                    <div class="modal-title">
                        <h5>Items</h5>
                    </div>
                    <div class="input-box search">
                        <div class="image">
                            <img src="assets/images/orders/Search.png" alt="search icon">
                        </div>
                        <input type="text" placeholder="Search product name">
                    </div>
                </article>
            </section>
            <div class="modal-btns">
                <button @click="toggleModal('newOrder')">Cancel</button>
                <button class="point" @click="toggleModal('newOrder')">Create Order</button>
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
    }
}
</script>