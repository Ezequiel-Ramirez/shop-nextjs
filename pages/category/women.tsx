import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../../components/layauts";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

const Women: NextPage = () => {
    const { products, isError, isLoading } = useProducts("/products?gender=women");

    return (
        <ShopLayout
            title={"Shop-Nextjs - Kids"}
            pageDescription={"Encuentre los mejores productos Mujer aqui"}
            imageFullUrl={"https://source.unsplash.com/random"}
        >
            <Typography variant="h1" component="h1">
                Tienda - Mujer
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
                Productos para ellas
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

export default Women;
