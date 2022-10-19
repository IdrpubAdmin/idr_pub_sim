<template>
    <article class="summary" :class="articleData.type">
        <div class="header">
            <i class="icon-box" v-if="articleData.icon" :class="articleData.icon"></i>
            <select-box 
                v-if="selectData"
                class="no-bg-sel"
                :select-data = selectData
            ></select-box>
            <template v-if="articleData.userData">
                <dl class="sum-user">
                    <dt><span>{{articleData.userData.name}}</span></dt>
                    <dd>{{articleData.userData.txt}} <span>{{articleData.userData.value}}</span></dd>
                </dl>  
                <div class="state-btn" :class="articleData.userData.type">
                    <span>{{articleData.userData.state}}</span>
                </div>
            </template>
        </div>
        <ul>
            <li v-for="summary in articleData.summaryData" :key="summary.id">
                <p class="tit" :class="summary.type">{{summary.title}}</p>
                <dl class="value">
                    <dt v-html="summary.value"></dt>
                    <dd v-if="summary.percent" :class="summary.percent.includes('+') ? 'plus' : 'minus'"><span>{{summary.percent}}</span>%</dd>
                </dl>
            </li>
        </ul>
    </article>
</template>

<script>
module.exports = {
    props: {
        selectData : Object,
        articleData : Object
    },
    components : {
        'select-box' : SelectBox,
    },
}
</script>