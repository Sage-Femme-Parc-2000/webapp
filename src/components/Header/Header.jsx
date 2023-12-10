
import {Link, useLocation} from 'react-router-dom'
import {
    IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography, useMediaQuery
} from "@mui/material";
import logoInline from '../../assets/img/logoInline.png';
import {CloseRounded, MenuRounded} from "@mui/icons-material";
import {useState} from "react";

export default function Header() {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const location = useLocation();
    const [burgerMenu, setBurgerMenu] = useState(false);

    const menuList = [
        {name: 'Accueil', url: '/'},
        {name: 'Reservation', url: '/Reservation'},
        {name: 'Contact', url: '/Contact'}
    ];

    return (
        <Stack
            zIndex={1000} position='fixed' top={0} right={0} left={0}
           backgroundColor={'white'} boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
        >
            <Stack
                flexDirection='row'
                justifyContent={'space-between'}
                alignItems={'center'}
                height={isDesktop ? '90px' : '60px'}
                px={isDesktop ? '70px' : '20px'}
            >
                <Link to={'/'} style={{height: '100%'}}>
                    <img src={logoInline} alt={'logo du site'} style={{height: '100%'}}/>
                </Link>
                {isDesktop
                    ?
                    <Stack flexDirection='row' gap={4}>
                        {menuList.map(menu =>
                            <Link
                                key={'NavLink ' + menu.name}
                                to={menu.url}
                                style={{textDecoration: 'none', color: location.pathname === menu.url ? '#F5377B' : '#173054'}}
                            >
                                <Typography fontSize={'20px'}>{menu.name}</Typography>
                            </Link>
                        )}
                    </Stack>
                    :
                    <IconButton size='large' edge={false} color='primary' onClick={() => setBurgerMenu(!burgerMenu)}>
                        {burgerMenu ? <CloseRounded /> : <MenuRounded />}
                    </IconButton>
                }
            </Stack>
            {burgerMenu &&
                <List sx={{pb: 0}}>
                    {menuList.map(menu =>
                        <Link
                            key={'NavLink ' + menu.name}
                            to={menu.url}
                            style={{textDecoration: 'none', color: location.pathname === menu.url ? '#F5377B' : '#173054'}}
                            onClick={() => setBurgerMenu(false)}
                        >
                            <ListItem divider disablePadding>
                                <ListItemButton>
                                    <ListItemText sx={{margin: 0, textAlign: 'center'}} primary={menu.name} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    )}
                </List>
            }
        </Stack>
    );
}