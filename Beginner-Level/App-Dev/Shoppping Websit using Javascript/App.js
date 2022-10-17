let carts = document.querySelectorAll('figcaption .but');
let products = [
    {
        title:'BoAt X23C Headphones',
        price:800,
       inCart : 0, 
       tag:1
    },
    {
        title:'DELL Mouse & Keyboard Combo',
        price:600,
       inCart : 0, 
       tag:2
    } ,
     {
        title:'Apple MacBook Pro 16"',
        price:25000,
       inCart : 0 ,
       tag: 3
     } ,
    {
        title:'Samsung Galaxy TAB s6',
        price:9000,
       inCart : 0, 
       tag:4
    },
    {
        title:'Xiaomi Wireless Router',
        price:600,
       inCart : 0, 
       tag:5
    } ,
     {
        title:'SeaGate 1TB HDD',
        price:2000,
       inCart : 0 ,
       tag: 6
    },
     {
        title:'Spy Camera',
        price:4000,
       inCart : 0, 
       tag:7
    },
    {
        title:'Zotac NVIDIA GTX 1050Ti 2GB',
        price:13700,
       inCart : 0, 
       tag:8
    }];

console.log(products.length);

console.log(carts.length);


 carts[0].addEventListener("click",() => {  cartNumbers(products[0]);  totalCost(products[0]);   });
    carts[1].addEventListener("click",() => {
  cartNumbers(products[1]);
  totalCost(products[1]);
  });
     carts[2].addEventListener("click",() => {
 cartNumbers(products[2]);
 totalCost(products[2]);
      });
    carts[3].addEventListener("click",() => {
  cartNumbers(products[3]);
  totalCost(products[3]);
        });

      carts[4].addEventListener("click",() => {
  cartNumbers(products[4]);
  totalCost(products[4]);
      });
   carts[5].addEventListener("click",() => {
   cartNumbers(products[5]);
   totalCost(products[5]);
                          });
       carts[6].addEventListener("click",() => {
                     cartNumbers(products[6]);
                     totalCost(products[6]);
                              });
   carts[7].addEventListener("click",() => {
            cartNumbers(products[7]);
            totalCost(products[7]);
                          });

function onLoadCartNumbers () {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers)
    {
        document.querySelector('#other #otherspan ').textContent= productNumbers;
    }
}


//to store the Cart Item number only 
function cartNumbers(product )
 {
 
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers =parseInt(productNumbers);

    if(productNumbers) // A truthy value 
    {   
             localStorage.setItem('cartNumbers',productNumbers+1);
             document.querySelector('#other #otherspan ').textContent= productNumbers+1;
    }
    else
    {
                localStorage.setItem('cartNumbers',1);
                document.querySelector('#other #otherspan ').textContent= 1;

    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
  

if(cartItems!=null){
    if(cartItems[product.tag] == undefined){
    cartItems = {
        ...cartItems,
        [product.tag]:product

    }

      }
cartItems[product.tag].inCart +=1;

}else{
    product.inCart = 1;
    cartItems = {
        [product.tag]:product
            }
}
     

localStorage.setItem("productsInCart",JSON.stringify(cartItems));

}
function totalCost(product){
let cartCost = localStorage.getItem('totalCost');
    if ( cartCost === null){
        localStorage.setItem('totalCost', product.price);
    } else {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    }

    
}
onLoadCartNumbers();
