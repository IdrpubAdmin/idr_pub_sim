<template>
    <div class="modal-wrap">
        <div class="modal-container new-order" :class="{'big-modal':btnActive.includes('newOrderBtn01')}">
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
                            <div class="toggle-btn" @click="toggleBtn('newOrderBtn01')" :class="{btnactive:btnActive.includes('newOrderBtn01')}">
                                <button></button>
                            </div>
                        </div>
                    </div>
                    <ul class="form">
                        <template v-if="btnActive.includes('newOrderBtn01')">
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
                        </template>
                        <template v-else>
                            <li class="form-item">
                                <select-box
                                    :option="['Select Customer', 'Select Customer1', 'Select Customer2', 'Select Customer3']"
                                    :selected="'Select Customer'"
                                    :name="'newOrderSelect01'"
                                ></select-box>
                            </li> 
                        </template>
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
                        <input type="search" placeholder="Search product name" v-model="itemSearch">
                    </div>
                    <template v-if="itemSearch.length > 0">
                        <div class="items search-item">
                            <ul>
                                <li v-for="(item, i) in productData" :key="item.id">
                                    <div class="item">
                                        <div class="img">
                                            <img :src="'assets/images/orders/'+item.src+'.png'" :alt="item.src+' img' ">
                                        </div>
                                        <div class="texts">
                                            <div class="text">
                                                <p class="prod-name">{{item.name}}</p>
                                                <p class="prod-price">₦<span>{{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</span>.00</p>
                                            </div>
                                            <div class="item-btns">
                                                <button class="add" @click="pushItem(i)">Add Item</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        <div>
                    </template>
                    <template v-if="newOrderItemList.length > 0">
                        <div class="items">
                            <ul>
                                <li v-for="item in newOrderItemList" :key="item.id">
                                    <div class="item">
                                        <div class="img">
                                            <img :src="'assets/images/orders/'+item.src+'.png'" :alt="item.src+' img' ">
                                        </div>
                                        <div class="texts">
                                            <div class="text">
                                                <p class="prod-name">{{item.name}}</p>
                                                <p class="prod-price">₦<span>{{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</span>.00</p>
                                            </div>
                                            <div class="item-btns">
                                                <button class="remove" @click="deleItem(item.id)">Remove</button>
                                                <div class="btns">
                                                    <div class="btn">
                                                        <button @click="minusBtn(item.id)"><img src="assets/images/orders/minus.png" alt="minus icon"></button>
                                                    </div>
                                                    <span>{{item.count}}</span>
                                                    <div class="btn">
                                                        <button @click="plusBtn(item.id)"><img src="assets/images/orders/plus.png" alt="plus icon"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <dl class="item-total">
                                        <dt>Sub-total</dt>
                                        <dd>₦<span>{{item.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</span>.00</dd>
                                     </dl>   
                                </li>
                            </ul>
                            <dl class="items-total">
                                <dt>Total</dt>
                                <dd>₦<span>{{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</span>.00</dd>
                            </dl>   
                        </div>
                    </template>
                    <template v-else>
                        <div class="no-item">
                            <div class="image">
                                <img src="assets/images/orders/iconContainer.png" alt="main img">
                            </div>
                            <div class="texts">
                                <h5>Add Products to Your Order</h5>
                                <p>Search and add products to this order.</p>
                            </div>
                        </div>
                    </template>
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
            btnActive : this.$store.getters.btnActive,
            itemSearch : '',
        }
    },
    methods: {
        toggleModal(payload){
            this.$store.commit('toggleModal', payload)
        },
        toggleBtn(payload){
            this.$store.commit('toggleBtn', payload)
        },
        pushItem(payload){
            this.$store.commit('productData/pushItem', payload)
            this.itemSearch = ''
        },
        deleItem(payload){
            this.$store.commit('productData/deleItem', payload)
        },
        plusBtn(payload){
            this.$store.commit('productData/countPlus', payload)
        },
        minusBtn(payload){
            this.$store.commit('productData/countMinus', payload)
        },
        calcItem(payload){
            this.$store.commit('productData/calcItem', payload)
        },
    },
    components: {
        'select-box' : SelectBox
    },
    computed: {
        productData() {
            return this.$store.getters["productData"].items
        },
        newOrderItemList() {
            return this.$store.getters["productData/newOrderItemList"]
        },
        total() {
            return this.$store.getters["productData/total"]
        },
    },
}
</script>