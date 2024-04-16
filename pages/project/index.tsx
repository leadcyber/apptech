import Button from 'components/atoms/Button'
import Select from 'components/atoms/Form/Select'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'
import ButtonLink from 'components/atoms/Button/ButtonLink'

const Project = () => {
  interface Project {
    title: string
    description: string
  }
  const projectList: Project[] = [
    {
      title: 'The Mobile App Landing Page',
      description: 'A landing page for mobile app',
    },
    {
      title: 'The Desktop App Landing Page',
      description: 'A landing page for desktop app',
    },
    {
      title: 'Simple Mobile Blog App',
      description: 'A blog app on mobile platform',
    },
    {
      title: 'Realtime Chat App UI Design',
      description: 'A UI design for realtime chat app',
    },
  ]
  return (
    <PageTemplate title="Project - TRAVIS DEAN ASHLEY">
      <section className="flex flex-col items-center md:flex-row md:justify-between">
        <aside
          className="w-full place-items-center"
          data-aos="fade-right"
        >
          <div className="text-center md:text-left">
            <PageSentence
              badge="PROJECTS"
              title="We have completed many amazing projects that you will not believe"
            />
          </div>
        </aside>
        {/* <aside className="w-full min-w-[175px] md:w-fit" data-aos="fade-left">
          <Select
            options={[
              { label: 'App', value: 'app' },
              { label: 'UI Design', value: 'ui-design' },
              { label: 'Other', value: 'other' },
            ]}
          />
        </aside> */}
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        {/* <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div className="basis-full lg:basis-1/2" key={randomString(64)} data-aos="zoom-in-up">
                
              </div>
            )
          })} */}
        {/* </div> */}
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
        <ButtonLink value="Load More" color="white" style="light" href="/about"/>
      </section>
    </PageTemplate>
  )
}

export default Project
