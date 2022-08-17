<template>
    <div class="logo-header">
        <ul class="global-ico">
            <li class="eng-ico">
                <a href="#none">
                    <img src="static/images/main/vector-smart-object_6.png" alt="미국국기">
                    <span>ENG</span>
                </a> 
            </li>  
            <li class="chn-ico">
                <a href="#none">
                    <img src="static/images/main/vector-smart-object_5.png" alt="중국국기">
                    <span>CHN</span>   
                </a> 
            </li>
        </ul>
        <h1 class="logo">
            <router-link to="/">
                <img src="static/images/main/logo.png" alt="로고">
            </router-link>
        </h1>
        <sns-ico :snsData="snsData"></sns-ico>
    </div>
</template>

<script>

import SnsIco from './SnsIco.vue'
export default {
    data() {
        return {
            snsData : [
                {image : '8', alt : '페이스북'},
                {image : '7', alt : '블로그'},
                {image : '4', alt : '인스타그램'},
                {image : '3', alt : '유튜브'},
            ]
        }
    },
    components: {
        SnsIco
    },

    methods: {
    
    }
}
</script>