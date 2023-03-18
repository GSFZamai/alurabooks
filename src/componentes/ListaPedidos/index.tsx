import React, { useEffect, useState } from "react";
import { Pedido } from "./Pedido";

import "./ListaPedidos.css";
import { IPedido } from "../../interfaces/IPedido";
import { api } from "../../api/api";

export function ListaPedidos() {
    const token = sessionStorage.getItem("token");
    const [listaPedidos, setListaPedidos] = useState<IPedido[]>([]);

    function excluirPedido(idPedido: number) {
        api.delete(`/pedidos/${idPedido}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res);
                setListaPedidos(listaPedidos.filter(pedido => pedido.id != idPedido))
            }
            )
            .catch(err => console.log(err))


    }

    function buscaPedidos() {
        api.get<IPedido[]>("/pedidos", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            setListaPedidos(response.data)
        }).catch(e => console.log(e))
    }


    useEffect(() => {
        buscaPedidos();
    }, []);

    return (
        <main className="container-lista-pedidos">
            <h2 >Pedidos</h2>
            {
                listaPedidos.map(pedido => {
                    return (
                        <Pedido
                            key={pedido.id}
                            excluirPedido={() => excluirPedido(pedido.id)}
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