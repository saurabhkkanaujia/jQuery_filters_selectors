var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];

$(document).ready(function(){
        var html = '<table>\
                <tr>\
                    <th>ID</th>\
                    <th>Name</th>\
                    <th>Brand</th>\
                    <th>Operating System </th>\
                    <th>Remove</th>\
                </tr>';

    for (var i=0; i < products.length; i++){
        html += '<tr id='+products[i].id+'>\
        <td>'+products[i].id+'</td>\
        <td>'+products[i].name+'</td>\
        <td>'+products[i].brand+'</td>\
        <td>'+products[i].os+'</td>\
        <td><a href = "#" id = "close" data-row_id='+ products[i].id +' >X</a></td>\
    </tr>'
    }
    // document.getElementById('table').innerHTML = html;
    html+='</table>'
    $('#wrapper').html(html);

    $('body').on("click", "#close", function(){
        
        var row_id = $(this).data("row_id");

        $('#'+row_id).hide();

    });
});