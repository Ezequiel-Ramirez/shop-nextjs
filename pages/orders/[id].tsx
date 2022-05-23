import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,
    Link,
    Chip,
} from "@mui/material";
import React from "react";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layauts";
import NextLink from "next/link";
import {
    CreditCardOffOutlined,
    CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
    return (
        <ShopLayout
            title="Resumen de la orden 3453455"
            pageDescription={"Resumen de la orden"}
            imageFullUrl=""
        >
            <Typography variant="h1" component="h1">
                Orden: ABC123
            </Typography>
            {/*   <Chip
                label="Pendiente de pago"
                sx={{my:2}}
                variant="outlined"
                color="error"
                icon={<CreditCardOffOutlined/>}
            /> */}
            <Chip
                label="Orden ya pagada"
                sx={{ my: 2 }}
                variant="outlined"
                color="success"
                icon={<CreditScoreOutlined />}
            />
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
                                <h1>Pagar</h1>
                            </Box>
                            <Chip
                                label="Orden ya pagada"
                                sx={{ my: 2 }}
                                variant="outlined"
                                color="success"
                                icon={<CreditScoreOutlined />}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default OrderPage;
