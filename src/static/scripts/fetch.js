async function gett() {
  var res = await fetch("http://localhost:3452/users");
  let data = await res.json();
  showdata(data);
}
gett();
async function tredning() {
  var res1 = await fetch("http://localhost:3452/trend");
  let data1 = await res1.json();
  showTrendingData(data1);
}
tredning();
let maindiv = document.getElementById("box");
let trenddiv = document.getElementById("box1");
function showTrendingData(data) {
  data.forEach((item) => {
    let minidiv = document.createElement("div");
    minidiv.classList = "col";
    minidiv.innerHTML = `<div class="mini">
        <img src="${item.img}" alt="">
        <h5>${item.name}</h5>
        <p>${item.price}</p>
        <p>${item.discount}</p>
      </div>`;
    minidiv.addEventListener("click", () => {
      add_to_items(item);
    });
    let btn = document.createElement("button");
    btn.innerText = "Add";
    count = 0;
    btn.addEventListener(
      "click",
      () => {
        count++;

        event.stopPropagation();
        btn.innerText = "CART";
        if (count == 1) {
          add_to_kart(item);
          quantity();
        } else {
          if (count == 2) {
            window.location.href = "http://localhost:3452/cart";
          }
        }
      },
      false
    );

    minidiv.append(btn);
    box1.append(minidiv);
  });
}
function showdata(data) {
  data.forEach((item) => {
    let minidiv = document.createElement("div");
    minidiv.classList = "col";
    minidiv.innerHTML = `<div class="mini">
        <img src="${item.img}" alt="">
        <h5>${item.name}</h5>
        <p>${item.price}</p>
        <p>${item.discount}</p>
      </div>`;
    minidiv.addEventListener("click", () => {
      add_to_items(item);
    });
    let btn = document.createElement("button");
    btn.innerText = "Add";
    count = 0;
    btn.addEventListener(
      "click",
      () => {
        count++;

        event.stopPropagation();
        btn.innerText = "CART";
        if (count == 1) {
          add_to_kart(item);
          quantity();
        } else {
          if (count == 2) {
            window.location.href = "http://localhost:3452/cart";
          }
        }
      },
      false
    );

    minidiv.append(btn);
    //   minidiv.addEventListener("click",()=>{
    //       window.location.href="./item"
    //   },false)
    maindiv.append(minidiv);
  });

  // console.log(data);
}
function add_to_items(item) {
  let count = 0;

  let arr;
  arr = localStorage.getItem("items");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("items"));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name !== item.name || arr[i].name === item.name) {
      arr.pop();
      // return;
    }
  }

  arr.push(item);

  localStorage.setItem("items", JSON.stringify(arr));
  window.location.href = "http://localhost:3452/items";
}
function add_to_kart(item) {
  let count = 0;
  let arr;
  arr = localStorage.getItem("kart");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("kart"));
  }

  arr.push(item);

  localStorage.setItem("kart", JSON.stringify(arr));
}

function viewall() {
  window.location.href = "http://localhost:3452/sorting";
}
function quantity() {
  let data_div = JSON.parse(localStorage.getItem("kart"));

  let total_items = data_div?.length;

  //   console.log(total_price);
  let totalItems = document.createElement("div");

  totalItems.innerHTML = `${total_items}`;

  let cartCount = document.getElementById("cart_count");
  cartCount.innerHTML = `${total_items}`;
  cartCount.style.color = "white";
  return cartCount;
}
// quantity();
// console.log(quantity());
