'use client';

import * as React from 'react';
import { Button } from '..';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getToken } from '@/app/utils/getToken';

const Header = () => {
  const token = getToken('token');
  const router = useRouter();

  if (!token) router.push('/auth/sign-in');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('account');

    router.push('/auth/sign-in');
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost text-xl">
          The Todo
        </Link>
      </div>
      {token ? (
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
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
