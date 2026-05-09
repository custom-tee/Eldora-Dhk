// ADD NEW PRODUCTS HERE
const products = [
    {
        name: "Essential Black Tee",
        price: "1,200",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000"
    },
    {
        name: "Minimal White Tee",
        price: "1,200",
        image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1000"
    }
];

// This function builds the product cards automatically
function loadProducts() {
    const grid = document.querySelector('.grid');
    if(!grid) return;
    
    grid.innerHTML = ''; 

    products.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="${item.name}">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p class="price">৳ ${item.price}</p>
                    <button class="buy-btn" onclick="buyItem('${item.name}')">Buy Now</button>
                </div>
            </div>
        `;
    });
}

// Reveal and scroll to section
function revealSection(id) {
    const section = document.getElementById(id);
    if(section) {
        section.classList.add('show');
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function buyItem(name) {
    alert(name + " has been added to your cart!");
}

// Load products when page finishes loading
window.onload = loadProducts;
