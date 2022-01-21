export const useCharacter = (character, mapSpots) => {

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

    function ArrowLeft()
    {   
        if (checkMovement(position.x - 1, position.y))
        {
            --position.x
            character.setAttribute('data-x', position.x)
        }

        character.setAttribute('data-side', 'left')
    }

    function ArrowRight()
    {
        if (checkMovement(position.x + 1, position.y))
        {
            ++position.x
            character.setAttribute('data-x', position.x)
        }
        character.setAttribute('data-side', 'right')
    }

    function ArrowUp()
    {
        if (checkMovement(position.x, position.y - 1))
        {
            --position.y
            character.setAttribute('data-y', position.y)
        }
        character.setAttribute('data-side', 'up')
    }

    function ArrowDown()
    {
        if (checkMovement(position.x, position.y + 1))
        {
            ++position.y
            character.setAttribute('data-y', position.y)
        }
        character.setAttribute('data-side', 'down')
    }

    return {
        ArrowLeft,
        ArrowRight,
        ArrowUp,
        ArrowDown
    }
}