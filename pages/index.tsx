import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FiFigma, FiCode, FiBox, FiPieChart, FiBarChart, FiCalendar, FiBookmark } from 'react-icons/fi'
const Home = () => {
  return (
    <>
      <PageTemplate title="Home - TRAVISASHLEY">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Digital Excellence with TRAVISASHLEY"
              description="Discover the art of seamless business operations with TRAVISASHLEY. From custom software development to cloud computing services, we redefine possibilities. Elevate your digital presence, optimize resources, and unlock a future where your business effortlessly adapts and excels. Choose TRAVISASHLEY – where innovation meets limitless potential."
              badge="EMPOWERING TOMORROW'S SUCCESS TODAY"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Contact" href="/contact" />
            <ButtonLink
              value="Learn More"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Our Mission"
              description="At TRAVISASHLEY, our mission is to empower businesses through innovative software solutions. We strive to exceed expectations, delivering tailored technology that enhances efficiency, fosters growth, and transforms challenges into opportunities."
              icon={<FiBarChart />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Our Plan"
              description="Our vision at TRAVISASHLEY is to be a global leader in shaping the future of digital experiences. We aspire to create impactful solutions that inspire positive change, driving businesses towards unparalleled success in the ever-evolving technological landscape."
              icon={<FiBookmark />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Our Vision"
              description="Our strategic plan revolves around continuous innovation and client-centricity. We are committed to staying ahead of industry trends, fostering a collaborative approach, and delivering high-quality, scalable solutions. TRAVISASHLEY's plan is to be your trusted partner on the journey to digital excellence."
              icon={<FiCalendar />}
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/how-we-work-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Everything is well planned, well designed and developed wholeheartedly"
              paragraph="Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped."
              badge="HOW WE WORK"
            />
          </aside>
        </section>
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="We're a team of designers, engineers and analysts"
                paragraph="Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results."
                badge="OUR TEAM"
              />
              {/* <ButtonLink
                value="See Our Teams"
                href="/teams"
                size="small"
                color="white"
                style="light"
              /> */}
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Our Projects */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="We have completed many amazing projects that you will not believe"
              badge="PROJECTS"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="Vervoe"
                description="REACT, NODE, MONGODB"
                image="/images/portfolio/8.jpg"
              />
            </div>
            <div data-aos="flip-left">
              <ProjectCard
                title="Wedo"
                description="NUXTJS, VUE, LARAVEL, AWS, MYSQL"
                image="/images/portfolio/1.jpg"

              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="Nexthuman"
                description="NEXTJS, FIREBASE, GOOGLE CLOUD"
                image="/images/portfolio/2.jpg"
              // bottomSquareSize="/images/logo.png"
              />
            </div>
            <div data-aos="flip-left">
              <ProjectCard
                title="Mindcentral"
                description="ANGULAR, NODE, MONGODB, GOOGLE MAPS"
                image="/images/portfolio/4.jpg"
              />
            </div>
            <div data-aos="flip-left">
              <ProjectCard
                title="Theawards"
                description="ANGULAR, FIREBASE, GOOGLE CLOUD"
                image="/images/portfolio/6.jpg"
              />
            </div>
            <div data-aos="flip-left">
              <ProjectCard
                title="Shokz"
                description="SHPOIFY, VUE, META PIXEL, SALESFORCE"
                image="/images/portfolio/5.jpg"
              />
            </div>
            <div data-aos="flip-left">
              <ProjectCard
                title="Frutaliafruit"
                description="WORDPRESS, MYSQL, JQUERY"
                image="/images/portfolio/3.jpg"
              />
            </div>
            <div data-aos="flip-left">
              <ProjectCard
                title="K9battlebeds"
                description="WORDPRESS, WOOCOMMERCE, MYSQL, GA4, META PIXEL"
                image="/images/portfolio/7.jpg"
              />
            </div>
          </div>
        </section>
        {/* Prices */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="What do you need? Choose a service that can help you"
              badge="GET STARTED"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <div data-aos="fade-up-right">
              <PricingCard
                price="1200$"
                title="Custom Web Development"
                features={[
                  'Tailored web solutions to meet your unique business needs, ensuring a seamless user experience and optimal performance.',
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <PricingCard
                price="5000$"
                title="Mobile App Development"
                features={[
                  'Expertise in creating feature-rich, user-friendly mobile applications for iOS and Android, ensuring a strong digital footprint.',
                ]}
              />
            </div>
            <div data-aos="fade-up-left">
              <PricingCard
                price="3000$"
                title="E-commerce Solutions"
                features={[
                  'Comprehensive e-commerce development for a seamless online shopping experience, from intuitive design to secure payment gateways.',
                ]}
              />
            </div>
            <div data-aos="fade-up-left">
              <PricingCard
                price="3000$"
                title="UI/UX Design"
                features={[
                  'Creative and user-centric design solutions, enhancing the visual appeal and usability of your digital products.',
                ]}
              />
            </div>
            <div data-aos="fade-up-left">
              <PricingCard
                price="3000$"
                title="Progressive Web Apps (PWAs)"
                features={[
                  'Cutting-edge development of PWAs for enhanced performance, offline accessibility, and a seamless mobile-like experience on the web.',
                ]}
              />
            </div>
            <div data-aos="fade-up-left">
              <PricingCard
                price="3000$"
                title="Cross-Platform Development"
                features={[
                  'Develop cross-platform applications for efficiency, reaching a wider audience with a single codebase for iOS and Android.',
                ]}
              />
            </div>
          </div>
        </section>
        {/* Testimonial */}
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="What do our clients say that we never let down?"
              badge="TESTIMONIAL"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Home
