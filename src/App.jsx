import { GlobalStyle } from "../global/globalStyle"
import { Banner } from "./components/banner/banner"
import { Header } from "./components/header/header"

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
    </>
  )
}

export default App
