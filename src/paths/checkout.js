const Checkout = () => {
    return (
        <div class="checkout">
            <h1>Your cart</h1>
            <div class="receipt">
                <ul class="receipt-items">
                    <li>
                        <p>Austin's Apple Crisp</p>
                        <p>{window.$cart[window.$CRISP]}</p>
                        <p>${Number(window.$PRICES[window.$CRISP]*window.$cart[window.$CRISP]).toFixed(2)}</p>
                    </li>
                    <li>
                        <p>Rebekah-and-Daniel's Beach Rum Baba</p>
                        <p>{window.$cart[window.$BABA]}</p>
                        <p>${Number(window.$PRICES[window.$BABA]*window.$cart[window.$BABA]).toFixed(2)}</p>
                    </li>
                </ul>
                <hr />
                <ul class="receipt-items">
                    <li>
                        <p>Total</p>
                        <p></p>
                        <p>${Number(window.$PRICES[window.$CRISP]*window.$cart[window.$CRISP]
                            + window.$PRICES[window.$BABA]*window.$cart[window.$BABA]).toFixed(2)}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Checkout;