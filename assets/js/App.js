import Character from './components/Character.js'
import { useCharacter } from './components/useCharacter.js'

function app()
{
    customElements.define('character-character', Character)

    const character = document.createElement('character-character')
    character.setAttribute('data-x', 3)
    character.setAttribute('data-y', 2)
    character.setAttribute('data-size', 30)
    character.setAttribute('data-side', 'down')

    const useChar = useCharacter(character)

    addEventListener('keydown', (event) => { 

        switch (event.code)
        {
            case 'ArrowLeft':
                useChar.moveLeft()
            break
            case 'ArrowRight':
                useChar.moveRight()
            break
            case 'ArrowUp':
                useChar.moveUp()
            break
            case 'ArrowDown':
                useChar.moveDown()
            break
        }

    })

    const app = document.querySelector('div[class="app"]')
    app.style.position = 'relative'
    app.style.width = '480px'
    app.style.height = '480px'
    app.style.margin = '0 auto'
    app.style.backgroundImage = 'url(assets/images/map.png)'

    app.appendChild(character)
    
}

app()