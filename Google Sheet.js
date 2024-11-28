document.getElementById('status').addEventListener('change', function() {
    var status = this.value;
    var mahasiswaInput = document.getElementById('mahasiswa-input');
    var umumInput = document.getElementById('umum-input');

    if (status === 'Mahasiswa') {
        mahasiswaInput.style.display = 'block';
        umumInput.style.display = 'none';
    } else if (status === 'Umum') {
        mahasiswaInput.style.display = 'none';
        umumInput.style.display = 'block';
    } else {
        mahasiswaInput.style.display = 'none';
        umumInput.style.display = 'none';
    }
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbxM1MijbjEWlcZnkT9lD_Yehb6FuX5R0-uuIbfBab7ATMuwWMpxJsZd-KPbwzHfMIX2yQ/exec'
const form = document.forms['Pendaftaran']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(Response => alert("Anda Telah Berhasil Mendaftar Webinar!"))
        .then(() => { window.location.reload(); })
        .catch(Error => console.error('Error', error.message))
})