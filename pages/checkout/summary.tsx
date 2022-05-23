import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,
    Link,
} from "@mui/material";
import React from "react";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layauts";
import NextLink from "next/link";

const SummaryPage = () => {
    return (
        <ShopLayout
            title="Resumen de orden"
            pageDescription={"Resumen de la orden"}
            imageFullUrl=""
        >
            <Typography variant="h1" component="h1">
                Resumen de la orden
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    {/* cart summary */}
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant="h2">
                                Resumen (3 productos)
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle1">
                                    Dirección de entrega
                                </Typography>
                                <NextLink href="/checkout/address" passHref>
                                    <Link underline="always">Editar</Link>
                                </NextLink>
                            </Box>

                            <Typography>Ezequiel</Typography>
                            <Typography>calle falsa 123</Typography>
                            <Typography>Ciudad</Typography>
                            <Typography>CP 12345</Typography>
                            <Typography>telefono 123456789</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box display="flex" justifyContent="end">
                                <NextLink href="/cart" passHref>
                                    <Link underline="always">Editar</Link>
                                </NextLink>
                            </Box>
                            <OrderSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button
                                    color="secondary"
                                    className="circular-btn"
                                    fullWidth
                                >
                                    Checkout
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default SummaryPage;
