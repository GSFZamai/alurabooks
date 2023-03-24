import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useObterToken, useApagarToken } from "../../hooks/token"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../Modais/ModalCadastroUsuario"
import ModalLoginUsuario from "../Modais/ModalLoginUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'

const BarraNavegacao = () => {
    const [modalCadastro, setModalCadastro] = useState(false);
    const [modalLogin, setModalLogin] = useState(false);
    const token = useObterToken();
    const limparToken = useApagarToken;
    const navigate = useNavigate();

    function handleLogout() {
        limparToken();
        
        navigate("/")
    }

    return (
        <nav className="ab-navbar">
            <h1 className="logo">
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo da AluraBooks" />
                </Link>
            </h1>
            <ul className="navegacao">
                <li>
                    <a href="#!">Categorias</a>
                    <ul className="submenu">
                        <li>
                            <Link to="/">
                                Frontend
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Programação
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Infraestrutura
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Business
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Design e UX
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="acoes">

                {
                    token ?
                        <>
                            <li>
                                <Link
                                    to="/minha-conta/pedidos"
                                >
                                    Minha conta
                                </Link>
                            </li>
                            <li>
                                <BotaoNavegacao
                                    onClick={handleLogout}
                                    texto="Logout"
                                    textoAltSrc="Icone representando um usuário"
                                    imagemSrc={usuario}
                                />
                                <ModalLoginUsuario aberto={modalLogin} aoFechar={() => setModalLogin(false)} />
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <BotaoNavegacao
                                    onClick={() => setModalLogin(true)}
                                    texto="Login"
                                    textoAltSrc="Icone representando um usuário"
                                    imagemSrc={usuario}
                                />
                                <ModalLoginUsuario aberto={modalLogin} aoFechar={() => setModalLogin(false)} />
                            </li>
                            <li>
                                <BotaoNavegacao
                                    onClick={() => setModalCadastro(true)}
                                    texto="Cadastrar-se"
                                    textoAltSrc="Icone representando um usuário"
                                    imagemSrc={usuario}
                                />
                                <ModalCadastroUsuario aberto={modalCadastro} aoFechar={() => setModalCadastro(false)} />
                            </li>
                        </>
                }
            </ul>
        </nav>)
}

export default BarraNavegacao