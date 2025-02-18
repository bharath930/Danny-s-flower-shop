let cart = [];
let totalCost = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalCost += price;
    updateCartDisplay();
    alert(`${product} has been added to the cart.`);
}

function removeFromCart(index) {
    totalCost -= cart[index].price;
    cart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");
    const totalCostElement = document.getElementById("total-cost");
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${item.product} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(listItem);
    });
    totalCostElement.textContent = totalCost.toFixed(2);
}
