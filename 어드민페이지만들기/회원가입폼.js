function register() {
    let userid = document.getElementById("userid").value;
    let password = document.getElementById("password").value;
    let password_confirm = document.getElementById("password_confirm").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (userid === "" || password === "" || password_confirm === "" || name === "" || phone === "" || email === "" || !gender) {
        alert("모든 항목을 입력해주세요!");
        return;
    }

    if (password !== password_confirm) {
        alert("비밀번호가 일치하지 않습니다!");
        return;
    }




    document.getElementById("modal").style.display = "flex";


    window.location.href = "회원가입완료.html";

    
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
