export const useCharacter = (character, map, mapActionsHandler) => {

    const position = {
        x: parseInt(character.element.getAttribute('data-x')),
        y: parseInt(character.element.getAttribute('data-y')),
        side: parseInt(character.element.getAttribute('data-side'))
    }

    function movement(x, y)
    {   
        const mapSpots = map.spots
        const mapLengthX = map.length.x - 1
        const mapLengthY = map.length.y - 1
        
        y++
        x++

        if (y < 0 || x < 0) { return false }
        
        if (y > (mapLengthY) || x > (mapLengthX)) { return false }

        const mapSpotsPositionCode = mapSpots[position.y + 1][position.x + 1]
        const mapSpotsNextPositionCode = mapSpots[y][x]

        if (!mapSpotsNextPositionCode) { return false }
        
        if (mapSpotsNextPositionCode >= 1000 && mapSpotsPositionCode !== mapSpotsNextPositionCode)
        {
            const mapId = String(mapSpotsNextPositionCode).slice(0, 3)
            const actionCode = String(mapSpotsNextPositionCode).slice(3)

            switch (actionCode)
            {
                case '2':
                    position.y = mapLengthY - 1
                break
                case '3':
                    position.y = -1
                break
                case '4':
                    position.x = -1
                break
                case '5':
                    position.x = mapLengthX - 1 
                break
            }

            mapActionsHandler({ mapId:  mapId})
        }

        return true
    }

    function ArrowLeft()
    {   
        if (movement(position.x - 1, position.y)) { --position.x }

        position.side = 'left'
        return position
    }

    function ArrowRight()
    {
        if (movement(position.x + 1, position.y)) { ++position.x }

        position.side = 'right'
        return position
    }

    function ArrowUp()
    {
        if (movement(position.x, position.y - 1)) { --position.y }

        position.side = 'up'
        return position
    }

    function ArrowDown()
    {
        if (movement(position.x, position.y + 1)) { ++position.y }

        position.side = 'down'
        return position
    }

    return {
        ArrowLeft,
        ArrowRight,
        ArrowUp,
        ArrowDown
    }
}