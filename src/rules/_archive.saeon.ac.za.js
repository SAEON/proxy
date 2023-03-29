import { URL } from 'url'
import { normalize } from 'path'

const {
  host,
  hostname,
  port,
  pathname: destinationPathname,
} = new URL('http://archive.saeon.ac.za')

export default (requestDetail, { pathname: originPathname, search }) => {
  return {
    headers: Object.assign(requestDetail.requestOptions.headers, { host }),
    hostname,
    port,
    path: normalize(
      `${destinationPathname}${originPathname.replace(/\/saeon-archive/, '')}${search}`
    ),
  }
}
