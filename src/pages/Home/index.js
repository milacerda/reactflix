import React, { useEffect } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categorias) => {
        console.log(categorias);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div>
      <PageDefault>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="O que é front-end? Trabalhando na área"
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        />
      </PageDefault>
    </div>
  );
}

export default Home;
