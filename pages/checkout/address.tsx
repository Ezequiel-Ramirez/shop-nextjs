import {
    Box,
    Button,
    FormControl,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layauts";

const AddressPage = () => {
    return (
        <ShopLayout
            title="Dirección"
            pageDescription="Dirección de envío"
            imageFullUrl=""
        >
            <Typography variant="h1" component="h1">
                Dirección
            </Typography>

            <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6}>
                    <TextField label="Nombre" fullWidth variant="filled" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Apellido" fullWidth variant="filled" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Dirección" fullWidth variant="filled" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Dirección 2 (opcional)"
                        fullWidth
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Código Postal"
                        fullWidth
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Ciudad" fullWidth variant="filled" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <Select variant="filled" label="País" value={1}>
                            <MenuItem value={1}>Argentina</MenuItem>
                            <MenuItem value={2}>Uruguay</MenuItem>
                            <MenuItem value={3}>Brasil</MenuItem>
                            <MenuItem value={4}>Chile</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Teléfono" fullWidth variant="filled" />
                </Grid>
            </Grid>
            <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
                <Button color="secondary" className="circular-btn" size="large">
                    Revisar Pedido
                </Button>
            </Box>
        </ShopLayout>
    );
};

export default AddressPage;
