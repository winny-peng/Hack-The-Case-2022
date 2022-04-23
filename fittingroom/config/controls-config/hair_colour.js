/* Fitting Room - avatar hair (colour)

Author: Winny Peng
Date: April 23 2022

Code modified from https://github.com/tudorfis/1000-projects.git

*/

export default {
    labelTitle: 'Hair Color',
    targetClasses: [
        'js_hair'
    ],
    selectorClass: 'js_hair_color',
    defaultOption: 'black',
    options: {
        black:      { 'background': 'black' },
        red:        { 'background': 'red' },
        brown:      { 'background': 'brown' },
        blonde:     { 'background': 'yellow' },
        green:      { 'background': 'green' },
        purple:     { 'background': 'purple' },
    }
}