import { AbBotao } from "ds-alurabooks";

import "./Pedido.css";

interface PedidoProps {
    numeroPedido: number,
    dataPedido: string,
    valorPedido: number,
    dataEntrega: string
}

export function Pedido({ numeroPedido, dataPedido, valorPedido, dataEntrega }: PedidoProps) {
    return (
        <div className="container-pedido">
            <ul>
                <li>Pedido: <strong>{numeroPedido}</strong></li>
                <li>Data do pedido: <strong>{dataPedido}</strong></li>
                <li>Valor total: <strong>{valorPedido.toLocaleString("pt-BR", { currency: "BRL", style: "currency" })}</strong></li>
                <li>Entrega realizada em: <strong>{dataEntrega}</strong></li>
            </ul>
            <AbBotao texto="Detalhes" />
        </div>
    )
}