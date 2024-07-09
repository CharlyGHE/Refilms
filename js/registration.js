document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(event.target.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
    } catch (error) {
        console.error('Error:', error);
    }
});

if (response.ok) {
    Swal.fire({
        alert: true,
        alertTitle: "Registro",
        alertMessage: "Registro Exitoso!",
        alertIcon: 'success',
        showConfirmButton: false,
        timer: 1500,
    }).then(() => {
        window.location = 'https://refilm.netlify.app/login>'
    })
} else {
    alert('Error: ' + result.message);
    console.log(result);
}