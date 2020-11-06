var categories = [
    {
        name: "Vegatables",
        quantity: "12"
    },
    {
        name: "Vegatables",
        quantity: "12"
    },
    {
        name: "Vegatables",
        quantity: "12"
    },
    {
        name: "Fresh Fruits",
        quantity: "12"
    },
    {
        name: "Vegatables",
        quantity: "12"
    },
    {
        name: "Vegatables",
        quantity: "20"
    },
    {
        name: "Vegatables",
        quantity: "12"
    },
    {
        name: "Vegatables",
        quantity: "12"
    }

]

var brands = [
    {
        name: "Green Life",
        quantity: "24"
    },
    {
        name: "Organics",
        quantity: "24"
    },
    {
        name: "Green Life",
        quantity: "24"
    },
    {
        name: "Green Life",
        quantity: "24"
    },
    {
        name: "Green Life",
        quantity: "24"
    },
    {
        name: "Green Life",
        quantity: "30"
    }

]

function addCategories(){
    var c_html = "<h3>Product Categories</h3>\n" +
        "                            <ul>";
    for (var i=0;i<categories.length;i++){
        c_html+= "<li><a href=\"#\">"+categories[i].name+" ("+categories[i].quantity+")</a></li>"
    }
    c_html+= "</ul>";
    return c_html;
}
var cate1 = document.getElementById("cate");
cate1.innerHTML = addCategories();

function addBrands(){
    var b_html = "<h3>Product Brands</h3>\n" +
        "                            <ul>";
    for (var i=0;i<brands.length;i++){
        b_html += "<li><label><input type=\"checkbox\" name=\"brands\"/> "+brands[i].name+" ("+brands[i].quantity+")</label></li>"
    }
    b_html+= "</ul>";
    return b_html;
}
var brands1 = document.getElementById("brands-id");
brands1.innerHTML= addBrands();
