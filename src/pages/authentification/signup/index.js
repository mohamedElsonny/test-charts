/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router';
import SignUpDisplay from './Display';
import AuthNavbar from '../../../components/_common/Navbar/AuthNavbar';

export default function SignIn() {
  const location = useHistory();

  const clickSubmit = (event) => {
    event.preventDefault();
    location.push('/sign-in');
  };

  return (
    <>
      <AuthNavbar transparent />
      <SignUpDisplay clickSubmit={clickSubmit} />
    </>
  );
}
