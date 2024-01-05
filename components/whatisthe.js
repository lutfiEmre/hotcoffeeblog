import React from 'react';
import Image from "next/image";

const Whatisthe = () => {
    return (
      <div className={'flex flex-col sm:px-[60px] md:px-[94px]'}>
          <div className={'flex flex-row w-full'}>
              <div className={'bg-emr100 w-full justify-between h-fit flex-row flex '}>
                  <div className={'w-fit pt-[98px] pl-[15px] pr-[15px] sm:pl-[63px] flex flex-col gap-[24px] sm:pr-[66px]'}>
                      <h5 className={'font-extrabold w-[230px] sm:w-[308px] text-[30px] sm:text-[40px]'}>What is Lorem Ipsum?</h5>
                      <h6 className={'font-light text-emre600 w-[230px] sm:w-[350px]'}>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...
                      </h6>
                      <div className={'mt-2 flex justify-between w-full flex-row'}>
                          <h5 className={'!text-emre600 font-light '}>
                              May 20
                          </h5>
                          <h5 className={'font-extrabold text-black'}>Read More</h5>
                      </div>
                  </div>
                  <Image className={'2xl:w-[600px] w-[150px] sm:w-[250px] md:w-[300px] lg:w-[450px] h-[500px]  flex object-cover'} src={'/image7.svg'} width={525} height={500} alt={''}/>

              </div>
          </div>
          <div className={'w-full mt-[31px] h-fit flex justify-between'}>
              <div></div>
              <div className={'w-[122px] mr-[50px] sm:mr-0 flex flex-row cursor-pointer justify-center items-center gap-[7px] h-[37px] bg-[#6B46C1] rounded-[5px]'}>
                  <h1 className={'text-white font-bold'}>
                      See more
                  </h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_203_778)">
                          <path d="M10.0001 1.66699C14.6001 1.66699 18.3334 5.40033 18.3334 10.0003C18.3334 14.6003 14.6001 18.3337 10.0001 18.3337C5.40008 18.3337 1.66675 14.6003 1.66675 10.0003C1.66675 5.40033 5.40008 1.66699 10.0001 1.66699ZM10.8334 10.0003V6.66699H9.16675V10.0003H6.66675L10.0001 13.3337L13.3334 10.0003H10.8334Z" fill="white"/>
                      </g>
                      <defs>
                          <clipPath id="clip0_203_778">
                              <rect width="20" height="20" fill="white"/>
                          </clipPath>
                      </defs>
                  </svg>
              </div>
          </div>
      </div>
    );
};

export default Whatisthe;
