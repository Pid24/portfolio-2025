const images = [
  new URL("../assets/me-1.jpg", import.meta.url).href,
  new URL("../assets/me-2.jpeg", import.meta.url).href,
  new URL("../assets/me-3.jpeg", import.meta.url).href,
];

export default function initImageSlider() {
  const aboutImage = document.getElementById("aboutImage");
  if (!aboutImage) return;

  let currentIndex = 0;

  const currentSlide = aboutImage.querySelector(".image-slide.current");
  const nextSlide = aboutImage.querySelector(".image-slide.next");

  // Set gambar awal
  currentSlide.style.backgroundImage = `url('${images[currentIndex]}')`;

  function changeImage() {
    // Hitung index gambar berikutnya
    const nextIndex = (currentIndex + 1) % images.length;

    // Atur gambar next slide
    nextSlide.style.backgroundImage = `url('${images[nextIndex]}')`;

    // Animasi slide current ke kiri keluar
    currentSlide.classList.remove("current");
    currentSlide.classList.add("slide-out");

    // Animasi slide next masuk dari kanan
    nextSlide.classList.remove("next");
    nextSlide.classList.add("slide-in");

    // Setelah animasi selesai (1 detik), reset class dan update indeks
    setTimeout(() => {
      currentSlide.classList.remove("slide-out");
      currentSlide.style.backgroundImage = `url('${images[nextIndex]}')`;

      nextSlide.classList.remove("slide-in");
      nextSlide.classList.add("next");

      currentSlide.classList.add("current");

      currentIndex = nextIndex;
    }, 1000); // sama dengan durasi transition di CSS
  }

  setInterval(changeImage, 5000);
}
