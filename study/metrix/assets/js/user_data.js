var userData = {
    namespaced: true,
    state: {
        user : [{
            id : 1,
            name : 'Jane Doe',
            img : 'user01',
            connect : true,
            date : '12 Aug 2022 - 12:55 am',
        }],
        contactsData : [{
            id : 1,
            name : 'Jane Doe',
            src : 'user01',
            connect : true,
            date : '12 Aug 2022 - 12:55 am',
            click : false,
            alarm : true,
            chat : [
                {id: 1, date : '10 August 2022', time : '12:55 am', my : false, txt : 'Hello, I want to make enquiries about your product'},
                {id: 2, date : '10 August 2022', time : '12:57 am', my : true, txt : ' Hello Janet, thank you for reaching out'},
                {id: 3, date : '11 August 2022', time : '12:57 am', my : true, txt : 'What do you need to know?'},
                {id: 4, date : '11 August 2022', time : '12:55 am', my : false, txt : 'I want to know if the price is negotiable, i need about 2 Units'},
            ]
        },{
            id : 2,
            name : 'Janet Adebayo',
            src : 'user03',
            connect : false,
            date : '12 Aug 2022 - 12:55 am',
            click : false,
            alarm : false,
            chat : [
                {id: 1, time : '2:05 am', my : false, txt : 'Lorem ipsum, dolor sit amet consectetur adipisicing '},
                {id: 2, time : '3:55 am', my : true, txt : 'elit. In optio ad voluptatum consequatur dolorum.'},
                {id: 3, time : '5:55 am', my : false, txt : 'Inventore dolores provident voluptate impedit optio iusto'},
                {id: 4, time : '5:55 am', my : false, txt : 'et, at, nam obcaecati dolore sequi'},
                {id: 5, time : '7:55 pm', my : true, txt : 'perspiciatis cupiditate eveniet.'},
            ]
        },{
            id : 3,
            name : 'Kunle Adekunle',
            src : 'user02',
            connect : true,
            date : '12 Aug 2022 - 12:55 am',
            click : false,
            alarm : false,
            chat : []
        }]
    },
    mutations: {
        messageOn(state, payload){
            for(let i=0; i<state.contactsData.length; i++){
                state.contactsData[i].click = false
                if(payload.id === state.contactsData[i].id){
                    state.contactsData[i].click = true
                }
            }
        },
        destroyed(state){
            for(let i=0; i<state.contactsData.length; i++){
                state.contactsData[i].click = false
            }
        }
    }
}