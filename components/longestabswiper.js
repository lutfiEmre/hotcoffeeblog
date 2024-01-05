"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";


const Longestabswiper = () => {
    return (
        <div className={'md:w-[600px] sm:m-0 ml-12 sm:w-[550px] w-[350px] lg:w-[1000px]'}>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    600: {
                        slidesPerView: 1.5,
                        spaceBetween: 30
                    },

                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 40
                    }
                }}
                slidesPerView={2.5}
                /*onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}*/
            >
                <SwiperSlide>
                    <div className={'flex flex-col w-fit cursor-pointer '}>
                            <Image className={'w-[350px] h-[178px]  flex object-cover bg-contain'} src={'/image2.svg'} width={297} height={179} alt={''}/>

                        <div className={' gap-[15px] flex w-fit flex flex-col pl-[15px] pr-[34px] pt-[18px]'}>
                            <h1 className={'text-emre800 font-bold text-[20px]'}>long established</h1>
                            <p className={'text-emre600 w-[308px] font-light w-full'}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
                            </p>
                            <div className={'w-full pt-[8px] flex justify-between'}>
                                <h4 className={'text-emre600 font-light'}>May 20th 2020</h4>
                                <h5 className={'font-bold text-emre800'}>Read More</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'flex flex-col w-fit cursor-pointer '}>
                        <Image className={'w-[350px] h-[178px]  flex object-cover bg-contain'} src={'/image2.svg'} width={297} height={179} alt={''}/>

                        <div className={'pl-[16px] gap-[15px] flex flex-col pr-[34px] pt-[18px]'}>
                            <h1 className={'text-emre800 font-bold text-[20px]'}>long established</h1>
                            <p className={'text-emre600 w-[258px] font-light w-full'}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
                            </p>
                            <div className={'w-full pt-[8px] flex justify-between'}>
                                <h4 className={'text-emre600 font-light'}>May 20th 2020</h4>
                                <h5 className={'font-bold text-emre800'}>Read More</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'flex flex-col w-fit cursor-pointer '}>
                        <Image className={'w-[350px] h-[178px]  flex object-cover bg-contain'} src={'/image2.svg'} width={297} height={179} alt={''}/>

                        <div className={'pl-[16px] gap-[15px] flex flex-col pr-[34px] pt-[18px]'}>
                            <h1 className={'text-emre800 font-bold text-[20px]'}>long established</h1>
                            <p className={'text-emre600 w-[258px] font-light w-full'}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
                            </p>
                            <div className={'w-full pt-[8px] flex justify-between'}>
                                <h4 className={'text-emre600 font-light'}>May 20th 2020</h4>
                                <h5 className={'font-bold text-emre800'}>Read More</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'flex flex-col w-fit cursor-pointer '}>
                        <Image className={'w-[350px] h-[178px]  flex object-cover bg-contain'} src={'/image2.svg'} width={297} height={179} alt={''}/>

                        <div className={'pl-[16px] gap-[15px] flex flex-col pr-[34px] pt-[18px]'}>
                            <h1 className={'text-emre800 font-bold text-[20px]'}>long established</h1>
                            <p className={'text-emre600 w-[258px] font-light w-full'}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
                            </p>
                            <div className={'w-full pt-[8px] flex justify-between'}>
                                <h4 className={'text-emre600 font-light'}>May 20th 2020</h4>
                                <h5 className={'font-bold text-emre800'}>Read More</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'flex flex-col w-fit cursor-pointer '}>
                        <Image className={'w-[350px] h-[178px]  flex object-cover bg-contain'} src={'/image2.svg'} width={297} height={179} alt={''}/>

                        <div className={'pl-[16px] gap-[15px] flex flex-col pr-[34px] pt-[18px]'}>
                            <h1 className={'text-emre800 font-bold text-[20px]'}>long established</h1>
                            <p className={'text-emre600 w-[258px] font-light w-full'}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
                            </p>
                            <div className={'w-full pt-[8px] flex justify-between'}>
                                <h4 className={'text-emre600 font-light'}>May 20th 2020</h4>
                                <h5 className={'font-bold text-emre800'}>Read More</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'flex flex-col w-fit cursor-pointer '}>
                        <Image className={'w-[350px] h-[178px]  flex object-cover bg-contain'} src={'/image2.svg'} width={297} height={179} alt={''}/>

                        <div className={'pl-[16px] gap-[15px] flex flex-col pr-[34px] pt-[18px]'}>
                            <h1 className={'text-emre800 font-bold text-[20px]'}>long established</h1>
                            <p className={'text-emre600 w-[258px] font-light w-full'}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
                            </p>
                            <div className={'w-full pt-[8px] flex justify-between'}>
                                <h4 className={'text-emre600 font-light'}>May 20th 2020</h4>
                                <h5 className={'font-bold text-emre800'}>Read More</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Longestabswiper;
