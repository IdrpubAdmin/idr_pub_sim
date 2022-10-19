var tableData = {
    namespaced: true,
    state: {
        mainOrder : {
            title: 'Customer Orders',
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
                    {check : true},
                    {txt : 'Janet Adebayo', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `₦<span>25,000.00</span>`},
                    {select : true},
                    {txt : `Completed`, class: 'state-btn state-ty02'}
                ],
                tableSelcet : {
                    btnName : 'miOrTable01',
                    selected : {code: '302', name: 'Completed'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            },{
                id: 2,
                name : [ 
                    {check : true},
                    {txt : 'Samuel Johnson', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `₦<span>25,000.00</span>`},
                    {select : true},
                    {txt : `In-Progress`, class: 'state-btn state-ty03'}
                ],
                tableSelcet : {
                    btnName : 'miOrTable02',
                    selected : {code: '303', name: 'In-Progress'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            },{
                id: 3,
                name : [ 
                    {check : true},
                    {txt : 'Francis Doe', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Pick Up'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `₦<span>25,000.00</span>`},
                    {select : true},
                    {txt : `Pending`, class: 'state-btn state-ty01'}
                ],
                tableSelcet : {
                    btnName : 'miOrTable03',
                    selected : {code: '301', name: 'Pending'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            },{
                id: 4,
                name : [ 
                    {check : true},
                    {txt : 'Christian Dior', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Pick Up'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `₦<span>25,000.00</span>`},
                    {select : true},
                    {txt : `Completed`, class: 'state-btn state-ty02'}
                ],
                tableSelcet : {
                    btnName : 'miOrTable04',
                    selected : {code: '302', name: 'Completed'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            },{
                id: 5,
                name : [
                    {check : true},
                    {txt : 'Janet Adebayo', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `₦<span>25,000.00</span>`},
                    {select : true},
                    {txt : `Completed`, class: 'state-btn state-ty02'}
                ],
                tableSelcet : {
                    btnName : 'miOrTable05',
                    selected : {code: '302', name: 'Completed'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            },{
                id: 6,
                name : [ 
                    {check : true},
                    {txt : 'Samuel Johnson', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `₦<span>25,000.00</span>`},
                    {select : true},
                    {txt : `In-Progress`, class: 'state-btn state-ty03'}
                ],
                tableSelcet : {
                    btnName : 'miOrTable06',
                    selected : {code: '303', name: 'In-Progress'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            },{
                id: 7,
                name : [ 
                    {check : true},
                    {txt : 'Francis Doe', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Pick Up'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `₦<span>25,000.00</span>`},
                    {select : true},
                    {txt : 'Pending', class: 'state-btn state-ty01'}
                ],
                tableSelcet : {
                    btnName : 'miOrTable07',
                    selected : {code: '301', name: 'Pending'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            },{
                id: 8,
                name : [ 
                    {check : true},
                    {txt : 'Christian Dior', router: true, path:'vieworder'}, 
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Pick Up'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'},
                    {txt : `₦<span>25,000.00</span>`},
                    {select : true},
                    {txt : `Completed`, class: 'state-btn state-ty02'}
                ],
                tableSelcet : {
                    btnName : 'miOrTable08',
                    selected : {code: '302', name: 'Completed'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            }]
        },
        viewOrder: {
            title: 'Itmes',
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
                    {check : true},
                    {img: true, src: 'iphone', class: 'image'},
                    {txt : 'iPhone 13 Pro'}, 
                    {txt : `₦<span>25,000.00</span>`}, 
                    {txt : 2}, 
                    {txt : `₦<span>0.00</span>`},
                    {txt : `₦<span>50,000.00</span>`},
                    {select : true},
                    {txt : `Pending`, class: 'state-btn state-ty01'}
                ],
                tableSelcet : {
                    btnName : 'viOrTable01',
                    selected : {code: '301', name: 'Pending'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            },{
                id: 2,
                name : [ 
                    {check : true},
                    {img: true, src: 'iphone', class: 'image'},
                    {txt : 'iPhone 13 Pro'}, 
                    {txt : `₦<span>25,000.00</span>`}, 
                    {txt : 2}, 
                    {txt : `₦<span>0.00</span>`},
                    {txt : `₦<span>50,000.00</span>`},
                    {select : true},
                    {txt : `Pending`, class: 'state-btn state-ty01'}
                ],
                tableSelcet : {
                    btnName : 'viOrTable02',
                    selected : {code: '301', name: 'Pending'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            },{
                id: 3,
                name : [ 
                    {check : true},
                    {img: true, src: 'iphone', class: 'image'},
                    {txt : 'iPhone 13 Pro'}, 
                    {txt : `₦<span>25,000.00</span>`}, 
                    {txt : 2}, 
                    {txt : `₦<span>0.00</span>`},
                    {txt : `₦<span>50,000.00</span>`},
                    {select : true},
                    {txt : `Pending`, class: 'state-btn state-ty01'}
                ],
                tableSelcet : {
                    btnName : 'viOrTable03',
                    selected : {code: '301', name: 'Pending'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            }]
        },
        mainCustom: {
            title: 'Customer Orders',
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
                    {check : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `₦<span>25,000.00</span>`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'state-btn state-ty02'}
                ],
            },{
                id: 2,
                name : [
                    {check : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `₦<span>25,000.00</span>`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'state-btn state-ty02'}
                ],
            },{
                id: 3,
                name : [
                    {check : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `₦<span>25,000.00</span>`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'state-btn state-ty02'}
                ],
            },{
                id: 4,
                name : [
                    {check : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `₦<span>25,000.00</span>`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'state-btn state-ty02'}
                ],
            },{
                id: 5,
                name : [
                    {check : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `₦<span>25,000.00</span>`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'state-btn state-ty02'}
                ],
            },{
                id: 6,
                name : [
                    {check : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `₦<span>25,000.00</span>`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'state-btn state-ty02'}
                ],
            },{
                id: 7,
                name : [
                    {check : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `₦<span>25,000.00</span>`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'state-btn state-ty02'}
                ],
            },{
                id: 8,
                name : [
                    {check : true},
                    {txt : 'Janet Adebayo', router: true, path:'viewcustomer'}, 
                    {txt : 'janet.a@mail.com', img: true, src: 'copy'}, 
                    {txt : '+2348065650633', img: true, src: 'copy'}, 
                    {txt : 10},
                    {txt : `₦<span>25,000.00</span>`},
                    {txt : '12 Aug 2022 - 12:25 am'},
                    {txt : 'Active', class: 'state-btn state-ty02'}
                ],
            }]     
        },
        viewCustom: {
            title: 'Janet’s Orders',
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
                    {check : true},
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'}, 
                    {txt : `₦<span>25,000.00</span>`}, 
                    {select : true},
                    {txt : 'Completed', class: 'state-btn state-ty02'}
                ],
                tableSelcet : {
                    btnName : 'viCuTable01',
                    selected : {code: '302', name: 'Completed'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            },{
                id: 2,
                name : [
                    {check : true},
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'}, 
                    {txt : `₦<span>25,000.00</span>`}, 
                    {select : true},
                    {txt : 'In-Progress', class: 'state-btn state-ty03'}
                ],
                tableSelcet : {
                    btnName : 'viCuTable02',
                    selected : {code: '303', name: 'In-Progress'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            },{
                id: 3,
                name : [
                    {check : true},
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Pick Up'}, 
                    {txt : '9348fjr73', img: true, src: 'copy'}, 
                    {txt : `₦<span>25,000.00</span>`}, 
                    {select : true},
                    {txt : 'Pending', class: 'state-btn state-ty01'}
                ],
                tableSelcet : {
                    btnName : 'viCuTable03',
                    selected : {code: '301', name: 'Pending'},
                    option : [
                        {code: '301', name: 'Pending'},
                        {code: '302', name: 'Completed'},
                        {code: '303', name: 'In-Progress'},
                    ],   
                },
            }]
        },
        mainInven: {
            title: 'Inventory Items',
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
                class:'category',
                name: 'Category', 
            },{
                id: 5,
                class: 'price',
                name: 'Unit Price', 
            },{
                id: 6,
                class: 'stock',
                name: 'In-Stock', 
            },{
                id: 7,
                class: 'discount',
                name: 'Discount',
            },{
                id: 8,
                class: 'total',
                name: 'Total Value', 
            },{
                id: 9,
                class: 'action',
                name: 'Action', 
            },{
                id: 10,
                class: 'state',
                name: 'Status', 
            }],
            tBody : [{
                id: 1,
                name : [
                    {check : true},
                    {img: true, src: 'iphone'},
                    {txt : 'iPhone 13 Pro', router: true, path:'viewinventory'}, 
                    {txt : 'Gadgets'}, 
                    {txt : `₦<span>1,225,000.00</span>`}, 
                    {txt : 8},
                    {txt : `₦<span>0.00</span>`},
                    {txt : `₦<span>50,000.00</span>`},
                    {select: true},
                    {txt : 'Published', class: 'state-btn state-ty03'},
                ],
                tableSelcet : {
                    btnName : 'miInTable01',
                    selected : {code: '304', name: 'Publish'},
                    option : [
                        {code: '304', name: 'Publish'},
                        {code: '305', name: 'Unpublish'},
                    ],   
                },
            },{
                id: 2,
                name : [
                    {check : true},
                    {img: true, src: 'Rectangle3'},
                    {txt : 'iPhone 12 Pro', router: true, path:'viewinventory'}, 
                    {txt : 'Gadgets'}, 
                    {txt : `₦<span>725,000.00</span>`}, 
                    {txt : 12},
                    {txt : `₦<span>0.00</span>`},
                    {txt : `₦<span>50,000.00</span>`},
                    {select: true},
                    {txt : 'Published', class: 'state-btn state-ty03'},
                ],
                tableSelcet : {
                    btnName : 'miInTable02',
                    selected : {code: '304', name: 'Publish'},
                    option : [
                        {code: '304', name: 'Publish'},
                        {code: '305', name: 'Unpublish'},
                    ],   
                },
            },{
                id: 3,
                name : [
                    {check : true},
                    {img: true, src: 'Rectangle4'},
                    {txt : 'Polo T-Shirt', router: true, path:'viewinventory'}, 
                    {txt : 'Fashion'}, 
                    {txt : `₦<span>125,000.00</span>`}, 
                    {txt : 120},
                    {txt : `₦<span>0.00</span>`},
                    {txt : `₦<span>50,000.00</span>`},
                    {select: true},
                    {txt : 'Unpublished', class: 'state-btn state-ty01'},
                ],
                tableSelcet : {
                    btnName : 'miInTable03',
                    selected : {code: '305', name: 'Unpublish'},
                    option : [
                        {code: '304', name: 'Publish'},
                        {code: '305', name: 'Unpublish'},
                    ],   
                },
            },{
                id: 4,
                name : [
                    {check : true},
                    {img: true, src: 'Rectangle4'},
                    {txt : 'Polo T-Shirt', router: true, path:'viewinventory'}, 
                    {txt : 'Fashion'}, 
                    {txt : `₦<span>125,000.00</span>`}, 
                    {txt : 'Out of Stock'},
                    {txt : `₦<span>0.00</span>`},
                    {txt : `₦<span>50,000.00</span>`},
                    {select: true},
                    {txt : 'Unpublished', class: 'state-btn state-ty01'},
                ],
                tableSelcet : {
                    btnName : 'miInTable04',
                    selected : {code: '305', name: 'Unpublish'},
                    option : [
                        {code: '304', name: 'Publish'},
                        {code: '305', name: 'Unpublish'},
                    ],   
                },
            },{
                id: 5,
                name : [
                    {check : true},
                    {img: true, src: 'iphone'},
                    {txt : 'iPhone 13 Pro', router: true, path:'viewinventory'}, 
                    {txt : 'Gadgets'}, 
                    {txt : `₦<span>1,225,000.00</span>`}, 
                    {txt : 8},
                    {txt : `₦<span>0.00</span>`},
                    {txt : `₦<span>50,000.00</span>`},
                    {select: true},
                    {txt : 'Published', class: 'state-btn state-ty03'},
                ],
                tableSelcet : {
                    btnName : 'miInTable05',
                    selected : {code: '304', name: 'Publish'},
                    option : [
                        {code: '304', name: 'Publish'},
                        {code: '305', name: 'Unpublish'},
                    ],   
                },
            },{
                id: 6,
                name : [
                    {check : true},
                    {img: true, src: 'Rectangle3'},
                    {txt : 'iPhone 12 Pro', router: true, path:'viewinventory'}, 
                    {txt : 'Gadgets'}, 
                    {txt : `₦<span>725,000.00</span>`}, 
                    {txt : 12},
                    {txt : `₦<span>0.00</span>`},
                    {txt : `₦<span>50,000.00</span>`},
                    {select: true},
                    {txt : 'Published', class: 'state-btn state-ty03'},
                ],
                tableSelcet : {
                    btnName : 'miInTable06',
                    selected : {code: '304', name: 'Publish'},
                    option : [
                        {code: '304', name: 'Publish'},
                        {code: '305', name: 'Unpublish'},
                    ],   
                },
            },{
                id: 7,
                name : [
                    {check : true},
                    {img: true, src: 'iphone'},
                    {txt : 'iPhone 13 Pro', router: true, path:'viewinventory'}, 
                    {txt : 'Gadgets'}, 
                    {txt : `₦<span>1,225,000.00</span>`}, 
                    {txt : 8},
                    {txt : `₦<span>0.00</span>`},
                    {txt : `₦<span>50,000.00</span>`},
                    {select: true},
                    {txt : 'Published', class: 'state-btn state-ty03'},
                ],
                tableSelcet : {
                    btnName : 'miInTable07',
                    selected : {code: '304', name: 'Publish'},
                    option : [
                        {code: '304', name: 'Publish'},
                        {code: '305', name: 'Unpublish'},
                    ],   
                },
            },{
                id: 8,
                name : [
                    {check : true},
                    {img: true, src: 'Rectangle4'},
                    {txt : 'Polo T-Shirt', router: true, path:'viewinventory'}, 
                    {txt : 'Fashion'}, 
                    {txt : `₦<span>125,000.00</span>`}, 
                    {txt : 120},
                    {txt : `₦<span>0.00</span>`},
                    {txt : `₦<span>50,000.00</span>`},
                    {select: true},
                    {txt : 'Unpublished', class: 'state-btn state-ty01'},
                ],
                tableSelcet : {
                    btnName : 'miInTable08',
                    selected : {code: '305', name: 'Unpublish'},
                    option : [
                        {code: '304', name: 'Publish'},
                        {code: '305', name: 'Unpublish'},
                    ],   
                },
            }]     
        },
        viewInven: {
            title: 'Purchases',
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
                class: 'Price',
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
                class: 'state',
                name: 'Status', 
            }],
            tBody : [{
                id: 1,
                name : [
                    {check : true},
                    {txt : '12 Aug 2022 - 12:25 am'}, 
                    {txt : 'Home Delivery'}, 
                    {txt : `₦<span>25,000.00</span>`}, 
                    {txt : 2}, 
                    {txt : `₦<span>0.00</span>`}, 
                    {txt : `₦<span>50,000.00</span>`}, 
                    {txt : 'Completed', class: 'state-btn state-ty02'}
                ]
            },]
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
        viewInven: function viewInven(state){
            return state.viewInven;
        },
    }
}