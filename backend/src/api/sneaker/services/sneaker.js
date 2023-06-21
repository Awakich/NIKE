'use strict';

/**
 * sneaker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sneaker.sneaker');
