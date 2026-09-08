# Black Pine Clothing — V12 Fixed Website

## What was fixed
- Removed broken `assets/products/*.webp` references.
- Added actual product-card image assets under `assets/products/`.
- T-Shirts, Polos and Sports Jerseys now each have 5 products.
- Prices are displayed in INR and MOQ is shown on every product card.
- Homepage collection bar and collection cards now link to the three live collection pages.
- Added image fallbacks so a missing product image cannot make the page look broken.
- Kept the existing Design Studio and `assets/models/tshirt.glb`.

## Recommended way to run
For the collection pages, opening `index.html` directly is normally fine.

For the 3D Design Studio, use a web server (GitHub Pages is suitable) because browsers commonly block local `file://` loading of GLB/model resources.

### GitHub Pages
Upload the contents of the `V11` folder to the repository root (or publish the folder as the site root), then open:
- `index.html` / your GitHub Pages URL
- `collections.html?category=tshirts`
- `collections.html?category=polos`
- `collections.html?category=jerseys`
- `designer.html`

The 3D model path is:
`assets/models/tshirt.glb`

## Important
Do not move `assets/models/tshirt.glb` out of the `assets/models/` folder.
Do not rename the `assets/products/` files unless you also update `collections.js`.


## Enquiry Form — Email Delivery
- The homepage enquiry form is configured to send submissions to `navadheesan.blackpine@gmail.com` using FormSubmit.
- Required fields: Name, Phone Number and Product Required.
- Product Required contains only: T-Shirts, Polos and Sports Jerseys.
- Optional Company Name, Email Address, Estimated Quantity and More Details are submitted as `Not provided` when left blank.
- After a successful submission, the visitor is redirected to `thank-you.html`.
- On the first FormSubmit submission, you may receive a one-time activation/confirmation email at the destination address. Complete that activation so future enquiries are delivered automatically.
- This approach works with GitHub Pages because it does not require `server.js` or a private SMTP password in the website code.
