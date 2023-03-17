import { AbBotao } from "ds-alurabooks";

import "./Pedido.css";

interface PedidoProps {
    numeroPedido: number,
    dataPedido: string,
    valorPedido: number,
    dataEntrega: string
    excluirPedido: () => void;
}

export function Pedido({ numeroPedido, dataPedido, valorPedido, dataEntrega, excluirPedido }: PedidoProps) {

    function formatToMoney(value: number): string {
        return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    }

    function formatDateString(value: string): string {
        return new Date(value).toLocaleDateString("pt-BR");
    }

    return (
        <div className="container-pedido">
            <ul>
                <li>Pedido: <strong>{numeroPedido}</strong></li>
                <li>Data do pedido: <strong>{formatDateString(dataPedido)}</strong></li>
                <li>Valor total: <strong>{formatToMoney(valorPedido)}</strong></li>
                <li>Entrega realizada em: <strong>{formatDateString(dataEntrega)}</strong></li>
            </ul>
            <div className="container-botoes">
                <AbBotao texto="Detalhes" />
                <AbBotao texto="Excluir" tipo="secundario" onClick={excluirPedido}/>
            </div>
        </div>
    )
}