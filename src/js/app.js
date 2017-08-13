import log from './log.js'
import config from '../data/config.json'
import css from '../css/app.scss'

log('Salut les gens !')
log(config)

document.getElementById('button').addEventListener("click", function(e) {
    import ('jquery').then($ => {
        $('body').css('backgroundColor', '#000')
        console.log('done !!')
    }).catch(error => console.log('An error occured while loading jQuery' + error))
})

log(css)