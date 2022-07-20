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
            <a href="#none">
                <img src="static/images/main/logo.png" alt="로고">
            </a>
        </h1>
        <sns-ico></sns-ico>
    </div>
</template>

<script>

import SnsIco from './SnsIco.vue'
export default {
    components: {
        SnsIco
    },

    methods: {
    
    }
}
</script>