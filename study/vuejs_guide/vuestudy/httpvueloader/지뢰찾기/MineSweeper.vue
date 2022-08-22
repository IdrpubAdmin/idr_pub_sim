<template>
    <div>
        안녕
        <mine-form></mine-form>
        <!-- <div>{{timer}}</div> -->
        <table-component></table-component>
        <!-- <div>{{result}}</div> -->
    </div>
</template>

<script>
let interval
module.exports = {
    components: { 

    },
    // computed: {
    //     ...mapState(['timer', 'result', 'halted']),
    // }, 
    methods: {
    
    },
    watch: {
        halted(value, oldValue) {
            if (value === false) {
                interval = setInterval(() => {
                    this.$store.commit(INCREMENT_TIMER);
                }, 1000);
            } else {
                clearInterval(interval);
            }
        },
    },
    components : {
	    'mine-form' : httpVueLoader('./MineForm.vue'),
	    'table-component' : httpVueLoader('./TableComponent.vue'),
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