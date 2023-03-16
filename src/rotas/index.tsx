import { Route, Routes } from "react-router-dom"
import { ListaPedidos } from "../componentes/ListaPedidos"
import Home from "../paginas/Home"
import { MinhaConta } from "../paginas/MinhaConta"
import PaginaBase from "../paginas/PaginaBase"


const Rotas = () => {
  return (<Routes>
    <Route path='/' element={<PaginaBase />}>
      <Route path='/' element={<Home />} />
      <Route path='/minha-conta' element={<MinhaConta />}>
        <Route path='pedidos' element={<ListaPedidos />} />
        <Route path='trocas' element={<></>} />
      </Route>
      </Route>
  </Routes>)
}

export default Rotas