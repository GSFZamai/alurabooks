
import { Link, NavLink, Outlet } from "react-router-dom"
import "./MinhaConta.css"

export function MinhaConta() {

    return (
        <section className="container">
            <aside>
                <nav className="menu-lateral">
                    <NavLink to="pedidos" className={({isActive}) => isActive ? "links-menu-lateral active" : "links-menu-lateral"}>
                        Pedidos
                    </NavLink>
                    <NavLink to="trocas" className={(isActive) => isActive ? "links-menu-lateral active" : "links-menu-lateral"}>
                        Trocas
                    </NavLink>
                    <NavLink to="#" className={(isActive) => isActive ? "links-menu-lateral active" : "links-menu-lateral"}>
                        Cupons
                    </NavLink>
                    <NavLink to="#" className={(isActive) => isActive ? "links-menu-lateral active" : "links-menu-lateral"}>
                        Seus dados
                    </NavLink>
                </nav>
            </aside>
            <Outlet />
        </section>
    )
}