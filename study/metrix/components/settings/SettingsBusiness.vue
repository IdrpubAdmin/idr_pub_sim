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
        axios.get('https://gist.githubusercontent.com/seop2777/7ba39aa7ead3c55618a21e5b7e4eb936/raw/8a3e32791887ebf559db3b88ec529977c419c65c/data.json')
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
            axios.post('https://gist.githubusercontent.com/seop2777/7ba39aa7ead3c55618a21e5b7e4eb936/raw/8a3e32791887ebf559db3b88ec529977c419c65c/data.json', { id: 2 }, {withCredentials: true })
        }
    }
}
</script>