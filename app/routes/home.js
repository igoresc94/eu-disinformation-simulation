import { html } from '../lib/htm-preact.js'

import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { PostsAndCategories } from '../components/layout/postsAndCategories.js'

export const Home = ({ state, dispatch }) => html` <${Page}
    title="Undestanding Disinformation Simulator"
    subtitle="This Simulator was coded by MA Igor Carnaúba to teach Disinformation in EU Politics through AI to bachelor students at Eötvös Loránd University in Budapest."
    description="By writing a country, disinformation technique, text and uploading an image, students write their disinformation/tacking disinformation post and and everybody will be able to see the way they are working with their countries."
    sidebarImage=${prefixUriIfNeeded('/assets/european-elections.jpg')}
    showLinks=${true}
>
    <${PostsAndCategories} state=${state} dispatch=${dispatch} />
<//>`
