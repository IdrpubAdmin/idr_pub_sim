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
                    <span class="time" :style="'height:'+ xData.data +'%;'"></span>
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
}
</script>