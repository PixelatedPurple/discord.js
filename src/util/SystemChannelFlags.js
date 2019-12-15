'use strict';

const BitField = require('./BitField');

/**
 * Data structure that makes it easy to interact with a {@link Guild#systemChannelFlags} bitfield.
 * <info>Note that all event message types are enabled by default,
 * and by setting their corresponding flags you are disabling them</info>
 * @extends {BitField}
 */
class SystemChannelFlags extends BitField {}

/**
 * Numeric system channel flags. All available properties:
 * * `WELCOME_MESSAGE_DISABLED`
 * * `BOOST_MESSAGE_DISABLED`
 * @type {Object}
 */
SystemChannelFlags.FLAGS = {
  WELCOME_MESSAGE_DISABLED: 1 << 0,
  BOOST_MESSAGE_DISABLED: 1 << 1,
};

module.exports = SystemChannelFlags;
