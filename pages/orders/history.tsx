import { Typography, Grid, Chip, Link } from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layauts";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import NextLink from "next/link";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "fullname", headerName: "Nombre Completo", width: 300 },
    {
        field: "paid",
        headerName: "Pagado",
        description: "Muestra información si está pagada la orden o no",
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return params.row.paid ? (
                <Chip color="success" label="Pagado" />
            ) : (
                <Chip color="error" label="No pagado" />
            );
        },
    },
    {
        field: "orden",
        headerName: "Ver orden",
        sortable: false,
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Link underline="always">Ver orden</Link>
                </NextLink>
            );
        },
    },
];

const rows = [
    { id: 1, paid: true, fullname: "Juan Perez" },
    { id: 2, paid: true, fullname: "Pedro Perez" },
    { id: 3, paid: false, fullname: "Juan Perez" },
    { id: 4, paid: true, fullname: "Natalia Perez" },
    { id: 5, paid: false, fullname: "Juan Tito" },
    { id: 6, paid: true, fullname: "Juan Perez" },
];

const HistoryPage = () => {
    return (
        <ShopLayout
            title="Historial de pedidos"
            pageDescription="Historial de pedidos del cliente"
            imageFullUrl=""
        >
            <Typography variant="h1" component="h1">
                Historial de ordenes
            </Typography>

            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default HistoryPage;
