<template>
    <div class="modal-wrap">
        <div class="modal-container new-customer" :class="{'big-modal':btnActive.includes('newCustomBtn01')}">
            <div class="header">
                <h3>Add a New Customer</h3>
                <div class="btn">
                    <button @click="toggleModal('newCustomer')">
                        <img src="assets/images/orders/fi_x.png" alt="">
                    </button>
                </div>
            </div>
            <section>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus veritatis unde ea, quaerat eligendi similique 
                animi ipsam tempora voluptate distinctio exercitationem doloribus dolorem quos, 
                facilis mollitia reprehenderit incidunt quod quisquam!
            </section>
            <div class="modal-btns">
                <button @click="toggleModal('newCustomer')">Cancel</button>
                <button class="point" @click="toggleModal('newCustomer')">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            btnActive : this.$store.getters.btnActive
        }
    },
    methods: {
        toggleModal(payload){
            this.$store.commit('toggleModal', payload)
        },
        toggleBtn(payload){
            this.$store.commit('toggleBtn', payload)
        }
    },
    components: {
        'select-box' : SelectBox
    }
}
</script>