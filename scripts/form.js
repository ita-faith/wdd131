document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");

    const products = [
        { id: "p1", name: "Product A" },
        { id: "p2", name: "Product B" },
        { id: "p3", name: "Product C" }
    ];

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
