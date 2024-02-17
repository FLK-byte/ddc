import {cartProduct} from "@/types";
import {useContext} from "react";
import {CarrinhoDeCompras} from "@/components/ComponentePai";

export const DisplayProductCart = ({prod}: {prod: cartProduct}) => {
    const {carrinhoDeProdutos, setCarrinhoDeProdutos} = useContext(CarrinhoDeCompras)
    const removerProduto = (produto: cartProduct) =>{
        const cartWithoutProduct = carrinhoDeProdutos.filter((cartProd)=>{
            return cartProd.idProduto !== produto.id
        })
        setCarrinhoDeProdutos(cartWithoutProduct)
    }
    return <div className={"p-4"}>
        <div>Nome: {prod.nome}</div>
        <div>Quantidade {prod.quantidade}</div>
        <div>Preco: {prod.preco}</div>
        <button className={"p-2 bg-red-200"} onClick={()=>removerProduto(prod)}> Remover produto</button>
    </div>
}
