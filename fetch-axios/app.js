const btnFetch=document.getElementById('btnFetch');
const btnAxios=document.getElementById('btnAxios');
const container=document.getElementById('data-container');
const titulo = document.getElementById('titulo');
const API_URL = 'https://rickandmortyapi.com/api/character';

//  FETCH

btnFetch.addEventListener('click',async()=>{
    try{
        titulo.textContent = 'Personajes Rick & Morty (Fetch)';
        const res=await fetch(API_URL);
        const data=await res.json();
        mostrarPersonajes(data.results);


    }catch(error){
        console.log('error fetch',error);
    }
});


//MOSTRAR DATOS

btnAxios.addEventListener('click', async () => {
  try {
    titulo.textContent = 'Personajes Rick & Morty (Axios)';
    const res = await axios.get(API_URL);
    mostrarPersonajes(res.data.results);
  } catch (error) {
    console.log('error en axios', error);
  }
});


//  MOSTRAR DATOS

function mostrarPersonajes(personajes){
    container.innerHTML='';

    personajes.forEach(p=> {
        const card=document.createElement('div');
        card.classList.add('card');

        card.innerHTML=`
        <img src="${p.image}"/>
        <h4>${p.name}<h4/>`

        container.appendChild(card);
        
    });
}
