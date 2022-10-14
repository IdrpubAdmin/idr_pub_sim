<template>
    <section class="view-section view-inven">
        <div class="view-header inventory-header">
            <ul>
                <li>
                    <p>Polo T-Shirt</p>
                </li>
                <li>
                    <p>Date Added <span>12 Sept 2022 - 12:55 pm</span></p>
                </li>
                <li>
                    <p>Product URL <span>1nancystores.com/polot-shirt</span></p>       
                    <div class="image">  
                        <img src="assets/images/orders/u_copy-alt.png" alt="copy icon">    
                    </div> 
                </li>
            </ul>
            <div class="btns">
                <select-box
                    :option="['Edit Product','Edit Product','Edit Product']"
                    :selected="'Edit Product'"
                    :name="'viewInvenSelect01'"
                ></select-box>
                <div class="btn">
                    <router-link :to="{name:'inventorymain'}">Upublish Product</router-link>
                </div>   
            </div>
        </div>
        <div class="contents">
            <div class="flex-area">
                <article class="summary product-img">
                    <div class="image">
                        <img src="assets/images/inventory/Shirt.png" alt="product img">
                    </div>
                </article>
                <article class="summary user-sum profile">
                    <div class="header">
                        <div class="user">
                            <dl class="value">
                                <dd class="since">Last Order <span>12 Sept 2022</span></dd>
                            </dl>  
                        </div>
                        <div class="state completed">
                            <span>Published</span>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <p class="tit">Price</p>
                            <p class="value">₦<span>25,000.00</span></p>
                        </li>
                        <li>
                            <p class="tit">In-Stock</p>
                            <p class="value"><span>20</span></p>
                        </li>
                    </ul>
                </article>
                <article class="summary">
                    <div class="header no-bg-sel">
                        <div class="icon-box point">
                            <img src="assets/images/inventory/fi_pie-chart.png" alt="chart icon">
                        </div>
                        <select-box
                            :option="['This Day', 'This Week', 'This Month', 'This Year', 'All-time']"
                            :selected="'All-time'"
                            :name="'viewInvenSelect02'"
                        ></select-box>
                    </div>
                    <ul>
                        <li>
                            <p class="tit">Total Orders</p>
                            <p class="value">₦<span>50,000.00</span></p>
                        </li>
                    </ul>
                </article>
                <article class="summary">
                    <div class="header no-bg-sel">
                        <div class="icon-box">
                            <img src="assets/images/inventory/fi_eye.png" alt="eye icon">
                        </div>
                        <select-box
                            :option="['This Day', 'This Week', 'This Month', 'This Year', 'All-time']"
                            :selected="'All-time'"
                            :name="'viewInvenSelect03'"
                        ></select-box>
                    </div>
                    <ul>
                        <li>
                            <p class="tit">Views</p>
                            <dl class="value">
                                <dt><span>1,200</span></dt>
                            </dl>
                        </li>
                        <li>
                            <p class="tit">Favourite</p>
                            <dl class="value">
                                <dt><span>23</span></dt>
                            </dl>
                        </li>
                    </ul>
                </article>
            </div>
            <article class="summary">
                <div class="header no-bg-sel">
                    <div class="icon-box">
                        <img src="assets/images/dashboard/Bag.png" alt="bag icon">
                    </div>
                    <select-box
                        :option="['This Day', 'This Week', 'This Month', 'This Year', 'All-time']"
                        :selected="'All-time'"
                        :name="'viewInvenSelect04'"
                    ></select-box>
                </div>
                <ul>
                    <li>
                        <p class="tit">All Orders</p>
                    <dl class="value">
                        <dt><span>1</span></dt>
                    </dl>
                    </li>
                    <li>
                        <p class="tit">Pending</p>
                        <dl class="value">
                            <dt><span>0</span></dt>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">Completed</p>
                        <dl class="value">
                            <dt><span>1</span></dt>
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
                        :option="['This Day', 'This Week', 'This Month', 'This Year', 'All-time']"
                        :selected="'All-time'"
                        :name="'viewInvenSelect05'"
                    ></select-box>
                </div>
                <ul>
                    <li>
                        <p class="tit">Canceled</p>
                    <dl class="value">
                        <dt><span>0</span></dt>
                    </dl>
                    </li>
                    <li>
                        <p class="tit">Returned</p>
                        <dl class="value">
                            <dt><span>0</span></dt>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">Damaged</p>
                        <dl class="value">
                            <dt><span>0</span></dt>
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
            tableData : this.$store.getters["tableData/viewInven"]
        }
    },
    components : {
        'select-box' : SelectBox,
        'table-box' : TableBox
    },
}
</script>