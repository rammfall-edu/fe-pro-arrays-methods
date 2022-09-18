import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  return goods.filter((rightBrand) => rightBrand.brand === brand)
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  return goods.filter((rightColor) => rightColor.color === color)
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  return goods.filter((rightModel) => rightModel.model === model)
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  return goods.filter((rightMemory) => rightModel.memory === memory)
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  return goods.filter((rightPrice) => rightPrice.price === price)
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  return goods.filter((rightCountry) => rightCountry.country === country)
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  return goods.filter((rightOs) => rightOs.os === os)
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  return goods.filter((item) => (item.price >= from && item.price <= to));
};

const minPriceReducer = () => {
  return goods.reduce(() => {
    Math.min(goods.price)
  }, "")
};

const maxPriceReducer = () => {
  goods.reduce((acc, curr) => {
    return Math.max(acc, curr.price)
  }, 0)
};

const toMaxSorter = () => {
  return goods.sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  })
};
const toMinSorter = () => {
  goods.sort((a, b) => {
    if (b.price > a.price) return 1;
    if (b.price < a.price) return -1;
    return 0;
  })
};

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
