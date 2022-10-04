<template>
    <section>
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
                <div class="header">
                    <div class="icon-box">
                        <img src="assets/images/dashboard/Bag.png" alt="bag icon">
                    </div>
                </div>
                <ul>
                    <li>
                        <p class="tit">All Orders</p>
                        <p class="value"><span>450</span></p>
                    </li>
                    <li>
                        <p class="tit">Pending</p>
                        <p class="value"><span>5</span></p>
                    </li>
                    <li>
                        <p class="tit">Completed</p>
                        <p class="value"><span>320</span></p>
                    </li>
                </ul>
            </article>
            <article class="summary">
                <div class="header">
                    <div class="icon-box">
                        <img src="assets/images/dashboard/Bag.png" alt="bag icon">
                    </div>
                </div>
                <ul>
                    <li>
                        <p class="tit">Canceled</p>
                        <p class="value"><span>30</span></p>
                    </li>
                    <li>
                        <p class="tit">Returned</p>
                        <p class="value"><span>20</span></p>
                    </li>
                    <li>
                        <p class="tit">Damaged</p>
                        <p class="value"><span>5</span></p>
                    </li>
                </ul>
            </article>
            <article class="summary">
                <div class="header">
                    <div class="icon-box">
                        <img src="assets/images/dashboard/fi_shopping-cart.png" alt="cart icon">
                    </div>
                </div>
                <ul>
                    <li>
                        <p class="tit">Abandoned Cart</p>
                        <p class="value"><span>20</span>%</p>
                    </li>
                    <li>
                        <p class="tit">Customers</p>
                        <p class="value"><span>30</span></p>
                    </li>
                </ul>
            </article>
            <article class="orders-list">
                <div class="title">
                    <h5>Customer Orders</h5>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
module.exports = {
    methods: {
        toggleModal(payload){
            this.$store.commit('toggleModal', payload)
        },
    },
}
</script>