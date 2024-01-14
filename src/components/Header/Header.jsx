
import {Link, useLocation} from 'react-router-dom'
import {
    Button,
    IconButton, List, ListItem, ListItemButton, ListItemText, Stack, useMediaQuery
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
        {name: 'Notre Equipe', url: '/Team'},
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
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '20px',
                                    lineHeight: 1.7,
                                    color: location.pathname === menu.url ? '#F5377B' : '#173054'
                                }}
                            >
                                {menu.name}
                            </Link>
                        )}
                            <Link key={'NavLink ' + 'Reservation'} to='/Contact' style={{textDecoration: 'none'}}>
                                <Button variant='contained' color='primary'>Prendre RDV</Button>
                            </Link>
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
                    <Link
                        key={'NavLink ' + 'Reservation'}
                        to='/Contact'
                        style={{textDecoration: 'none'}}
                        onClick={() => setBurgerMenu(false)}
                    >
                        <ListItem divider disablePadding>
                            <ListItemButton sx={{backgroundColor: 'primary.main', color: 'white'}}>
                                <ListItemText sx={{margin: 0, textAlign: 'center'}} primary={'Prendre RDV'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            }
        </Stack>
    );
}