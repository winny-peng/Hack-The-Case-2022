/* Fitting Room - controls creator

Author: Winny Peng
Date: April 23 2022

Code modified from https://github.com/tudorfis/1000-projects.git

*/

import avatarConfig from '/fittingroom/config/avatar-config.js'
import ControlsRenderer from './renderer.js'
import ControlsCss from './class.js'

export default class ControlsCreator {
    constructor() {
        this.controlsWrapper = document.querySelector( '.js_controls' )
    }

    init() {
        this.createSelectElements()
        this.createChangeListeners()
    }

    createSelectElements() {
        for ( const controlKey in avatarConfig.controls ) {
            const controlConfig = avatarConfig.controls[ controlKey ]
            
            const controlsCss = new ControlsCss( controlConfig )
            controlsCss.setCssOptions()

            const selectEl = document.createElement( 'div' )

            const controlsRenderer = new ControlsRenderer( controlConfig )
            selectEl.innerHTML = controlsRenderer.createSelectHtml()

            this.controlsWrapper.append( selectEl )
        }
    }

    createChangeListeners() {
        for ( const controlKey in avatarConfig.controls) {
            const controlConfig = avatarConfig.controls[ controlKey ]

            const { selectorClass, targetClasses, options } = controlConfig
            const controlEl = document.querySelector( `.${ selectorClass }`)
            
            controlEl.addEventListener('change', _ => {
                const selectedOptionKey = controlEl.value

                const controlsCss = new ControlsCss( controlConfig )
                controlsCss.setCssStyles( targetClasses, options[ selectedOptionKey ] )
            })
        }
    }
}