 # 📷 Image Compressor Web App

A simple web-based image compressor tool built with HTML, CSS, and JavaScript. This tool allows users to upload an image, view the original, and see a compressed version of it. The compressed image is also downloadable by clicking on it.

---

## 🚀 Features

- Upload and preview original image.
- Compress the image using canvas and display the result.
- Download the compressed image (JPEG format).
- Responsive and minimal UI with Montserrat font and green theme.

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

---

## 📁 Project Structure

```plaintext
Image-Compressor/
├── index.html     # Main HTML file – structure of the app
├── style.css      # CSS file – styles and layout
├── script.js      # JavaScript file – image compression logic
└── README.md      # Project documentation
```

## ✅ How It Works

1. **Select an image** using the file input.
2. The original image is shown below.
3. JavaScript creates a canvas, draws the image, and compresses it using `toDataURL()` with quality `0.5`.
4. The compressed image is displayed.
5. **Click on the compressed image to download it.**

---

## 📌 Usage

To run the app locally:

1. Clone the repository or copy the files.
2. Open `index.html` in your browser.
3. Choose an image using the file input.
4. Click on the compressed image to download it.

---

## 💡 Notes

- Compression quality is set to `0.5` — you can adjust it in `script.js`.
- Only JPEG output is supported.
- For best results, use standard image file formats (JPEG, PNG, etc.).

---

## 📃 License

This project is open source and free to use.

---

## ✨ Author

**Priye Raj** – [NIT Silchar](https://nits.ac.in)

