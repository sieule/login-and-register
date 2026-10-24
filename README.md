# Login & Register Interface

A clean, modern login and registration interface built with HTML, CSS, and JavaScript. This project provides a seamless user authentication experience with a responsive design and **multi-language support**.

## 🚀 Live Demo

Check out the live demo: [https://www.sieu.io.vn/github/login-and-register](https://www.sieu.io.vn/github/login-and-register)

## ✨ Features

- **Login Form** – Username/email and password fields with "Remember Me" option
- **Registration Form** – Username, email, and password fields for new users
- **Password Recovery** – "Forgot Password?" link for resetting credentials
- **Toggle Between Forms** – Seamless switching between login and registration
- **Responsive Design** – Optimized for desktop, tablet, and mobile devices
- **Clean UI** – Modern, user-friendly interface with smooth transitions
- **🌐 Multi-language Support** – Vietnamese, English, and Japanese with a language switcher (remembered via `localStorage`)
- **Password Visibility Toggle** – Show/hide password with an eye icon
- **Client-side Validation** – Required fields and email format checked before submission, with localized error popups

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- **JSON** (for language translations)

## 📁 Project Structure

```
login-and-register/
├── index.html       # Main HTML file
├── style.css        # Stylesheet
├── script.js        # JavaScript functionality
├── lang.json        # Translation data (vi, en, ja)
└── README.md        # Project documentation
```


## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/sieule/login-and-register.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd login-and-register
   ```
3. **Run the application with a local server**

⚠️ Important: This project loads data from a JSON file, so you need to use a local development server instead of opening `index.html` directly in your browser to avoid CORS issues.

- **Using VS Code** – Install the "Live Server" extension, right-click on `index.html`, and select "Open with Live Server"
- **Using Python** – Run `python -m http.server` (Python 3) or `python -m SimpleHTTPServer` (Python 2) and open `http://localhost:8000`
- **Using Node.js** – Install `http-server` globally (`npm install -g http-server`) and run `http-server` in the project folder

## 📝 How It Works

- **Login** – Enter your username/email and password, then click "Login"
- **Register** – Fill in the registration form with username, email, and password
- **Switch Forms** – Click "Register" or "Login" links at the bottom to toggle between forms
- **Remember Me** – Check the box to stay logged in (client-side)
- **Forgot Password** – Click the link to initiate password recovery (UI placeholder)
- **Language Switching** – Use the dropdown in the top-right corner to change the language. The choice is saved in `localStorage` and persists across reloads.
- **Validation** – Both login and registration forms validate required fields and email format. Errors appear in a localized popup.

## 🌐 Adding a New Language

1. Add a new object to `lang.json` with the language code as the key (e.g., `"fr"`).
2. Add a corresponding `<option>` in the `#langSelect` dropdown inside `index.html`.
3. That's it — no changes to JavaScript needed.

# 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an Issue.
1. Fork the repository
2. Create your feature branch `(git checkout -b feature/amazing-feature)`
3. Commit your changes `(git commit -m 'Add some amazing feature')`
4. Push to the branch `(git push origin feature/amazing-feature)`
5. Open a Pull Request

# 📄 License

This project is open-source and available under the MIT License.
