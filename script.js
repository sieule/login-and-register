/* ====== i18n ====== */
let translations = {};
let currentLang = localStorage.getItem("lang") || "vi";
let currentErrorKey = null; // để dịch lại thông báo lỗi khi đổi ngôn ngữ

async function loadTranslations() {
    try {
        const res = await fetch("lang.json");
        translations = await res.json();
    } catch (err) {
        console.error("Không tải được lang.json:", err);
        translations = {};
    }
}

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || key;
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });

    // Cập nhật lại thông báo lỗi đang hiển thị (nếu có)
    const errorMessage = document.getElementById("register-error-message");
    if (errorMessage && currentErrorKey) {
        errorMessage.innerText = t(currentErrorKey);
    }

    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
}

/* ====== Chuyển tab đăng nhập / đăng ký ====== */
document.addEventListener("DOMContentLoaded", async function () {
    await loadTranslations();
    applyLanguage(currentLang);

    document.getElementById("langSelect").addEventListener("change", function () {
        applyLanguage(this.value);
    });

    const hopphai = document.querySelector(".dtdangky");
    const hoptrai = document.querySelector(".dtdangnhap");
    const linkphai = document.querySelector("#nhayphai");
    const linktrai = document.querySelector("#nhaytrai");

    function doihop() {
        hopphai.classList.toggle("andk");
        hoptrai.classList.toggle("hiendk");
    }

    linktrai.addEventListener("click", doihop);
    linkphai.addEventListener("click", doihop);
});

/* ====== Hiện / ẩn mật khẩu ====== */
function togglePasswordVisibility(toggleElement) {
    const icon = toggleElement.querySelector("i");
    const inputSelector = toggleElement.getAttribute("toggle");
    const input = document.querySelector(inputSelector);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-eye-fill");
        icon.classList.add("bi-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye-fill");
    }
}

document.querySelectorAll(".field-icon").forEach(function (element) {
    element.addEventListener("click", function () {
        togglePasswordVisibility(this);
    });
});

/* ====== Kiểm tra email ====== */
function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

/* ====== Hiển thị popup lỗi ====== */
function showError(key) {
    currentErrorKey = key;
    const errorMessage = document.getElementById("register-error-message");
    const popup = document.getElementById("register-error-popup");
    errorMessage.innerText = t(key);
    popup.style.display = "flex";
}

function hideError() {
    currentErrorKey = null;
    document.getElementById("register-error-popup").style.display = "none";
}

/* ====== Nút Đăng nhập ====== */
document.getElementById("login").addEventListener("click", function (event) {
    const username = document.getElementById("usernamedn");
    const password = document.getElementById("passworddn");

    hideError();

    if (!username.value) {
        event.preventDefault();
        showError("err_username_empty");
    } else if (!password.value) {
        event.preventDefault();
        showError("err_password_empty");
    }
});

/* ====== Nút Đăng ký ====== */
document.getElementById("register").addEventListener("click", function (event) {
    const username = document.getElementById("usernamedk");
    const password = document.getElementById("passworddk");
    const email = document.getElementById("emaildk");

    hideError();

    if (!username.value) {
        event.preventDefault();
        showError("err_username_empty");
    } else if (!password.value) {
        event.preventDefault();
        showError("err_password_empty");
    } else if (!email.value) {
        event.preventDefault();
        showError("err_email_empty");
    } else if (!isValidEmail(email.value)) {
        event.preventDefault();
        showError("err_email_invalid");
    }
});

/* ====== Đóng popup ====== */
document.getElementById("closePopupBtn").addEventListener("click", hideError);

window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("register-error-popup")) {
        hideError();
    }
});