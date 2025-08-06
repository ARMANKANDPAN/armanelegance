# ArmanElegance – Luxury Lifestyle Inspiration Site

Welcome to **ArmanElegance**, a stylish single-page web application that showcases luxury lifestyle inspiration through curated imagery, Instagram Reels, and elegant design.

---

## ✨ Features

- **Hero Section** – Bold landing area with background image and call-to-action button.
- **Lifestyle Cards** – Three card components highlighting travel, dining and fashion.
- **Inspiration Quote** – Motivational content with supporting icon boxes.
- **Gallery Grid** – Responsive image gallery with hover overlays.
- **Instagram Reels** – Locally-hosted MP4 reels displayed in a flexible grid.
- **Subscribe Section** – Simple email sign-up form.
- **Contact Section** – Contact details, social links and message form.
- **Responsive Navigation** – Mobile hamburger menu and smooth scrolling.
- **Flask Static Server** – Minimal Python backend to serve the site on `http://localhost:8000/`.

---

## 📂 Project Structure

```
│  app.py                # Flask entrypoint
│  requirements.txt      # Python dependencies
│  README.md             # You are here!
│
├─images\                # All PNG/JPG assets
├─videos\                # Downloaded Instagram reels (MP4)
├─styles.css             # Global stylesheet
├─script.js              # Navbar behaviour
└─index.html             # Main page markup
```

---

## 🚀 Quick Start

1. **Clone or download** this repository.
2. (Optional) **Create a virtual environment**:

   ```powershell
   python -m venv .venv
   .venv\Scripts\Activate.ps1
   ```

3. **Install dependencies**:

   ```powershell
   python -m pip install -r requirements.txt
   ```

4. **Run the server**:

   ```powershell
   python app.py
   ```

5. **Open your browser** and navigate to `http://localhost:8000/`.

---

## 🛠️ Customisation

- **Images & Reels**: Replace files inside `images/` and `videos/` with your own media; keep the same filenames or update paths in `index.html`.
- **Colour Palette / Fonts**: Modify CSS custom properties in `styles.css` under the `:root` selector.
- **Additional Sections**: Follow existing section markup in `index.html` and corresponding styles.

---

## 📜 Requirements

| Package   | Purpose                         |
|-----------|---------------------------------|
| Flask     | Lightweight web server          |
| Pillow    | Image handling (future features)|
| requests  | HTTP requests (future features) |
| yt-dlp    | Download Instagram reels        |

Install all with `pip install -r requirements.txt`.

---

## 🤝 Credits

- **Fonts**: Google Fonts – *Playfair Display* & *Montserrat*.
- **Icons**: Font Awesome (CDN).
- **Video Download**: [`yt-dlp`](https://github.com/yt-dlp/yt-dlp).

Images and videos are placeholders for demonstration purposes.

---

## 📄 License

This project is released under the MIT License – see `LICENSE` for details.