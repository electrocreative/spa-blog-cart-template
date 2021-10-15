import React from 'react';
import './styles.css';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, onChange }) {
  return (
    <div className="__dml container">
      <Header onChange={onChange} />
      {children}
      <Footer/>
    </div>
  );
}
