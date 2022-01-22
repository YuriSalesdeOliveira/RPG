import { map as gramMap } from '../data/gramMap/map.js'
import { map as snowMap } from '../data/snowMap/map.js'
import { map as farmMap } from '../data/farmMap/map.js'

class Map
{
    constructor()
    {
        this.maps = {
            100: gramMap,
            101: snowMap,
            102: farmMap
        }
    }

    getMap(mapId)
    {
        mapId = parseInt(mapId)

        if (mapId) { return this.maps[mapId] }

        return this.maps[100]
    }
}

export default new Map