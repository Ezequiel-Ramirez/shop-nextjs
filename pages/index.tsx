import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layauts";
import { ProductList } from "../components/products";
import { useProducts } from "../hooks";

const Home: NextPage = () => {
    const { products, isError, isLoading } = useProducts("/products");

    return (
        <ShopLayout
            title={"Shop-Nextjs - Home"}
            pageDescription={"Encuentre los mejores productos de Shop aqui"}
            imageFullUrl={"https://source.unsplash.com/random"}
        >
            <Typography variant="h1" component="h1">
                Tienda
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
                Todos los productos
            </Typography>
            {isLoading ? (
                <Typography variant="h3" component="h3">
                    Cargando...
                </Typography>
            ) : (
                <ProductList products={products} />
            )}
        </ShopLayout>
    );
};

export default Home;
