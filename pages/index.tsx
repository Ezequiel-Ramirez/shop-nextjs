import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layauts";
import { ProductList } from "../components/products";
import { initialData } from "../database/products";

const Home: NextPage = () => {
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
            <ProductList products={initialData.products as any} />
        </ShopLayout>
    );
};

export default Home;
