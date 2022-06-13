import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";

interface Props {
    currentValue: number;
    maxValue: number;
    updateQuantity: (newValue: number) => void;
}

export const ItemCounter: FC<Props> = ({currentValue, maxValue, updateQuantity}) => {

    const onAddOrRemove = (value: number) => {
        if(value === -1) {
            if(currentValue === 1) return;
            return updateQuantity(currentValue - 1);
        }
        if(currentValue === maxValue) return;
         updateQuantity(currentValue + 1);
    }

    return (
        <Box display="flex" alignItems="center">
            <IconButton onClick={() => onAddOrRemove(-1)}>
                <RemoveCircleOutline />
                <IconButton>
                    <Typography sx={{ width: 40, textAlign: "center" }}>
                        {currentValue}
                    </Typography>
                    <IconButton onClick={() => onAddOrRemove(+1)}>
                        <AddCircleOutline />
                    </IconButton>
                </IconButton>
            </IconButton>
        </Box>
    );
};
