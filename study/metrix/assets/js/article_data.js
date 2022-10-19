var articleData = {
    namespaced: true,
    state: {
        dashBoard01 : {
            icon : 'graph',
            summaryData : [{
                id: 1,
                title: 'Sales',
                value: `₦<span>4,000,000.00</span>`,
            },{
                id: 2,
                title: 'Volume',
                value: '450',
                percent: '+20.00',
            }]
        },
        dashBoard02 : {
            icon : 'user',
            summaryData : [{
                id: 1,
                title: 'Customers',
                value: '1,250',
                percent: '+15.80',
            },{
                id: 2,
                title: 'Active',
                value: '1,180',
                percent: '-4.90',
            }]
        },
        dashBoard03 : {
            icon : 'bag',
            summaryData : [{
                id: 1,
                title: 'All Orders',
                value: '450',
            },{
                id: 2,
                title: 'Pending',
                value: '5',
            },{
                id: 3,
                title: 'Completed',
                value: '445',
            }]
        },
        dashBoard04 : {
            type: 'sum-ty02',
            icon : 'folder',
            summaryData : [{
                id: 1,
                title: 'All Products',
                value: '45',
            },{
                id: 2,
                title: 'Active',
                value: '32',
                percent: '+24',
            }]
        },
        dashBoard05 : {
            icon : 'cart',
            summaryData : [{
                id: 1,
                title: 'Abandoned Cart',
                value: `<span>20</span>%`,
                percent: '+0.00',
                type: 'tit-ty02'
            },{
                id: 2,
                title: 'Customers',
                value: '30',
            }]
        },
        orderMain01 : {
            icon : 'bag',
            summaryData : [{
                id: 1,
                title: 'All Orders',
                value: '450',
            },{
                id: 2,
                title: 'Pending',
                value: '5',
            },{
                id: 3,
                title: 'Completed',
                value: '320',
            }]
        },
        orderMain02 : {
            icon : 'bag',
            summaryData : [{
                id: 1,
                title: 'Canceled',
                value: '30',
                percent: '-20.00',
            },{
                id: 2,
                title: 'Returned',
                value: '20',
            },{
                id: 3,
                title: 'Damaged',
                value: '5',
            }]
        },
        orderMain03 : {
            icon : 'cart',
            summaryData : [{
                id: 1,
                title: 'Abandoned Cart',
                value: `<span>20</span>%`,
                percent: '+10.00',
            },{
                id: 2,
                title: 'Customers',
                value: '30',
            }]
        },
        orderView01 : {
            type: 'sum-ty03 sum-ty04',
            icon : 'profile',
            userData : {
                name : 'Janet Adebayo',
                txt : 'Customer since',
                value : '12 Sept 2022',
                type : 'state-ty01',
                state : 'Pending'
            },
            summaryData : [{
                id: 1,
                title: 'Phone',
                value: '+2348065650633',
            },{
                id: 2,
                title: 'Email',
                value: 'janet.adebayo@gmail.com',
            }]
        },
        orderView02 : {
            type: 'sum-ty04',
            icon : 'location',
            summaryData : [{
                id: 1,
                title: 'Home Address',
                value: `<span>No. 15 Adekunle Street, Yaba, Lagos State</span>`,
            },{
                id: 2,
                title: 'Billing Address',
                value: '<span>No. 15 Adekunle Street, Yaba, Lagos State</span>',
            }]
        },
        orderView03 : {
            type: 'sum-ty04',
            icon : 'card',
            summaryData : [{
                id: 1,
                title: 'Payment Method',
                value: `<span>Master Card</span>`,
            },{
                id: 2,
                title: 'Order Type',
                value: '<span>Home Delivery</span>',
            }]
        },
        customMain01 : {
            icon : 'user',
            summaryData : [{
                id: 1,
                title: 'All Customers',
                value: `<span>1,250</span>`,
                percent: '+15.80',
            },{
                id: 2,
                title: 'Active',
                value: '<span>1,180</span>',
                percent: '+85',
            },{
                id: 3,
                title: 'In-Active',
                value: '<span>70</span>',
                percent: '-10',
            }]
        },
        customMain02 : {
            icon : 'bag',
            summaryData : [{
                id: 1,
                title: 'New Customers',
                value: `<span>30</span>`,
                percent: '-20',
            },{
                id: 2,
                title: 'Purchasing',
                value: '<span>657</span>',
            },{
                id: 3,
                title: 'Abandoned Carts',
                value: '<span>5</span>',
            }]
        },
        customView01 : {
            type: 'sum-ty03 sum-ty04',
            icon : 'profile',
            userData : {
                name : 'Janet Adebayo',
                txt : 'Customer since',
                value : '12 Sept 2022',
                type : 'state-ty02',
                state : 'Active'
            },
            summaryData : [{
                id: 1,
                title: 'Phone',
                value: '+2348065650633',
            },{
                id: 2,
                title: 'Email',
                value: 'janet.adebayo@gmail.com',
            }]
        },
        customView02 : {
            type: 'sum-ty04',
            icon : 'location',
            summaryData : [{
                id: 1,
                title: 'Home Address',
                value: `<span>No. 15 Adekunle Street, Yaba, Lagos State</span>`,
            },{
                id: 2,
                title: 'Billing Address',
                value: '<span>No. 15 Adekunle Street, Yaba, Lagos State</span>',
            }]
        },
        customView03 : {
            icon : 'chart',
            summaryData : [{
                id: 1,
                title: 'Total Orders',
                value: `₦<span>25,000.00</span>`,
            }]
        },
        customView04 : {
            icon : 'bag',
            summaryData : [{
                id: 1,
                title: 'All Orders',
                value: `<span>10</span>`,
            },{
                id: 2,
                title: 'Pending',
                value: `<span>2</span>`,
            },{
                id: 3,
                title: 'Completed',
                value: `<span>8</span>`,
            }]
        },
        customView05 : {
            icon : 'bag',
            summaryData : [{
                id: 1,
                title: 'Canceled',
                value: `<span>0</span>`,
            },{
                id: 2,
                title: 'Returned',
                value: `<span>0</span>`,
            },{
                id: 3,
                title: 'Damaged',
                value: `<span>0</span>`,
            }]
        },    
        customView06 : {
            icon : 'cart',
            summaryData : [{
                id: 1,
                title: 'Abandoned Cart',
                value: `<span>2</span>`,
                type: 'tit-ty02'
            }]
        },
        invenMain01 : {
            type: 'sum-ty02',
            icon : 'folder',
            summaryData : [{
                id: 1,
                title: 'All Products',
                value: `<span>350</span>`,
            },{
                id: 2,
                title: 'Active',
                value: '<span>316</span>',
                percent: '+86',
            }]
        },
        invenMain02 : {
            icon : 'user',
            summaryData : [{
                id: 1,
                title: 'Low Stock Alert',
                value: `<span>23</span>`,
            },{
                id: 2,
                title: 'Expired',
                value: '<span>3</span>',
            },{
                id: 3,
                title: '1 Start Rating',
                value: '<span>2</span>',
            }]
        },
        invenView01 : {
            type: 'sum-ty03 sum-ty04',
            userData : {
                txt : 'Last Order',
                value : '12 Sept 2022',
                type : 'state-ty02',
                state : 'Published'
            },
            summaryData : [{
                id: 1,
                title: 'Price',
                value: `₦<span>25,000.00</span>`,
            },{
                id: 2,
                title: 'In-Stock',
                value: `<span>20</span>`,
            }]
        },
        invenView02 : {
            icon : 'chart',
            summaryData : [{
                id: 1,
                title: 'Total Orders',
                value: `₦<span>50,000.00</span>`,
            }]
        },
        invenView03 : {
            icon : 'eye',
            summaryData : [{
                id: 1,
                title: 'Views',
                value: `<span>1,200</span>`,
            },{
                id: 2,
                title: 'Favourite',
                value: `<span>23</span>`,
            }]
        },
        invenView04 : {
            icon : 'bag',
            summaryData : [{
                id: 1,
                title: 'All Orders',
                value: `<span>1</span>`,
            },{
                id: 2,
                title: 'Pending',
                value: `<span>0</span>`,
            },{
                id: 3,
                title: 'Completed',
                value: `<span>1</span>`,
            }]
        },
        invenView05 : {
            icon : 'bag',
            summaryData : [{
                id: 1,
                title: 'Canceled',
                value: `<span>0</span>`,
            },{
                id: 2,
                title: 'Returned',
                value: `<span>0</span>`,
            },{
                id: 3,
                title: 'Damaged',
                value: `<span>0</span>`,
            }]
        },
    },
}