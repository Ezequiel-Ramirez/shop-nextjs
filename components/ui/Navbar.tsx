import NextLink from "next/link";

import {
    AppBar,
    Box,
    Link,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Badge,
} from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UiContext } from "../../context";

export const Navbar = () => {

    const router = useRouter();
    const { asPath } = router;
    const { toggleSideMenu } = useContext(UiContext);

    return (
        <AppBar>
            <Toolbar>
                <NextLink href="/" passHref>
                    <Link display="flex" alignItems="center">
                        <Typography variant="h6">Shop |</Typography>
                        <Typography sx={{ ml: 0.5 }}>Nextjs</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <NextLink href="/category/men" passHref>
                        <Link>
                            <Button color={asPath === '/category/men' ? 'primary': 'info'}>Hombre</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/women" passHref>
                        <Link>
                            <Button color={asPath === '/category/women' ? 'primary': 'info'}>Mujeres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/kids" passHref>
                        <Link>
                            <Button color={asPath === '/category/kids' ? 'primary': 'info'}>Niños</Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <NextLink href="/cart" passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>
                <Button
                onClick={toggleSideMenu}
                >Menú</Button>
            </Toolbar>
        </AppBar>
    );
};
