import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const {user}=useContext(AuthContext);
    const [isAdmin]=useAdmin(user?.email)
    return (
        <div>
            
        </div>
    );
};

export default Dashboard;