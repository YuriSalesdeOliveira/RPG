export const useCharacter = (character, map, mapActionsHandler) => {

    const position = {
        x: parseInt(character.element.getAttribute('data-x')),
        y: parseInt(character.element.getAttribute('data-y')),
        side: parseInt(character.element.getAttribute('data-side'))
    }

    function movement(x, y)
    {   
        const mapSpots = map.mapSpots

        if (y < 0 || x < 0) { return false }
        
        if (y > (mapSpots.length - 1) || x > (mapSpots[y].length - 1)) { return false }

        const mapSpotsPositionCode = mapSpots[position.y][position.x]
        const mapSpotsNextPositionCode = mapSpots[y][x]

        if (!mapSpotsNextPositionCode) { return false }

        if (mapSpotsNextPositionCode >= 1000 && mapSpotsPositionCode !== mapSpotsNextPositionCode)
        {
            const mapId = String(mapSpotsNextPositionCode).slice(0, 3)
            const actionCode = String(mapSpotsNextPositionCode).slice(3)

            switch (actionCode)
            {
                case '2':
                    position.y = 15
                break
                case '3':
                    position.y = 0
                break
                case '4':
                    position.x = 0
                break
                case '5':
                    position.x = 15
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