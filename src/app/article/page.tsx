import ArticleSlider from '@/components/ArticlePage/ArticleSlider'
import ExclusiveNews from '@/components/ArticlePage/ExclusiveNews'
import React from 'react'

function ArticlePage() {
  return (
    <div suppressHydrationWarning={true}>
        <ArticleSlider/>
      <ExclusiveNews/>
    </div>
  )
}

export default ArticlePage
