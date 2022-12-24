import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md'

const Navbar = () => {

    return (

        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10">
            <div className="logo mx-5">
                <Link legacyBehavior href={'/'}><a><Image width={200} height={40} src="/images/logo.jpg" alt="" /></a></Link>
            </div>
            <div className="nav  ">
                <ul className='flex items-center space-x-6 font-bold md:text-sm'>
                    <Link legacyBehavior href={'/tshirts'}><a><li>Tshirts</li></a></Link>
                    <Link legacyBehavior href={'/hoodies'}><a><li>Hoodies</li></a></Link>
                    <Link legacyBehavior href={'/stickers'}><a><li>Stickers</li></a></Link>
                    <Link legacyBehavior href={'/mugs'}><a><li>Mugs</li></a></Link>
                </ul>
            </div>
            <div className=" cursor-pointer cart absolute right-0 top-4 mx-5 flex">
                <Link legacyBehavior href={'/login'}><MdAccountCircle className='text-xl md:text-2xl mx-2' /></Link>
                <AiOutlineShoppingCart className='text-xl md:text-2xl' />
            </div>
        </div>
    )
}

export default Navbar