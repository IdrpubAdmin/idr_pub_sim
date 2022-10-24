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
                    <i class="copy2-icon"></i> 
                </li>
            </ul>
            <div class="btns">
                <select-box
                    :select-data = selectData.orderSelect04
                ></select-box>
                <div class="btn">
                    <router-link :to="{name:'ordersmain'}">Cancel Order</router-link>
                </div>   
            </div>
        </div>
        <div class="contents">
            <article-summary
                :article-data = articleData.orderView01
            ></article-summary>
            <article-summary
                :article-data = articleData.orderView02
            ></article-summary>
            <article-summary
                :article-data = articleData.orderView03
            ></article-summary>
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
            tableData : this.$store.getters["tableData/viewOrder"]
        }
    },
    components: {
        'article-summary' : ArticleSummary,
        'select-box' : SelectBox,
        'table-box' : TableBox
    },
    computed: {
        articleData() {
            return this.$store.getters["articleData"]
        },
        selectData() {
            return this.$store.getters["selectData"].selectBox
        },
    },
}
</script> 