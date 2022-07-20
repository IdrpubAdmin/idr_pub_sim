<template>
    <ul class="sns-ico">
        <li v-for="snsIco in list" :key="snsIco">
            <a href="#none">
                <img :src="'static/images/main/vector-smart-object_'+snsIco.image+'.png'" :alt="snsIco.alt">
            </a>
        </li>
    </ul>
</template>

<script>
const snsData = [
    {image : '8', alt : '페이스북'},
    {image : '7', alt : '블로그'},
    {image : '4', alt : '인스타그램'},
    {image : '3', alt : '유튜브'}
];
export default {
    data() {
        return {
            list : snsData
        }
    },
    components: {

    },

    methods: {
    
    }
}
</script>