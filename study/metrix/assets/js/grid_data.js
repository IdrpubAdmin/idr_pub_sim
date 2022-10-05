var Grid = toastui.Grid;


var grid = new tui.Grid({
    el: document.getElementById('grid'),
    columns: [
        {
            header: '이름',
            name: 'name'
        },
        {
            header: '나이',
            name: 'value',
            editor: 'text'
        }
    ]
});
var gridData = [
    {
        name: '홍길동',
        value: '20세'
    },
    {
        name: '이지연',
        value: '26세'
    }
];
grid.resetData( gridData );