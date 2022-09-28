import { URL } from 'url'
import { normalize } from 'path'
import { SAEON_SPATIALDATA_ADDRESS_APP04 } from '../config.js'

const {
  protocol,
  hostname,
  host,
  pathname: destinationPath,
} = new URL(SAEON_SPATIALDATA_ADDRESS_APP04)

export default (requestDetail, { pathname: originPathname, search }) => {
  const port = originPathname.match(/^\/saeon-spatialdata\/app04.saeon.ac.za\/\d{4}/)[0].slice(-4)
  requestDetail.protocol = protocol

  return {
    headers: Object.assign(requestDetail.requestOptions.headers, { host }),
    hostname,
    port,
    path: normalize(
      `${destinationPath}${originPathname.replace(
        /\/saeon-spatialdata\/app04.saeon.ac.za\/\d{4}\//,
        '/'
      )}${search}`
    ),
  }
}
