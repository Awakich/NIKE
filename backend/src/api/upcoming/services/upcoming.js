'use strict';

/**
 * upcoming service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::upcoming.upcoming');
