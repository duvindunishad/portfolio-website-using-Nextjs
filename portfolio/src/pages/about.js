import AnimatedText from '@/component/AnimatedText'
import Layout from '@/component/Layout'
import Head from 'next/head'
import React, {useRef, useEffect} from 'react'
import profilepic from '../../public/images/profile/developer-pic-2.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/component/aboutpage/Skills'
import Experience from '@/component/aboutpage/Experience'
import Education from '@/component/aboutpage/Education'
import TransitionEffect from '@/component/TransitionEffect'


const AnimatedNumbers = ({value})=>{
    const ref = useRef(null)

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000})
    const isInView = useInView(ref,{once:true})

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]
)
useEffect(()=>{
    springValue.on("change", (latest) =>{
        if(ref.current && latest.toFixed(0)<= value){
            ref.current.textContent = latest.toFixed(0)
        }
    })
},[springValue, value])

    return <span ref={ref}></span>
}
const about = () => {
  return (
    <>
      <Head>
        <title>Duvindu | About Page</title>
        <meta name="description" content="any description"/>
      </Head>
      <TransitionEffect/>
      <main className='flex w-full flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                <p className='font-medium'>
                
I am Duvindu Nishad, a passionate Software Engineer specializing in full stack development, with a BSc. (Hons) in Software Engineering from Plymouth University, where I graduated with Second Class Honours (Lower division). I actively contribute to the Free and Open Source Software (FOSS) Community at NSBM Green University and run a YouTube channel, Digitalcodehub, where I create coding tutorials and sell mini projects. My technical expertise spans a wide range of technologies, including HTML, CSS, SCSS, JavaScript, C#, Java, React, Angular, and various database systems like MySQL and MongoDB.
                </p>
                <p className='my-4 font-medium'>
                Throughout my academic and professional journey, I have undertaken several impactful projects. Notable among them is a web-based donation application that connects donors with low-income individuals, a portfolio sharing and hiring application, an e-commerce mobile app, and a residential information management system. These projects highlight my proficiency in using modern development tools and frameworks such as React.js, AngularJS, Express.js, Node.js, and Kotlin, and underscore my ability to design and implement functional and efficient software solutions.
                </p>
                <p className='font-medium'>
                n my free time, I engage in learning new technologies and enhancing my skills through UI/UX design and mini projects involving HTML, CSS, and JavaScript. My dedication to continuous learning and improvement, coupled with my strong problem-solving abilities, teamwork, and attention to detail, make me a valuable asset in any software development team. I am currently seeking an entry-level position or internship to collaborate with cross-functional teams and gain hands-on experience in software development and database management.
                </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                <Image src={profilepic} alt="duvindu" className='w-full h-auto rounded-2xl'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px)50vw, 33vw"/>
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={13}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={6}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={4}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                </div>
            </div>
        </div>
        <Skills/>
        <Experience/>
        <Education/>
        </Layout>
      </main>
    </>
  )
}

export default about
