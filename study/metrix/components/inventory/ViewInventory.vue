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
                    <i class="copy2-icon"></i> 
                </li>
            </ul>
            <div class="btns">
                <select-box
                    :select-data = selectData.invenSelect02
                ></select-box>
                <div class="btn">
                    <router-link :to="{name:'inventorymain'}">Upublish Product</router-link>
                </div>   
            </div>
        </div>
        <div class="contents">
            <div class="flex-area">
                <article class="product-img">
                    <img src="assets/images/inventory/Shirt.png" alt="product img">
                </article>
                <article-summary
                    :article-data = articleData.invenView01
                ></article-summary>
                <article-summary
                    :article-data = articleData.invenView02
                    :select-data = selectData.invenSelect03
                ></article-summary>
                <article-summary
                    :article-data = articleData.invenView03
                    :select-data = selectData.invenSelect04
                ></article-summary>
            </div>
            <article-summary
                :article-data = articleData.invenView04
                :select-data = selectData.invenSelect05
            ></article-summary>
            <article-summary
                :article-data = articleData.invenView05
                :select-data = selectData.invenSelect06
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
            tableData : this.$store.getters["tableData/viewInven"]
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