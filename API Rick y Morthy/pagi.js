const alive = "puntoVerde.png";
const dead = "puntoRojo.webp";
const unknown = "puntoNaranja.png"

const apiRick = async (pagina, filtro) => {
  let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
  if (filtro) {
    url += "&name=" + filtro;
  }

  const api = await fetch(url);
  const data = await api.json();

  divTodas = document.querySelector("#resultado");
  divTodas.innerHTML = "";

  let condition;
  data.results.map(item => {
      divItem = document.createElement("div");
      if(item.status === "Alive"){
        condition=alive
      }else if(item.status === "Dead"){
        condition=dead
      }else{
        condition=unknown
      }

    
    /*let condition = item.status === "Alive" ? alive: dead;*/


    divItem.innerHTML = `
      <article>
        <div class="image-container">
          <img src="${item.image}" alt="Personaje">
        </div>
        <div class="description">
          <h2>${item.name}</h2>
          <span>${item.status}</span>
          <img id="imagen" src="${condition}" alt="">
          <h3>${item.species}</h3>
          <p>${item.gender}</p>
          
        </div>
      </article>
    `;
    divTodas.appendChild(divItem);
  });
};

apiRick(1);

const buscarPersonajes = () => {
  const nombre = document.querySelector("#nombrePersonaje").value;
  apiRick(1, nombre);
};
