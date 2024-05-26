import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import ItemListContainer from '../listas/ItemListContainer'
import CartWidgets from '../widgets/CartWidgets'

const Nav = () => {

  return (
    <div>
        <nav className='navbar'>
            <Link to="/" className="logo">Logo</Link>
            <ul className='menu'>
                <li><Link className='menu-link' to='/' >Inicio</Link>
                </li>
                <li>
                   <Link className='menu-link' to='/Productos' >Productos</Link>
                </li>
                <li>
                   <Link className='menu-link' to='/Productos/medias' >Medias</Link>
                </li>
                <li>
                   <Link className='menu-link' to='/Productos/pantalones' >Pantalones</Link>
                </li>
                <li>
                   <Link className='menu-link' to='/Productos/remeras' >Remeras</Link>
                </li>
                <li>
                   <Link className='menu-link' to='/Productos/buzos' >Buzos</Link>
                   
                </li>
                <li><Link className='menu-link' to='/Nosotros' >Nosotros</Link></li>
                <li><Link className='menu-link' to='/Contacto' >Contacto</Link></li>
                <li><CartWidgets/></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav