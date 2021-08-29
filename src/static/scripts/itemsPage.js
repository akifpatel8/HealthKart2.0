let dataa = document.getElementById("data");
let totaql = document.createElement("div");
function appendProducts(el) {
  let div = document.createElement("div");
  div.setAttribute("class", "items_pg");

  let p_name = document.createElement("span");
  p_name.innerHTML = el.name;
  let p_price = document.createElement("p");
  p_price.innerHTML = el.price;
  let img = document.createElement("img");
  img.src = el.img;
  img.setAttribute("class", "img_item");
  let img_div = document.createElement("div");
  let sidetoside = document.createElement("span");
  let addCart = document.createElement("button");
  addCart.innerHTML = "ADD TO CART";
  addCart.addEventListener("click", () => {
    add_to_kart(el);
  });
  sidetoside.append(addCart);
  let side = document.createElement("span");
  let buy = document.createElement("button");
  buy.innerHTML = "QUICK BUY";
  side.append(buy);
  let right_text = document.createElement("div");
  right_text.append(p_name, p_price, sidetoside, side);
  right_text.setAttribute("class", "text");
  let parent_div = document.createElement("div");
  parent_div.setAttribute("class", "parent");
  img_div.append(img);
  parent_div.append(img_div, right_text);
  div.append(parent_div);

  dataa.append(div);
}
function showProduct() {
  let data_div = JSON.parse(localStorage.getItem("items"));
  dataa.innerHTML = null;
  data_div.forEach(function (el) {
    appendProducts(el);
  });
}
showProduct();
function add_to_kart(item) {
  let count = 0;
  let arr;
  arr = localStorage.getItem("kart");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("kart"));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === item.name) {
      alert("Already Added");
      return;
    }
  }

  arr.push(item);

  localStorage.setItem("kart", JSON.stringify(arr));
  window.location.href = "http://localhost:3452/cart";
}
