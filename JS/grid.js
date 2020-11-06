var products = [
    {
        name:"Flying Ninja",
        image:"imgs/quan1.jpg",
        des: "Quần nam màu xanh, 100% cotton",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/quan2.jpg",
        des: "Quần nam màu xanh, 100% cotton",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/quan3.jpg",
        des: "Quần nam màu xanh, 100% cotton",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/quan4.jpg",
        des: "Quần nam màu xanh, 100% cotton",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/quan5.jpg",
        des: "Quần nam màu xanh, 100% cotton",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/quan6.jpg",
        des: "Quần nam màu xanh, 100% cotton",
        price: 12,
        star:3.5
    }
]

function product(){
    var html_product= "<div id=\"bottom\">\n" +
        "\n" ;
    for(var i=0;i<products.length;i++){
        html_product +=
            "    <div class=\"quanao\">\n" +
            "        <img src=\""+products[i].image+"\" height=\"659\" width=\"500\"/>\n" +
            "        <h1>\n" +
            "            "+products[i].name+"\n" +
            "        </h1>\n" +
            "        <p>\n" +
            "            "+products[i].des+"\n" +
            "        </p>\n" +
            "        <h2>\n" +
            "            "+products[i].price+"$\n" +
            "        </h2>\n" +
            "        <div class=\"detail\">\n" +
            "            <p>\n" +
            "                PRODUCT DETAIL\n" +
            "            </p>\n" +
            "        </div>\n" +
            "    </div>\n"
            "    </div>\n"
    }
    html_product +=
        "    </div>";
    return html_product;
}
var product1 = document.getElementById("sanpham");
product1.innerHTML = product();