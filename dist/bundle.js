/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Index.js":
/*!*********************!*\
  !*** ./js/Index.js ***!
  \*********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  const form = document.getElementById(\"form--search\");\r\n  const container = document.getElementById(\"container--book-list\");\r\n\r\n  setTimeout(() => {\r\n      alert(\"Cerca per categoria, autore o per il titolo del libro. 🖼️\");\r\n  }, 2500);\r\n  \r\n\r\n  \r\n  \r\n\r\n  form.addEventListener(\"submit\", async (event) => {\r\n      event.preventDefault(); \r\n\r\n      const searchInput = form.querySelector('input[type=\"search\"]');\r\n      const searchQuery = searchInput.value.trim().toLowerCase();\r\n\r\n      console.log(\"Valore di ricerca:\", searchQuery); \r\n\r\n      if (searchQuery === \"\") {\r\n        \r\n          alert(\"Inserisci una categoria, un autore o un titolo per la ricerca\");\r\n          return;\r\n      }\r\n\r\n      // Ricerca per titolo o autore\r\n      const searchByTitleUrl = `https://openlibrary.org/search.json?title=${searchQuery}`;\r\n      const searchByAuthorUrl = `https://openlibrary.org/search.json?author=${searchQuery}`;\r\n\r\n      try {\r\n          \r\n          let response = await fetch(searchByTitleUrl);\r\n          let data = await response.json();\r\n\r\n          if (!data.docs || data.docs.length === 0) {\r\n             \r\n              response = await fetch(searchByAuthorUrl);\r\n              data = await response.json();\r\n\r\n              if (!data.docs || data.docs.length === 0) {\r\n                  container.innerHTML = \"<p>Nessun libro trovato per questa ricerca.</p>\";\r\n                  return;\r\n              }\r\n          }\r\n\r\n          container.innerHTML = \"\";\r\n\r\n          data.docs.forEach((book) => {\r\n              const bookCard = document.createElement(\"div\");\r\n              bookCard.classList.add(\"book-card\");\r\n\r\n              const img = document.createElement(\"img\");\r\n              img.src = \"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\"; // Placeholder\r\n              img.alt = book.title;\r\n\r\n              const title = document.createElement(\"h5\");\r\n              title.textContent = book.title;\r\n\r\n              const authors = document.createElement(\"p\");\r\n              authors.textContent = book.author_name\r\n                  ? book.author_name.join(\", \")\r\n                  : \"Autore non disponibile\";\r\n\r\n              const button = document.createElement(\"button\");\r\n              button.textContent = \"Visualizza descrizione\";\r\n              button.classList.add(\"btn\", \"btn-primary\", \"mt-2\");\r\n              button.addEventListener(\"click\", () => fetchDescription(book.key));\r\n\r\n              bookCard.appendChild(img);\r\n              bookCard.appendChild(title);\r\n              bookCard.appendChild(authors);\r\n              bookCard.appendChild(button);\r\n\r\n              container.appendChild(bookCard);\r\n          });\r\n      } catch (error) {\r\n          console.error(\"Errore durante il recupero dei dati:\", error);\r\n          container.innerHTML = \"<p>Si è verificato un errore. Riprova più tardi.</p>\";\r\n      }\r\n  });\r\n\r\n  async function fetchDescription(bookKey) {\r\n      const url = `https://openlibrary.org${bookKey}.json`;\r\n\r\n      try {\r\n          const response = await fetch(url);\r\n          if (!response.ok) {\r\n              throw new Error(\"Errore nella risposta dell'API\");\r\n          }\r\n          const data = await response.json();\r\n\r\n          alert(data.description ? data.description.value || data.description : \"Descrizione non disponibile\");\r\n      } catch (error) {\r\n          console.error(\"Errore durante il recupero della descrizione:\", error);\r\n          alert(\"Errore nel recupero della descrizione del libro.\");\r\n      }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://libreria/./js/Index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/Index.js"]();
/******/ 	
/******/ })()
;