let table = document.getElementById('tableFromJs').innerHTML = `<table id = tabNum></table>`;

function createTable(){
    let box = '';
    for (let i=1; i<=10; i++){
        box += '<tr>';
        for (let j=1; j<=10; j++){
            box += '<td>' + i * j + '</td>'
        }
        box += '</tr>';
    }
     document.getElementById('tabNum').innerHTML = box;
}
document.onready = createTable();