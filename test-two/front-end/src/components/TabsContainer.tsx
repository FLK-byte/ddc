'use client'
import {Categoria, TabsContainerProps} from "@/types";
import {useState} from "react";
import {ProdutoCard} from "@/components/ProdutoCard";

export const TabsContainer = ({categorias, produtos}: TabsContainerProps) => {
    const [categoriaSelecionada, definirCategoriaSelecionada] = useState<Categoria>()

    return <div>
        <div className={"flex justify-around h-1/5 w-full"}>
            {categorias.map((cat, idx) => {
                return <div
                        key={idx}
                        onClick={() => definirCategoriaSelecionada(cat)}
                        className={"flex hover:bg-blue-500 cursor-pointer p-4 w-full justify-center"}>
                            {cat.nome}
                        </div>
            })}
        </div>
        <div className={"h-4/5 w-full p-4 flex justify-around flex-wrap overflow-y-auto"}>
            {categoriaSelecionada ?
                produtos.filter(el=>el.idCategoria === categoriaSelecionada.id).map((prod, idx)=>{
                    return <ProdutoCard produto={prod} key={idx}/>
                }) : "Selecione um categoria para visualizar os produtos"
            }
        </div>
    </div>
}
