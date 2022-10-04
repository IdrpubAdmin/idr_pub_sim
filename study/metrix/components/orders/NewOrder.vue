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
                            <div class="select-box">
                                <div class="selected" @click="toggleBtn('newOrderSelect01')">
                                    <div class="value">Select Customer</div>
                                </div>
                                <ul v-show="btnActive.includes('newOrderSelect01')">
                                    <li class="option">Select Customer</li>
                                    <li class="option">Select Customer1</li>
                                    <li class="option">Select Customer2</li>
                                    <li class="option">Select Customer3</li>
                                </ul>
                            </div>   
                        </li>   
                        <li class="form-item double">
                            <div class="select-box">
                                <div class="selected" @click="toggleBtn('newOrderSelect02')">
                                    <div class="value">Payment Type</div>
                                </div>
                                <ul v-show="btnActive.includes('newOrderSelect02')">
                                    <li class="option">Payment Type</li>
                                    <li class="option">Payment Type</li>
                                    <li class="option">Payment Type</li>
                                    <li class="option">Payment Type</li>
                                </ul>
                            </div>
                            <div class="select-box">
                                <div class="selected" @click="toggleBtn('newOrderSelect03')">
                                    <div class="value">Order Type</div>
                                </div>
                                <ul v-show="btnActive.includes('newOrderSelect03')">
                                    <li class="option">Order Type</li>
                                    <li class="option">Order Type</li>
                                    <li class="option">Order Type</li>
                                    <li class="option">Order Type</li>
                                </ul>
                            </div>
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
                        <li class="form-item">
                            <p>Order Status</p>
                            <div class="select-box state-sel">
                                <div class="selected" @click="toggleBtn('newOrderSelect04')">
                                    <div class="value">Pending</div>
                                </div>
                                <ul v-show="btnActive.includes('newOrderSelect04')">
                                    <li class="option">Pending</li>
                                    <li class="option">Completed</li>
                                    <li class="option">In-Progress</li>
                                </ul>
                            </div>
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
}
</script>