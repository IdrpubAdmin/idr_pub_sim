<template>
    <div class="modal-wrap">
        <div class="modal-container new-order" :class="{'big-modal':btnActive.includes('newOrderBtn01')}">
            <div class="header">
                <h3>Create New Order</h3>
                <div class="btn">
                    <button class="x-icon" @click="toggleModal('newOrder')"></button>
                </div>
            </div>
            <section>
                <article>
                    <div class="modal-title">
                        <h5>Order Details</h5>
                        <div class="btn-area">
                            <p>New Customer</p>
                            <div class="toggle-btn" @click="toggleBtn('newOrderBtn01')" :class="{'btn-active':btnActive.includes('newOrderBtn01')}">
                                <button></button>
                            </div>
                        </div>
                    </div>
                    <ul class="form">
                        <template v-if="btnActive.includes('newOrderBtn01')">
                            <li class="input-box-area input-ty02">
                                <div class="input-box">
                                    <input type="text" placeholder="Customer Name">
                                </div>
                            </li>                          
                            <li class="input-box-area input-ty02">
                                <div class="input-box">
                                    <input type="text" placeholder="Customer Email">
                                </div>
                            </li>
                            <li class="input-box-area">
                                <div class="input-box input-ty02 phone-box">
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
                            <li class="input-box-area">
                                <select-box
                                    :select-data = selectData.orderSelect05
                                ></select-box>
                            </li> 
                        </template>
                        <li class="input-box-area double">
                            <select-box
                                :select-data = selectData.orderSelect06
                            ></select-box>
                            <select-box
                                :select-data = selectData.orderSelect07
                            ></select-box>
                        </li>
                        <li class="input-box-area">
                            <p>Order Time & Date</p>
                            <div class="double input-ty03">
                                <div class="input-box">
                                    <i class="icon-box calendar-icon"></i>
                                    <input type="text" value="12/12/2020">
                                </div>
                                <div class="input-box">
                                    <i class="icon-box clock-icon"></i>
                                    <input type="text" value="12:00 PM">
                                </div>
                            </div>
                        </li>
                        <li class="input-box-area state-sel">
                            <p>Order Status</p>
                            <select-box
                                :select-data = selectData.orderSelect08
                            ></select-box>
                        </li>
                        <li class="input-box-area">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Order Note"></textarea>
                        </li>
                    </ul>
                </article>
                <article>
                    <div class="modal-title">
                        <h5>Items</h5>
                    </div>
                    <div class="input-box search">
                        <i class="icon-box search-icon"></i>
                        <input type="search" placeholder="Search product name" :value="itemSearch" @input="changeKeyword">
                    </div>
                    <template v-if="itemSearch.length > 0">
                        <div class="items search-item">
                            <ul>
                                <li v-for="item in productData" :key="item.id">
                                    <div class="item">
                                        <div class="img">
                                            <img :src="'assets/images/orders/'+item.src+'.png'" :alt="item.src+' img' ">
                                        </div>
                                        <div class="texts">
                                            <div class="text">
                                                <p class="prod-name">{{item.name}}</p>
                                                <p class="prod-price">₦<span>{{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}.00</span></p>
                                            </div>
                                            <div class="item-btn-area">
                                                <button class="add" @click="pushItem(item)">Add Item</button>
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
                                                <p class="prod-price">₦<span>{{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}.00</span></p>
                                            </div>
                                            <div class="item-btn-area">
                                                <button class="remove" @click="deleItem(item.id)">Remove</button>
                                                <div class="btns">
                                                    <div class="btn">
                                                        <button @click="minusBtn(item.id)" class="minus-icon"></button>
                                                    </div>
                                                    <span>{{item.count}}</span>
                                                    <div class="btn">
                                                        <button @click="plusBtn(item.id)" class="plus-icon"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <dl class="item-total">
                                        <dt>Sub-total</dt>
                                        <dd>₦<span>{{item.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}.00</span></dd>
                                     </dl>   
                                </li>
                            </ul>
                            <dl class="items-total">
                                <dt>Total</dt>
                                <dd>₦<span>{{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}.00</span></dd>
                            </dl>   
                        </div>
                    </template>
                    <template v-else>
                        <div class="no-item">
                            <div class="image"></div>
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
        changeKeyword(e){
            this.itemSearch = e.target.value
        }
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
        selectData() {
            return this.$store.getters["selectData"].selectBox
        },
    },
}
</script>