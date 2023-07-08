'use strict';

/**
 * not-loading router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::not-loading.not-loading');
