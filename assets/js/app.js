function app()
{
    const app = document.querySelector('div[class="app"]')
    app.style.width = '480px'
    app.style.height = '480px'
    app.style.backgroundImage = 'url(assets/images/map.png)'

    app.appendChild(character())
}

function character()
{
    const position = { x: 4, y: 5, size: 30 }
    const side = { down: 0, left: -30, right: -60, up: -90 }
    const mapSpots = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    const character = document.createElement('div')
    character.style.position = 'absolute'
    character.style.width = `${position.size}px`
    character.style.height = `${position.size}px`
    character.style.left = `${position.x * position.size}px`
    character.style.top = `${position.y * position.size}px`
    character.style.backgroundImage = 'url(assets/images/char.png)'
    character.style.backgroundPosition = `0px ${side.down}px`

    const moveLeft = function()
    {
        nextPosition = position.x - 1

        if (mapSpots[position.y][nextPosition])
        {
            position.x = nextPosition

            character.style.left = `${position.x * position.size}px`
        }

        character.style.backgroundPosition = `0px ${side.left}px`
    }

    const moveRight = function()
    {
        nextPosition = position.x + 1

        if (mapSpots[position.y][nextPosition])
        {
            position.x = nextPosition

            character.style.left = `${position.x * position.size}px`
        }

        character.style.backgroundPosition = `0px ${side.right}px`
    }

    const moveUp = function()
    {
        nextPosition = position.y - 1
        
        if (mapSpots[nextPosition][position.x])
        {
            position.y = nextPosition

            character.style.top = `${position.y * position.size}px`
        }
        character.style.backgroundPosition = `0px ${side.up}px`
    }

    const moveDown = function()
    {
        nextPosition = position.y + 1

        if (mapSpots[nextPosition][position.x])
        {
            position.y = nextPosition

            character.style.top = `${position.y * position.size}px`
        }

        character.style.backgroundPosition = `0px ${side.down}px`
    }

    addEventListener('keydown', (event) => { 

        switch (event.code)
        {
            case 'ArrowLeft':
                moveLeft()
            break
            case 'ArrowRight':
                moveRight()
            break
            case 'ArrowUp':
                moveUp()
            break
            case 'ArrowDown':
                moveDown()
            break
        }

     })

    return character
}

app()