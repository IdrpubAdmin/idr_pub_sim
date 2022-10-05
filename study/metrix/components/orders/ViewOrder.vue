<template>
    <section class="view-section view-order">
        <div class="view-header orders-header">
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
                    :option="['Mark as Complete','Mark as Complete','Mark as Complete']"
                    :selected="'Mark as Complete'"
                    :name="'viewOrderSelect01'"
                ></select-box>
                <div class="btn">
                    <router-link :to="{name:'ordersmain'}">Cancel Order</router-link>
                </div>   
            </div>
        </div>
        <div class="contents">
            <article class="summary profile">
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
                    <div class="state pending">
                        <span>Pending</span>
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
            <article class="summary">
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
                <div class="header">
                    <div class="icon-box">
                        <img src="assets/images/orders/fi_credit-card.png" alt="card icon">
                    </div>
                </div>
                <ul>
                    <li>
                        <p class="tit">Payment Method</p>
                        <p class="value"><span>Master Card</span></p>
                    </li>
                    <li>
                        <p class="tit">Order Type</p>
                        <p class="value"><span>Home Delivery</span></p>
                    </li>
                </ul>
            </article>
            <article class="orders-list">
                <div class="title">
                    <h5>Itmes</h5>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
module.exports = {
    components: {
        'select-box' : SelectBox
    }
}
</script>