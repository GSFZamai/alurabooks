import React from "react";
import { Pedido } from "./Pedido";

import "./ListaPedidos.css";

export function ListaPedidos() {
    return (
        <main className="container-lista-pedidos">
            <h2 >Pedidos</h2>
            <Pedido
                numeroPedido={89019041}
                dataPedido="26/05/2022"
                valorPedido={48}
                dataEntrega="30/05/2022"
            />
            <Pedido
                numeroPedido={89019040}
                dataPedido="24/03/2022"
                valorPedido={65.66}
                dataEntrega="30/03/2022"
            />
        </main>
    )
}