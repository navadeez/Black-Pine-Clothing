const DATA={
  tshirts:{label:'T-Shirts',desc:'Premium quality corporate t-shirts designed for comfort, durability and style. Perfect for teams, events and everyday wear.',custom:'Need a Custom T-Shirt?',filters:{fabric:['100% Cotton','Cotton Polyester','Polyester','Jersey'],fit:['Regular Fit','Oversized Fit','Slim Fit'],gsm:['160 - 180 GSM','180 - 200 GSM','200 - 220 GSM','220+ GSM']},products:[
    ['Classic Crew Neck T-Shirt','100% Cotton, 180 GSM','₹425','50 Pcs','assets/products/tshirt-classic.jpg','Best Seller',['#111','#fff','#45503e']],
    ['Premium Cotton T-Shirt','100% Cotton, 200 GSM','₹475','50 Pcs','assets/products/tshirt-premium.jpg','',['#111','#d8d5ca','#45503e']],
    ['Raglan T-Shirt','Cotton Jersey, 180 GSM','₹495','50 Pcs','assets/products/tshirt-raglan.jpg','',['#111','#45503e','#8b8b82']],
    ['Corporate Team T-Shirt','Cotton Blend, 180 GSM','₹445','50 Pcs','assets/products/tshirt-team.jpg','',['#111','#fff','#45503e']],
    ['Performance T-Shirt','Polyester, 160 GSM','₹385','50 Pcs','assets/products/tshirt-performance.jpg','',['#111','#45503e','#3c5365']]
  ]},
  polos:{label:'Polos',desc:'Smart and versatile polos that deliver a professional look with all-day comfort. Ideal for corporate teams.',custom:'Need a Custom Polo?',filters:{fabric:['100% Cotton','Cotton Polyester','Pique','Interlock','Jersey'],fit:['Regular Fit','Slim Fit'],gsm:['180 - 200 GSM','200 - 220 GSM','220+ GSM']},products:[
    ['Premium Pique Polo','100% Cotton, 200 GSM','₹599','50 Pcs','assets/products/polo-1.jpg','Best Seller',['#111','#1e3244','#45503e']],
    ['Cotton Texture Polo','Cotton Polyester, 200 GSM','₹525','50 Pcs','assets/products/polo-2.jpg','',['#111','#d8d5ca','#45503e']],
    ['Interlock Polo','100% Cotton, 220 GSM','₹649','50 Pcs','assets/products/polo-3.jpg','',['#111','#45503e','#777']],
    ['Tipped Collar Polo','100% Cotton, 200 GSM','₹575','50 Pcs','assets/products/polo-4.jpg','',['#111','#fff','#45503e']],
    ['Performance Polo','Polyester, 180 GSM','₹499','50 Pcs','assets/products/polo-5.jpg','',['#111','#1e3244','#777']]
  ]},
  jerseys:{label:'Sports Jerseys',desc:'High-performance sports jerseys designed for comfort, breathability and team spirit.',custom:'Need a Custom Jersey?',filters:{fabric:['Polyester','Mesh','Micro Polyester','Dry Fit'],fit:['Regular Fit','Athletic Fit']},products:[
    ['Team Jersey','Polyester, 160 GSM','₹599','25 Pcs','assets/products/jersey-1.jpg','',['#111','#2d6f70','#fff']],
    ['Training Jersey','Mesh, 150 GSM','₹549','25 Pcs','assets/products/jersey-2.jpg','',['#111','#45503e','#fff']],
    ['Performance Jersey','Dry Fit, 160 GSM','₹699','25 Pcs','assets/products/jersey-3.jpg','Best Seller',['#111','#c23c35','#fff']],
    ['Match Jersey','Micro Polyester, 160 GSM','₹749','25 Pcs','assets/products/jersey-4.jpg','',['#111','#1e4c73','#fff']],
    ['Custom Sublimation Jersey','Polyester, 160 GSM','₹799','25 Pcs','assets/products/jersey-5.jpg','',['#111','#45503e','#c23c35']]
  ]}
};

function getCategory(){const key=new URLSearchParams(location.search).get('category')||'tshirts';return DATA[key]?key:'tshirts'}
function swatches(colors){return `<div class="product-colors">${colors.map(c=>`<i style="background:${c}" aria-label="Color"></i>`).join('')}</div>`}
function filterGroup(title,items){return items?.length?`<div class="filter-group"><h4>${title}</h4>${items.map(x=>`<label><input type="checkbox" value="${x}"> ${x}</label>`).join('')}</div>`:''}
function render(){
 const key=getCategory(),d=DATA[key];
 document.querySelectorAll('[data-category]').forEach(a=>a.classList.toggle('active',a.dataset.category===key));
 const root=document.getElementById('collectionRoot');
 root.innerHTML=`<div class="collection-shell">
   <div class="collection-hero"><div><div class="collection-crumb">Home / Collections / ${d.label}</div><h1>${d.label}</h1><p>${d.desc}</p></div><a class="dark-btn" href="designer.html?garment=${key}">Start Customization →</a></div>
   <div class="feature-row"><div class="feature"><b>Premium Quality</b><span>Finest fabrics & craftsmanship</span></div><div class="feature"><b>Custom Branding</b><span>Personalized for your brand</span></div><div class="feature"><b>Bulk Orders</b><span>Solutions for every team</span></div><div class="feature"><b>Reliable Delivery</b><span>On-time, every time</span></div></div>
   <div class="category-tabs"><a class="${key==='tshirts'?'active':''}" href="collections.html?category=tshirts">T-Shirts</a><a class="${key==='polos'?'active':''}" href="collections.html?category=polos">Polos</a><a class="${key==='jerseys'?'active':''}" href="collections.html?category=jerseys">Sports Jerseys</a></div>
   <div class="collection-content"><aside class="filters"><div class="filter-head"><b>Filter by</b><button class="clear-btn" type="button">Clear All</button></div>${filterGroup('Fabric',d.filters.fabric)}${filterGroup('Fit',d.filters.fit)}${filterGroup('GSM',d.filters.gsm)}<div class="filter-group"><h4>Colors</h4><div class="swatches"><i class="swatch" style="background:#111"></i><i class="swatch" style="background:#fff"></i><i class="swatch" style="background:#7c7c78"></i><i class="swatch" style="background:#1e3244"></i><i class="swatch" style="background:#45503e"></i><i class="swatch" style="background:#8b6d58"></i></div></div></aside>
   <section class="products-area"><div class="products-toolbar"><strong>Showing ${d.products.length} of ${d.products.length} products</strong><div class="sort-wrap">Sort by <select id="sortSelect"><option>Newest First</option><option>Price: Low to High</option><option>Price: High to Low</option></select></div></div><div class="product-grid-collection">${d.products.map((p,i)=>`<article class="collection-product"><div class="product-media">${p[5]?`<span class="product-badge">${p[5]}</span>`:''}<img src="${p[4]}" alt="${p[0]}" loading="lazy" onerror="this.onerror=null;this.src='assets/black-pine-logo.png'"></div><div class="product-info"><h3>${p[0]}</h3><div class="product-meta">${p[1]}</div><div class="price-row"><div><span>Price</span><strong>${p[2]}</strong></div><div><span>MOQ</span><strong>${p[3]}</strong></div></div>${swatches(p[6])}<div class="product-actions"><button class="details" data-product="${i}">View Details</button><a class="customize" href="designer.html?garment=${key}">Customize</a></div></div></article>`).join('')}</div></section></div>
   <div class="collection-cta"><div><h2>${d.custom}</h2><p>Create a branded garment with your colors, logo and artwork.</p></div><a class="dark-btn" href="designer.html?garment=${key}">Start Customization →</a></div>
 </div><div class="modal" id="productModal"><div class="modal-card"><button class="modal-close" aria-label="Close">×</button><div id="modalContent"></div></div></div>`;
 const modal=root.querySelector('#productModal'),content=root.querySelector('#modalContent');
 root.querySelectorAll('.details').forEach(btn=>btn.addEventListener('click',()=>{const p=d.products[+btn.dataset.product];content.innerHTML=`<h2>${p[0]}</h2><p>${p[1]}</p><div class="modal-price"><small>Price</small>${p[2]} <span style="font-size:11px;color:#777"> · MOQ ${p[3]}</span></div><p>Available for corporate and bulk orders. Add your logo, artwork and brand colors in the Design Studio.</p><div class="modal-actions"><a href="designer.html?garment=${key}">Customize This Product</a><button type="button" class="modal-close-2">Close</button></div>`;modal.classList.add('open');content.querySelector('.modal-close-2').onclick=()=>modal.classList.remove('open') }));
 root.querySelector('.modal-close').onclick=()=>modal.classList.remove('open');
 modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
 root.querySelector('.clear-btn').onclick=()=>root.querySelectorAll('.filters input').forEach(i=>i.checked=false);
 root.querySelectorAll('.swatch').forEach(s=>s.addEventListener('click',()=>s.classList.toggle('active')));
}
render();
