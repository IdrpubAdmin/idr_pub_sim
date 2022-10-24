<template>
    <div>
        <ul class="chart-list">
            <li class="chart-item" v-for="item in chartData.item" :key="item.id">
                <span :style="'background:#'+item.color"></span>{{item.txt}}
            </li>
        </ul>
        <div class="pie-chart-box">
            <div class="pie-chart">
                <span class="center">
                    <span class="center2"></span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            test : 0,
        }
    },
    props: {
        chartData : Object,
    },
    mounted() {
        const graph = document.querySelector('.pie-chart')
        for(let i=0; i<this.chartData.item.length - 1; i++){
            console.log(i)
            graph.style.background = 
            'conic-gradient(#' + (this.chartData.item[0].color) + ' 0%,' 
            + (this.chartData.item[0].data) + '%, #' 
            + (this.chartData.item[1].color) + ' ' 
            + (this.chartData.item[0].data) + '% '
            + (this.test += this.chartData.item[i].data) + '%, #' 
            + (this.chartData.item[2].color) + ' '
            + (this.chartData.item[2].data) + '% 100%)';
        }
    }
}
</script>

<style>
.chart-list{
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    margin-top: 12px;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    color: #a6a8b1;
}
.chart-item span{
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
}
.pie-chart-box{
  position: relative;
  width: 205px;
  height: 205px;
  border-radius: 50%;
  background : #eef0fa;
  margin: 24px auto 0;
}
.pie-chart {
  position: absolute;
  width: 172px;
  height: 172px;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.pie-chart .center{
  position:absolute;
  width: 138px; 
  height: 138px;
  background :#eef0fa;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.center2{
  position:absolute;
  width: 104px; 
  height: 104px;
  background :#fff;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
