import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }
      throw new Error('Servidor fora do ar');
    });
}

export default {
  getAllWithVideos,
};
