import React, { useEffect, useState } from "react";
import { Pedido } from "./Pedido";

import "./ListaPedidos.css";
import axios from "axios";
import { IPedido } from "../../interfaces/IPedido";

export function ListaPedidos() {
    const token = sessionStorage.getItem("token");
    const [listaPedidos, setListaPedidos] = useState<IPedido[]>([]);

    useEffect(() => {
        axios.get<IPedido[]>("http://localhost:8000/pedidos", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            setListaPedidos(response.data)
        }).catch(e => console.log(e))

    }, []);

    return (
        <main className="container-lista-pedidos">
            <h2 >Pedidos</h2>
            {
                listaPedidos.map(pedido => {
                    return (
                        <Pedido
                            key={pedido.id}
                            numeroPedido={pedido.id}
                            dataPedido={pedido.data}
                            valorPedido={pedido.total}
                            dataEntrega={pedido.data}
                        />
                    )
                })
            }
        </main>
    )
}