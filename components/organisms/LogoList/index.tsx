import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import React from 'react'

const LogoList = () => {
  return (
    <>
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight" data-aos='fade-left'>
        <div className="">
          <Image
            src={'/images/clients/client-1.png'}
            width={120}
            height="25"
            alt="github logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/clients/client-2.png'}
            width={120}
            height="25"
            alt="forbes logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/clients/client-3.png'}
            width={120}
            height="25"
            alt="google logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/clients/client-4.png'}
            width={120}
            height="25"
            alt="microsoft logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/clients/client-5.png'}
            width={120}
            height="30"
            alt="facebook logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/clients/client-6.png'}
            width={120}
            height="25"
            alt="facebook logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/clients/client-7.png'}
            width={120}
            height="25"
            alt="facebook logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/clients/client-8.png'}
            width={120}
            height="25"
            alt="facebook logo"
          />
        </div>
      </section>
    </>
  )
}

export default LogoList
