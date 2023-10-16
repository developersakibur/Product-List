function addProduct() {
    // Get input values
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const buyValue = document.getElementById('buyValue').value;
    const sellValue = document.getElementById('sellValue').value;

    // Create a new product element
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = `
        <span><b>Name:</b> ${productName}</span>
        <span><b>Description:</b> ${productDescription}</span>
        <span><b>Buy Value:</b> $${buyValue}</span>
        <span><b>Sell Value:</b> $${sellValue}</span>
    `;

    // Append the product to the product list
    document.getElementById('productList').appendChild(productItem);

    // Clear input fields
    document.getElementById('productName').value = '';
    document.getElementById('productDescription').value = '';
    document.getElementById('buyValue').value = '';
    document.getElementById('sellValue').value = '';
}
