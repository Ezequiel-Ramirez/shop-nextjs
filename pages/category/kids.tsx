import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../../components/layauts";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

const Kids: NextPage = () => {
    const { products, isError, isLoading } = useProducts("/products?gender=kid");

    return (
        <ShopLayout
            title={"Shop-Nextjs - Kids"}
            pageDescription={"Encuentre los mejores productos Kids aqui"}
            imageFullUrl={"https://source.unsplash.com/random"}
        >
            <Typography variant="h1" component="h1">
                Tienda - Kids
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
                Productos para niños/niñas
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

export default Kids;
