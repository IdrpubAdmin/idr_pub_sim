<template>
    <ul class="sns-ico">
<<<<<<< HEAD
        <li v-for="(snsIco,i) in snsData" :key="i.snsIco">
=======
        <li v-for="snsIco in list" :key="snsIco">
>>>>>>> 507a7d3c582b946bce7bb3409eaa0d1dce9410cf
            <a href="#none">
                <img :src="'static/images/main/vector-smart-object_'+snsIco.image+'.png'" :alt="snsIco.alt">
            </a>
        </li>
    </ul>
</template>

<script>
<<<<<<< HEAD

export default {
    data() {
        return {
            
=======
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
>>>>>>> 507a7d3c582b946bce7bb3409eaa0d1dce9410cf
        }
    },
    components: {

    },

    methods: {
    
<<<<<<< HEAD
    },
    props: {
        snsData : Array
    }

=======
    }
>>>>>>> 507a7d3c582b946bce7bb3409eaa0d1dce9410cf
}
</script>