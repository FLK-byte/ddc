import {useContext, useMemo} from "react";
import {CarrinhoDeCompras} from "@/components/ComponentePai";
import {cartProduct, ModalCartProps} from "@/types";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {currencyFormater} from "@/utils";
import {DisplayProductCart} from "@/components/modalCart/displayProductCart";

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
                        return <DisplayProductCart prod={prod} key={idx}/>
                    })}
                    <div className={"flex justify-around p-4 items-center"}>
                        <button onClick={toggleModal} className={"p-2 bg-red-200 rounded"}>Fechar carrinho</button>
                        <span>Preco total: {currencyFormater(totalPrice)}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}
