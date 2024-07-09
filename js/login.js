if (typeof alert != "undefined") {
    Swal.fire({
        title: '<%= alertTitle %>',
        text: '<%= alertMessage %>',
        icon: '<%= alertIcon %>',
        showConfirmButton: ' ',
        timer: 'timer'
}).then(() => {
            window.location = '/<%= ruta %>'
        })
}