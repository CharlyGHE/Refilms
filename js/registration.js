document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch("https://refilms-be.onrender.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            first_name: e.target.children.firstname.value,
            last_name: e.target.children.lastname.value,
            email: e.target.children.email.value,
            username: e.target.children.username.value,
            password: e.target.children.password.value
        })
    });

    if (!res.ok) {
        Swal.fire({
            alert: true,
            title: "Registro",
            text: "Se produjo un error",
            icon: 'error',
            showConfirmButton: true,
        })
    } else {
        Swal.fire({
            alert: true,
            title: "Registro",
            text: "Registro Exitoso!",
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
        }).then(() => {
            window.location = 'https://refilm.netlify.app/login'
        })
    }

    //if (!res.ok) return mensajeError.classList.toggle("escondido", false);
    //const resJson = await res.json();
    //if (resJson.redirect) {
    //    window.location.href = resJson.redirect;
    //}
})