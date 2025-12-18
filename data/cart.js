export const cart = [];


export function addToCart(productId, selectElement){
    let matchingItem; 

          cart.forEach((cartItem) =>{
            if(productId === cartItem.productId){
                matchingItem =cartItem;
            }
          });

          if(matchingItem){
            matchingItem.quantity += Number(selectElement.value);
          }else {
            cart.push({
             productId: productId,
             quantity: Number(selectElement.value)
          });
          }
}