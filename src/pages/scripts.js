import axios from "axios";

const button = document.getElementById("button");

button.addEventListener('click', () => {
  axios({
    method: "GET",
    url: 'https://pokeapi.co/api/v2/pokemon/ditto'
  }).then(res => {
    console.log('MIS DATOS'+res);
  })
})
