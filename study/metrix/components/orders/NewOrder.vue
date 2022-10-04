<template>
    <div class="modal-wrap">
        <div class="modal-container new-order">
            <div class="header">
                <h3>Create New Order</h3>
                <div class="btn">
                    <button @click="$store.commit('toggleModal', 'newOrder')">
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
                            <div class="btn" @click="$store.commit('toggleBtn', 'newOrderBtn01')" :class="{btnactive:$store.getters.btnActive.includes('newOrderBtn01')}">
                                <button></button>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div class="select-box-area">
                            <div class="selected">
                                <div class="value">Select Customer</div>
                            </div>
                            <ul>
                                <li class="option">Select Customer</li>
                                <li class="option">Select Customer1</li>
                                <li class="option">Select Customer2</li>
                                <li class="option">Select Customer3</li>
                            </ul>
                        </div>      
                    </form>
                </article>
                <article>
                    <div class="modal-title">
                        <h5>Items</h5>
                    </div>
                </article>
            </section>
        </div>
    </div>
</template>