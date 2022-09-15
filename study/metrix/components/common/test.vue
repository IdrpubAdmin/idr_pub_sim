<template>
  <div id="app">
    <div id="mySidenav" class="sidenav" :class="{openNavClass: isActive}">
      <a class="closebtn" @click="isActive=!isActive" 
        >&times;</a
      >
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>

    <div id="main" :class="{pushMainContent: isActive}">
      <h2>Sidenav Push Example</h2>
      <p>
        Click on the element below to open the side navigation menu, and push
        this content to the right.
      </p>
      <span style="font-size: 30px; cursor: pointer;" @click="isActive=!isActive" 
        >&#9776; open</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  width:0
  
}
  .openNavClass {
   width:250px;
  }
  .pushMainContent {
    margin-left:250px;
  }

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
  
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
