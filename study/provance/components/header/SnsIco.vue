<template>
    <ul class="sns-ico">
        <li v-for="(snsIco,i) in snsData" :key="i.snsIco">
            <a href="#none">
                <img :src="'static/images/main/vector-smart-object_'+snsIco.image+'.png'" :alt="snsIco.alt">
            </a>
        </li>
    </ul>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    components: {

    },

    methods: {
    
    },
    props: {
        snsData : Array
    }

}
</script>