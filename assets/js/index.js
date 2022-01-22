import { createCharacter } from './modules/Character.js'
import { useCharacter } from './modules/useCharacter.js'
import Map from './data/Map.js'

function app()
{  
    let map = Map.getMap()

    const character = createCharacter(3, 5, 30, 'down')

    addEventListener('keydown', (event) => {

        const useChar = useCharacter(character, map, ({ mapId }) => {
            
            map = Map.getMap(mapId)
    
            app.style.backgroundImage = `url(${map.url})`
        })

        if (useChar.hasOwnProperty(event.code))
        {
            let command = useChar[event.code]
            let characterPosition = command()
            
            character.changePosition(characterPosition)
        }

    })

    const app = document.querySelector('div[class="app"]')
    app.style.position = 'relative'
    app.style.width = '480px'
    app.style.height = '480px'
    app.style.margin = '0 auto'
    app.style.backgroundImage = `url(${map.url})`
    app.style.backgroundPosition = `center`

    app.appendChild(character.element)
    
}

app()