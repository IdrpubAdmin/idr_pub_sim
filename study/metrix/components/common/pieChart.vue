<template>
    <div>
        <div class="pie-chart">
            <span class="center"></span>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            test : 55,
        }
    },
    props: {
        chartData : Object,
    },
    mounted() {
        const graph = document.querySelector('.pie-chart')
        for(let i=0; i<this.chartData.item.length; i++){
            graph.style.background = 
            'conic-gradient(#5570f1 0%,' + this.chartData.item[0].data + '%, #ffcc91 55% 85%, #97a5eb 85% 100%)';
        }
    }
}
</script>

<style>
.pie-chart {
  position:relative;
  width: 172px;
  height: 172px;
  border-radius: 50%;
}
.pie-chart .center{
  position:absolute;
  width: 138px; 
  height: 138px;
  background :#fff;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>