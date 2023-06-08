import { URL } from 'url'
import { normalize } from 'path'
import { LOGNET_ADDRESS } from '../config.js'

const { protocol, host, hostname, port, pathname: destinationPathname } = new URL(LOGNET_ADDRESS)

export default (requestDetail, { pathname: originPathname, search }) => {
  requestDetail.protocol = protocol

  return {
    headers: Object.assign(requestDetail.requestOptions.headers, { host }),
    hostname,
    port,
    path: normalize(`${destinationPathname}${originPathname.replace(/\/lognet\//, '/')}${search}`),
  }
}
