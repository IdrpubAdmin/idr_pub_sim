<template>
    <div class="select-box" @click="toggleBtn(selectData.btnName)">
        <div class="selected">
            <div class="value">{{selectData.selected.name}}</div>
        </div>
        <ul v-show="btnActive.includes(selectData.btnName)">
            <li v-for="(option, i) in selectData.option" :key="option.id" class="option" @click="selectOption(selectData, i)">{{option.name}}</li>
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
        selectOption(selectData, i){
            selectData.selected.name = selectData.option[i].name
        },
    },
    props: {
        selectData : Object,
    },
}
</script>