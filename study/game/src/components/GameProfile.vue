<template>
  <div class="profile">
    <h3>직업정보</h3>
    <div class="stats">
      <div class="img">
        <img :src="'static/images/'+jobList.name+'.jpg'" alt="직업사진">
      </div>
      <ul>
          <li>{{jobList.koName}}</li>
          <li>Hp : {{jobList.hp}}</li>
          <li>Mp : {{jobList.mp}}</li>
          <li>공격력/마력 : {{jobList.power}}</li>
      </ul>
    </div>
    <div class="skill">
        <ul>
            <li v-for="(jobData,i) in jobList.skill" :key="i">
              <img :src="'static/images/'+jobList.skill[i].name+'.png'" :alt="jobList.skill[i].name">
              <div class="text">
                <p>{{jobList.skill[i].name}}</p>
                <p>{{jobList.skill[i].explanation}}</p>
              </div>
            </li>
        </ul>
    </div>
    <div class="btns">
      <router-link to="/job" tag="button">뒤로가기</router-link>
      <router-link to="/user" tag="button">선택완료</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameProfile',
  data() {
    return {
      jobList : this.$store.state.job
    }
  },
}
</script>

<style scoped>
.skill{
  padding: 0 50px;
}
.skill ul{
  text-align: left;
}
.skill li{
  display: flex;
  margin-top: 10px;
}
.skill li img{
  width: 70px;
  height: 70px;
}
.skill li .text{
  margin-left: 10px;
}
.skill li .text p:first-child{
  font-size: 18px;
  line-height: 30px;
}
.skill li .text p:last-child{
  font-size: 14px;
  line-height: 20px;
}
.profile{
  padding-top: 40px;
}
.stats{
  display: flex;
  margin: 20px 50px 0 50px;
}
img{
  width: 200px;
  height: 200px;
}
.stats ul{
  width: 50%;
  margin-left: 20px;
}
.stats li{
  text-align-last: left;
  line-height: 20px;
}
.btns{
  width: 320px;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
button{
  width: 150px;
  border: 3px solid #000;
  line-height: 34px;
}
</style>
