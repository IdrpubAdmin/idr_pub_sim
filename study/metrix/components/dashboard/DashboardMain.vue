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
            <!-- <div id="chart"></div> -->
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
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle4.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state pending">Pending</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle3.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state completed">Completed</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle4.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state pending">Pending</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle3.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state completed">Completed</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle3.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state completed">Completed</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle3.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state completed">Completed</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle4.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state pending">Pending</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="assets/images/dashboard/Rectangle4.png" alt="phone img">
                    </div>
                    <div class="texts">
                        <div class="text">
                            <p class="prod-name">iPhone 13</p>
                            <p class="prod-price">₦730,000.00 x 1</p>
                        </div>
                        <div class="text">
                            <p class="prod-date">12 Sept 2022</p>
                            <p class="prod-state pending">Pending</p>
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
    },
    mounted() {
        const Chart = toastui.Chart;
        const el = document.getElementById('chart');
        const data = {
                series: [
                {
                  name: 'Acquisition',
                  data: 60,
                },
                {
                  name: 'Purchase',
                  data: 25,
                },
                {
                  name: 'Retention',
                  data: 15,
                }
            ]
        };
        const options = {
            // 내보내기 옵션
            exportMenu: {
                visible: false
            },
            // 파이 모양
            series: {
                radiusRange: {
                    inner: 69,
                    outer: 86,
                },
            },
            // 라벨 설정
            legend: {
                align: 'top',
                showCheckbox: false,
            },
            chart: { 
                width: '100%',
                height: 280,
                animation: {
                    duration: 500
                }
            },
        };
        // const chart = Chart.pieChart({ el, data, options });
    },
}
</script>