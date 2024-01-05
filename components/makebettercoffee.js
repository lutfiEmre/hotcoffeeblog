import React from 'react';
import Image from "next/image";
import Longestablished from "@/components/longestablished";
import Longestabswiper from "@/components/longestabswiper";
import Whatisthe from "@/components/whatisthe";

const Makebettercoffee = () => {
    return (
        <div className={'w-full z-40 gap-[100px] h-full flex-col flex justify-start items-center'}>
            <div className={'bg-[#FBFBFB] w-full h-full py-[70px] flex-col lg:flex-row flex justify-center items-center gap-[30px] lg:gap-[102px]'}>
                <div className={'flex flex-col'}>
                    <div className={'flex flex-col text-[60px] font-bold'}>
                        <h1 className={''}>Make Better</h1>
                        <div className={'flex flex-row'}>
                            <span className={'font-bold'}>coffee</span>
                            <Image src={'/coffee.svg'} width={70} height={67} alt={'coffee svg'}/>
                        </div>
                    </div>
                    <h2 className={'text-[30px] text-emre700'}>why learn how to blog?</h2>
                </div>
                <Image src={'/croods.svg'} width={476} height={323} alt={'croods'}/>
            </div>
            <Longestablished/>
            <Longestablished/>
            <Longestabswiper/>
            <Whatisthe/>

        </div>
    );
};

export default Makebettercoffee;
