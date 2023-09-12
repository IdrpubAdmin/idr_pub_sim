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
const gistUrl = 'https://gist.githubusercontent.com/seop2777/7ba39aa7ead3c55618a21e5b7e4eb936/raw/7e6602de64ce88c7f1134fa467317e8a4ad52921/data.json';
module.exports = {
    data() {
        return {
            user : [],
        }
    },
    methods: {
        postTest(){
            // const accessToken = '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';

            axios.get('assets/js/test_data.js')
            .then(response => {
                this.user = response.data;
                console.log(this.user)
            })
            .catch(error => {
              console.log(error);
            });
            axios.post('https://api.github.com/gists', {
              description: 'My posted data',
              public: true,
              files: {
                'data.json': {
                    content: JSON.stringify({
                        id: 2,
                        userName: '김수지',
                        userId: 'seop',
                        userPassword: '123'
                    })
                }
              }
            }, {
            headers: {
                // Authorization: `token ${accessToken}`
            }
            })
            .then(response => {
                console.log('Gist created successfully:', response.data.html_url);
            })
            .catch(error => {
                console.error('Error creating Gist:', error);
            });
        }
    },
}
</script>