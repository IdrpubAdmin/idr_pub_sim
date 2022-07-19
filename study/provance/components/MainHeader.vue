<template>
    <div class="header-wrap">
        <logo-header></logo-header>
        <menu-header></menu-header>
    </div>
</template>

<script>

import LogoHeader from './header/LogoHeader.vue'
import MenuHeader from './header/MenuHeader.vue'

export default {
    components: {
        LogoHeader,
        MenuHeader
    },

    methods: {
    
    }
}

</script>