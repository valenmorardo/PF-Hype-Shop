import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    
    return (
        isAuthenticated && (
            <div>
                <a href="/account">
                <img className='rounded-t-full rounded-b-full w-12 ' src={user.picture} alt={user.name}/>
                </a>
            </div>

        )
    )
}

export default Profile