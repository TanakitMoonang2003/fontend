import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';

export default function index() {
  return (
    <>
    <Head>
      <title>Welcome to NextJs</title>
    </Head>
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a c
lassName="navbar-brand">My Page</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>



    <div className="text-center">
           <img src="12.jpg" className="rounded" alt="Monkey" width="200" height="200"/>
    </div>

    <div className="text-center"><button class="btn btn-primary" type="submit">Welcome to my page</button></div>
    </>
  )
}