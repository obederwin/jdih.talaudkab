document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    {
      title: "Peraturan Daerah",
      text: "190 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Peraturan Bupati",
      text: "410 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Keputusan Bupati",
      text: "878 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Instruksi Bupati",
      text: "16 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Rancangan Peraturan Daerah",
      text: "14 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Abstrak Peraturan Daerah",
      text: "150 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Naskah Akademis",
      text: "150 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "MOU dan PKS",
      text: "150 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Staatblad",
      text: "150 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Peraturan Desa",
      text: "150 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Peraturan Kepala Desa",
      text: "150 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Surat Keputusan Kepala Desa",
      text: "150 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Surat Edaran Bupati",
      text: "150 Dokumen",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Surat Edaran Sekda",
      text: "150 Dokumen",
      img: "https://via.placeholder.com/150",
    },
  ];

  const carouselContent = document.getElementById("carouselContent");
  const cardsPerSlide = 4;
  let currentIndex = 0;

  function createSlide(cardIndices) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (currentIndex === 0) carouselItem.classList.add("active");

    const cardGroup = document.createElement("div");
    cardGroup.classList.add("card-group");

    cardIndices.forEach((index) => {
      const card = cards[index];
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      const imgElement = document.createElement("img");
      imgElement.src = card.img;
      imgElement.classList.add("card-img-left"); // Updated class
      imgElement.alt = card.title;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = card.title;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = card.text;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardElement.appendChild(imgElement);
      cardElement.appendChild(cardBody);
      cardGroup.appendChild(cardElement);
    });

    carouselItem.appendChild(cardGroup);
    return carouselItem;
  }

  function generateCarouselSlides() {
    for (let i = 0; i < cards.length; i++) {
      const cardIndices = [];
      for (let j = 0; j < cardsPerSlide; j++) {
        cardIndices.push((i + j) % cards.length);
      }
      const slide = createSlide(cardIndices);
      carouselContent.appendChild(slide);
    }
  }

  generateCarouselSlides();
});
