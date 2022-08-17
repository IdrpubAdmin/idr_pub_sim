<template>
    <div class="container">
        <main>
            <div class="swiper-container">
		        <div class="swiper-wrapper">
		    	    <div class="swiper-slide">
		    		    <div class="main">
		    			    <div class="visual-img">
		    				    <img src="static/images/main/dsc-2817-copy-3.png" alt="메인">
                                <div class="text-img">
                                    <img src="static/images/main/아름다운 생활, 행복한 시간을 함께 만들어 갑니다!.png" alt="텍스트">
                                </div>
		    			    </div>
		    		    </div>
		    	    </div>
		        </div>
		        <div class="swiper-pagination"></div>
	        </div>
        </main>
        <div class="content with">
            <content-title
                subTitle='WITH'
                title='PROVENCE'
                paragraph='파주프로방스에서 진행되는 다양한 이벤트로 많은 혜택을 누리세요'
            ></content-title>
            
        </div>
    </div>
</template>

<script>
import ContentTitle from '../components/contents/ContentTitle.vue'

export default {
    components: { 
        ContentTitle
    },

    methods: {
    
    }
};
</script>