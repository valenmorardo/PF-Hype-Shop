import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import icon from "../../images/user2.png"
import Shake from 'react-reveal/Shake';

const UnloginProfile = () => {
    const { isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div>
                <Shake delay={2500}>
                    <img className='w-10 h-10 rounded-full' src={icon} alt="profile" />
                </Shake>

            </div>

        )
    )
}

export default UnloginProfile