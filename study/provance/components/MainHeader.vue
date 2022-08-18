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
                    koTitle : '프로방스',
                    url : 'about', 
                    subNavData : [ 
                        {subTitle: '프로방스소개'}, 
                        {subTitle: '단지안내도'},
                    ]
                },
                {
                    title : 'VILLAGE', 
                    koTitle : '마을동',
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
                    koTitle : '주차타워',
                    url : 'tower',
                    subNavData : [ 
                        {subTitle: '주차타워'},
                    ]
                },
                {
                    title : 'THEME', 
                    koTitle : '힐링테마',
                    url : 'theme',
                    subNavData : [ 
                        {subTitle: '포토존'}, 
                        {subTitle:'SNS 리뷰'},
                    ]
                },
                {
                    title : 'CUSTOMER', 
                    koTitle : '고객센터',
                    url : 'customer',
                    subNavData : [            
                        {subTitle: '공지사항'},
                        {subTitle: '이벤트'},
                        {subTitle: '자주묻는질문'},
                    ]
                },
                {
                    title : 'SITEMAP', 
                    koTitle : '사이트맵',
                    url : 'sitemap',
                },
            ],
        }
    },
    components: {
        LogoHeader,
        NavHeader
    },
}

</script>
