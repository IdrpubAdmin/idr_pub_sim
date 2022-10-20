<template>
    <div class="popup-wrap popup-date" :class="{'big-popup':datePicker}" v-if="btnActive.includes('datePop')">
        <div class="popup-header">
            <h3>By Date</h3>
        </div>
        <section>
            <div class="double">
                <div class="checkbox-area">
                    <input type="checkbox" id="check01">
                    <label for="check01">This Week</label>
                </div>
                <div class="checkbox-area">
                    <input type="checkbox" id="check02">
                    <label for="check02">Last Week</label>
                </div>
            </div>
            <div class="double">
                <div class="checkbox-area">
                    <input type="checkbox" id="check03">
                    <label for="check03">This Month</label>
                </div>
                <div class="checkbox-area">
                    <input type="checkbox" id="check04">
                    <label for="check04">Last Month</label>
                </div>
            </div>
            <div class="double">
                <div class="checkbox-area">
                    <input type="checkbox" id="check05">
                    <label for="check05">This Year</label>
                </div>
                <div class="checkbox-area">
                    <input type="checkbox" id="check06">
                    <label for="check06">Last Year</label>
                </div>
            </div>
            <hr>
            <div class="checkbox-area">
                <input type="checkbox" id="check07" v-model="datePicker">
                <label for="check07">Date Range</label>
            </div>
            <template v-if="datePicker">
                <input type="date">
            </template>
            <div class="popup-close">
                <button @click="toggleBtn('datePop')">Filter</button>
            </div>
        </section>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            btnActive : this.$store.getters.btnActive,
            datePicker : false
        }
    },
    methods: {
        toggleBtn(payload){
            this.$store.commit('toggleBtn', payload)
        },
    },
    components: {
        'select-box' : SelectBox
    },
    computed: {
        selectData() {
            return this.$store.getters["selectData"].selectBox
        }
    },
}
</script>