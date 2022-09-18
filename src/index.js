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
  return goods.filter((rightModel) => rightModel.Model === model)
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  return goods.filter((rightMemory) => rightModel.Memory === memory)
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  return goods.filter((rightPrice) => rightModel.Price === price)
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
  return goods.rвsuce((item) => );
};

const maxPriceReducer = () => {};

const toMaxSorter = () => {
  return goods.sort((a, b) => a - b)
};
const toMinSorter = () => {
  return goods.sort((a, b) => b -a)
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
