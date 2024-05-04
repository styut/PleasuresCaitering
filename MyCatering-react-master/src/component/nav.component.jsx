import React from 'react';
import '../style/nav.css';
import { Outlet, Link } from "react-router-dom";
import { UserProvider } from '../context/userContext.context';
import { UserContext } from '../context/userContext.context';

export const Nav = () => {
  return (
    <UserProvider>
      <UserContext.Consumer>
        {({ user }) => (
          <div>
            <header>
              <nav>
               


                <ul>
                   {user && <span style={{ color: 'black', margin: '0 20px' }}>שלום ל:{user.username}</span>}
                  <li className="navstyle"><Link to={'/home'}>Home</Link></li>
                  <li className="navstyle"><Link to={'/menu'}>Menu</Link></li>
                  <li className="navstyle"><Link to={'/about'}>About</Link></li>
                  <li className="navstyle"><Link to={'/gallery'}>Gallery</Link></li>
                  <li className="signUp"><button><Link to={'/contact'}>signUp</Link></button> </li>
                  <li className="signIn"> <button ><Link to={'/signIn'}>signIn</Link></button> </li>
                </ul>
              </nav>
            </header>
            <Outlet />
          </div>
        )
        }

      </UserContext.Consumer>
    </UserProvider>
  );
}
