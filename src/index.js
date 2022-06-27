import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
return goods.filter((goodBrand) => goodBrand.brand);
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
return goods.filter((good) => (good.price >= from && good.price <= to));
};

const minPriceReducer = () => {};

const maxPriceReducer = () => {};

const toMaxSorter = () => {};
const toMinSorter = () => {};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
