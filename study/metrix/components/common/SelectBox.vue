<template>
    <div class="select-box" @click="toggleBtn(selectData.btnName)">
        <div class="selected">
            <div class="value">
                <img v-if="selectData.selected.img" :src="'assets/images/settings/'+selectData.selected.img+'.png'" :alt="selectData.selected.img">
                {{selectData.selected.name}}
            </div>
        </div>
        <ul v-show="btnActive.includes(selectData.btnName)">
            <li 
                v-for="(option, i) in selectData.option" 
                :key="option.code" 
                class="option" 
                :value="option.code" 
                @click="selectOption(option.code, i)"
            >
                <img v-if="option.img" :src="'assets/images/settings/'+option.img+'.png'" :alt="option.img">
                {{option.name}}
            </li>
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
        selectOption(code, i){
            if(this.selectData.option[i].code === code){
                this.selectData.selected.name = this.selectData.option[i].name
                this.selectData.selected.img = this.selectData.option[i].img
            }
        },
    },
    props: {
        selectData : Object,
    },
}
</script>