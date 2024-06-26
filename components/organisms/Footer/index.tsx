import NavBrandFooter from 'components/atoms/NavBrand/footer'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="mt-32 pb-16">
        <div className="flex gap-5 lg:flex-row lg:gap-10 xl:gap-12">
          <div className="flex-col w-1/4 space-y-5">
            <NavBrandFooter />
            <div className="">
              <Text
                value={`Copyright © ${new Date().getFullYear()}`}
                textStyle="SectionParagraph"
              />
            </div>
          </div>
          <div className="flex-col w-1/4 space-y-5">
            <Text value="USEFUL LINKS" textStyle="FooterLinkGroupTitle" />
            <div className="space-y-[10px]">
              <NavLink
                value="Development"
                href="/service/detail"
              />
              <NavLink value="About" href="/about" />
              <NavLink value="Contact" href="/contact" />
            </div>
          </div>
          <div className="flex-col w-1/4 space-y-5">
            <Text value="CONTACT US" textStyle="FooterLinkGroupTitle" />
            <Text value="1630 PEACHTREE LN E <br/>
MOBILE Alabama, 36618<br/>
United States<br/>
Phone: +1 (701) 314 3433<br/>
Email: ashley.gulley@travisdeanashley.org" textStyle="FooterLinkGroupTitle" />
          </div>
          <div className="flex-col w-1/4 space-y-5">
            <Text value="As a leading software company, we specialize in crafting custom solutions for web and mobile development, ensuring innovation, reliability, and transformative impact. Join us in redefining possibilities in the ever-evolving world of technology." textStyle="FooterLinkGroupTitle" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
