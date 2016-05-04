'use strict';

const HttpStatusCodeService = {

  verbose(statusCode) {
    switch (statusCode) {
      case 200: return '200 OK';
      case 201: return '201 Created';
      case 204: return '204 No Content';
      case 400: return '400 Bad Request';
      case 401: return '401 Unauthorized';
      case 403: return '403 Forbidden';
      case 404: return '404 Not Found';
      case 409: return '409 Conflict';
      case 500: return '500 Internal Server Error';
      default: return `Unsupported status code ${statusCode}`;
    }
  }
};

export default HttpStatusCodeService;
