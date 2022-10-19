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
            <article-summary
                :article-data = articleData.invenMain01
            ></article-summary>
            <article-summary
                :article-data = articleData.invenMain02
                :select-data = selectData.invenSelect01
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
            tableData : this.$store.getters["tableData/mainInven"]
        }
    },
    components : {
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
        }
    },
}
</script>