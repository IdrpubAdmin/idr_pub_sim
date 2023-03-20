<template>
    <article>
        <div class="settings-header">
            <button v-on:click="fetchData">get data</button>
            <h1>{{id}}</h1>
        </div>
    </article>
</template>

<script>
module.exports = {
    data() {
        return {
            id : ''
        }
    },
    methods: {
    fetchData: function() {
      axios.get('https://raw.githubusercontent.com/IdrpubAdmin/trial_pub_sim/main/study/metrix/assets/js/test_data.json')
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>