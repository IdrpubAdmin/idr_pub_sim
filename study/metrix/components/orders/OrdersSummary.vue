<template>
    <section class="main-order">
        <div class="orders-header">
            <h3>Orders Summary</h3>
            <div class="btn">
                <button @click="toggleModal('newOrder')">
                    <img src="assets/images/orders/fi_plus.png" alt="plus icon">
                    <span>Create a New Order</span>
                </button>
            </div>   
        </div>
        <div class="contents">
            <article class="summary">
                <div class="header no-bg-sel">
                    <div class="icon-box">
                        <img src="assets/images/dashboard/Bag.png" alt="bag icon">
                    </div>
                    <select-box
                        :option="['This Day', 'This Week', 'This Month', 'This Year']"
                        :selected="'This Week'"
                        :name="'orderSelect01'"
                    ></select-box>
                </div>
                <ul>
                    <li>
                        <p class="tit">All Orders</p>
                        <dl class="value">
                            <dt><span>450</span></dt>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">Pending</p>
                        <dl class="value">
                            <dt><span>5</span></dt>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">Completed</p>
                        <dl class="value">
                            <dt><span>320</span></dt>
                        </dl>
                    </li>
                </ul>
            </article>
            <article class="summary">
                <div class="header no-bg-sel">
                    <div class="icon-box">
                        <img src="assets/images/dashboard/Bag.png" alt="bag icon">
                    </div>
                    <select-box
                        :option="['This Day', 'This Week', 'This Month', 'This Year']"
                        :selected="'This Week'"
                        :name="'orderSelect02'"
                    ></select-box>
                </div>
                <ul>
                    <li>
                        <p class="tit">Canceled</p>
                    <dl class="value">
                        <dt><span>30</span></dt>
                        <dd class="minus">-<span>20.00</span>%</dd>
                    </dl>
                    </li>
                    <li>
                        <p class="tit">Returned</p>
                        <dl class="value">
                            <dt><span>20</span></dt>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">Damaged</p>
                        <dl class="value">
                            <dt><span>5</span></dt>
                        </dl>
                    </li>
                </ul>
            </article>
            <article class="summary">
                <div class="header no-bg-sel">
                    <div class="icon-box">
                        <img src="assets/images/dashboard/fi_shopping-cart.png" alt="cart icon">
                    </div>
                    <select-box
                        :option="['This Day', 'This Week', 'This Month', 'This Year']"
                        :selected="'This Week'"
                        :name="'orderSelect03'"
                    ></select-box>
                </div>
                <ul>
                    <li>
                        <p class="tit point">Abandoned Cart</p>
                        <dl class="value">
                            <dt><span>20</span>%</dt>
                            <dd class="plus">+<span>10.00</span>%</dd>
                        </dl>                        
                    </li>
                    <li>
                        <p class="tit">Customers</p>
                        <dl class="value">
                            <dt><span>30</span></dt>
                        </dl>
                    </li>
                </ul>
            </article>
            <table-box
                :table="tableData"
            ></table-box>
        </div>
    </section>
</template>

<script>
module.exports = {
    data() {
        return {
            tableData : this.$store.getters["tableData/mainOrder"]
        }
    },
    components : {
        'select-box' : SelectBox,
        'table-box' : TableBox
    },
    methods: {
        toggleModal(payload){
            this.$store.commit('toggleModal', payload)
        },
    },
}
</script>