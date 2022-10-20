<template>
    <div class="select-box" @click="toggleBtn(selectData.btnName)">
        <div class="selected">
            <div class="value">{{selectData.selected.name}}</div>
        </div>
        <ul v-show="btnActive.includes(selectData.btnName)">
            <li v-for="(option, i) in selectData.option" :key="option.code" class="option" :value="option.code" @click="selectOption(selectData.option[i].code)">{{option.name}}</li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            btnActive : this.$store.getters.btnActive
        }
    },
    methods: {
        toggleBtn(payload){
            this.$store.commit('toggleBtn', payload)
        },
        selectOption(code){
            // this.selectData.selected.name = code
            console.log(this.selectData.option.length);

        },
    },
    props: {
        selectData : Object,
    },
}
</script>