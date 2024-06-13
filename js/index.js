var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDesc=document.getElementById("productDesc");
var productContainer=[]

if(localStorage.getItem("newProducts")!=null){
    productContainer=JSON.parse(localStorage.getItem("newProducts"))
    displayProducts()
}

function addProduct()
{
    var product=
    {
        productName:productName.value,
        productPrice:productPrice.value,
        productCategory:productCategory.value,
        productDesc:productDesc.value
    }
    productContainer.push(product)
    localStorage.setItem("newProducts",JSON.stringify(productContainer))
    clearForm()
    displayProducts()
}

function clearForm()
{
    productName.value=""
    productPrice.value=""
    productCategory.value=""
    productDesc.value=""
}

function displayProducts()
{
    var cartona=``
    for(var i = 0 ; i<productContainer.length ;i++){
        cartona+=`
        <tr>
        <td>${i}</td>
        <td>${productContainer[i].productName}</td>
        <td>${productContainer[i].productPrice}</td>
        <td>${productContainer[i].productCategory}</td>
        <td>${productContainer[i].productDesc}</td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger">Delete</button></td>
        <td><button onclick="updateProduct(${i})" class="btn btn-sm btn-outline-warning">Update</button></td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartona
}

function deleteProduct(deletedProduct)
{
    productContainer.splice(deletedProduct,1)
    localStorage.setItem("newProducts",JSON.stringify(productContainer))
    displayProducts()
}

function searchProduct(term)
{
    var cartona=``
    for(var i=0;i<productContainer.length;i++)
    {
        if(productContainer[i].productName.toLowerCase().includes(term.toLowerCase())==true)
        {
                cartona+=`
                <tr>
                <td>${i}</td>
                <td>${productContainer[i].productName}</td>
                <td>${productContainer[i].productPrice}</td>
                <td>${productContainer[i].productCategory}</td>
                <td>${productContainer[i].productDesc}</td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger">Delete</button></td>
                <td><button onclick="updateProduct(${i})" class="btn btn-sm btn-outline-warning">Update</button></td>
            </tr>`
            }
        }
        document.getElementById("tableBody").innerHTML=cartona
}
 
function updateProduct(updatedProduct)
{
productName.value=productContainer[updatedProduct].productName;
productPrice.value=productContainer[updatedProduct].productPrice;
productCategory.value=productContainer[updatedProduct].productCategory;
productDesc.value=productContainer[updatedProduct].productDesc;
productContainer.splice(updatedProduct,1);
localStorage.setItem("newProducts",JSON.stringify(productContainer))
}
