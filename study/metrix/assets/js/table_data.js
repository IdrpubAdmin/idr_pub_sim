var tableData = {
    namespaced: true,
    state: {
        viewOrder : {
            tHead : [{
                id: 1, 
                class: 'check', 
                name: `<input type="checkbox">`, 
            },{
                id: 2,
                class: 'name',
                name: 'Product Name', 
            },{
                id: 3,
                class:'price',
                name:'Unit Price', 
            },{
                id: 4,
                class:'qty',
                name:'Qty', 
            },{
                id: 5,
                class:'discount',
                name:'Discount', 
            },{
                id: 6,
                class:'total',
                name:'Order Total', 
            },{
                id: 7,
                class:'action',
                name:'Action', 
            },{
                id: 8,
                class:'state',
                name:'Status', 
            }],
            tBody : [{
                id: 1,
                name : [
                    'cheack-box', 
                    'iPhone 13 Pro', 
                    `₦25,000.00`, 
                    2, 
                    `₦0.00`,
                    `₦50,000.00`,
                    `Pending`,
                    `Pending`
                ]
            },{
                id: 2,
                name : [ 
                    'cheack-box' ,
                    'iPhone 13 Pro', 
                    `₦25,000.00`, 
                    2, 
                    `₦0.00`,
                    `₦50,000.00`,
                    `Pending`,
                    `Pending`
                ]
            },{
                id: 3,
                name : [ 
                    'cheack-box',
                    'iPhone 13 Pro', 
                    `₦25,000.00`, 
                    2, 
                    `₦0.00`,
                    `₦50,000.00`,
                    `Pending`,
                    `Pending`
                ]
            }]
        },
        viewTest : {

        }
    }
}