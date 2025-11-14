import { GlobalStyle } from "../global/globalStyle"
import { About } from "./components/about/about"
import { Banner } from "./components/banner/banner"
import { Header } from "./components/header/header"
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
    </>
  )
}

export default App
