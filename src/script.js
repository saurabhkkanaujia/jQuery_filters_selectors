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
var html = '';
var os_array= new Set();
var brand_array= new Set();
var prod_to_display = [];

$(document).ready(function(){
    for (var i = 0; i<products.length; i++){
        os_array.add(products[i].os)
        brand_array.add(products[i].brand)
    }
        
    display();
    
    $('#wrapper').html(html);

    $('body').on("click", "#close", function(){
        var row_id = $(this).data("row_id");
        $('#'+row_id).hide();

    });
    // Dropdown for OS
    osDropdown = '<label for="os">Filter by OS:</label>\
                    <select name="os" id="os">\
                    <option value = "none" id = "none">None</option>';

    for (var item of os_array){
        osDropdown += '<option value="'+item+'" id = "'+ item +'">'+ item +'</option>';
    }

    osDropdown+= '</select>'
    $('table').before(osDropdown);

    // Dropdown for Brand
    brandDropdown = '<label for="brand">Filter by Brand:</label>\
                    <select name="brand" id="brand">\
                    <option value = "none">None</option>';

    for (var item of brand_array){
        brandDropdown += '<option value="'+item+'">'+ item +'</option>';
    }

    brandDropdown+= '</select>'
    $('table').before(brandDropdown);
    // Dropdown End

    $('#os').change(function(){
        prod_to_display = [];
        var filterValOS = $(this).val();

        for (var i=0; i<products.length; i++){
            if (products[i].os == filterValOS){
                prod_to_display.push(products[i]);
            }
            else if (filterValOS == 'none'){
                prod_to_display = products;
            }
        }
    });

    $('#brand').change(function(){
        prod_to_display = [];
        var filterValBrand = $(this).val();

        for (var i=0; i<products.length; i++){
            if (products[i].brand == filterValBrand){
                prod_to_display.push(products[i]);
            }
            else if (filterValBrand == 'none'){
                prod_to_display = products;
            }
        }
    });

});


function display(){
    html = '<table>\
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
}