let product = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        name: "Nike Shoe",
        price: 7000,
        description:
            "Nike Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rerum a, animi illo adipisci libero!",
        type: "shoe",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
        name: "Nike Green Shoe",
        price: 5000,
        description:
            "์Nike Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rerum a, animi illo adipisci libero!",
        type: "shoe",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        name: "Sport Shoe",
        price: 1200,
        description:
            "Adidas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rerum a, animi illo adipisci libero!",
        type: "shoe",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        name: "Black T-Shirt",
        price: 1200,
        description:
            "Adidas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rerum a, animi illo adipisci libero!",
        type: "shirt",
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80",
        name: "White And Black Nike Shoe",
        price: 1200,
        description:
            "Adidas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rerum a, animi illo adipisci libero!",
        type: "shirt",
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1563389234808-52344934935c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        name: "White And Black Nike Shoe",
        price: 1200,
        description:
            "Adidas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rerum a, animi illo adipisci libero!",
        type: "shirt",
    },
];

$(document).ready(() => {
    let html = "";
    // i = 0
    for (let i = 0; i < product.length; i++) {
        html += `
        <div onclick="openProductDetail(${i})" class="product-items ${
            product[i].type
        }">
            <img class="product-img" src="${product[i].img}" alt="" />
            <p style="font-size: 1.2vw">${product[i].name}</p>
            <p style="font-size: 1vw">${numberWithComma(
                product[i].price
            )} THB</p>
        </div>`;
    }
    $("#productlist").html(html);
});

function numberWithComma(x) {
    x = x.toString();
    let pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(e) {
    // console.log(e.id);
    let value = $("#" + e.id).val();
    // console.log(value);

    let html = "";
    // i = 0
    for (let i = 0; i < product.length; i++) {
        if (product[i].name.includes(value)) {
            html += `
        <div onclick="openProductDetail(${i})" class="product-items ${
                product[i].type
            }">
            <img class="product-img" src="${product[i].img}" alt="" />
            <p style="font-size: 1.2vw">${product[i].name}</p>
            <p style="font-size: 1vw">${numberWithComma(
                product[i].price
            )} THB</p>
        </div>`;
        }
    }
    if (html == "") {
        $("#productlist").html(`<p>not found product!</p>`);
    } else {
        $("#productlist").html(html);
    }
}

function searchproduct(param) {
    console.log(param);
    $(".product-items").css("display", "none");
    if (param == "all") {
        $(".product-items").css("display", "block");
    } else {
        $("." + param).css("display", "block");
    }
}

let productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex);
    $("#modalDesc").css("display", "flex");
    $("#mdd-img").attr("src", product[index].img);
    $("#mdd-name").text(product[index].name);
    $("#mdd-price").text(numberWithComma(product[index].price) + " THB");
    $("#mdd-desc").text(product[index].description);
}

function closeModal() {
    $(".modal").css("display", "none");
}

let cart = [];
function addtocart() {
    let pass = true;

    for (let i = 0; i < cart.length; i++) {
        if (productindex == cart[i].index) {
            console.log("found same product!");
            cart[i].count++;
            pass = false;
        }
    }

    if (pass) {
        let obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1,
        };
        // console.log(obj);
        cart.push(obj);
    }
    console.log(cart);

    Swal.fire({
        icon: "success",
        title: "Add " + product[productindex].name + " to cart !",
    });
    $("#cartcount").css("display", "flex").text(cart.length);
}

function openCart() {
    $("#modalCart").css("display", "flex");
    rendercart();
}

function rendercart() {
    if (cart.length > 0) {
        let html = "";
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="" />
                            <div class="cartlist-detail">
                                <p style="font-size: 1.5vw">${cart[i].name}</p>
                                <p style="font-size: 1.2vw">${numberWithComma(
                                    cart[i].price * cart[i].count
                                )} THB</p>
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html);
    } else {
        $("#mycart").html("<p>Not Found Product List</p>");
    }
}

function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0){
            cart[index].count--;
            $('#countitems'+index).text(cart[index].count)

            if(cart[index].count <=0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure you delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) => {
                    if(res.isConfirmed) {
                        cart.splice(index, 1)
                        console.log(cart)
                        rendercart();
                        $("#cartcount").css('display','flex').text(cart.length)

                        if(cart.length <= 0){
                            $("#cartcount").css('display','none')
                        }
                    }
                    else {
                        cart[index].count++;
                        $('#countitems'+index).text(cart[index].count)
                    }
                })
            }
        }
    }
    else if( action == '+') {
        cart[index].count++;
        $('#countitems'+index).text(cart[index].count)
    }
}
