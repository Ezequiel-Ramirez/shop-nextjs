import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../../components/layauts";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

const Men: NextPage = () => {
    const { products, isError, isLoading } = useProducts("/products?gender=men");

    return (
        <ShopLayout
            title={"Shop-Nextjs - Men"}
            pageDescription={"Encuentre los mejores productos Hombre aqui"}
            imageFullUrl={"https://source.unsplash.com/random"}
        >
            <Typography variant="h1" component="h1">
                Tienda - Hombre
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
                Productos para ellos
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

export default Men;
