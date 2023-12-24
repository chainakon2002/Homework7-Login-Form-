const loginForm = document.querySelector(".login-form");

const userPass = [
    ['Chainakon', 'Film.02']
]

const changeColor = (selector) => {
    const el = document.querySelector(selector);
    console.log(el)
    if (el) {
        el.style.border = '1px solid red';
        el.style.bordercolor = 'red';
    }
}

const validateInput = (inobj) => {
    console.log(inobj);
    const username = inobj.username;
    const password = inobj.password;
    const role = inobj.role;


    if (username.includes(' ') || password.includes(' ') || role.includes(' ')) {
        alert('กรุณากรอกข้อมูล');
        return false;
    }

    const Use_name = username.trim();
    if (Use_name <=3 || Use_name.includes(' ')) {
        alert('กรุณากรอกusernameให้มีความยาวมากกว่า 3 ตัวอักษร');
        changeColor('#username');
        return false;
    }
    if ((password.length) <4 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        alert('กรุณากรอกPasswordให้มีความยาวมากกว่า 4 ตัว และต้องมีทั้งตัวเลขและตัวอักษร');
        changeColor('#password');
        return false;
    }

    if (role === '') {
        alert('กรุณาระบุลักษณะ');
        changeColor('#role');
        return false;
    }

    puraCheckUseLog(username, password);
    return true
};

const puraCheckUseLog = (username, password) => {
    console.log(username);
    console.log(password);

    let foundItem = userPass.find(([user, pass]) => user === username && pass === password);

    if (foundItem) {
        alert('login Succes');
        window.location.assign('https://www.example.com');
    } else {
        alert('ไม่พบชื่อผู้ใช้');
    }
}

const hdlLogin = (e) => {
    e.preventDefault();
    let inobj = {};
    for (let el of loginForm.elements) {
        inobj[el.id] = el.value;
    }
    validateInput(inobj);
};

loginForm.addEventListener("submit", hdlLogin);



document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");

    const fadeInForm = () => {
        loginForm.classList.add("show");
    };

    // Set a delay before applying the "show" class
    setTimeout(fadeInForm, 300);
});