const items = [
  {
    name: "MuscleBlaze Super Gainer XXL,  11 lb  Banana ",
    price: 2999,
    discount: 5199,
    img: "https://img2.hkrtcdn.com/12990/prd_1298911-MuscleBlaze-Super-Gainer-XXL-11-lb-Banana_c_s.jpg",
  },
  {
    name: "MuscleBlaze Whey Performance (70%) Protein,  8.8 lb  Chocolate  ",
    price: 5999,
    discount: 7999,
    img: "https://img6.hkrtcdn.com/12134/prd_1213315-MuscleBlaze-Whey-Performance-70-Protein-8.8-lb-Chocolate_c_s.jpg",
  },
  {
    name: "HealthKart Biotin (10000 mcg),  90 tablet(s)  Unflavoured ",
    price: 499,
    discount: 1000,
    img: "https://img10.hkrtcdn.com/15156/prd_1515549-HealthKart-Biotin-10000-mcg-90-tablets-Unflavoured_c_s.jpg",
  },
  {
    name: "Alpino Peanut Butter (Unsweetened),  2.4 kg  Natural Crunch ",
    price: 799,
    discount: 949,
    img: "https://img2.hkrtcdn.com/12714/prd_1271321-Alpino-Peanut-Butter-Unsweetened-2.4-kg-Natural-Crunch_c_s.jpg",
  },
];

if (localStorage.getItem("items") == null) {
  localStorage.setItem("items", JSON.stringify(items));
}
function showStudents() {
  let students = JSON.parse(localStorage.getItem("items"));
  students.forEach(function (el) {
    let data = document.getElementById("box");
    let div = document.createElement("div");

    div.setAttribute("class", "each_products");

    let another_div = document.createElement("div");
    another_div.setAttribute("class", "btn_section");
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;
    let img_div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;

    img.setAttribute("class", "product_image");
    img_div.append(img);
    let p_att = document.createElement("span");
    let discount = document.createElement("span");
    discount.style.textDecoration = "line-through";
    discount.style.color = "gray";
    let btn = document.createElement("button");
    btn.addEventListener("click", function () {
      add_to_kart(el);
    });

    let imge = document.createElement("img");
    btn.appendChild(imge);
    imge.setAttribute("class", "cartIcon");
    imge.src =
      "https://img2.hkrtcdn.com/react/static/media/common/new_cart.svg";
    btn.textContent = "ADD";

    p_att.innerHTML = el.price;
    btn.setAttribute("class", "Add");
    function change() {
      btn.style.opacity = 1.0;
      img.style.opacity = 0.6;
      let hover_div = document.createElement("div");
      hover_div.setAttribute("class", "hoverr");
      let inner_hover = document.createElement("div");
      inner_hover.setAttribute("class", "inner_hover");
      let consumeInfo = document.createElement("div");

      consumeInfo.setAttribute("class", "cons");
      let benefits = document.createElement("div");
      benefits.innerHTML = "Benefits";
      let hoverText = document.createElement("div");
      hoverText.setAttribute("class", "hoverText");
      let p1 = document.createElement("p");
      p1.innerText = "Contains WPC";
      hoverText.append(p1);
      consumeInfo.append(hoverText);
      inner_hover.append(consumeInfo);
      hover_div.appendChild(inner_hover);
      img_div.append(hover_div);
      btn.style.background = "#00c2c1";
    }
    div.addEventListener("mouseover", function () {
      btn.style.opacity = 1.0;
      img.style.opacity = 0.6;

      btn.style.background = "#00c2c1";
    });
    div.addEventListener("mouseout", function () {
      btn.style.opacity = 1.0;
      img.style.opacity = 1.0;

      btn.style.background = "";
    });
    img.addEventListener("click", function () {
      addItems(el);
      window.location.href = "../items/items.html";
    });

    discount.innerHTML = el.discount;
    another_div.append(p_att, discount, btn);
    div.append(img_div, p_name, another_div);
    data.append(div);
  });
}
showStudents();
// Trending Now

const trendingItems = [
  {
    name: "MuscleBlaze Biozyme Whey Protein,  4.4 lb  Rich Milk Chocolate  ",
    price: 4499,
    discount: 5349,
    img: "https://img10.hkrtcdn.com/12134/prd_1213319-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_c_s.jpg",
  },
  {
    name: "MuscleBlaze Biozyme Performance Whey,  4.4 lb  Rich Chocolate ",
    price: 3288,
    discount: 4399,
    img: "https://img10.hkrtcdn.com/12134/prd_1213319-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_c_s.jpg",
  },
  {
    name: "MuscleBlaze Super Gainer XXL,  11 lb  Banana ",
    price: 2999,
    discount: 5199,
    img: "https://img2.hkrtcdn.com/12990/prd_1298911-MuscleBlaze-Super-Gainer-XXL-11-lb-Banana_c_s.jpg",
  },
  {
    name: "MuscleBlaze Whey Performance (70%) Protein,  8.8 lb  Chocolate ",
    price: 5999,
    discount: 7999,
    img: "https://img6.hkrtcdn.com/12134/prd_1213315-MuscleBlaze-Whey-Performance-70-Protein-8.8-lb-Chocolate_c_s.jpg",
  },
];
if (localStorage.getItem("trending") == null) {
  localStorage.setItem("trending", JSON.stringify(trendingItems));
}
function showTrending() {
  let trending_items = JSON.parse(localStorage.getItem("trending"));
  trending_items.forEach(function (el) {
    let trending_data = document.getElementById("box1");
    let div1 = document.createElement("div");

    div1.setAttribute("class", "each_products");

    let another_div1 = document.createElement("div");
    another_div1.setAttribute("class", "btn_section");
    let p_name1 = document.createElement("p");
    p_name1.innerHTML = el.name;
    let img_div1 = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = el.img;

    img1.setAttribute("class", "product_image");
    img_div1.append(img1);
    let p_att1 = document.createElement("span");

    let discount1 = document.createElement("span");
    discount1.style.textDecoration = "line-through";
    discount1.style.color = "gray";
    let btn1 = document.createElement("button");
    let imge1 = document.createElement("img");
    btn1.appendChild(imge1);
    imge1.setAttribute("class", "cartIcon");
    imge1.src =
      "https://img2.hkrtcdn.com/react/static/media/common/new_cart.svg";
    btn1.textContent = "ADD";
    btn1.addEventListener("click", function () {
      add_to_kart(el);
    });
    p_att1.innerHTML = el.price;
    btn1.setAttribute("class", "Add");
    function change() {
      btn1.style.opacity = 1.0;
      img1.style.opacity = 0.6;
      let hover_div1 = document.createElement("div");
      hover_div1.setAttribute("class", "hoverr");
      let inner_hover1 = document.createElement("div");
      inner_hover1.setAttribute("class", "inner_hover");
      let consumeInfo1 = document.createElement("div");

      consumeInfo1.setAttribute("class", "cons");
      let benefits1 = document.createElement("div");
      benefits1.innerHTML = "Benefits";
      let hoverText1 = document.createElement("div");
      hoverText1.setAttribute("class", "hoverText");
      let p11 = document.createElement("p");
      p11.innerText = "Contains WPC";
      hoverText1.append(p11);
      consumeInfo1.append(hoverText1);
      inner_hover1.append(consumeInfo1);
      hover_div1.appendChild(inner_hover1);
      img_div1.append(hover_div1);
      btn1.style.background = "#00c2c1";
    }

    img_div1.addEventListener("mouseover", function () {
      btn1.style.opacity = 1.0;
      img1.style.opacity = 0.6;

      btn1.style.background = "#00c2c1";
    });
    div1.addEventListener("mouseout", function () {
      btn1.style.opacity = 1.0;
      img1.style.opacity = 1.0;

      btn1.style.background = "";
    });
    img1.addEventListener("click", function () {
      addItems(el);
      window.location.href = "../items/items.html";
    });
    discount1.innerHTML = el.discount;
    another_div1.append(p_att1, discount1, btn1);
    div1.append(img_div1, p_name1, another_div1);
    trending_data.append(div1);
  });
}
showTrending();

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
}

function quantity() {
  let data_div = JSON.parse(localStorage.getItem("kart"));

  let total_items = data_div.length;

  //   console.log(total_price);
  let totalItems = document.createElement("div");

  totalItems.innerHTML = `${total_items}`;
  totalItems.style.color = "white";
  let cartCount = document.getElementById("cart_count");
  cartCount.append(totalItems);
  return cartCount;
}
// quantity();
console.log(quantity());

// Show items in Flash Sale

function addItems(obj) {
  let arr = [];
  localStorage.setItem("items_added", JSON.stringify(arr));
  arr.push(obj);
  localStorage.setItem("items_added", JSON.stringify(arr));
}
