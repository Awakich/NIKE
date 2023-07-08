'use strict';

/**
 * not-loading service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::not-loading.not-loading');
