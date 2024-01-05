"use client"

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";


import {usePathname} from "next/navigation";


const NavBar = () => {
    const [menu,setMenu] = useState(false  )
    const pathname = usePathname()

    useEffect(() => {
        console.log(pathname)
    },[])

    return (
        <>
            {menu ?
                <div className={'z-50 w-full h-screen bg-cover lg:hidden absolute backdrop-blur-[1px] backdrop-sepia-0 bg-white/80'}></div>
             : ''}
            <div className={'sticky top-0 right-0 w-full h-fit bg-white z-50 shadow'}>
                <div
                    className={'w-full  h-full relative overflow-hidden  flex justify-between px-[10%] pt-[34px] pb-[24px] items-center'}>
                    <h1 className={'font-bold text-xl'}>HotCoffee Blog</h1>
                    <div className={'flex h-full flex-row gap-[10px]'}>
                        <div className={'md:flex hidden flex-row gap-[8px] '}>
                            <Image src={'search.svg'} width={24} height={24} alt={'Search SVG'}/>
                            <input className={'text-emre600 w-[250px]  outline-none appearance-none'}
                                   placeholder={'Search...'} type="text"/>
                        </div>
                        <div className={'hidden lg:flex  flex-row gap-[30px]'}>
                            <Link className={pathname == "/" ? "text-[#9B4545]" : ""} href={'/'}>Home</Link>
                            <Link className={pathname == "/articles" ? "text-[#9B4545]" : ""} href={'/articles'}>Articles</Link>
                            <div className={'flex flex-row gap-[31px]'}>
                                <Image src={'instagram.svg'} width={24} height={24} alt={'Instagram SVG'}/>
                                <Image src={'twitter.svg'} width={24} height={24} alt={'Twitter SVG'}/>
                                <Image src={'linkedin.svg'} width={24} height={24} alt={'Linkedin SVG'}/>

                            </div>
                        </div>
                        <div onClick={() => {
                            setMenu(!menu)
                        }} className={'cursor-pointer lg:hidden'}>
                            <Image src={'/menu.svg'} alt={'Menu svg'} width={32} height={24}></Image>
                        </div>
                        <div
                            className={`${menu ? '!right-0' : ''} lg:hidden gap-[32px] bg-white py-[55px] px-[40px] flex justify-start flex-col items-center shadow transition-all ease-in duration-300 fixed z-50  right-[-550px] h-full  top-0`}>
                            <Image className={'cursor-pointer absolute top-2 right-2'} onClick={() => {
                                setMenu(!menu)
                            }} src={'/close.svg'} alt={'Menu svg'} width={32} height={24}></Image>
                            <div
                                className={'w-full rounded-[13px] cursor-pointer flex justify-center items-center bg-[#6759FF] py-[14px]  p-[20px]'}>
                                <Link className={pathname == "/" ? "!text-red-600" : "text-white"}  onClick={() => {setMenu(false)}} href={'/'}>
                                <h1 className={pathname == "/" ? "!text-red-600" : "text-white"} className={"font-semibold"}>
                                   Home
                                </h1>
                                </Link>
                            </div>
                            <div
                                className={'w-full rounded-[13px] cursor-pointer  flex justify-center items-center bg-[#6759FF] py-[14px]  p-[20px]'}>
                                <Link className={pathname == "/articles" ? "text-red-600" : "text-white"}  onClick={() => {setMenu(false)}} href={'/articles'}>
                                <h1 className={pathname == "/articles" ? "!text-red-600" : "text-white"} className={' font-semibold'}>
                                   Articles
                                </h1>
                                </Link>
                            </div>
                            <div className={'flex flex-col gap-6 mt-4'}>
                                <Image className={'cursor-pointer'} src={'instagram.svg'} width={44} height={24} alt={'Instagram SVG'}/>
                                <Image className={'cursor-pointer'} src={'twitter.svg'} width={44} height={24} alt={'Twitter SVG'}/>
                                <Image className={'cursor-pointer'} src={'linkedin.svg'} width={44} height={24} alt={'Linkedin SVG'}/>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default NavBar;
