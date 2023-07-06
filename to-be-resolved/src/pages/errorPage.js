import React from 'react'
import { NotFound } from '../components'
import { TabTitles } from '../utils/tabTtile'

const ErrorPage = () => {
  TabTitles("Page Not Found")
  return <NotFound />
}

export default ErrorPage