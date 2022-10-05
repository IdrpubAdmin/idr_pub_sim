<template>
    <section class="view-section view-custom">
        <div class="view-header customers-header">
            <ul>
                <li>
                    <p>Order Number <span>#743648</span></p>
                </li>
                <li>
                    <p>Order Date <span>12 Sept 2022 - 12:55 pm</span></p>
                </li>
                <li>
                    <p>Tracking ID <span>9348fjr73</span></p>       
                    <div class="image">  
                        <img src="assets/images/orders/u_copy-alt.png" alt="copy icon">    
                    </div> 
                </li>
            </ul>
            <div class="btns">
                <select-box
                    :option="['Edit Customer','Edit Customer','Edit Customer']"
                    :selected="'Edit Customer'"
                    :name="'viewCustomSelect01'"
                ></select-box>
                <div class="btn">
                    <router-link :to="{name:'customersmain'}">Suspend Customer</router-link>
                </div>   
            </div>
        </div>
        <div class="contents">

        </div>
    </section>
</template>

<script>
module.exports = {
    components: {
        'select-box' : SelectBox
    }
}
</script>