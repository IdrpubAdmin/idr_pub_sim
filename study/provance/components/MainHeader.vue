<template>
    <div class="header-wrap">
        <logo-header></logo-header>
        <nav-header :navData="navData"></nav-header>
    </div>
</template>

<script>
import LogoHeader from './header/LogoHeader.vue'
import NavHeader from './header/NavHeader.vue'


export default {
    data() {
        return {
            navData : [
                {
                    title : 'PROVENCE', 
                    url : 'about', 
                    subNavData : [ 
                        {subTitle: '프로방스소개'}, 
                        {subTitle: '단지안내도'},
                    ]
                },
                {
                    title : 'VILLAGE', 
                    url : 'village',
                    subNavData : [ 
                        {subTitle: '식당&카페'}, 
                        {subTitle: '패션'},
                        {subTitle: '홈리빙'}, 
                        {subTitle: '체험'}, 
                    ]
                },
                {
                    title : 'TOWER', 
                    url : 'tower',
                    subNavData : [ 
                        {subTitle: '주차타워'},
                    ]
                },
                {
                    title : 'THEME', 
                    url : 'theme',
                    subNavData : [ 
                        {subTitle: '포토존'}, 
                        {subTitle:'SNS 리뷰'},
                    ]
                },
                {
                    title : 'CUSTOMER', 
                    url : 'customer',
                    subNavData : [            
                        {subTitle: '공지사항'},
                        {subTitle: '이벤트'},
                        {subTitle: '자주묻는질문'},
                    ]
                },
                {
                    title : 'SITEMAP', 
                    url : 'sitemap',
                },
            ],
        }
    },
    components: {
        LogoHeader,
        NavHeader
    },

    methods: {
    
    }
}

</script>