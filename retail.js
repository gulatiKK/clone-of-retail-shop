
var products = [];

function AddProduct()
{
    // read the text from screen to get the product name
    var newProduct = {};

    var controlMap = 
    [
        {
            "variable" : "name",
            "controlId" : "#prodname"
        },
        {
            "variable" : "stock",
            "controlId" : "#stock"
        },
        {
            "variable" : "buyPrice",
            "controlId" : "#buyprice"
        },
        {
            "variable" : "sellPrice",
            "controlId" : "#sellprice"
        }       
    ];
    for (  controlNum = 0 ; controlNum < controlMap.length ; controlNum++ )
    {
        variable = controlMap[controlNum].variable;
        controlId = controlMap[controlNum].controlId;
        newProduct[variable] = $(controlId).val();
    }
    newProduct["profit"] = 0;

    let controllist  = ["prodname" , "stock", "buyprice", "sellprice"];
    for ( i = 0 ; i < controlMap.length ; i++ )
    {
        controlId = controlMap[i].controlId;
        if ( $(controlId).val() == '' )
        {
            alert('You cannot add products with the missing information');
            return;
        }
    }


    for ( i = 0 ; i < controlMap.length ; i++ )
    {
        controlId = controlMap[i].controlId;
        $(controlId).val("");
    }

    products.push(newProduct);
    var opt = document.createElement('option');
    opt.value = newProduct["name"];
    opt.innerHTML = newProduct["name"];
    document.getElementById("products").appendChild(opt);

}

function AddStockNew( ) 
{
    // get quantity from the text box
    // search the list of prodts where we have the same productName
    // add the stock value there
}

var sellprice=0;
var buyprice=0;

var profit = 0;
var quantity = 0;
var total= 0;
var stock = 0;
var final_total = 0;

function paintScreen()
{
    document.getElementById("buyprice").innerHTML = buyprice;
    document.getElementById("sellprice").innerHTML = sellprice;
    document.getElementById("profit").innerHTML = profit;
    document.getElementById("quantity").innerHTML = quantity;
    document.getElementById("total").innerHTML = buyprice * quantity;
}
   // paintScreen();
   // document.getElementById("action_button_panel").style.display = 'none';

    function initialize()
    {
       buyprice=  document.getElementById("input_buying_price").value;
       sellprice=  document.getElementById("input_selling_price").value;
       quantity=  parseInt(document.getElementById("input_stock_sell").value);
       document.getElementById("profit").innerHTML = 0;
       document.getElementById("price_panel").style.display = 'none';
       document.getElementById("action_button_panel").style.display = 'block';       
       paintScreen();
    }

    function AddStock()
    {

        var new_stock_qty= parseInt(document.getElementById("new_stock_qty").value);
        quantity = quantity + new_stock_qty;
        document.getElementById("add_stock_panel").style.display = 'none';
       
        paintScreen();


    }

    function ShowStockPanel(){
        document.getElementById("add_stock_panel").style.display = 'block';
        document.getElementById("sell_stock_panel").style.display = 'none';

    }

    function ShowSellPanel(){
        document.getElementById("add_stock_panel").style.display = 'none';
        document.getElementById("sell_stock_panel").style.display = 'block';

    }



    function SellStock()
    {
        var sell_stock_qty= parseInt(document.getElementById("sold_stock_qty").value);
        if ( sell_stock_qty > quantity) 
        {
            alert("out of stock");
        }
        else {
                profit  = profit + sell_stock_qty * (sellprice-buyprice);
                quantity = quantity - sell_stock_qty;
            document.getElementById("sell_stock_panel").style.display = 'none';

            paintScreen();
        }
    }
