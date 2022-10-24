<template>
    <div class="bar_chart_box">
        <ul class="axis_y">
            <li v-for="yData in chartData.axisY" :key="yData">
                <span>{{yData}}</span>k
            </li>
        </ul>
        <ul class="axis_x">
            <li v-for="xData in chartData.axisX" :key="xData.id" class="item">
                <div class="text_box">
                    <span class="day">{{xData.day}}</span>
                </div>
                <div class="graph">
                    <span class="time" style="height:0%"></span>
                </div>
            </li>
        </ul>
    </div>  
</template>

<script>
module.exports = {
    props: {
        chartData: Object
    },
    mounted() {
        for(let i=0; i<this.chartData.axisX.length; i++){
            const graph = document.querySelectorAll('.graph .time')
            setTimeout(()=>{
                graph[i].style.height = this.chartData.axisX[i].data + '%'
            },0)
        }
    }
}
</script>