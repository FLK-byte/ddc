'use client'
import React, { useState, createContext } from 'react';
import {Categoria, ItemCarrinho, Produto} from "@/types";
import {TabsContainer} from "@/components/TabsContainer";
import {ModalCart} from "@/components/modalCart/modalCart";
import { FaShoppingCart } from "react-icons/fa";
export const CarrinhoDeCompras = createContext<{
    carrinhoDeProdutos: ItemCarrinho[],
    setCarrinhoDeProdutos
}>({
    carrinhoDeProdutos: [],
    setCarrinhoDeProdutos: (value: (((prevState: ItemCarrinho[]) => ItemCarrinho[]) | ItemCarrinho[])) => {}
})
export const ComponentePai: React.FC = () => {
    // Estados mockados
    const [categorias, setCategorias] = useState<Categoria[]>([
        { id: 1, nome: 'Eletrônicos' },
        { id: 2, nome: 'Livros' },
        { id: 3, nome: 'Casa' },
        // Adicione mais categorias conforme necessário
    ]);

    const [produtos, setProdutos] = useState<Produto[]>([
        { id: 1, idCategoria: 1, nome: 'Notebook', preco: 3000, descricao: 'Notebook XYZ, tela 15 polegadas' },
        { id: 11, idCategoria: 1, nome: 'Notebook', preco: 3001, descricao: 'Notebook XYZ, tela 14 polegadas' },
        { id: 111, idCategoria: 1, nome: 'Notebook', preco: 30011, descricao: 'Notebook XYZ, tela 13 polegadas' },
        { id: 2, idCategoria: 2, nome: 'Livro de TypeScript', preco: 120, descricao: 'Aprenda TypeScript do básico ao avançado' },
        { id: 3, idCategoria: 3, nome: 'Cadeira Gamer', preco: 1500, descricao: 'Cadeira gamer confortável' },
        // Adicione mais produtos conforme necessário
    ]);

    const [carrinhoDeProdutos, setCarrinhoDeProdutos] = useState<ItemCarrinho[]>([]);

    // Renderização e lógica adicionais aqui

    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false)

    return (
        <div>
            <CarrinhoDeCompras.Provider value={{carrinhoDeProdutos, setCarrinhoDeProdutos}}>
                <TabsContainer categorias={categorias} produtos={produtos}/>
                <ModalCart toggleModal={()=>setIsModalOpen(!isModalOpen)} open={isModalOpen} Produtos={produtos}/>
                <div className={"absolute bottom-0 right-0 p-4 flex justify-center items-center flex-col cursor-pointer"}>
                    <FaShoppingCart size={70} onClick={()=>setIsModalOpen(!isModalOpen)}/>
                    <div className={"text-red-700 relative top-[-55px] left-[7px] max-w-min cursor-pointer"}>
                        {carrinhoDeProdutos.length}
                    </div>
                </div>
            </CarrinhoDeCompras.Provider>
        </div>
    );
};

