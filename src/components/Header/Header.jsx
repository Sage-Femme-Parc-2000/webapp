
import {Link, useLocation} from 'react-router-dom'

import { Stack, Typography } from "@mui/material";
import logoInline from '../../assets/img/logoInline.png'

export default function Header() {
    const location = useLocation();

    const menuList = [
        {name: 'Accueil', url: '/'},
        {name: 'Reservation', url: '/Reservation'},
        {name: 'Contact', url: '/Contact'}
    ];

    return (
        <Stack
            position='fixed' top={0} right={0} left={0}
            flexDirection='row' justifyContent={'space-between'} alignItems={'center'}
            height={'90px'}
            px={'70px'}
            boxShadow={'0 13px 35px -12px rgba(35,35,35,.1)'}
            backgroundColor={'white'}
            zIndex={1000}
        >
            <img src={logoInline} alt={'logo du site'} style={{height: '100%'}} />
            <nav>
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
            </nav>
        </Stack>
    );
}