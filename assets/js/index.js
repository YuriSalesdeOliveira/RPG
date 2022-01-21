import { createCharacter } from './components/Character.js'
import { useCharacter } from './components/useCharacter.js'
import { map } from './data/gramMap/map.js'

function character()
{
    const character = createCharacter(3, 5, 30, 'down')
    const useChar = useCharacter(character, map.mapSpots)

    addEventListener('keydown', (event) => { 

        if (useChar.hasOwnProperty(event.code))
        {
            const command = useChar[event.code]
            
            command()
        }

    })

    return character
}

function app()
{  
    const app = document.querySelector('div[class="app"]')
    app.style.position = 'relative'
    app.style.width = '480px'
    app.style.height = '480px'
    app.style.backgroundImage = `url(${map.url})`
    app.style.backgroundPosition = `center`

    app.appendChild(character())
    
}

app()