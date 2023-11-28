'use client';

import * as React from 'react';
import { Button } from '..';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getToken, getUserDetail } from '@/utils/getToken';

const Header = () => {
  const user = getUserDetail('account');
  const router = useRouter();
  const token = getToken('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('account');

    router.push('/auth/sign-in');
  };

  const navigateProfile = () => {
    router.push('/user/edit');
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={token ? '/task' : '/'} className="btn btn-ghost text-xl">
          The Todo
        </Link>
      </div>
      {token ? (
        <details className="dropdown">
          <summary className="m-1 btn">{user.name}</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
            <li>
              <a className="justify-between" onClick={navigateProfile}>
                Profile
              </a>
            </li>

            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </details>
      ) : (
        <Button
          text="masuk"
          btnColor="btn-primary"
          width="btn"
          link
          href="/auth/sign-in"
        />
      )}
    </div>
  );
};

export default Header;
