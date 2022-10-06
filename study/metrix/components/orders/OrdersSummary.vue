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
            <article class="orders-list">
                <div class="title">
                    <h5>Customer Orders</h5>
                </div>
                <div>
                    <router-link :to="{name:'vieworder'}">어딘가에있을</router-link>
                    <div id="order-grid"></div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
module.exports = {
    components : {
        'select-box' : SelectBox,
    },
    methods: {
        toggleModal(payload){
            this.$store.commit('toggleModal', payload)
        },
    },
    mounted() {
        var grid = new tui.Grid({
            el: document.getElementById('order-grid'),
            // 우클릭시 버튼 안나오게
            contextMenu: null,      
            rowHeaders: [
              { type: 'checkbox', width: 12, align: 'center', valign: 'middle' }
            ],
            columns: [
                {
                    header: 'Customer Name',
                    name: 'name',
                },
                {
                    header: 'Order Date',
                    name: 'date',
                },
                {
                    header: 'Order Type',
                    name: 'type',
                },
                {
                    header: 'Tracking ID',
                    name: 'id',
                },
                {
                    header: 'Order Total',
                    name: 'total',
                },
                {
                    header: 'Action',
                    name: 'action',
                    editor: {
                        type: 'select',
                        options: [
                            {txet:'Completed', value:'Completed'},
                            {txet:'In-Progress', value:'In-Progress'},
                            {txet:'Pending', value:'Pending'},
                        ]
                    }
                },
                {
                    header: 'Status',
                    name: 'state',
                },
            ]
        });
        var gridData = [
            {
                name: `<router-link :to="{name:'vieworder'}">Janet Adebayo</router-link>`,
                date: '12 Aug 2022 - 12:25 am',
                type: 'Home Delivery',
                id: '9348fjr73',
                total: '₦25,000.00',
                action: `Completed`,
                state: 'Completed',
            },
            {
                name: 'Janet Adebayo',
                date: '12 Aug 2022 - 12:25 am',
                type: 'Home Delivery',
                id: '9348fjr73',
                total: '₦25,000.00',
                action: 'Completed',
                state: 'Completed',
            },
        ];
        grid.resetData( gridData );
    },
}
</script>