import { Button, Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
    NextPage,
    GetServerSideProps,
    GetStaticPaths,
    GetStaticProps,
} from "next";
import React, { useState } from "react";
import { ShopLayout } from "../../components/layauts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { dbProducts } from "../../database";
import { ICartProduct, IProduct, ISize } from "../../interfaces";

interface Props {
    product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
    const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
        _id: product._id,
        image: product.images[0],
        price: product.price,
        size: undefined,
        slug: product.slug,
        title: product.title,
        gender: product.gender,
        quantity: 1,
    });

    const selectedSize = (size: ISize) => {
        setTempCartProduct((currentProduct) => ({
            ...currentProduct,
            size,
        }));
    };

    return (
        <ShopLayout
            title={product.title}
            pageDescription={product.description}
            imageFullUrl={""}
        >
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    {/* slideshow */}
                    <ProductSlideshow images={product.images} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box display="flex" flexDirection="column">
                        {/* titulos */}
                        <Typography variant="h1" component="h1">
                            {product.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="h2"
                        >{`$${product.price}`}</Typography>
                        {/* cantidad */}
                        <Box sx={{ my: 2 }}>
                            <Typography variant="subtitle2">
                                Cantidad
                            </Typography>
                            {/* itemcounter */}
                            <ItemCounter />
                            <SizeSelector
                                //selectedSize={product.sizes[0]}
                                sizes={product.sizes}
                                selectedSize={tempCartProduct.size}
                                onSelectedSize={selectedSize}
                            />
                        </Box>
                        {/* agregar al carrito */}
                        {product.inStock > 0 ? (
                            <Button color="secondary" className="circular-btn">
                                {tempCartProduct.size
                                    ? "Agregar al carrito"
                                    : "Seleccione un talle"}
                            </Button>
                        ) : (
                            <Chip
                                color="error"
                                label="No hay stock"
                                variant="outlined"
                            />
                        )}
                        {/* <Chip label='No hay disponibles' color='error' variant="outlined" /> */}
                        {/* descripción */}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant="subtitle2">
                                Descripción
                            </Typography>
                            <Typography variant="body2">
                                {product.description}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

//getServerSideProps normalmente es una función que se ejecuta en el servidor
/* export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const {slug = ''} = params as {slug:string};
    const product = await dbProducts.getProductBySlug(slug);

    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
    return {
        props: {
            product,
        },
    };
}; */

//Ahora mejor usar getStaticPaths para obtener los productos y sus slugs y te genera las paginas de forma estatica en el build
//getStaticPaths
export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const productsSlugs = await dbProducts.getAllProductSlugs();
    return {
        paths: productsSlugs.map((obj) => ({
            params: {
                slug: obj.slug,
            },
        })),
        fallback: "blocking",
    };
};

//getStaticProps para obtener los productos y sus slugs y te genera las paginas de forma estatica en el build en caso de que no exista el producto
//getStaticProps

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug = "" } = params as { slug: string };
    const product = await dbProducts.getProductBySlug(slug);

    if (!product) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return {
        props: {
            product,
        },
        revalidate: 60 * 60 * 24,
    };
};

export default ProductPage;
