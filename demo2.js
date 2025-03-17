const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList").getElementsByTagName("tbody")[0];

productForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

   //add
    const row = productList.insertRow();
    const nameCell = row.insertCell(0);
    const priceCell = row.insertCell(1);
    nameCell.textContent = name;
    priceCell.textContent = price;

    
    productForm.reset();
});
