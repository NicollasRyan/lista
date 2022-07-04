import './styles.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <div className="Home">
      <Header />

    <hr />

      <section className="conatainer">
        <p className="here">Aqui você vai ver meu filmes e séries favoritos.</p>

        <p className="scored">As mais que me marcaram a minha vida e as melhores que eu vi na na minha vida</p>

        <img src="https://i.ytimg.com/vi/eJWE26KvE94/maxresdefault.jpg" alt="" />
      </section>

      <Footer />
    </div>
  );
}

