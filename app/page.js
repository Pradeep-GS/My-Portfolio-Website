"use client";

import React from 'react'
import Home from './home/page'
import About from './about/page';
import Educaion from './education/page';
import Experience from './experience/page';
import Skill from './skill/page';
import Projects from './projects/page';
import Conatct from './contact/page';
export default function page() {
  return (
    <div className='w-full min-h-screen bg-black'>
      <Home/>
      <About/>
      <Educaion/>
      <Experience/>
      <Skill/>
      <Projects/>
      <Conatct/>
    </div>
  )
}