document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form--search");
  const container = document.getElementById("container--book-list");

  setTimeout(() => {
      alert("Cerca per categoria, autore o per il titolo del libro. 🖼️");
  }, 2500);
  

  
  

  form.addEventListener("submit", async (event) => {
      event.preventDefault(); 

      const searchInput = form.querySelector('input[type="search"]');
      const searchQuery = searchInput.value.trim().toLowerCase();

      console.log("Valore di ricerca:", searchQuery); 

      if (searchQuery === "") {
        
          alert("Inserisci una categoria, un autore o un titolo per la ricerca");
          return;
      }

      // Ricerca per titolo o autore
      const searchByTitleUrl = `https://openlibrary.org/search.json?title=${searchQuery}`;
      const searchByAuthorUrl = `https://openlibrary.org/search.json?author=${searchQuery}`;

      try {
          
          let response = await fetch(searchByTitleUrl);
          let data = await response.json();

          if (!data.docs || data.docs.length === 0) {
             
              response = await fetch(searchByAuthorUrl);
              data = await response.json();

              if (!data.docs || data.docs.length === 0) {
                  container.innerHTML = "<p>Nessun libro trovato per questa ricerca.</p>";
                  return;
              }
          }

          container.innerHTML = "";

          data.docs.forEach((book) => {
              const bookCard = document.createElement("div");
              bookCard.classList.add("book-card");

              const img = document.createElement("img");
              img.src = "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"; // Placeholder
              img.alt = book.title;

              const title = document.createElement("h5");
              title.textContent = book.title;

              const authors = document.createElement("p");
              authors.textContent = book.author_name
                  ? book.author_name.join(", ")
                  : "Autore non disponibile";

              const button = document.createElement("button");
              button.textContent = "Visualizza descrizione";
              button.classList.add("btn", "btn-primary", "mt-2");
              button.addEventListener("click", () => fetchDescription(book.key));

              bookCard.appendChild(img);
              bookCard.appendChild(title);
              bookCard.appendChild(authors);
              bookCard.appendChild(button);

              container.appendChild(bookCard);
          });
      } catch (error) {
          console.error("Errore durante il recupero dei dati:", error);
          container.innerHTML = "<p>Si è verificato un errore. Riprova più tardi.</p>";
      }
  });

  async function fetchDescription(bookKey) {
      const url = `https://openlibrary.org${bookKey}.json`;

      try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error("Errore nella risposta dell'API");
          }
          const data = await response.json();

          alert(data.description ? data.description.value || data.description : "Descrizione non disponibile");
      } catch (error) {
          console.error("Errore durante il recupero della descrizione:", error);
          alert("Errore nel recupero della descrizione del libro.");
      }
  }
});
