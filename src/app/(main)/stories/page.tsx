import ExclusiveStory from '@/components/StoriesPage/ExclusiveStories'
import StorySlider from '@/components/StoriesPage/StorySlider'
import React from 'react'

function StoryPage() {
  return (
    <div suppressHydrationWarning={true}>
      <StorySlider/>
      <ExclusiveStory/>
    </div>
  )
}

export default StoryPage
