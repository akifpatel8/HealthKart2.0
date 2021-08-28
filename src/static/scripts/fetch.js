async function gett() {
    var res = await fetch("http://localhost:3452/users");
    let data = await res.json();
    showdata(data)
  }
  gett();
  let maindiv=document.getElementById("box")
  
  
  function showdata(data){
    
    data.forEach((item)=>{
        let minidiv=document.createElement("div")
        minidiv.classList="col"
        minidiv.innerHTML=`<div class="mini">
        <img src="${item.img}" alt="">
        <h5>${item.name}</h5>
        <p>${item.price}</p>
        <p>${item.discount}</p>
      </div>`
      let btn=document.createElement("button")
      btn.innerText="Add to cart"
      btn.addEventListener("click",()=>{
        event.stopPropagation()
        add_to_kart(item)
     
      },false)
      minidiv.append(btn)
    //   minidiv.addEventListener("click",()=>{
    //       window.location.href="./item"
    //   },false)
      maindiv.append(minidiv)
    })
    
    console.log(data);

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
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === item.name) {
        alert("Already Added");
        return;
      }
    }
  
    arr.push(item);
  
    localStorage.setItem("kart", JSON.stringify(arr));
  }

  function viewall(){
      window.location.href="http://localhost:3452/sorting"
  }