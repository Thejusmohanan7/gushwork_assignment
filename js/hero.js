function loadHero() {
    const hero = document.getElementById("hero");
    if (!hero) return;

    hero.innerHTML = `
    <section class="hero-product">
      <div class="hero-container">

        <!-- LEFT -->
        <div class="hero-gallery">
          <div class="hero-main">
            <img id="heroMainImage" src="assets/images/product1.jpg" alt="product"/>
            <button class="hero-nav prev">‹</button>
            <button class="hero-nav next">›</button>
          </div>

          <div class="hero-thumbs">
            <img src="assets/images/product1.jpg" />
            <img src="assets/images/product2.jpg" />
            <img src="assets/images/product3.jpg" />
            <img src="assets/images/product4.jpg" />
          </div>
        </div>

        <!-- RIGHT -->
        <div class="hero-content">

          <div class="hero-badges">
            <span>BIS Certified</span>
            <span>ISO Certified</span>
            <span>CE Certified</span>
          </div>

          <h1>
            Premium HDPE Pipes <br />
            & Coils for Modern Infrastructure
          </h1>

          <ul class="hero-features">
            <li>Leak-Proof Fusion Joints</li>
            <li>Chemical Resistance</li>
            <li>50+ Year Service Life</li>
            <li>Flexible Installation</li>
          </ul>

         <div class="hero-price">
  <p class="label">Price Range</p>
  <h2>₹4,80,000 – 7,90,000</h2>

  <div class="hero-tags">
    <span class="tag">Shipping: 6–12 days</span>
    <span class="tag">Returns: If returned within 7 days</span>
  </div>

  <div class="hero-cert">
    Certifications: ISO Certified, BIS Certified
  </div>

  <div class="hero-actions">
    <button class="btn-primary">Get Custom Quote</button>
    <button class="btn-outline">
      View Technical Specs →
    </button>
  </div>
</div>

        </div>

      </div>
    </section>
  `;
}

// 🔥 interactions
function initHero() {
    const mainImg = document.getElementById("heroMainImage");
    const thumbs = document.querySelectorAll(".hero-thumbs img");

    if (!mainImg) return;

    thumbs.forEach(img => {
        img.addEventListener("click", () => {
            mainImg.src = img.src;
        });
    });
}

window.loadHero = loadHero;
window.initHero = initHero;