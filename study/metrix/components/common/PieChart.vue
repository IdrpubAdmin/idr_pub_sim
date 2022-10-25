<template>
    <div class="pie-chart-box">
        <ul class="chart-list">
            <li class="chart-item" v-for="item in chartData.item" :key="item.id">
                <span :style="'background:#'+item.color"></span>{{item.txt}}
            </li>
        </ul>
        <div class="pie-chart">
            <div class="item" 
                v-for="(item, i) in chartData.item" 
                :key="item.id" 
                :class="item.data" 
                :v-if="chartData.item.length > 0"
                :style="'background : conic-gradient(transparent 0% '+ result2[i] + '%, #' + item.color + ' ' + result2[i] + '% ' + result[i] +'%)'"
            >
            </div>
            <span class="center">
                <span class="center2">
            </span>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            data : [0],
            result : [],
            result2 : [0]
        }
    },
    props: {
        chartData : Object,
    },
    mounted() {
        for(let i=0; i<this.chartData.item.length; i++){
            this.data.push(this.chartData.item[i].data)
            this.result.push(this.data.reduce((a, b)=> a + b))
            this.result2.push(this.data.reduce((a, b)=> a + b))
        }
    }
}
</script>