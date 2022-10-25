<template>
    <section class="main-order">
        <div class="main-header">
            <h3>Orders Summary</h3>
            <div class="btn">
                <button class="plus2-icon link-btn" @click="toggleModal('newOrder')">Create a New Order</button>
            </div>   
        </div>
        <div class="contents">
            <article-summary
                :article-data = articleData.orderMain01
                :select-data = selectData.orderSelect01
            ></article-summary>
            <article-summary
                :article-data = articleData.orderMain02
                :select-data = selectData.orderSelect02
            ></article-summary>
            <article-summary
                :article-data = articleData.orderMain03
                :select-data = selectData.orderSelect03
            ></article-summary>
            <table-box
                :table = tableData
            ></table-box>
        </div>
    </section>
</template>

<script>
module.exports = {
    data() {
        return {
            tableData : this.$store.getters["tableData/mainOrder"]
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
    methods: {
        toggleModal(payload){
            this.$store.commit('toggleModal', payload)
        },
    },
}
</script>