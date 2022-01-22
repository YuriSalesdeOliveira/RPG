import { map as gramMap } from './gramMap/map.js'
import { map as snowMap } from './snowMap/map.js'
import { map as farmMap } from './farmMap/map.js'

class Map
{
    constructor()
    {
        this.maps = {
            101: gramMap,
            102: snowMap,
            103: farmMap
        }
    }

    getMap(mapId)
    {
        mapId = parseInt(mapId)

        if (mapId) { return this.maps[mapId] }

        return this.maps[101]
    }
}

export default new Map