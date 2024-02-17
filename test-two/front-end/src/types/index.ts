export type Categoria = {
    id: number;
    nome: string;
};

export type Produto = {
    id: number;
    idCategoria: number;
    nome: string;
    preco: number;
    descricao: string;
};

export type ItemCarrinho = {
    idProduto: number;
    quantidade: number;
};

export type ProdutoCardProps = {
    produto: Produto
}

export type ModalCartProps = {
    toggleModal: ()=>void;
    open: Boolean;
    Produtos: Produto[]

}

export type TabsContainerProps = {
    categorias: Categoria[]
    produtos: Produto[]
}

export type Estado = {
    produtos: Produto[];
    categorias: Categoria[];
    carrinhoDeProdutos: ItemCarrinho[];
};
