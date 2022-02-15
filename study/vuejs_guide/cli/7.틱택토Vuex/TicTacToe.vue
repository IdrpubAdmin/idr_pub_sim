<template>
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component />
        <div v-if="winner">{{winner}}님의 승리!</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import store from './store';
import TableComponent from './TableComponent';

export default {
    store,
    components: { 
        TableComponent,
    },
    computed: {
        ...mapState(['winner', 'turn']),
        // winner() {
        //     return this.$store.state.winner;
        // },
        // turn() {
        //     return this.$store.state.turn;
        // },
    }, 
    methods: {
        onChangData() {
            // this.tableData[1][0] = 'X'; 작동하진않음 문제 해결하기 위해 Vue import함         
            // Vue.set(this.tableData[1], 0, 'X');
            // import하지않고 쓰는거
            this.$set(this.tableData[1], 0, 'x');
        },
       onClickTd(rowIndex, cellIndex) {
            //현재 턴이 o면 칸에 o을 넣어주고, x면 x를 넣어준다
            
        },
    },
};
</script>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>