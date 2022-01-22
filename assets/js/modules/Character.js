class Character extends HTMLElement
{
    constructor()
    {
        super()

        this.build()
    }

    build()
    {
        const shadow = this.attachShadow({ mode: 'open' })
        
        this.character = this.create()
        const style = this.style()

        shadow.appendChild(style)
        shadow.appendChild(this.character)

        const observer = new MutationObserver((mutation) => { this.updateStyle() })

        observer.observe(this, { attributes: true })
    }

    create()
    {
        const character = document.createElement('div')
        character.classList.add('character')

        return character
    }

    updateStyle()
    {
        const x = this.getAttribute('data-x')
        const y = this.getAttribute('data-y')
        const size = this.getAttribute('data-size')
        const side = this.getAttribute('data-side')

        this.character.style.width = `${size}px`
        this.character.style.height = `${size}px`
        this.character.style.top = `${y * size}px`
        this.character.style.left = `${x * size}px`

        this.setSide(side)
    }

    setSide(side)
    {
        const sides = { down: 0, up: -90, left: -30, right: -60 }

        this.character.style.backgroundPosition = `0px ${sides[side]}px`
    }

    style()
    {
        const x = this.getAttribute('data-x')
        const y = this.getAttribute('data-y')
        const size = this.getAttribute('data-size')

        const style = document.createElement('style')
        style.innerText = `
            .character {
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                top: ${y * size}px;
                left: ${x * size}px;
                background-image: url(assets/images/char.png);
                background-position: 0px 0px;
            }
        `
        return style
    }
}

customElements.define('character-character', Character)

export const createCharacter = (x, y, size, side) => {

    const character = document.createElement('character-character')
    character.setAttribute('data-x', x)
    character.setAttribute('data-y', y)
    character.setAttribute('data-size', size)
    character.setAttribute('data-side', side)

    return {
        element: character,
        changePosition: function({ x, y, side })
        {
            character.setAttribute('data-x', x)
            character.setAttribute('data-y', y)
            character.setAttribute('data-side', side)
        }
    }
}