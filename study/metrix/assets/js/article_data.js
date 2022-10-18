var articleData = {
    namespaced: true,
    state: {
        dashBoard01 : {
            icon : 'point graph',
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
        }
    },
}