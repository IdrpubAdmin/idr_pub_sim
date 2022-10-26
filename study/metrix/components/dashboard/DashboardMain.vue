<template>
    <div class="dashboard">
        <article-summary
            :article-data = articleData.dashBoard01
            :select-data = selectData.dashSelect01
        ></article-summary>
        <article-summary
            :article-data = articleData.dashBoard02
            :select-data = selectData.dashSelect02
        ></article-summary>
        <article-summary
            :article-data = articleData.dashBoard03
            :select-data = selectData.dashSelect03
        ></article-summary>
        <article class="circle-chart">
            <div class="title">
                <h5>Marketting</h5>
                <select-box
                    class="no-bg-sel"
                    :select-data = selectData.dashSelect04
                ></select-box>
            </div>
            <pie-chart
                :chart-data = chartData.pieChartData
            ></pie-chart>
        </article>
        <article-summary
            :article-data = articleData.dashBoard04
        ></article-summary>
        <article-summary
            :article-data = articleData.dashBoard05
            :select-data = selectData.dashSelect05
        ></article-summary>
        <article class="products">
            <div class="title">
                <h5>Recent Orders</h5>
            </div>
            <ul>
                <li v-for="item in recentOrder" :key="item.id">
                    <div class="img">
                        <img :src="'assets/images/dashboard/'+ item.src +'.png'" alt="product img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">{{item.name}}</p>
                            <p class="prod-price">₦<span>{{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}.00</span> x <span>{{item.count}}</span></p>
                        </div>
                        <div class="text">
                            <p class="prod-date">{{item.date}}</p>
                            <p class="state-btn" :class="item.class">{{item.state}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </article>
        <article class="bar-chart">
            <div class="title">
                <div class="tit-sel">
                    <h5>Summary</h5>
                    <select-box
                        :select-data = selectData.dashSelect06
                    ></select-box>
                </div>
                <select-box
                    class="no-bg-sel"
                    :select-data = selectData.dashSelect07
                ></select-box>
            </div>
            <bar-chart
                :chart-data = chartData.barChartData
            ></bar-chart>                                               
        </article>
    </div>
</template>

<script>
module.exports = {    
    components : {
        'pie-chart' : PieChart,
        'bar-chart' : BarChart,
        'article-summary' : ArticleSummary,
        'select-box' : SelectBox,
    },
    computed: {
        articleData() {
            return this.$store.getters["articleData"]
        },
        selectData() {
            return this.$store.getters["selectData"].selectBox
        },
        chartData() {
            return this.$store.getters["chartData"]
        },
        recentOrder() {
            return this.$store.getters["productData"].recentOrder
        },
    },
}
</script>