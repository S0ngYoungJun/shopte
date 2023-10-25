window.addEventListener("scroll", () => {
  const boxes = document.querySelectorAll(".box");

  const colors = ["white", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6", "#e67e22"];
  
  boxes.forEach((box, index) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < window.innerHeight) {
          box.classList.add("show");
          box.style.backgroundColor = colors[index]; // 다른 색상 적용
      } else {
          box.classList.remove("show");
          box.style.backgroundColor = ''; // 초기 색상으로 되돌림
      }
  });
});
const conta= document.querySelector(".container")
const box1 = document.getElementById("box1");
const closeBtn = conta.querySelector(".close-button");
const topbar = conta.querySelector(".topbar");

closeBtn.addEventListener("click", () => {
    topbar.classList.toggle("hidden");
});

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // 3초마다 슬라이드 전환
}

showSlides();

const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        // 해당 썸네일에 해당하는 슬라이드를 표시합니다.
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
    });
});


const dropdown = document.getElementById('box1');
const dropdownContent = dropdown.querySelector('.dropdown-content');
const dropbtn = dropdown.querySelector('.dropbtn');

// 드롭다운 버튼 클릭 시 드롭다운 내용을 토글
dropbtn.addEventListener('mouseover', function() {
    dropdownContent.classList.toggle('show');
});

// 다른 곳을 클릭하면 드롭다운이 닫히도록 함
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});

// 상품 데이터 (예시)
const products = [
    { name: "상품 1", price: 10, image: "product1.jpg" },
    { name: "상품 2", price: 110, image: "product2.jpg" },
    { name: "상품 3", price: 40, image: "product3.jpg" },
    { name: "상품 4", price: 30, image: "product4.jpg" },
    { name: "상품 5", price: 50, image: "product5.jpg" },
];
let ascendingOrder = true; // 초기 정렬 순서는 오름차순


// 3번째 박스에 상품을 동적으로 추가
const productContainer = document.getElementById("productContainer");

products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
    productDiv.appendChild(productImage);

    const productName = document.createElement("p");
    productName.textContent = product.name;
    productDiv.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price}`;
    productDiv.appendChild(productPrice);

    // 클릭 이벤트를 추가하여 메인 화면으로 돌아가기
    productDiv.addEventListener("click", () => {
        window.location.href = "메인화면URL"; // 메인 화면의 URL로 이동
    });

    productContainer.appendChild(productDiv);
});

//가격별 정렬 버튼의 클릭 이벤트
const sortButton = document.getElementById("sortButton");

sortButton.addEventListener("click", () => {
    // 오름차순과 내림차순을 토글
    ascendingOrder = !ascendingOrder;

    // 상품 정렬 함수 호출
    sortProducts();
});
function sortProducts() {
    // 가격에 따라 상품을 정렬
    products.sort((a, b) => (ascendingOrder ? a.price - b.price : b.price - a.price));

    // 기존 상품을 모두 지우고 다시 정렬된 상품을 추가
    productContainer.innerHTML = '';
    products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
    productDiv.appendChild(productImage);

    const productName = document.createElement("p");
    productName.textContent = product.name;
    productDiv.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price}`;
    productDiv.appendChild(productPrice);

    // 클릭 이벤트를 추가하여 메인 화면으로 돌아가기
    productDiv.addEventListener("click", () => {
        window.location.href = "메인화면URL"; // 메인 화면의 URL로 이동
    });

    productContainer.appendChild(productDiv);
});
}

// 초기 정렬 수행
sortProducts();


