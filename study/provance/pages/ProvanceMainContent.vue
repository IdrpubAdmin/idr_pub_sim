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
            <section>
                <article>
                    <div class="images">
                        <img src="static/images/main/kakao-talk-20190116-155854295.png" alt="">
                    </div>
                    <div class="texts">
                        <p class="title">파주 프로방스 365일 불빛 축제</p>
                        <p class="date">2019.08.27</p>
                    </div>
                </article>
                <article>
                    <div class="images">
                        <img src="static/images/main/layer-43_2.png" alt="">
                    </div>
                    <div class="texts">
                        <p class="title">세계 명화를 파주 프로방스 한 곳에서!</p>
                        <p class="date">2020.05.10</p>
                    </div>
                </article>
                <article>
                    <div class="images">
                        <img src="static/images/main/layer-43.png" alt="">
                    </div>
                    <div class="texts">
                        <p class="title">이 달 최고의 포토제닉 상!</p>
                        <p class="date">2021.10.30</p>
                    </div>
                </article>
            </section>
        </div>
        <div class="content sns">
            <content-title
                subTitle='SNS'
                title='REVIEW'
                paragraph='파주 프로방스를 이용해주신고객님들의 솔직한 후기입니다.'
            ></content-title>
            <section>
                <article>
                    
                </article>
            </section>
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