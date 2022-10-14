<template>
    <div class="select-box" @click="toggleBtn(name)">
        <div class="selected">
            <div class="value">{{selected}}</div>
        </div>
        <ul v-show="btnActive.includes(name)">
            <li v-for="(option, i) in option" :key="option + i" class="option">{{option}}</li>
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
    },
    props: {
        option : Array,
        name : String,
        selected : String
    }
}
</script>