const urlParams = new URLSearchParams(window.location.search);
const album = urlParams.get('album');
let index = 1;
const maxPhotos = 80; // o ajusta según cuántas fotos tiene cada álbum
const photo = document.getElementById('photo');

function updatePhoto() {
  photo.src = `albums/${album}/${index}.jpg`;
}

document.getElementById('prev').onclick = () => {
  if (index > 1) {
    index--;
    updatePhoto();
  }
};

document.getElementById('next').onclick = () => {
  if (index < maxPhotos) {
    index++;
    updatePhoto();
  }
};

updatePhoto();
