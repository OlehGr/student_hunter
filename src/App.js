import '../src/style/style.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient()


export default function App() {
  return (
      <>
          <QueryClientProvider client={queryClient}>
            <div className={"user-wrapper"}>
              <header className="header">
                    <Header />
              </header>
              <main className="main">
                    <Main />
              </main>
            </div>
            <Footer />
          </QueryClientProvider>
      </>
  );
}


