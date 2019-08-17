// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPaperPlane,
  faInfoCircle,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Buefy from 'buefy';
import DefaultLayout from '~/layouts/Default.vue'

//import 'buefy/dist/buefy.css'

export default function (Vue, { router, head, isClient }) {
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
  // })

  library.add(
    faPaperPlane,
    faInfoCircle,
    faGlobe,
    faInstagram
  )

  Vue.use(Buefy, {
    defaultIconPack: 'fa',
    defaultIconComponent: 'font-awesome-icon'
  })

  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)

}
