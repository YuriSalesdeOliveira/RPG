import { mapSpots } from '../data/gramMap/mapSpots.js'

export const useCharacter = (character) => {

    const position = {
        x: parseInt(character.getAttribute('data-x')),
        y: parseInt(character.getAttribute('data-y'))
    }

    function checkMovement(x, y)
    {   
        if (y > (mapSpots.length - 1) || x > (mapSpots[y].length - 1)) { return false }
        if (y < 0 || x < 0) { return false }

        if (mapSpots[y][x]) { return true }

        return false
    }

    function moveLeft()
    {   
        if (checkMovement(position.x - 1, position.y))
        {
            --position.x
            character.setAttribute('data-x', position.x)
        }

        character.setAttribute('data-side', 'left')
    }

    function moveRight()
    {
        if (checkMovement(position.x + 1, position.y))
        {
            ++position.x
            character.setAttribute('data-x', position.x)
        }
        character.setAttribute('data-side', 'right')
    }

    function moveUp()
    {
        if (checkMovement(position.x, position.y - 1))
        {
            --position.y
            character.setAttribute('data-y', position.y)
        }
        character.setAttribute('data-side', 'up')
    }

    function moveDown()
    {
        if (checkMovement(position.x, position.y + 1))
        {
            ++position.y
            character.setAttribute('data-y', position.y)
        }
        character.setAttribute('data-side', 'down')
    }

    return {
        moveLeft,
        moveRight,
        moveDown,
        moveUp
    }
}