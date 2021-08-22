function MemoryAndDeliveryCost(name,price){
    const cost=document.getElementById(name +'Cost');
       cost.innerText=price;
  CalculateTotal();
}

function calculation(){
   const memoryCost=document.getElementById('extraMemoryCost');
  const memory = parseInt(memoryCost.innerText);
 //storage  
  const storageCost=document.getElementById('extraStorageCost');
  const storage = parseInt(storageCost.innerText);
  //delevery
     const deliveryCost=document.getElementById('DeliveryCost');
  const delivery = parseInt(deliveryCost.innerText);
  const Totalcost=memory+storage+delivery;
  return Totalcost;  
}



function CalculateTotal(){
  phonecost = calculation()+1299;
  document.getElementById('totalCost').innerText=phonecost;    document.getElementById('Total').innerText=phonecost;
   return phonecost;
}

//promo code
function promoCode(){
  const ppp=document.getElementById('promoCode').value;
  if(ppp=='stevekaku'){
   const nn=CalculateTotal();
   const discountprice=nn*0.8;
    document.getElementById('Total').innerText=discountprice;
}
}

document.getElementById('defaultMemory').addEventListener('click',function(){
   MemoryAndDeliveryCost('extraMemory',0);
})
document.getElementById('memoryAdd').addEventListener('click',function(){
   MemoryAndDeliveryCost('extraMemory',180);
})

//storage cost
document.getElementById('defaultStorage').addEventListener('click',function(){
   MemoryAndDeliveryCost('extraStorage',0);
})
document.getElementById('Storage512GB').addEventListener('click',function(){
   MemoryAndDeliveryCost('extraStorage',100);
})
document.getElementById('Storage1Tb').addEventListener('click',function(){
   MemoryAndDeliveryCost('extraStorage',180);
})

//delivery cost
document.getElementById('primeDelivery').addEventListener('click',function(){
   MemoryAndDeliveryCost('Delivery',0);
})
document.getElementById('Delivery').addEventListener('click',function(){
   MemoryAndDeliveryCost('Delivery',20);
})

///promo button
document.getElementById('promoButton').addEventListener('click',function(){
   promoCode();
})

