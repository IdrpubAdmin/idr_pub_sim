let cntSource = $("#content-list").html(); 
let tTemplate = Handlebars.compile(cntSource); 
let tet = {
        content: [
            '','',''
        ]
}; 
let tHtml = template(tet);
$('.container').append(tHtml);