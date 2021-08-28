async function gett() {
  var data = await fetch("http://localhost:3452/users");
  let res = await data.json();
  console.log(res);
}
gett();
