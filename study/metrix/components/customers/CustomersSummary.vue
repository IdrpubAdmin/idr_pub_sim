<template>
    <section class="main-customers">
        <div class="customers-header">
            <h3>Customers Summary</h3>
            <div class="btn">
                <button @click="toggleModal('newCustomer')">
                    <img src="assets/images/orders/fi_plus.png" alt="plus icon">
                    <span>Add a New Customer</span>
                </button>
            </div>   
        </div>
        <div class="contents">
            <article class="summary">
                <div class="header no-bg-sel">
                    <div class="icon-box">
                        <img src="assets/images/customers/2User.png" alt="user icon">
                    </div>
                    <select-box
                        :option="['This Day', 'This Week', 'This Month', 'This Year']"
                        :selected="'This Week'"
                        :name="'customSelect01'"
                    ></select-box>
                </div>
                <ul>
                    <li>
                        <p class="tit">All Customers</p>
                        <dl class="value">
                            <dt><span>1,180</span></dt>
                            <dd class="plus">+<span>85.00</span>%</dd>
                        </dl>                        
                    </li>
                    <li>
                        <p class="tit">Active</p>
                        <dl class="value">
                            <dt><span>30</span></dt>
                            <dd class="plus">+<span>15.80</span>%</dd>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">In-Active</p>
                        <dl class="value">
                            <dt><span>70</span></dt>
                            <dd class="minus">-<span>10.00</span>%</dd>
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
                        :option="['This Day', 'This Week', 'This Month', 'This Year']"
                        :selected="'This Week'"
                        :name="'customSelect02'"
                    ></select-box>
                </div>
                <ul>
                    <li>
                        <p class="tit">New Customers</p>
                        <dl class="value">
                            <dt><span>30</span></dt>
                            <dd class="minus">-<span>20.00</span>%</dd>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">Purchasing</p>
                        <dl class="value">
                            <dt><span>657</span></dt>
                        </dl>
                    </li>
                    <li>
                        <p class="tit">Abandoned Carts</p>
                        <dl class="value">
                            <dt><span>5</span></dt>
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
            tableData : this.$store.getters["tableData/mainCustom"]
        }
    },
    components : {
        'select-box' : SelectBox,
        'table-box' : TableBox
    },
    methods: {
        toggleModal(payload){
            this.$store.commit('toggleModal', payload)
        },
    },
}
</script>