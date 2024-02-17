import {ProdutoCardProps} from "@/types";
import {useContext} from "react";
import {CarrinhoDeCompras} from "@/components/ComponentePai";
import {currencyFormater} from "@/utils";
import {toast} from "react-toastify";


export const ProdutoCard = ({produto}: ProdutoCardProps) => {

    const { carrinhoDeProdutos, setCarrinhoDeProdutos } = useContext(CarrinhoDeCompras)

    const insertProductOnCart = () => {
        if(carrinhoDeProdutos
            .filter((el, idx)=>(el.idProduto === produto.id))
            .length > 0
        ) return toast("Esse produto ja esta no carrinho, caso queira incrementa-lo abra o carrinho de compras", {type: "info"})

        setCarrinhoDeProdutos([...carrinhoDeProdutos, {idProduto: produto.id, quantidade: 1, preco: produto.preco}])
        toast("Produto adicionado ao carrinho", {type: "success"})
    }

    return <div className={"w-1/6 border p-2"}>
        <div>Nome Do Produto: {produto.nome}</div>
        <div>Preco do produto: {currencyFormater(produto.preco)}</div>
        <div>Descricao do produto: {produto.descricao}</div>
        <button className={"bg-green-500 p-4 w-full rounded"} onClick={insertProductOnCart}>Adicionar produto ao carrinho</button>
    </div>
}
