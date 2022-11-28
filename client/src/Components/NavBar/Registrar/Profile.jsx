import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import icon from "../../images/user2.png"
const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    
    return (
        isAuthenticated && (
            <div>
              {user.picture?
                <img className='w-10 h-10 rounded-full' src={user.picture} alt={user.name}/>:
                <img  className='w-10 h-10 rounded-full' src={icon} alt="profile"/>
            }
                
            </div>

        )
    )
}

export default Profile