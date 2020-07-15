window.onload=function(){
const addButton=document.querySelectorAll('.increment');
const removeButton=document.querySelectorAll('.decrement')

const itemsPrice={
    vintageBag:{price:94.99,discount:54.99},
    leviShoes:{price:124.99,discount:74.99}
}   

const changePrice=(item)=>{
document.getElementById('shoes-discount').innerHTML=`\$${itemsPrice.leviShoes.discount * item}`;
document.getElementById('shoes-price').innerHTML=`\$${itemsPrice.leviShoes.price * item} `;
}

addButton.forEach(button=>{
    button.addEventListener('click',function(event){
       const item = this.parentNode.children[1];
       item.innerHTML=Number(item.innerHTML) + 1;

       const updatePrice = this.parentNode.previousElementSibling;
       const discount = updatePrice.children[0];
       const price = updatePrice.children[1];
    
if(updatePrice.classList.contains('vintage-backbag')){
       discount.innerHTML = '$' + (itemsPrice.vintageBag.discount * item.innerHTML).toFixed(2);
      price.innerHTML = '$' + (itemsPrice.vintageBag.price * item.innerHTML).toFixed(2);
   
}
if(updatePrice.classList.contains('levi-shoes')){
    discount.innerHTML = '$' + (itemsPrice.leviShoes.discount * item.innerHTML).toFixed(2);
    price.innerHTML = '$' + (itemsPrice.leviShoes.price * item.innerHTML).toFixed(2);
}
    });
})
removeButton.forEach(button=>{
    button.addEventListener('click',function(){
       const item =this.parentNode.children[1];
       if(Number(item.innerHTML) <= 1){
       item.innerHTML=1;
    }else{
        item.innerHTML=Number(item.innerHTML) - 1;
       }
       
       const updatePrice = this.parentNode.previousElementSibling;
       const discount = updatePrice.children[0];
       const price = updatePrice.children[1];
    
if(updatePrice.classList.contains('vintage-backbag')){
       discount.innerHTML = '$' + (itemsPrice.vintageBag.discount * item.innerHTML).toFixed(2);
      price.innerHTML = '$' + (itemsPrice.vintageBag.price * item.innerHTML).toFixed(2);
   
}
if(updatePrice.classList.contains('levi-shoes')){
    discount.innerHTML = '$' + (itemsPrice.leviShoes.discount * item.innerHTML).toFixed(2);
    price.innerHTML = '$' + (itemsPrice.leviShoes.price * item.innerHTML).toFixed(2);
}
      
    });
});


/*
let decrement =()=>{

    let number = Number(item.innerHTML);
    item.innerHTML = number - 1;
    }

addButton.addEventListener('click',increment)

removeButton.addEventListener('click',decrement)*/
}