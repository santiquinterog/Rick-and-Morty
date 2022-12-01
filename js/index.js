function mostrarPersonajes() {
  /* URL del API */
  const API_URL = "https://rickandmortyapi.com/api/character";

  /* Ocultar botón */
  document.getElementById("botonMostrarPersonajes").classList.add("ocultar");

  fetch(API_URL, { method: "GET" })
  .then((response) => response.json())
  .then((jsonResponse) => {
    const containerCards = document.getElementById("container-cards");
    /* const imgCharacters = ["https://media.vandal.net/i/1200x630/9-2022/202292910312533_1.jpg", "https://pbs.twimg.com/media/FUqYS8jXoAAWSf9.jpg"]
    
    for (let index = 0; index < imgCharacters.length; index++) {
      jsonResponse.results[index].name = imgCharacters[index]
    } */

    const template = jsonResponse.results.map((character)=>{

      
      return (`
        <div class="card card-element">
          <img src="${character.image}" class="card-img-top" alt="${character.name}">
          <div class="card-body">
            <h5 class="card-title">Nombre: ${character.name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Especie: ${character.species} </li>
            <li class="list-group-item">Género: ${character.gender}</li>
            <li class="list-group-item">Status: ${character.status}</li>
          </ul>
          <div class="card-body">
            <a href="${character.url}" target="_blank" class="card-link">Ver más información</a>
          </div>
        </div>
      `)
    })

    for (let index = 0; index < template.length; index++) {
      
      containerCards.innerHTML += template[index];
    }
    
    
  })

}

