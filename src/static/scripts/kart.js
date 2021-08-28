let dataa = document.getElementById("data");
let totaql = document.createElement("div");
function appendProducts(el) {
  let div = document.createElement("div");
  div.setAttribute("class", "cart_items");

  let p_name = document.createElement("span");
  p_name.innerHTML = el.name;
  let p_price = document.createElement("p");
  p_price.innerHTML = el.price;
  let img = document.createElement("img");
  img.src = el.img;
  img.setAttribute("class", "prod_img");
  let img_div = document.createElement("div");

  let right_text = document.createElement("div");
  right_text.append(p_name, p_price);
  right_text.setAttribute("class", "text");
  let parent_div = document.createElement("div");
  parent_div.setAttribute("class", "parent");
  img_div.append(img);
  parent_div.append(img_div, right_text);
  div.append(parent_div);

  dataa.append(div);
}
function showCart() {
  let data_div = JSON.parse(localStorage.getItem("kart"));
  dataa.innerHTML = null;
  data_div.forEach(function (el) {
    appendProducts(el);
  });
}
showCart();
function quantity() {
  let data_div = JSON.parse(localStorage.getItem("kart"));
  var sum = 0;
  for (var i = 0; i < data_div.length; i++) {
    sum += data_div[i].price;
  }
  console.log(sum);
  let total_items = data_div.length;
  let total_price = data_div.reduce(function (a, b) {
    return a.price + b.price;
  }, 0);
  //   console.log(total_price);
  let totalItems = document.createElement("div");
  let totalPrice = document.createElement("div");
  totalItems.innerHTML = `My Cart(${total_items})`;
  totalPrice.innerHTML = `₹${sum}`;
  let proced = document.createElement("div");
  proced.innerHTML = `Proceed to Pay ₹${sum}`;
  let total = document.getElementById("total");
  let final = document.getElementById("final_price");
  let proceed = document.getElementById("proceed");
  total.append(totalItems);
  final.append(totalPrice);
  proceed.append(proced);
}
quantity();
