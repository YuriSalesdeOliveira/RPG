import { map as gramMap } from './gramMap/map.js'
import { map as snowMap } from './snowMap/map.js'

class Map
{
    constructor()
    {
        this.maps = {
            101: gramMap,
            102: snowMap
        }
    }

    getMap(mapId)
    {
        if (mapId) { return this.maps[mapId] }

        return this.maps[101]
    }
}

export default new Map