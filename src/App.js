import '../src/style/style.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
      <>
        <div className={"user-wrapper"}>
          <header className="header">
                <Header />
          </header>
          <main className="main">
                <Main />
          </main>
        </div>
        <Footer />
      </>
  );
}


