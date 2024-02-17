import {useContext, useMemo} from "react";
import {CarrinhoDeCompras} from "@/components/ComponentePai";
import {ModalCartProps, Produto} from "@/types";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {currencyFormater} from "@/utils";

interface cartProduct extends Produto {
    quantidade: number
}
export const ModalCart = ({toggleModal, open, Produtos}: ModalCartProps) => {
    const {carrinhoDeProdutos, setCarrinhoDeProdutos} = useContext(CarrinhoDeCompras)

    const [animationParent] = useAutoAnimate()

    const productsOnTheCart = Produtos.filter((el: cartProduct)=>{
        const productOnCart = carrinhoDeProdutos.filter((cartProd)=>{return cartProd.idProduto === el.id})[0]
        if (productOnCart) {
            el.quantidade = productOnCart.quantidade
            return el
        }
    })

    const removerProduto = (produto: cartProduct) =>{
        const cartWithoutProduct = carrinhoDeProdutos.filter((cartProd)=>{
            return cartProd.idProduto !== produto.id
        })
        setCarrinhoDeProdutos(cartWithoutProduct)
    }

    const totalPrice = useMemo(()=>{
        let totalPrice = 0
        productsOnTheCart.map(({quantidade, preco}: cartProduct)=> totalPrice+=(quantidade*preco))

        return totalPrice
    }, [productsOnTheCart])

    return (
        open && <div className={"w-full h-full absolute bg-transparent top-0 flex justify-center items-center"}>
            <div className={"w-1/4 h-3/4 bg-orange-100 rounded"}>
                <div className={"h-full overflow-y-auto"} ref={animationParent}>
                    {productsOnTheCart.map((prod: cartProduct, idx)=>{
                        return <div className={"p-4"} key={idx}>
                            <div>Nome: {prod.nome}</div>
                            <div>Quantidade {prod.quantidade}</div>
                            <div>Preco: {prod.preco}</div>
                            <button className={"p-2 bg-red-200"} onClick={()=>removerProduto(prod)}> Remover produto</button>
                        </div>
                    })}
                    <div className={"flex justify-around p-4"}>
                        <button onClick={toggleModal} className={"p-2 bg-red-200 rounded"}>Fechar carrinho</button>
                        <span>Preco total: {currencyFormater(totalPrice)}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}
