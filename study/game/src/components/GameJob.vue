<template>
  <div class="job">
    <h3>직업을 선택하세요</h3>
    <ul>
        <li v-for="(jobData, i) in jobList" :key="i" :class="jobData.name" @click="choseJob(jobData)">
            <img :src="'static/images/'+jobData.name+'.jpg'" :alt="jobData.koName">
            <p>{{jobData.koName}}</p>
        </li>
    </ul>
    <div class="chose">
        <p>선택직업 : {{$store.state.job.koName}}</p>
        <div v-show="this.$store.state.job.tf">
            <router-link to="/Profile" tag="button">직업보기</router-link>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'GameStart',
  data() {
    return {
        jobList : this.$store.state.jobList
    }
  },
  mounted() {
    this.$store.state.job = {}
  },
  methods: {
    choseJob(jobData){
        this.$store.state.job = jobData
    },
  },
}
</script>

<style scoped>
    .job {
        padding-top: 40px;
    }
    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;
    }
    li {
        width: calc(33.33% - 10px);
        margin-top: 20px;
    }
    li:hover p {
        background-color: rgba(0, 0, 0, 0.2);
    }
    img {
        width: 150px;
        height: 150px;
    }
    ul li p {
        width: 150px;
        border: 1px solid #000;
        margin: 0 auto;
        margin-top: 5px;
        line-height: 30px;
        transition: 0.5s;
    }
    .chose {
        padding: 0 20px;
        margin-top: 15px;
        text-align: left;
    }
    .chose div {
        width: 200px;
        height: 40px;
        margin: 0 auto;
        border: 3px solid #000;
        margin-top: 10px;
    }
    .chose button {
        line-height: 24px;
    }
</style>
