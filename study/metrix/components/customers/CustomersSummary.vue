<template>
    <section class="main-customers">
        <div class="main-header">
            <h3>Customers Summary</h3>
            <div class="btn">
                <button class="plus2-icon link-btn" @click="toggleModal('newCustomer')">Add a New Customer</button>
            </div>   
        </div>
        <div class="contents">
            <article-summary
                :article-data = articleData.customMain01
                :select-data = selectData.customSelect01
            ></article-summary>
            <article-summary
                :article-data = articleData.customMain02
                :select-data = selectData.customSelect02
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
            tableData : this.$store.getters["tableData/mainCustom"]
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