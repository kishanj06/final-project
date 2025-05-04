document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".book-card, .movie-card");
  
    cards.forEach(card => {
      card.addEventListener("click", function () {
        cards.forEach(c => c.classList.remove("favorite"));
        card.classList.add("favorite");
      });
    });
  });
  
  