<template>
    <article>
        <div class="settings-header">
            <button v-on:click="fetchData">get data</button>   
        </div>
    </article>
</template>

<script>
module.exports = {
    methods: {
    fetchData: function() {
      axios.get('https://idrpubadmin.github.io/trial_pub_sim/study/metrix/assets/js/test_data.js')
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>