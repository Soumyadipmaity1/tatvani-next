import ExclusivePoetry from '@/components/PoetryPage/ExclusivePoetry'
import PoetrySlider from '@/components/PoetryPage/PoetrySlider'
import React from 'react'

function PoetryPage() {
  return (
    <div suppressHydrationWarning={true}>
      <PoetrySlider/>
      <ExclusivePoetry/>
    </div>
  )
}

export default PoetryPage
