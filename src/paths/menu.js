function addCrispToCart(event) {
    event.preventDefault();
    window.$cart[window.$CRISP] += 1;
    alert("You have added a crisp to your cart, total Crisps:" + window.$cart[window.$CRISP]);
}

function addBabaToCart(event) {
    event.preventDefault();
    window.$cart[window.$BABA] += 1;
    
    alert("You have added a Baba to your cart, total Beach Rum Babas: " + window.$cart[window.$BABA]);
}

function clearCart(event) {
    event.preventDefault();
    window.$cart[window.$CRISP] = 0;
    window.$cart[window.$BABA] = 0;
    alert("Your cart was cleared you hopeless fiend");
    
}

const Menu = () => {
    return (
        <div>
          <h1>Dessert Menu</h1>
          <ul class='menu-list'>
            <li class='menu-item'>
              <div class='item-desc'>
                <h5>Austin's Apple Crisp</h5>
                <p>"it's peachy! --Loyal customer</p>
              </div>
              <div class = 'price'>
                <p>$8.99</p>
                <button onClick= {addCrispToCart}>Add to cart</button>
              </div>
            </li>
            <li class='menu-item'>
              <div class = 'item-desc'>
                <h5>Rebekah-and-Daniel&rsquo;s Beach Rum Baba</h5><p>&ldquo;It is a trip
                you have never experienced before!&rdquo;--Bob Ross</p>
              </div>
              <div class='price'>
                <p>$45.00</p> 
                <button onClick= {addBabaToCart}>Add to cart</button>
              </div>
            </li>
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Menu;
