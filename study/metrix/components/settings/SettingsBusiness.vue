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
        axios.get('http://127.0.0.1:5500/assets/js/test_data.js')
        .then(response => {
            this.user = response.data;
            console.log(this.user)
        })
        .catch(error => {
          console.log(error);
        });
    },
}
</script>