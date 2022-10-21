<template>
    <section class="new-section new-inven">
        <div class="new-header inventory-header">
            <h3>New Inventory Item</h3>
            <div class="btns">
                <select-box
                    :select-data = selectData.invenSelect07
                ></select-box>
                <div class="btn">
                    <router-link :to="{name:'inventorymain'}">Save & Publish</router-link>
                </div>   
            </div>
        </div>
        <div class="contents">
            <article class="product-detail">
                <div class="detail-list">
                    <div class="form-wrap">
                        <ul class="form">
                            <li class="input-box-area">
                                <p>Product Name</p>
                                <div class="input-box input-ty03">
                                    <input type="text" value="Polo Tshirt">
                                </div>
                            </li>
                            <li class="input-box-area">
                                <select-box
                                    :select-data = selectData.invenSelect08
                                ></select-box>
                            </li>
                            <li class="input-box-area double">
                                <div class="input-box">
                                    <input type="text" placeholder="Selling Price">
                                </div>
                                <div class="input-box">
                                    <input type="text" placeholder="Cost Price">
                                </div>
                            </li>
                            <li class="input-box-area qty">
                                <div class="input-box">
                                    <input type="number" placeholder="Quantity in Stock" v-model="qty">
                                </div>
                                <div class="input-btn-area">
                                    <button class="up-icon" @click="++qty"></button>
                                    <button class="down-icon" @click="--qty"></button>
                                </div>
                            </li>
                            <li class="input-box-area">
                                <select-box
                                    :select-data = selectData.invenSelect09
                                ></select-box>
                            </li>
                        </ul>
                    </div>
                    <div class="form-wrap">
                        <div class="title">
                            <h5>Order Details</h5>
                            <div class="btn-area">
                                <p>Add Discount</p>
                                <div class="toggle-btn" @click="toggleBtn('newInvenBtn01')" :class="{'btn-active':btnActive.includes('newInvenBtn01')}">
                                    <button></button>
                                </div>
                            </div>
                        </div>
                        <ul class="form">
                            <li class="input-box-area double">
                                <select-box
                                    :select-data = selectData.invenSelect10
                                ></select-box>
                                <div class="input-box">
                                    <input type="text" placeholder="Value">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="form-wrap">
                        <div class="title">
                            <h5>Expiry Date</h5>
                            <div class="btn-area">
                                <p>Add Expiry Date</p>
                                <div class="toggle-btn" @click="toggleBtn('newInvenBtn02')" :class="{'btn-active':btnActive.includes('newInvenBtn02')}">
                                    <button></button>
                                </div>
                            </div>
                        </div>
                        <ul class="form">
                            <li class="input-box-area icon-in">
                                <div class="input-box">
                                    <i class="icon-box calendar-icon"></i>
                                    <input type="text" placeholder="12/12/2020">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="detail-list">
                    <div class="form-wrap">
                        <ul class="form">
                            <li class="input-box-area">
                                <textarea name="" id="" cols="30" rows="10" placeholder="Short Description"></textarea>
                            </li>
                            <li class="input-box-area textarea">
                                <p>Product Long Description</p>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Your text goes here"></textarea>
                                <span>Add a long description for your product</span>
                            </li>
                        </ul>
                    </div>
                    <div class="form-wrap">
                        <div class="title">
                            <h5>Return Policy</h5>
                            <div class="btn-area">
                                <p>Add Discount</p>
                                <div class="toggle-btn" @click="toggleBtn('newInvenBtn03')" :class="{'btn-active':btnActive.includes('newInvenBtn03')}">
                                    <button></button>
                                </div>
                            </div>
                        </div>
                        <ul class="form">
                            <li class="input-box-area icon-in">
                                <p>Date Addred</p>
                                <div class="double input-ty03">
                                    <div class="input-box">
                                        <i class="icon-box calendar-icon"></i>
                                        <input type="text" placeholder="12/12/2020">
                                    </div>
                                    <div class="input-box">
                                        <i class="icon-box clock-icon"></i>
                                        <input type="text" placeholder="12:00 PM">
                                    </div> 
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
            <article class="product-image">
                <div class="main-img">
                    <div class="image">
                        <img src="assets/images/inventory/Shirt.png" alt="product img">
                    </div>
                    <div class="img-btn-area">
                        <button class="cloud-icon"></button>
                        <button class="delete-icon"></button>
                    </div>
                </div>
                <div class="addition-img">
                    <div class="title">
                        <h5>Additional Images</h5>
                    </div>
                    <ul class="upload-img">
                        <li class="upload-box">
                            <div class="image">
                                <img src="assets/images/inventory/Shirt.png" alt="product img">
                            </div> 
                            <div class="img-btn-area">
                                <button class="cloud-icon"></button>
                                <button class="delete-icon"></button>
                            </div>
                        </li>
                        <li class="upload-box no-img">
                            <div class="image"></div> 
                            <div class="text">
                                <i class="cloud2-icon"></i>
                                <p>Upload Image</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
module.exports = {
    data() {
        return {
            btnActive : this.$store.getters.btnActive,
            qty : null,
        }
    },
    methods: {
        toggleBtn(payload){
            this.$store.commit('toggleBtn', payload)
        }
    },
    components : {
        'select-box' : SelectBox,
    },
    computed: {
        selectData() {
            return this.$store.getters["selectData"].selectBox
        },
    }
}
</script>