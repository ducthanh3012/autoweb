var products;
function gridProducts (products){
    var g_html = "";
    for (var i=0;i<products.length;i++){
        g_html+= "<div class=\"col-md-4\">\n" +
            "                <div class=\"item pull-left text-center\">\n" +
            "                    <h3>"+products[i].name+"</h3>\n" +
            "                    <img src=\""+products[i].image+"\"/>\n" +
            "                    <p class=\"text-info text-capitalize\">$"+products[i].price+"</p>\n" +
            "                </div>\n" +
            "            </div>"
    }
    return g_html;


}
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText; // nhan text/json tu api
            rs = JSON.parse(rs);// chuyen thanh object json
            var products = rs.data.foods;
            // in html ra danh sach
            var grid = document.getElementById("products-id");
            grid.innerHTML = gridProducts(products);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/category/3");
    xhttp.send();
}
loadData();