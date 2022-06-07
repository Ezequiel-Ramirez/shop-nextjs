import { Typography } from "@mui/material";
import type { NextPage, GetServerSideProps } from "next";
import { ShopLayout } from "../../components/layauts";
import { ProductList } from "../../components/products";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";

interface Props {
    products: IProduct[];
    foundProducts: boolean;
    query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
    console.log(products)
    return (
        <ShopLayout
            title={"Shop-Nextjs - Search"}
            pageDescription={"Encuentre los mejores productos de Shop aqui"}
            imageFullUrl={"https://source.unsplash.com/random"}
        >
            <Typography variant="h1" component="h1">
                Buscar Productos:
            </Typography>

            {foundProducts ? (
                <>
                    <Typography variant="h2" component="h2" sx={{ mb: 1 }} textTransform='capitalize'>
                        {products.length} resultados para {query}.
                    </Typography>
                </>
            ) : (
                <Typography variant="h2" component="h2" sx={{ ml: 1 }} textTransform='capitalize'>
                    No se encontraron resultados para: {query}.
                </Typography>
            )}
            <ProductList products={products} />
        </ShopLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { query = "" } = params as { query: string };

    if (query.length === 0) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    let products = await dbProducts.getProductsByTerm(query);
    const foundProducts = products.length > 0;

    //retorna todos los pruductos si no encuentra ninguno
    if (!foundProducts) {
        products = await dbProducts.getAllProducts();
        console.log(products)
    }

    //retorna productos basados en coockies
    // const products = await dbProducts.getProductsByTerm('shirt');
    // const foundProducts = products.length > 0;


    return {
        props: {
            products,
            foundProducts,
            query,
        },
    };
};

export default SearchPage;
