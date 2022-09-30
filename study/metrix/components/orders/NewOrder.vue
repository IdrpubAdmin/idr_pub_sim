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
        </div>
    </div>
</template>