var tableData = {
    namespaced: true,
    state: {
        mainOrder : {
            tHead : [{
                id: 1, 
                class: 'check', 
                type : 'check', 
            },{
                id: 2,
                class: 'name',
                name: 'Customer Name', 
            },{
                id: 3,
                class: 'date',
                name: 'Order Date', 
            },{
                id: 4,
                class:'type',
                name: 'Order Type', 
            },{
                id: 5,
                class: 'id',
                name: 'Tracking ID', 
            },{
                id: 6,
                class: 'total',
                name: 'Order Total', 
            },{
                id: 7,
                class: 'action',
                name: 'Action', 
            },{
                id: 8,
                class: 'state',
                name: 'Status', 
            }],
            tBody : [{
                id: 1,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `<span>₦</span>25,000.00`},
                    {select : true},
                    {txt : `Completed`, class: 'completed'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'Completed',
                selName : 'miOrTable01'
            },{
                id: 2,
                name : [ 
                    {cheack : true},
                    {txt : 'Samuel Johnson', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `<span>₦</span>25,000.00`},
                    {select : true},
                    {txt : `In-Progress`, class: 'in-progress'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'In-Progress',
                selName : 'miOrTable02'
            },{
                id: 3,
                name : [ 
                    {cheack : true},
                    {txt : 'Francis Doe', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Pick Up'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `<span>₦</span>25,000.00`},
                    {select : true},
                    {txt : `Pending`, class: 'pending'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'Pending',
                selName : 'miOrTable03'
            },{
                id: 4,
                name : [ 
                    {cheack : true},
                    {txt : 'Christian Dior', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Pick Up'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `<span>₦</span>25,000.00`},
                    {select : true},
                    {txt : `Completed`, class: 'completed'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'Completed',
                selName : 'miOrTable04'
            },{
                id: 5,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `<span>₦</span>25,000.00`},
                    {select : true},
                    {txt : `Completed`, class: 'completed'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'Completed',
                selName : 'miOrTable05'
            },{
                id: 6,
                name : [ 
                    {cheack : true},
                    {txt : 'Samuel Johnson', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `<span>₦</span>25,000.00`},
                    {select : true},
                    {txt : `In-Progress`, class: 'in-progress'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'In-Progress',
                selName : 'miOrTable06'
            },{
                id: 7,
                name : [ 
                    {cheack : true},
                    {txt : 'Francis Doe', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Pick Up'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `<span>₦</span>25,000.00`},
                    {select : true},
                    {txt : 'Pending', class: 'pending'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'Pending',
                selName : 'miOrTable07'
            },{
                id: 8,
                name : [ 
                    {cheack : true},
                    {txt : 'Christian Dior', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Pick Up'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `<span>₦</span>25,000.00`},
                    {select : true},
                    {txt : `Completed`, class: 'completed'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'Completed',
                selName : 'miOrTable08'
            }]
        },
        viewOrder: {
            tHead : [{
                id: 1, 
                class: 'check', 
                type : 'check', 
            },{
                id: 2,
                class: 'image',
                type : 'none',
            },{
                id: 3,
                class: 'name',
                name: 'Product Name', 
            },{
                id: 4,
                class:'price',
                name: 'Unit Price', 
            },{
                id: 5,
                class: 'qty',
                name: 'Qty', 
            },{
                id: 6,
                class: 'discount',
                name: 'Discount', 
            },{
                id: 7,
                class: 'total',
                name: 'Order Total', 
            },{
                id: 8,
                class: 'action',
                name: 'Action', 
            },{
                id: 9,
                class: 'state',
                name: 'Status', 
            }],
            tBody : [{
                id: 1,
                name : [
                    {cheack : true},
                    {img: true, src: 'iphone', class: 'image'},
                    {txt : 'iPhone 13 Pro'}, 
                    {txt : `<span>₦</span>25,000.00`}, 
                    {txt : 2}, 
                    {txt : `<span>₦</span>0.00`},
                    {txt : `<span>₦</span>50,000.00`},
                    {select : true},
                    {txt : `Pending`, class: 'pending'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'Pending',
                selName : 'viOrTable01'
            },{
                id: 2,
                name : [ 
                    {cheack : true},
                    {img: true, src: 'iphone', class: 'image'},
                    {txt : 'iPhone 13 Pro'}, 
                    {txt : `<span>₦</span>25,000.00`}, 
                    {txt : 2}, 
                    {txt : `<span>₦</span>0.00`},
                    {txt : `<span>₦</span>50,000.00`},
                    {select : true},
                    {txt : `Pending`, class: 'pending'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'Pending',
                selName : 'viOrTable02'
            },{
                id: 3,
                name : [ 
                    {cheack : true},
                    {img: true, src: 'iphone', class: 'image'},
                    {txt : 'iPhone 13 Pro'}, 
                    {txt : `<span>₦</span>25,000.00`}, 
                    {txt : 2}, 
                    {txt : `<span>₦</span>0.00`},
                    {txt : `<span>₦</span>50,000.00`},
                    {select : true},
                    {txt : `Pending`, class: 'pending'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'Pending',
                selName : 'viOrTable03'
            }]
        },
        mainCustom: {
            tHead : [{
                id: 1, 
                class: 'check', 
                type : 'check', 
            },{
                id: 2,
                class: 'name',
                name: 'Customer Name', 
            },{
                id: 3,
                class: 'email',
                name: 'Email', 
            },{
                id: 4,
                class:'phone',
                name: 'Phone', 
            },{
                id: 5,
                class: 'order',
                name: 'Orders', 
            },{
                id: 6,
                class: 'total',
                name: 'Order Total', 
            },{
                id: 7,
                class: 'date',
                name: 'Customer Since', 
            },{
                id: 8,
                class: 'state',
                name: 'Status', 
            }],
            tBody : [{
                id: 1,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 2,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 3,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 4,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 5,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 6,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 7,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 8,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            }]     
        },
        viewCustom: {
            tHead : [{
                id: 1, 
                class: 'check', 
                type : 'check', 
            },{
                id: 2,
                class: 'date',
                name : 'Order Date',
            },{
                id: 3,
                class: 'type',
                name: 'Order Type', 
            },{
                id: 4,
                class: 'id',
                name: 'Tracking ID', 
            },{
                id: 5,
                class: 'total',
                name: 'Order Total', 
            },{
                id: 6,
                class: 'action',
                name: 'Action', 
            },{
                id: 7,
                class: 'state',
                name: 'Status', 
            }],
            tBody : [{
                id: 1,
                name : [
                    {cheack : true},
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'}, 
                    {txt : `<span>₦</span>25,000.00`}, 
                    {select : true},
                    {txt : 'Completed', class: 'completed'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'Pending',
                selName : 'viCuTable01'
            },{
                id: 2,
                name : [
                    {cheack : true},
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'}, 
                    {txt : `<span>₦</span>25,000.00`}, 
                    {select : true},
                    {txt : 'In-Progress', class: 'in-progress'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'In-Progress',
                selName : 'viCuTable02'
            },{
                id: 3,
                name : [
                    {cheack : true},
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Pick Up'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'}, 
                    {txt : `<span>₦</span>25,000.00`}, 
                    {select : true},
                    {txt : 'Pending', class: 'pending'}
                ],
                option : ['Pending','Completed','In-Progress'],
                selected : 'Pending',
                selName : 'viCuTable03'
            }]
        },
        mainInven: {
            tHead : [{
                id: 1, 
                class: 'check', 
                type : 'check', 
            },{
                id: 2,
                class: 'name',
                name: 'Customer Name', 
            },{
                id: 3,
                class: 'email',
                name: 'Email', 
            },{
                id: 4,
                class:'phone',
                name: 'Phone', 
            },{
                id: 5,
                class: 'order',
                name: 'Orders', 
            },{
                id: 6,
                class: 'total',
                name: 'Order Total', 
            },{
                id: 7,
                class: 'date',
                name: 'Customer Since', 
            },{
                id: 8,
                class: 'state',
                name: 'Status', 
            }],
            tBody : [{
                id: 1,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 2,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 3,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 4,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 5,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 6,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 7,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            },{
                id: 8,
                name : [
                    {cheack : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `<span>₦</span>25,000.00`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'completed'}
                ],
            }]     
        },
    },
    getters: {
        mainOrder: function mainOrder(state) {
            return state.mainOrder;
        },
        viewOrder: function viewOrder(state) {
            return state.viewOrder;
        }, 
        mainCustom: function mainCustom(state){
            return state.mainCustom;
        },
        viewCustom: function viewCustom(state){
            return state.viewCustom;
        },
        mainInven: function mainInven(state){
            return state.mainInven;
        },
    }
}