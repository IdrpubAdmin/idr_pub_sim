<template>
    <article>
        <div class="settings-header">
            <button @click="postTest">post data</button>
            <ul>
              <li v-for="user in user" :key="user.id">
                {{ user }}
              </li>
            </ul>      
        </div>
    </article>
</template>

<script>
module.exports = {
    data() {
        return {
            user : [],
        }
    },
    mounted() {
        axios.get('https://idrpubadmin.github.io/trial_pub_sim/study/metrix/assets/js/test_data.json')
        .then(response => {
            this.user = response.data;
            console.log(this.user)
        })
        .catch(error => {
          console.log(error);
        });
    },
    methods: {
        postTest(){
            axios.post('https://idrpubadmin.github.io/trial_pub_sim/study/metrix/assets/js/test_data.json', { id: 2 })
        }
    }
}
</script>