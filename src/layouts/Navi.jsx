import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { Link, NavLink, unstable_HistoryRouter} from 'react-router-dom'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
   
    function handleSignOut() {
        setIsAuthenticated(false)
        
    }

    function handleSignIn() {
        setIsAuthenticated(true)

    }


    return (
        <div>
            <Menu inverted fixed='top' >
                <Container>
                    <Menu.Item as={NavLink} to="/" name='home' />
                    <Menu.Item name='Kubilay' />
                    <Menu.Menu position='right'>
                        <CartSummary></CartSummary>
                        {isAuthenticated ? <SignedIn SignedOut={handleSignOut} /> :
                            <SignedOut SignIn={handleSignIn} />}


                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
