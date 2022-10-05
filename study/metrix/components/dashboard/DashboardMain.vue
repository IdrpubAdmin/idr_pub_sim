<template>
    <div class="dashboard">
        <article class="summary">
            <div class="header no-bg-sel">
                <div class="icon-box point">
                    <img src="assets/images/dashboard/Graph.png" alt="graph icon">
                </div>
                <select-box
                    :option="['This Day', 'This Week', 'This Month', 'This Year']"
                    :selected="'This Week'"
                    :name="'dashSelect01'"
                ></select-box>
            </div>
            <ul>
                <li>
                    <p class="tit">Sales</p>
                    <dl class="value">
                        <dt>₦<span>4,000,000.00</span></dt>
                    </dl>
                </li>
                <li>
                    <p class="tit">Volume</p>
                    <dl class="value">
                        <dt><span>450</span></dt>
                        <dd class="plus">+<span>20.00</span>%</dd>
                    </dl>
                </li>
            </ul>
        </article>
        <article class="summary">
            <div class="header no-bg-sel">
                <div class="icon-box">
                    <img src="assets/images/dashboard/User.png" alt="user icon">
                </div>
                <select-box
                    :option="['This Day', 'This Week', 'This Month', 'This Year']"
                    :selected="'This Week'"
                    :name="'dashSelect02'"
                ></select-box>
            </div>
            <ul>
                <li>
                    <p class="tit">Customers</p>
                    <dl class="value">
                        <dt><span>1,250</span></dt>
                        <dd class="plus">+<span>15.80</span>%</dd>
                    </dl>
                </li>
                <li>
                    <p class="tit">Active</p>
                    <dl class="value">
                        <dt><span>1,180</span></dt>
                        <dd class="minus">-<span>4.90</span>%</dd>
                    </dl>
                </li>
            </ul>
        </article>
        <article class="summary">
            <div class="header no-bg-sel">
                <div class="icon-box">
                    <img src="assets/images/dashboard/Bag.png" alt="bag">
                </div>
                <select-box
                    :option="['This Day', 'This Week', 'This Month', 'This Year']"
                    :selected="'This Week'"
                    :name="'dashSelect03'"
                ></select-box>
            </div>
            <ul>
                <li>
                    <p class="tit">All Orders</p>
                    <dl class="value">
                        <dt><span>450</span></dt>
                    </dl>
                </li>
                <li>
                    <p class="tit">Pending</p>
                    <dl class="value">
                        <dt><span>5</span></dt>
                    </dl>
                </li>
                <li>
                    <p class="tit">Completed</p>
                    <dl class="value">
                        <dt><span>445</span></dt>
                    </dl>
                </li>
            </ul>
        </article>
        <article class="circle-chart">
            <div class="title no-bg-sel">
                <h5>Marketting</h5>
                <select-box
                :option="['This Day', 'This Week', 'This Month', 'This Year']"
                :selected="'This Week'"
                :name="'dashSelect04'"
            ></select-box>
            </div>
        </article>
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
                        <dt><span>45</span></dt>
                    </dl>
                </li>
                <li>
                    <p class="tit">Active</p>
                    <dl class="value">
                        <dt><span>32</span></dt>
                        <dd class="plus">+<span>24</span>%</dd>
                    </dl>
                </li>
            </ul>
        </article>
        <article class="summary cart">
            <div class="header no-bg-sel">
                <div class="icon-box">
                    <img src="assets/images/dashboard/fi_shopping-cart.png" alt="cart icon">
                </div>
                <select-box
                    :option="['This Day', 'This Week', 'This Month', 'This Year']"
                    :selected="'This Week'"
                    :name="'dashSelect05'"
                ></select-box>
            </div>
            <ul>
                <li>
                    <p class="tit point">Abandoned Cart</p>
                    <dl class="value">
                        <dt><span>20</span>%</dt>
                        <dd class="plus">+<span>0.00</span>%</dd>
                    </dl>
                </li>
                <li>
                    <p class="tit">Customers</p>
                    <dl class="value">
                        <dt><span>30</span></dt>
                    </dl>
                </li>
            </ul>
        </article>
        <article class="products">
            <div class="title">
                <h5>Recent Orders</h5>
            </div>
            <ul>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle4.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state pending">Pending</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle3.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state completed">Completed</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle4.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state pending">Pending</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle3.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state completed">Completed</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle3.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state completed">Completed</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle3.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state completed">Completed</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle4.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state pending">Pending</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle4.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state pending">Pending</p>
                        </div>
                    </div>
                </li>
            </ul>
        </article>
        <article class="bar-chart">
            <div class="title">
                <div class="tit-sel">
                    <h5>Summary</h5>
                    <select-box
                        :option="['Sales', 'Sales', 'Sales', 'Sales']"
                        :selected="'Sales'"
                        :name="'dashSelect06'"
                    ></select-box>
                </div>
                <div class="no-bg-sel">
                    <select-box
                        :option="['Last 7 Days', 'Last 7 Days', 'Last 7 Days']"
                        :selected="'Last 7 Days'"
                        :name="'dashSelect07'"
                    ></select-box>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    components : {
        'select-box' : SelectBox
    },
}
</script>