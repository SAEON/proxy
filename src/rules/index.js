import { URL } from 'url'
import deprecatedElasticsearchRule from './_elasticsearch-deprecated.js'
import elasticsearch714Rule from './_elasticsearch-7.14.js'
import elasticsearch81Rule from './_elasticsearch-8.x.js'
import saeonGeoServersRule from './_saeon-geoservers.js'
import saeonGeoServerApp04Rule from './_saeon-geoserver-app04.js'
import saeonGeoServerApp04Rule2 from './_saeon-geoserver-app04-2.js'
import corsRule from './_cors.js'
import ahocevarRule from './_ahocevar.js'
import terrestrisRule from './_terrestris.js'
import archiveSaeonAcZa from './_archive.saeon.ac.za.js'
import lognetRule from './_lognet.js'

const beforeSendRequest = async requestDetail => {
  const url = new URL(requestDetail.url)
  const { pathname } = url

  const test = p => pathname.includes(p)

  try {
    const proxiedRequest = test('/elasticsearch/8.x')
      ? elasticsearch81Rule(requestDetail, url)
      : test('/elasticsearch/7.14')
      ? elasticsearch714Rule(requestDetail, url)
      : test('/elasticsearch')
      ? deprecatedElasticsearchRule(requestDetail, url)
      : test('/saeon-spatialdata/spatialdata.saeon.ac.za')
      ? saeonGeoServersRule(requestDetail, url)
      : test('/saeon-spatialdata/geoserver.saeon.ac.za')
      ? saeonGeoServerApp04Rule(requestDetail, url)
      : test('/saeon-spatialdata/app04.saeon.ac.za')
      ? saeonGeoServerApp04Rule2(requestDetail, url)
      : test('/ahocevar')
      ? ahocevarRule(requestDetail, url)
      : test('/terrestris')
      ? terrestrisRule(requestDetail, url)
      : test('/saeon-archive')
      ? archiveSaeonAcZa(requestDetail, url)
      : test('/lognet')
      ? lognetRule(requestDetail, url)
      : undefined

    if (!proxiedRequest) {
      throw new Error('No rule found')
    }

    Object.assign(requestDetail.requestOptions, proxiedRequest)
    return requestDetail
  } catch (error) {
    return {
      response: {
        statusCode: 404,
        header: { 'Content-Type': 'application/json' },
        body: `{"ERROR": "Unable to proxy request to ${requestDetail.url}". ${error}}`,
      },
    }
  }
}

const beforeSendResponse = async (requestDetail, responseDetail) => {
  const url = new URL(requestDetail.url)
  const { pathname } = url

  const ctx = corsRule(requestDetail, responseDetail)

  const test = p => pathname.includes(p)
  // if (test('/saeon-archive')) {
  //   const { body } = responseDetail.response
  //   // const newBody = body
  //   //   .toString()
  //   //   .replace(/http:\/\/archive\.saeon\.ac\.za/g, 'http://localhost:8001/saeon-archive')

  //   const ctx_ = ctx || {
  //     response: {
  //       ...responseDetail.response,
  //     },
  //   }

  // ctx_.response.body = newBody

  // return ctx_
  // }

  return ctx
}

export default {
  beforeSendRequest,
  beforeSendResponse,
}
