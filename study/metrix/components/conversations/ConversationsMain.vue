<template>
    <div class="section-wrap conversations">
        <section class="main-conversation">
            <div class="main-header">
                <h3>Conversations with Customers</h3>
                <div class="btn">
                    <button class="link-btn" @click="toggleModal('newMessage')">New Message</button>
                </div>   
            </div>
            <div class="contents">
                <article class="contact">
                    <div class="article-title">
                        <div class="title">
                            <h5>Contacts</h5>
                            <p>{{contactsData.length}}</p>
                        </div>
                        <div class="input-box search">
                            <i class="icon-box search-icon"></i>
                            <input type="search" placeholder="Search" v-model="search">
                        </div>
                    </div>
                    <ul class="user">
                        <li class="message-summary" v-for="user in contactsData" :key="user.id" v-show="user.name.toUpperCase().includes(search.toUpperCase())" :class="{'message-on':user.click === true}" @click="messageOn(user)">
                            <div class="img">
                                <img :src="'assets/images/conversations/' + user.src + '.png'" alt="user img">
                                <div class="state">
                                    <span :class="user.connect ? 'on-line' : 'off-line'"></span>
                                </div>
                            </div>
                            <div class="texts">
                                <div class="text">
                                    <p class="user-name">{{user.name}}</p>
                                    <p class="user-state"><span class="state-btn state-ty01">New</span><span v-if="user.alarm" class="alarm">2</span></p>
                                </div>
                                <div v-if="user.chat.length > 0" class="text">
                                    <p class="user-message">{{user.chat[user.chat.length-1].txt}}</p>
                                    <p class="user-time">{{user.chat[user.chat.length-1].time}}</p>
                                </div>
                            </div>
                        </li> 
                    </ul>
                </article>
                <article class="message">
                    <template v-if="clickData.id">
                        <div class="message-summary">
                             <div class="img">
                                 <img :src="'assets/images/conversations/' + clickData.src + '.png'" alt="user img">
                             </div>
                            <div class="texts">
                                <div class="text">
                                    <p class="user-name">{{clickData.name}}</p>
                                    <p class="user-state"><span class="state-btn state-ty01">New Customer</span><span class="link-btn">View Profile</span></p>
                                </div>
                                <div class="text">
                                    <p class="user-time" :class="clickData.connect ? 'on-line' : 'off-line'">
                                        <span class="state-icon"></span>
                                        <span class="state">
                                            <template v-if="clickData.connect">
                                                Online
                                            </template>
                                            <template v-else>
                                                Offline
                                            </template>
                                        </span> 
                                        12:55 am
                                    </p>
                                    <p class="user-order">
                                        <i class="icon-box bag-icon"></i>
                                        0 Orders
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="chating">
                            <ul class="chat-board">
                                <li v-for="(chat, i) in clickData.chat" :key="chat.id" :class="chat.my ? 'ty1' : 'ty2'">
                                    <h6 v-if="chat.date && dateCheck(i)">{{chat.date}}</h6>
                                    <p><span class="txt">{{chat.txt}}</span></p>
                                    <p class="time">{{chat.time}}<i v-if="chat.my === true" class="icon-box check-icon"></i></p>
                                </li>
                            </ul>
                        </div>
                        <div class="chat-area">
                                <button class="upload-btn plus3-icon"></button>
                                <input type="text" placeholder="Your message" @keydown.enter="sendMessage" v-model="upDate.txt">
                                <button class="icon-btn smile-icon"></button>
                                <button class="send-btn send2-icon" @click="sendMessage">Send</button>
                        </div>
                    </template>
                    <template v-else>
                        <div class="start-wrap">
                            <div class="img"></div>
                            <div class="texts">
                                <h5>Messages</h5>
                                <p>Click on a contact to view messages.</p>
                            </div>
                            <div class="btn-area">
                                <button class="chat-icon">New Message</button>
                            </div>
                        </div>    
                    </template>
                </article>
            </div>
        </section>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            search : '',
            clickData : {},
            upDate : {id : '', time : '', my : true, txt : ''},
            date : '',
        }
    },
    methods: {
        messageOn(payload){
            this.$store.commit('userData/messageOn', payload)
            this.clickData = payload
            this.dateCheck()
        },
        sendMessage(){
            const today = new Date();
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const month = monthNames[today.getMonth()];  
            const day = today.getDate();  
            const year = today.getFullYear();  
            const hours = today.getHours() % 12 ? today.getHours() % 12 : 12;
            const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
            const ampm = today.getHours() >= 12 ? 'pm' : 'am';
            if(this.upDate.txt.length > 0){
                this.upDate.id = this.clickData.chat.length + 1
                this.upDate.time = `${hours}:${minutes} ${ampm}`.toString()
                this.date = `${day} ${month} ${year}`    
                this.clickData.chat.push(this.upDate)
                this.upDate = {id : '', time : '', my : true, txt : ''}
                console.log(this.clickData)
                this.dateCheck()
            }
        },
        dateCheck(i){
                if(i > 0){
                    if(this.clickData.chat[i].date === this.clickData.chat[i - 1].date){
                        console.log(i)
                    }else{
                        console.log('어이')
                    }
                }
        }
    },
    computed: {
        contactsData() {
            return this.$store.getters["userData"].contactsData
        },
    },
    destroyed() {
        this.$store.commit('userData/destroyed')
    },
}
</script>