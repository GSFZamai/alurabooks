import axios, { AxiosError } from "axios";
import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import { useObterToken, usePersistirToken } from "../../hooks/token";

import imagemPrincipal from './assets/login.png'

import './Modais.css'

interface LoginResponseDTO {
    access_token: string,
    user: {
        id: number,
        email: string,
        nome: string
    }
}

interface ModalLoginUsuarioProps {
    aberto: boolean,
    aoFechar: () => void;
}


const ModalCadastroUsuario = ({ aberto, aoFechar }: ModalLoginUsuarioProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const registrarToken = usePersistirToken();


    const aoSubmeterFormular = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const login = {
            email,
            senha,
        }

        try {


            const response = await axios.post<LoginResponseDTO>("http://localhost:8000/public/login", login);

            registrarToken(response.data.access_token);

            setEmail("");
            setSenha("");
            aoFechar();

        } catch (e) {
            if (e instanceof AxiosError) {
                alert(e.response?.data?.message ?? "Falha inesperada ao realizar o cadastro");
            }
        }


    }

    return (
        <AbModal
            titulo="Login"
            aberta={aberto}
            aoFechar={aoFechar}
        >
            <section className="corpoModalCadastro">
                <figure>
                    <img
                        src={imagemPrincipal}
                        alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura"
                    />
                </figure>
                <form onSubmit={aoSubmeterFormular}>
                    <AbCampoTexto
                        label="E-mail"
                        value={email}
                        onChange={setEmail}
                        type="email"
                    />

                    <AbCampoTexto
                        label="Senha"
                        value={senha}
                        onChange={setSenha}
                        type="password"
                    />
                    <div className="acoes">
                        <AbBotao texto="Fazer Login" />
                    </div>
                </form>
            </section>
        </AbModal>)
}

export default ModalCadastroUsuario