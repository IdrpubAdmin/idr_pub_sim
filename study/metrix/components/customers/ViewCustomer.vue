<template>
    <section class="view-section view-custom">
        <div class="view-header customers-header">
            <ul>
                <li>
                    <p>Order Number <span>#743648</span></p>
                </li>
                <li>
                    <p>Order Date <span>12 Sept 2022 - 12:55 pm</span></p>
                </li>
                <li>
                    <p>Tracking ID <span>9348fjr73</span></p>       
                    <div class="image">  
                        <img src="assets/images/orders/u_copy-alt.png" alt="copy icon">    
                    </div> 
                </li>
            </ul>
            <div class="btns">
                <select-box
                    :option="['Edit Customer','Edit Customer','Edit Customer']"
                    :selected="'Edit Customer'"
                    :name="'viewCustomSelect01'"
                ></select-box>
                <div class="btn">
                    <router-link :to="{name:'customersmain'}">Suspend Customer</router-link>
                </div>   
            </div>
        </div>
        <div class="contents">
            <article class="summary user-sum profile">
                <div class="header">
                    <div class="user">
                        <div class="icon-box">
                            <img src="assets/images/orders/Profile.png" alt="profile icon">
                        </div>
                        <dl class="value">
                            <dt class="name"><span>Janet Adebayo</span></dt>
                            <dd class="plus since">Customer since <span>12 Sept 2022</span></dd>
                        </dl>  
                    </div>
                    <div class="state completed">
                        <span>Active</span>
                    </div>
                </div>
                <ul>
                    <li>
                        <p class="tit">Phone</p>
                        <p class="value"><span>+2348065650633</span></p>
                    </li>
                    <li>
                        <p class="tit">Email</p>
                        <p class="value"><span>janet.adebayo@gmail.com</span></p>
                    </li>
                </ul>
            </article>
            <article class="summary user-sum">
                <div class="header">
                    <div class="icon-box">
                        <img src="assets/images/orders/Location.png" alt="location icon">
                    </div>
                </div>
                <ul>
                    <li>
                        <p class="tit">Home Address</p>
                        <p class="value"><span>No. 15 Adekunle Street, Yaba, <br>Lagos State</span></p>
                    </li>
                    <li>
                        <p class="tit">Billing Address</p>
                        <p class="value"><span>No. 15 Adekunle Street, Yaba, <br>Lagos State</span></p>
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
                        :name="'viewCustomSelect02'"
                    ></select-box>
                </div>
                <ul>
                    <li>
                        <p class="tit">Total Orders</p>
                        <p class="value">₦<span>25,000.00</span></p>
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
                        :name="'viewCustomSelect03'"
                    ></select-box>
                </div>
                <ul>
                    <li>
                        <p class="tit">All Orders</p>
                        <dl class="value">
                            <dt><span>10</span></dt>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">Pending</p>
                        <dl class="value">
                            <dt><span>2</span></dt>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">Completed</p>
                        <dl class="value">
                            <dt><span>8</span></dt>
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
                        :name="'viewCustomSelect04'"
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
            <article class="summary">
                <div class="header no-bg-sel">
                    <div class="icon-box">
                        <img src="assets/images/dashboard/fi_shopping-cart.png" alt="cart icon">
                    </div>
                </div>
                <ul>
                    <li>
                        <p class="tit point">Abandoned Cart</p>
                        <dl class="value">
                            <dt><span>2</span></dt>
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
            tableData : this.$store.getters["tableData/viewCustom"]
        }
    },
    components : {
        'select-box' : SelectBox,
        'table-box' : TableBox
    },
}
</script>