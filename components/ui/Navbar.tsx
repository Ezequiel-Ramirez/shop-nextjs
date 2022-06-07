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
    Input,
    InputAdornment,
} from "@mui/material";
import {
    ClearOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UiContext } from "../../context";

export const Navbar = () => {
    const router = useRouter();
    const { asPath, push } = router;
    const { toggleSideMenu } = useContext(UiContext);

    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const handleSearch = () => {
        if (searchQuery.trim().length === 0) return;
        push(`/search/${searchQuery}`);
    };

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

                <Box sx={{ display: isSearchVisible ? 'none' : { xs: "none", sm: "block" } }} className='fade-in'>
                    <NextLink href="/category/men" passHref>
                        <Link>
                            <Button
                                color={
                                    asPath === "/category/men"
                                        ? "primary"
                                        : "info"
                                }
                            >
                                Hombre
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/women" passHref>
                        <Link>
                            <Button
                                color={
                                    asPath === "/category/women"
                                        ? "primary"
                                        : "info"
                                }
                            >
                                Mujeres
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/kids" passHref>
                        <Link>
                            <Button
                                color={
                                    asPath === "/category/kids"
                                        ? "primary"
                                        : "info"
                                }
                            >
                                Niños
                            </Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />
                {/* desckt */}

                {isSearchVisible ? (
                    <Input
                    sx={{ display:  { xs: "none", sm: "flex" } }}
                        className="fadeIn"
                        autoFocus={true}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                        type="text"
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={() => setIsSearchVisible(false)}>
                                    <ClearOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                ) : (
                    <IconButton
                    onClick={() => setIsSearchVisible(true)}
                    className="fadeIn"
                    sx={{ display:  { xs: "none", sm: "flex" } }}
                    >
                        <SearchOutlined />
                    </IconButton>
                )}
                {/* mobile */}
                <IconButton
                    sx={{ display: { xs: "flex", sm: "none" } }}
                    onClick={() => toggleSideMenu()}
                >
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
                <Button onClick={toggleSideMenu}>Menú</Button>
            </Toolbar>
        </AppBar>
    );
};
