import React from 'react';
import Image from "next/image";
import image1 from '../public/image1.svg'

const Longestablished = () => {
    return (
        <div className={'w-fit z-20 h-full flex flex-row justify-center items-center'}>
            <div className={'gap-[30px] flex-col flex pb-[43px] pr-[44px] sm:pr-[65px] pl-[54px] pt-[41px] relative bg-[#FFFFFF] rounded-[5px] shadow-md border-[1px] boprder-[#E2E2E2] '}>
                <Image className={'w-[300px] flex sm:hidden h-[153px]  rounded-[10px] lg:hidden flex object-cover bg-contain'} src={'/image1.svg'} width={108} height={73} alt={''}/>

                <h4 className={'text-emre800 font-bold text-[30px]'}>long established</h4>
                <Image className={'w-[108px] hidden sm:flex h-[73px] absolute top-[18px] right-[20px] rounded-[10px] lg:hidden flex object-cover bg-contain'} src={'/image1.svg'} width={108} height={73} alt={''}/>

                <h5 className={'w-[260px] text-justify  sm:w-[450px] text-emre600  '}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
                </h5>
                <div className={'w-full flex flex-row h-full justify-between'}>
                    <h5 className={'text-emre600 '}>
                        May 20th 2020
                    </h5>
                    <h5 className={'font-bold text-emre800'}>Read More</h5>
                </div>
            </div>
            <Image className={'w-[433px] lg:flex hidden object-cover h-[280px] bg-contain'} src={'/image1.svg'} width={433} height={287} alt={''}/>
        </div>
    );
};

export default Longestablished;
