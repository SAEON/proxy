import 'dotenv/config'

export const AHOCEVAR_ADDRESS = 'https://ahocevar.com'

export const ENABLE_WEB_INTERFACE = true

export const PORT = 8001

export const SAEON_SPATIALDATA_ADDRESS = 'https://spatialdata.saeon.ac.za'

export const SAEON_SPATIALDATA_ADDRESS_APP04 = 'http://geoserver.saeon.ac.za'

export const THROTTLE = 10000

export const WEB_INTERFACE_PORT = 8002

export const ELASTICSEARCH_NEXT_ADDRESS =
  process.env.ELASTICSEARCH_NEXT_ADDRESS || 'http://localhost:9200'
export const ELASTICSEARCH_7_14_ADDRESS =
  process.env.ELASTICSEARCH_7_14_ADDRESS || 'http://localhost:9200'
export const ELASTICSEARCH_8_X_ADDRESS =
  process.env.ELASTICSEARCH_8_X_ADDRESS || 'http://localhost:9200'

export const TERRESTRIS_ADDRESS = 'https://ows.terrestris.de'

export const ALLOWED_ES_INDICES = [
  'saeon-odp-search',
  'saeon-odp-catalogue-search',
  'nccis-qgis-index',
]
