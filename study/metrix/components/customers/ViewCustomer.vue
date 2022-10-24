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
                    <i class="copy2-icon"></i> 
                </li>
            </ul>
            <div class="btns">
                <select-box
                    :select-data = selectData.customSelect03
                ></select-box>
                <div class="btn">
                    <router-link :to="{name:'customersmain'}">Suspend Customer</router-link>
                </div>   
            </div>
        </div>
        <div class="contents">
            <article-summary
                :article-data = articleData.customView01
            ></article-summary>
            <article-summary
                :article-data = articleData.customView02
            ></article-summary>
            <article-summary
                :article-data = articleData.customView03
                :select-data = selectData.customSelect04
            ></article-summary>
            <article-summary
                :article-data = articleData.customView04
                :select-data = selectData.customSelect05
            ></article-summary>
            <article-summary
                :article-data = articleData.customView05
                :select-data = selectData.customSelect06
            ></article-summary>
            <article-summary
                :article-data = articleData.customView06
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
            tableData : this.$store.getters["tableData/viewCustom"]
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