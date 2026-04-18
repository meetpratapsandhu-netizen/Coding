async function searchMovie() {
  const movie = document.getElementById("movieInput").value.trim();
  const apiKey = "982c98c5";

  const response = await fetch(
    `https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`
  );

  const data = await response.json();

  const result = document.getElementById("result");
  result.innerHTML = "";

  if (data.Response === "False") {
    result.innerHTML = "Movie not found 😢";
    return;
  }

  result.innerHTML = `
    <h2>${data.Title}</h2>
    <p>Year: ${data.Year}</p>
    <p>IMDB Rating: ${data.imdbRating}</p>
    <img src="${data.Poster}" width="200"/>
  `;
}