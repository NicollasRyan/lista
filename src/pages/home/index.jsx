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

        <img src="https://64.media.tumblr.com/e5b9277b238c9ad00a0a33f231290bdd/c1b22cfab0db44b9-1d/s500x750/f34ddac7bb0817a56f96dc949e1276a84b520146.jpg" alt="" />
      </section>

    <hr />

      <Footer />
    </div>
  );
}

