'use strict';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let all = [];
function Product (name , category ,quantity ) {
  this.name = name,
  this.category = category,
  this.quantity = quantity;
  this.price = getRndInteger( 350 , 750) ;
  all.push(this);

}

Product.prototype.render = function () {

  let tr = document.createElement('tr');
  tableEl.appendChild(tr);

  let td = document.createElement('td');
  tr.appendChild(td);
  td.textContenta = this.name;

  let td2 = document.createElement('td');
  tr.appendChild(td);
  td2.textContenta = this.quantity;

  let td3 = document.createElement('td');
  tr.appendChild(td);
  td3.textContenta = this.price;


  let td4 = document.createElement('td');
  tr.appendChild(td);
  td4.textContenta = this.category;

};


let form =document.getElementById('form');
form.addEventListener('submit' , function(event) {
  let name = event.target.name.value;
  let mobile = event.target.mobile.value;
  let laptop = event.target.laptop.value;
  let tablet = event.target.tablet.value;
  let quantity = event.target.quantity.value;

  let category ;
  if (mobile) {
    category = mobile;
  }
  else if (laptop) {
    category = laptop;
  }
  else if (tablet) {
    category = tablet;
  }

  let newProduct =new Product ( name , category , quantity );
  console.log(newProduct);
  console.log(all);
  newProduct.render();

  localStorage.setItem ('all' , JSON.stringify(all) );

} );

let tableEl = document.getElementById('table');
let headerTd = ['Device Name' , 'quantity' , 'unit Price' , 'category'];

function tableHeader (){
  let tr = document.createElement('tr');
  tableEl.appendChild(tr);

  for ( let i = 0 ; i <headerTd.length ; i++ ) {
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = headerTd[i];
  }

}
tableHeader ();

if (localStorage.getItem ('all')) {
  let oldDate = JSON.parse ( localStorage.getItem ('all') );
  for ( let i = 0 ; i < oldDate.length ; i++) {
    let upDate = new Product ( oldDate[i].name , oldDate[i].category , oldDate[i].quantity);
    upDate.render();
  }
}
