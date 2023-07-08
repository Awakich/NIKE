'use strict';

/**
 * not-loading controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::not-loading.not-loading');
