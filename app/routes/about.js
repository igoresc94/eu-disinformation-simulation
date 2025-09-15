import { html } from '../lib/htm-preact.js'
import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'

// Import Parties component
import { Parties } from '../../src/parties.js'
import { StaticPartiesTable } from '../../src/staticpartytable.js'


export const About = () => html`
    <style>
        .about-content {
            display: block;
        }
        .about-content img.image {
            border-radius: 50%;
            width: 150px;
            border: 0;
            max-width: 100%;
            vertical-align: middle;
            float: left;
            margin-right: 2rem;
        }
        .info-title {
            margin: 30px 0 20px;
            font-size: 3.8rem;
            font-weight: 700;
            line-height: 1.1;
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
        }
        .info p {
            font-size: 2rem;
            margin: 0 0 30px;
        }
        footer {
            padding: 10px 0;
            font-size: 1.4rem;
            letter-spacing: 1px;
            font-weight: 700;
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
            text-transform: uppercase;
        }
        footer a.contact {
            text-decoration: none;
            background-color: transparent;
            color: #999;
            border-bottom: none;
            font-size: 1.4rem;
        }
        footer a.contact:hover {
            text-decoration: none;
            background-color: transparent;
            color: #333;
            outline: 0;
            transition: all 0.4s;
            border-bottom: none;
        }
    </style>
    <${Page}
        title="EU party seats"
        subtitle="Check how both the old and current EU parliament looks like."
        description=""
        sidebarImage=${prefixUriIfNeeded('/assets/eu-parliament-simulator.avif')}
        showLinks=${true}
    >

        ${html`<${StaticPartiesTable} />`}
         <hr class="separator" />

        ${html`<${Parties} />`}

      
    <//>
`
