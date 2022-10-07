<template>
    <section class="main-inventory">
        <div class="inventory-header">
            <h3>Inventory Summary</h3>
            <div class="btn">
                <router-link :to="{name:'newinventory'}">
                    <img src="assets/images/orders/fi_plus.png" alt="plus icon">
                    <span>Add a New Product</span>
                </router-link>
            </div>   
        </div>
        <div class="contents">
            <article class="summary folder">
                <div class="header">
                    <div class="icon-box">
                        <img src="assets/images/dashboard/Folder.png" alt="folder icon">
                    </div>
                </div>
                <ul>
                    <li>
                        <p class="tit">All Products</p>
                        <dl class="value">
                            <dt><span>350</span></dt>
                        </dl>                        
                    </li>
                    <li>
                        <p class="tit">Active</p>
                        <dl class="value">
                            <dt><span>316</span></dt>
                            <dd class="plus">+<span>86.00</span>%</dd>
                        </dl>
                    </li>
                </ul>
            </article>
            <article class="summary">
                <div class="header no-bg-sel">
                    <div class="icon-box">
                        <img src="assets/images/customers/2User.png" alt="user icon">
                    </div>
                    <select-box
                        :option="['This Day', 'This Week', 'This Month', 'This Year']"
                        :selected="'This Week'"
                        :name="'invenSelect01'"
                    ></select-box>
                </div>
                <ul>
                    <li>
                        <p class="tit point">Low Stock Alert</p>
                        <dl class="value">
                            <dt><span>23</span></dt>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">Expired</p>
                        <dl class="value">
                            <dt><span>3</span></dt>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">1 Start Rating</p>
                        <dl class="value">
                            <dt><span>2</span></dt>
                        </dl>
                    </li>
                </ul>
            </article>
            <article class="table-area">
                <div class="title">
                    <h5>Inventory Items</h5>
                </div>
                    <table-box
                        :table="tableData"
                    ></table-box>
            </article>
        </div>
    </section>
</template>

<script>
module.exports = {
    data() {
        return {
            tableData : this.$store.getters["tableData/mainInven"]
        }
    },
    components : {
        'select-box' : SelectBox,
        'table-box' : TableBox
    },
}
</script>