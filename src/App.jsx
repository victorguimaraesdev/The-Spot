import { GlobalStyle } from "../global/globalStyle"
import { About } from "./components/about/about"
import { Banner } from "./components/banner/banner"
import { Contato } from "./components/contato/contato"
import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { Localizacao } from "./components/Localizacao/Localizacao"
import {Seguranca} from "./components/seguranca/seguranca"
import { Vantagem } from "./components/vantagem/vantagem"


function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <About />
      <Vantagem />
      <Seguranca />
      <Localizacao />
      <Contato />
      <Footer />
    </>
  )
}

export default App
