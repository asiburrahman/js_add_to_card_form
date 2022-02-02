var product_amount= document.getElementById('product_amount');
var shipping_charge= document.getElementById('shipping_charge');
var total_with_vat= document.getElementById('total_with_vat');


const minus_product=(item_num, itemprice)=>{
  var item= document.getElementById(item_num);
//   console.log(product_amount.innerHTML);
//   console.log(itemval.value);
var itemprice= document.getElementById(itemprice);

// console.log(itemval2);

if(0>=item.value){
    item.value=0;
    shipping_charge.innerHTML=0;   
}else{
    item.value= parseInt(item.value)-1;
    item.style.background="white";
    itemprice.innerHTML= parseInt(itemprice.innerHTML)-15;
    product_amount.innerHTML = parseInt(product_amount.innerHTML)-15;
    total_with_vat.innerHTML = parseInt(product_amount.innerHTML)+parseInt(shipping_charge.innerHTML);
    
    // console.log(itemprice);
}
}

const plus_product=(item_num, itemprice)=>{
    var item= document.getElementById(item_num);
  //   console.log(itemval);
  var itemprice= document.getElementById(itemprice);
//   console.log(itemval2);
  if (item.value>=5) {
      item.value=5;
      item.style.background="red";
      alert("Maximum 5 Quantity");
      
  }else{
  
      item.value= parseInt(item.value)+1;
      itemprice.innerHTML= parseInt(itemprice.innerHTML)+15;
      product_amount.innerHTML = parseInt(product_amount.innerHTML)+15;
      total_with_vat.innerHTML = parseInt(product_amount.innerHTML)+parseInt(shipping_charge.innerHTML);
    //   console.log(itemprice);
      
  
  }
}
let decode1 = document.getElementById('d_code');

const discount_code=()=>{
console.log(decode1.value);
let total_current = parseInt(total_with_vat.innerHTML);
    if(decode1.value=="asibur"){
        let new_total= total_current-15;
        total_with_vat.innerHTML= new_total;
    }else{
        document.getElementById('error_trw').innerHTML="You Code is wrong";
    }
}