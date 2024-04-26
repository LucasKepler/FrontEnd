const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


    //Global Variables
    var storeItem = [];
    var cartItem = [];
    var i = 0;
    var reviewItem = [];
    var cont2 = 0;
    var arrayCart = [];
    var subtotal = 0;
    var shippingCart = 0;
    var total = 0;
    var estimatedTax = 0;
    var orderTotal = 0;
    var seDeu = 0;
    var removeValue = 0;

    //CONSTRUCTORS:
    /*
    Constructor for structuring the item data in the online store
    */
    function Store(id, name, price, quantity, maximum, category, shipping, reviews, description, image) {
        this.productId = id;
        this.productName = name;
        this.productPrice = price;
        this.quantityAvailable = quantity;
        this.maxQuantity = maximum;
        this.productCategory = category;
        this.shippingCost = shipping;
        this.reviews = reviews;
        this.productDescription = description;
        this.image = image;
    }

    /*
    Constructor for storing relevant item data for itens in the cart
    */
    function Cart(id, price, quantity, shipping) {
        this.productId = id;
        this.productPrice = price;
        this.quantityCart = quantity;
        this.shippingCost = shipping;
    }

    /*
    Constructor for storing a review and rating
    */
    function Review(review, rating) {
        this.productReview = review;
        this.productRating = rating;
    }

    //FUNCTIONS:

    /*
    Function that will be called when the page loads
    */
    function inicialDisplay() {
        let todayDate = new Date();

        var img = new Image();
        img.src = "/images/products/pd01.jpg";
        let date = todayDate.getHours() + ":" + todayDate.getMinutes() + "--" + todayDate.getMonth() + "/" + todayDate.getUTCDate() + "/" + todayDate.getFullYear();
        document.getElementById("dateArea").innerHTML = date;// + "-", todayDate.getDay() + "/", todayDate.getMonth() + "/", todayDate.getFullYear());
        storeItem.push(new Store("ID", "Product Name", "Price", "Quantity on Hand", "Max", "Category", "Shipping Cost", "Review", "Description", "Image"));
        storeItem.push(new Store("pd01", "Kit Copa Do Mundo Torcedor", 16.99, 100, 4, "World_cup", 3, 5, 4,/*[review]*/"Para se divertir ainda mais nos jogos da nossa seleção brasileira temos o KIT Torcedor, o Kit vai tornar os jogos e a confraternização com os amigos ainda mais divertida.", ""));
        storeItem.push(new Store("pd02", "Pulseiras Copa Do Mundo brasil", 7.50, 68, 4, "World_cup", 3, 5, 4,/*[review]*/"O Acessório que faltava para compor seu look de torcida, e te deixar ainda mais a carater para a copa do mundo."/*image*/));
        storeItem.push(new Store("pd03", "Laço de Cabelo Copa Do Mundo", 8.00, 50, 4, "World_cup", 3, 5, 4,/*[review]*/"Para se divertir ainda mais na copa e torcer para a nossa seleçao"));
        storeItem.push(new Store("pd04", "Kit Bandana Copa Do Mundo Brasil", 10.00, 150, 4, "World_cup", 3, 5, 4,/*[review]*/"Acessório para completar seu look para a Copa do Mundo 2022"/*image*/));
        storeItem.push(new Store("pd05", "Tiara Arco c/ Bandeira do Brasil", 5, 100, 4, "World_cup", 3, 5, 4,/*[review]*/"Tiara Bandeirinha Tecido, Junte-se a torcida do Brasil nesta Copa do Mundo de modo divertido e estiloso!"/*image*/));
        storeItem.push(new Store("pd06", "Miniatura Neymar Jr", 4, 120, 4, "World_cup", 3, 5, 4,/*[review]*/"Miniatura do Neymar Jr para torcer pela seleção brasileira na copa do mundo de 2022"/*image*/));
        storeItem.push(new Store("pd07", "Par De Laço pompom Infantil para a Copa Do Mundo", 9, 200, 4, "World_cup", 3, 5, 4,/*[review]*/"Parzinho de laço pompom para torcer nesta copa do mundo pelo brasil"/*image*/));
        storeItem.push(new Store("pd08", "Camisa Ciclismo Brasil ", 14, 100, 4, "World_cup", 3, 5, 4,/*[review]*/"Camisa Ciclista Brasil para Copa do Mundo Masculina com Manga Curta BeFast"/*image*/));
        storeItem.push(new Store("pd09", "Chapeu Copa Do Mundo 2022", 8.50, 120, 4, "World_cup", 3, 5, 4,/*[review]*/"Comemore a copa do mundo no estilo brasileiro! Se envolva com as cores verde, amarelo e azul para curtir os jogos de futebol"/*image*/));
        storeItem.push(new Store("pd10", "Saia De Tule Brasil Infantil", 12, 120, 4, "World_cup", 3, 5, 4,/*[review]*/"Saia de tule Infantil para turbinar ainda mais a torcisa pelo brasil na copa do mundo"/*image*/));
        storeItem.push(new Store("pd11", "Camiseta Nike Brasil 22 Swoosh Infantil", 46, 120, 4, "World_cup", 3, 5, 4,/*[review]*/"A Camiseta Nike Brasil Swoosh apresenta detalhes da seleção em tecido macio para manter você confortável o dia todo"/*image*/));
        storeItem.push(new Store("pd12", "Gravata Cartonagem Copa C/12", 7, 100, 4, "World_cup", 3, 5, 4,/*[review]*/"A gravata cartonagem é um acessório incrível para acrescentar em dias festivos como Copa do mundo"/*image*/));
        storeItem.push(new Store("pd13", "Vuvuzela para Copa Mundo", 5, 100, 4, "World_cup", 3, 5, 4,/*[review]*/"Linda corneta Amarela, material de excelente qualidade, proporcionando durabilidade e conforto durante o uso"/*image*/));
        storeItem.push(new Store("pd14", "Camiseta Nike Brasil Pré-Jogo Masculina", 70, 100, 4, "World_cup", 3, 5, 4,/*[review]*/"Assim como outras camisas da nossa coleção Stadium, esse modelo combina detalhes de design de réplica com tecido que absorve o suor para oferecer um visual preparado para o jogo e inspirado no seu time favorito"/*image*/));
        storeItem.push(new Store("pd15", "Boné Nike Heritage86 Brasil Unissex", 50, 100, 4, "World_cup", 3, 5, 4,/*[review]*/"Feito com tecido que absorve o suor, o Boné Brasil Heritage86 mantém você seco e confortável o dia todo"/*image*/));
        storeItem.push(new Store("pd16", "Copos Do Brasil Oficial - Copa Do Mundo", 7.00, 100, 4, "World_cup", 3, 5, 4,/*[review]*/"Lindos Copo da Seleção Brasileira Oficial"/*image*/));

        displayStore();
    }

    /*
    Function that will display the store items array in a dynamically table
    */
    function displayStore() {

        document.getElementById("inventoryOutput").innerHTML = "";
        // creates a <table> element and a <tbody> element
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");
        let cell = 0;


        // creating all cells
        for (let i = 0; i < storeItem.length; i++) {
            // creates a table row
            const row = document.createElement("tr");


            for (let j = 0; j < 7; j++) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                cell = document.createElement("td");
                if (j == 0) {
                    cellText = document.createTextNode(storeItem[i].productId);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell.setAttribute("align", "center");
                    cell.setAttribute("width", "150");
                    cell.setAttribute("height", "100");
                }
                else if (j == 1) {
                    cellText = document.createTextNode(storeItem[i].productName);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell.setAttribute("align", "center");
                    cell.setAttribute("width", "250");
                }
                else if (j == 2) {
                    if (i == 0) {
                        cellText = document.createTextNode(storeItem[i].productPrice);
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                        cell.setAttribute("align", "center");
                        cell.setAttribute("width", "150");
                    }
                    else if (i !== 0) {
                        price = storeItem[i].productPrice.toFixed(2);
                        cellText = document.createTextNode("$" + price);
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                        cell.setAttribute("align", "center");
                        cell.setAttribute("width", "150");
                    }
                }
                else if (j == 3) {
                    cellText = document.createTextNode(storeItem[i].quantityAvailable);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell.setAttribute("align", "center");
                    cell.setAttribute("width", "150");
                }
                else if (j == 4) {
                    cellText = document.createTextNode(storeItem[i].maxQuantity);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell.setAttribute("align", "center");
                    cell.setAttribute("width", "150");
                }
                else if (j == 5) {
                    cellText = document.createTextNode(storeItem[i].productCategory);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell.setAttribute("align", "center");
                    cell.setAttribute("width", "150");
                }
                else if (j == 6) {
                    if (i == 1) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd01.jpg";
                    img.src = bag;
                    img.className = "ola";
                    img.style.width = "100px";
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 2) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd02.jpg";
                    img.src = bag;
                    img.className = "ola";
                    img.style.width = "100px";
                    img.style.alignItems= "center";
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 3) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd03.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 4) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd04.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 5) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd05.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 6) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd06.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 7) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd07.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 8) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd08.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 9) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd09.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 10) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd10.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 11) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd11.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 12) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd12.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 13) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd13.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 14) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd14.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 15) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd15.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    else if (i == 16) {
                    let img = document.createElement('img');
                    document.getElementById("inventoryOutput");
                    var bag = "/images/products/pd16.jpg"
                    img.src = bag
                    img.className = "ola"
                    img.style.width = "100px"
                    var imagem= document.body.appendChild(img);
                    row.appendChild(img);
                    }
                    cellText = document.createTextNode(storeItem[i].image);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell.setAttribute("align", "center");
                    cell.setAttribute("width", "250");
                }
            }

            // add the row to the end of the table body
            tblBody.appendChild(row);

        }


        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        document.getElementById("inventoryOutput").appendChild(tbl);
        // sets the border attribute of tbl to '2'
        tbl.setAttribute("border", "2");

    }

    /*
    Function that will display the cart items array.
    */
    function displayCart() {
        console.log(cartItem.length);
        document.getElementById("cartOutput").innerHTML = "";
        // creates a <table> element and a <tbody> element
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");
        let cell = 0;
        var price = 0;
        var shipping = 0;

        // creating all cells
        for (let i = 0; i < cartItem.length; i++) {
            // creates a table row
            const row = document.createElement("tr");


            for (let j = 0; j < 4; j++) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                cell = document.createElement("td");
                if (j == 0) {
                    cellText = document.createTextNode(cartItem[i].productId);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell.setAttribute("align", "center");
                    cell.setAttribute("width", "150");
                    cell.setAttribute("height", "70");
                }
                else if (j == 1) {
                    price = cartItem[i].productPrice.toFixed(2);
                    cellText = document.createTextNode("$" + price);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell.setAttribute("align", "center");
                    cell.setAttribute("width", "150");
                }
                else if (j == 2) {
                    cellText = document.createTextNode(cartItem[i].quantityCart);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell.setAttribute("align", "center");
                    cell.setAttribute("width", "150");
                }
                else if (j == 3) {
                    shipping = cartItem[i].shippingCost.toFixed(2);
                    cellText = document.createTextNode("$" + shipping);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    cell.setAttribute("align", "center");
                    cell.setAttribute("width", "150");
                }
            }

            // add the row to the end of the table body
            tblBody.appendChild(row);

        }


        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        document.getElementById("cartOutput").appendChild(tbl);
        // sets the border attribute of tbl to '2'
        tbl.setAttribute("border", "2");
        document.getElementById("cartCheckout").innerHTML = "Itens Subtotal: $" + subtotal + "<br>" + "Estimated Shipping: $" + shippingCart + "<br>" + "<br>" + "Subtotal: $" + total + "<br>" + "Estimated Tax: $" + estimatedTax + "<br>" + "Order Total: $" + orderTotal;
    }

    /* var i = 0;
     for (i=0; i < cartItem.length; i++) {
     document.getElementById("cartOutput").innerHTML += cartItem[i].quantityCart + "\n";
     }*/



    /*
    Function that will calculate and display the totals for the order in the cart.
    */
    function cartTotals() {
        let cont = 0;
        let findProduct = document.getElementById("addItemId").value;
        let subtotalCart = 0;

        if (seDeu == 0) {
            for (cont = 0; cont < cartItem.length; cont++) {
                subtotalCart += cartItem[cont].shippingCost;

            }

            for (cont = 0; cont < cartItem.length; cont++) {
                if (cartItem[cont].productId.includes(findProduct)) {
                    break;
                }
            }

            shippingCart += 3;
            subtotal = subtotalCart;

            total = subtotal + shippingCart;
            estimatedTax = total * 0.13;
            orderTotal = total + estimatedTax;
            estimatedTax = estimatedTax.toFixed(2);
            orderTotal = orderTotal.toFixed(2);
        }
        else if (seDeu == 1) {
            for (cont = 0; cont < cartItem.length; cont++) {
                subtotalCart += cartItem[cont].shippingCost;

            }
            subtotal = subtotalCart;
            shippingCart = shippingCart - 3;

            total = subtotal + shippingCart;
            estimatedTax = total * 0.13;
            orderTotal = total + estimatedTax;
            estimatedTax = estimatedTax.toFixed(2);
            orderTotal = orderTotal.toFixed(2);
        }
    }

    /*
    Function that will calculate currency
    */
    function currencySelection() {
        let currency = document.getElementById("currencySelector").value;

        switch (currency) {
            case "USD":
                for (let i = 1; i < storeItem.length; i++) {
                    storeItem[i].productPrice = storeItem[i].productPrice * 0.74;
                }
                break;
            case "CAD":
                storeItem[0].productPrice = "Price"
                storeItem[1].productPrice = 16.99;
                storeItem[2].productPrice = 7.50;
                storeItem[3].productPrice = 8.00;
                storeItem[4].productPrice = 10.00;
                storeItem[5].productPrice = 5.00;
                storeItem[6].productPrice = 4.00;
                storeItem[7].productPrice = 9.00;
                storeItem[8].productPrice = 14.00;
                storeItem[9].productPrice = 8.50;
                storeItem[10].productPrice = 12.00;
                storeItem[11].productPrice = 46.00;
                storeItem[12].productPrice = 7.00;
                storeItem[13].productPrice = 5.00;
                storeItem[14].productPrice = 70.00;
                storeItem[15].productPrice = 50.00;
                storeItem[16].productPrice = 7.00;
                break;
        }
        displayStore();
    }


    /*
    Function that will add product to cart
    */
    function addToCart() {
        let cont = 0;
        let i = 0;
        var findProduct = document.getElementById("addItemId").value;
        var addQty = Number(document.getElementById("addItemQty").value);
        var total;

        if (findProduct === "" || findProduct === null) {
            alert("Please enter a product ID!");
            return;
        }

        for (cont = 0; cont < storeItem.length; cont++) {

            if (storeItem[cont].productId.includes(findProduct)) {
                break;
            }
        }

        if (storeItem[cont].productId.includes(findProduct)) {

            if (addQty === 0 || addQty === "") {
                alert("Quantity must be greater than 0!");
            }
            else if (addQty < storeItem[cont].quantityAvailable) {

                if (addQty <= storeItem[cont].maxQuantity) {
                    storeItem[cont].quantityAvailable = storeItem[cont].quantityAvailable - addQty;
                    cartItem.push(new Cart(findProduct, storeItem[cont].productPrice, addQty, (storeItem[cont].productPrice * addQty)));
                    document.getElementById("addItemId").value = "";
                    document.getElementById("addItemQty").value = "";
                    console.log(cartItem);
                    for (i = 0; i < cartItem.length; i++) {
                        arrayCart = cartItem[i].productId + " | " + cartItem[i].productPrice + " | " + cartItem[i].quantityCart + " | " + cartItem[i].shippingCost + "<br>";
                    }
                }

                else if (addQty > storeItem[cont].maxQuantity) {
                    addQty = storeItem[cont].maxQuantity;
                    alert("You can only add " + storeItem[cont].maxQuantity + " of this item!\n" + "The amount added was " + storeItem[cont].maxQuantity);
                    storeItem[cont].quantityAvailable = storeItem[cont].quantityAvailable - addQty;
                    cartItem.push(new Cart(findProduct, storeItem[cont].productPrice, addQty, (storeItem[cont].productPrice * addQty)));
                    document.getElementById("addItemId").value = "";
                    document.getElementById("addItemQty").value = "";
                    console.log(addQty);
                    console.log(cartItem);
                    for (i = 0; i < cartItem.length; i++) {
                        arrayCart = cartItem[i].productId + " | " + cartItem[i].productPrice + " | " + cartItem[i].quantityCart + " | " + cartItem[i].shippingCost + "\n";
                    }
                }
                console.log(arrayCart);
            }

            else if (addQty > storeItem[cont].quantityAvailable) {
                alert("Not enough products in the shop, sorry!");
            }
        }
        else {
            alert("This item doesn't exist!");
        }

        cartTotals();
        displayCart(arrayCart, cartItem);

    }

    /*
    Function that will remove product from cart
    */
    function removeFromCart() {
        const tblBody = document.createElement("tbody");
        var findProduct = document.getElementById("addItemId").value;
        var removeQty = Number(document.getElementById("addItemQty").value);

        if (findProduct === "" || findProduct === null) {
            alert("Please enter a product ID!");
            return;
        }
        for (cont2 = 0; cont2 < cartItem.length; cont2++) {
            if (cartItem[cont2].productId.includes(findProduct)) {
                break;
            }
        }

        if (seDeu == 1 && cont2 >= 1) {
            cont2--;
        }

        console.log(cont2);
        if (cartItem[cont2].productId.includes(findProduct)) {
            if (cartItem[cont2].quantityCart > 1) {
                console.log(cartItem[cont2].quantityCart);
                cartItem[cont2].quantityCart = cartItem[cont2].quantityCart - removeQty;
                console.log(cartItem[cont2].quantityCart);
                document.getElementById("addItemId").value = "";
                document.getElementById("addItemQty").value = "";
                console.log("diminuindo quantidade");
            }

            else if (cartItem[cont2].quantityCart <= 1) {
                console.log("thcau");
                document.getElementById("addItemId").value = "";
                document.getElementById("addItemQty").value = "";
                console.log("zerando carrinho");
                removeValue = cartItem[cont2].shippingCost;
                console.log(removeValue)
                cartItem.splice(cont2, 1);
                seDeu = 1;

            }
        }
        else {
            alert("Item is not in cart.");
        }
        console.log(cartItem.length);
        cartTotals();
        displayCart();

    }

    /*
    Function that will let the user to review the product
    */
    function reviewProduct() {
        var review1 = {
            userReview: document.getElementById("reviewId")
        }
        if (document.getElementById("reviewNum").value > 5 || document.getElementById("reviewNum").value < 0) {
            alert("Invalid Rating!");
            document.getElementById("reviewNum").value = "";
        }
        else {

            for (var j = 0; j < storeItem.length; j++) {

                var userId = document.getElementById("reviewId").value;
                if (storeItem[j].productId.includes(userId)) {
                    alert("Thank you for your review of the " + storeItem[j].productName);
                    var userreview = 0;
                    var reviewNum = 0;
                    userreview = document.getElementById("reviewDesc").value;
                    reviewNum = document.getElementById("reviewNum").value;
                    if (userId === storeItem[0].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[1].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[2].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[3].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[4].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[5].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[6].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[7].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[8].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[9].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[10].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[11].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[12].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[13].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[14].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                    else if (userId === storeItem[15].productId) {
                        reviewItem.push(new Review(userreview, reviewNum));
                        console.log(reviewItem);
                    }
                }
            }

            document.getElementById("reviewDesc").value = "";
            document.getElementById("reviewNum").value = "";
        }

    }


    /*
    Function that will display the product details
    */
    function displayDetails(reviewItem) {
        var number = 0;
        var arrayReview = [];
        var sum = 0;
        var average = 0;
        var int = 0;

        console.log(reviewItem);
        var findProduct = document.getElementById("reviewId").value;
        for (cont = 0; cont < storeItem.length; cont++) {

            if (storeItem[cont].productId.includes(findProduct)) {
                break;
            }
        }
        console.log(cont)

        for (cont2 = 0; cont2 < reviewItem.length; cont2++) {
            number = cont2 + 1;
            int = parseInt(reviewItem[cont2].productRating);
            sum = sum + int;

            arrayReview += "\n Review " + number + ": " + reviewItem[cont2].productReview;
        }

        average = sum / 2;
        alert("Item Details: \nID: " + findProduct + "\nName: " + storeItem[cont].productName + "\nPrice: $" + storeItem[cont].productPrice + "\nQuantity on Hand: " + storeItem[cont].quantityAvailable + "\nMaximum per Customer: " + storeItem[cont].maxQuantity + "\nCategory: " + storeItem[cont].productCategory + "\nShipping Cost: $" + storeItem[cont].shippingCost +
            "\n\nDescription: " + arrayReview + "\n\nAverage rating: " + average);
    }

    /*
    Page loads
    */
    inicialDisplay();
