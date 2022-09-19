<template>
    <div>
        orders
        <p><router-link :to="{name:'test1'}">1로이동</router-link></p>
        <p><router-link :to="{name:'test2'}">2로이동</router-link></p>
        <router-view></router-view>
    </div>
</template>

<script>
module.exports = {
    
}
</script>