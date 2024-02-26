import useMobileDeviceDetection from 'hooks/useMobileDetection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Text from 'components/atoms/Text'


const NavBrand = () => {
  const isMobile = useMobileDeviceDetection()
  return (
    <>
      <div
        className={`select-none ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        }`}
      >
        <Link href={'/'} passHref>
          <div className="flex w-fit h-fit">
            <Image src={'/images/favicon.png'} width='30px' height={30} alt='company brand' loading='lazy' />
            <Text value="RAVISASHLEY LLC" textStyle="PageSubtitle" />
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavBrand
