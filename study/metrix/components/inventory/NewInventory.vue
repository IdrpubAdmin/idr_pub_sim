<template>
    <section class="new-section new-inven">
        <div class="new-header inventory-header">
            <h3>New Inventory Item</h3>
            <div class="btns">
                <select-box
                    :option="['Save as Draft','Save as Draft','Save as Draft']"
                    :selected="'Save as Draft'"
                    :name="'newInvenSelect01'"
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
                                <div class="input-box">
                                    <input type="text" value="Polo Tshirt">
                                </div>
                            </li>
                            <li class="input-box-area">
                                <select-box
                                    :option="['Select Product Category','Select Product Category','Select Product Category']"
                                    :selected="'Select Product Category'"
                                    :name="'newInvenSelect02'"
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
                                <div class="btns">
                                    <button class="up-btn" @click="++qty">
                                        <img src="assets/images/inventory/up.png" alt="up icon">
                                    </button>
                                    <button class="down-btn" @click="--qty">
                                        <img src="assets/images/inventory/down.png" alt="down icon">
                                    </button>
                                </div>
                            </li>
                            <li class="input-box-area">
                                <select-box
                                    :option="['Order Type','Order Type','Order Type']"
                                    :selected="'Order Type'"
                                    :name="'newInvenSelect03'"
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
                                    :option="['Type','Type','Type']"
                                    :selected="'Type'"
                                    :name="'newInvenSelect04'"
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
                                    <div class="image">
                                        <img src="assets/images/inventory/Calendar.png" alt="calendar icon">
                                    </div>
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
                                <div class="double space">
                                    <div class="input-box">
                                        <div class="image">
                                            <img src="assets/images/inventory/Calendar.png" alt="calendar icon">
                                        </div>
                                        <input type="text" placeholder="12/12/2020">
                                    </div>
                                    <div class="input-box">
                                        <div class="image">
                                            <img src="assets/images/inventory/fi_clock.png" alt="clock icon">
                                        </div>
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
                    <div class="btns">
                        <button>
                            <img src="assets/images/settings/fi_upload-cloud.png" alt="cloud icon">
                        </button>
                        <button>
                            <img src="assets/images/settings/Delete.png" alt="delete icon">
                        </button>
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
                            <div class="btns">
                                <button>
                                    <img src="assets/images/settings/fi_upload-cloud.png" alt="cloud icon">
                                </button>
                                <button>
                                    <img src="assets/images/settings/Delete.png" alt="delete icon">
                                </button>
                            </div>
                        </li>
                        <li class="upload-box no-img">
                            <div class="image">
                                <img src="assets/images/inventory/Image.png" alt="image icon">
                            </div> 
                            <div class="text">
                                <img src="assets/images/inventory/fi_upload-cloud.png" alt="cloud icon">
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
}
</script>