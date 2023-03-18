import { AxiosError } from "axios";
import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import { api } from "../../api/api";

import imagemPrincipal from './assets/login.png'

import './Modais.css'

interface ModalCadastroUsuarioProps {
    aberto: boolean,
    aoFechar: () => void;
}


const ModalCadastroUsuario = ({ aberto, aoFechar }: ModalCadastroUsuarioProps) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cep, setCep] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmada, setSenhaConfirmada] = useState('')

    const aoSubmeterFormular = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            nome,
            email,
            senha,
            endereco,
            cep,
            complemento
        }

        try {
            const response = await api.post("/public/registrar", usuario);

            if (response.status === 200) {

                alert('Usuário foi cadastrado com sucesso!');

                setNome("");
                setEmail("");
                setEndereco("");
                setComplemento("");
                setCep("");
                setSenha("");
                setSenhaConfirmada("");
                aoFechar();
            }

        } catch (e) {
            if (e instanceof AxiosError) {
                alert(e.response?.data?.message ?? "Falha inesperada ao realizar o cadastro");
            }
        }


    }

    return (
        <AbModal
            titulo="Cadastrar"
            aberta={aberto}
            aoFechar={aoFechar}
        >
            <section className="corpoModalCadastro">
                <figure>
                    <img src={imagemPrincipal} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
                </figure>
                <form onSubmit={aoSubmeterFormular}>
                    <AbCampoTexto
                        label="Nome"
                        value={nome}
                        onChange={setNome}
                    />
                    <AbCampoTexto
                        label="E-mail"
                        value={email}
                        onChange={setEmail}
                        type="email"
                    />
                    <AbCampoTexto
                        label="Endereço"
                        value={endereco}
                        onChange={setEndereco}
                    />
                    <AbCampoTexto
                        label="Complemento"
                        value={complemento}
                        onChange={setComplemento}
                    />
                    <AbCampoTexto
                        label="CEP"
                        value={cep}
                        onChange={setCep}
                    />
                    <AbCampoTexto
                        label="Senha"
                        value={senha}
                        onChange={setSenha}
                        type="password"
                    />
                    <AbCampoTexto
                        label="Confirmação da senha"
                        value={senhaConfirmada}
                        onChange={setSenhaConfirmada}
                        type="password"
                    />
                    <div className="acoes">
                        <AbBotao texto="Cadastrar" />
                    </div>
                </form>
            </section>
        </AbModal>)
}

export default ModalCadastroUsuario