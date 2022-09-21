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
  return goods.filter((rightMemory) => rightMemory.memory === memory)
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
  let pricesArr = goods.filter(n => { return n.price === n.price }).map(n => n.price);
  let minPrice = pricesArr.reduce((accum, price) => { return Math.min(accum, price) }, Infinity); 
  return minPrice;
};

const maxPriceReducer = () => {
  let pricesArr = goods.filter(n => { return n.price === n.price }).map(n => n.price);
  let maxPrice = pricesArr.reduce((accum, price) => { return Math.max(accum, price) }, -Infinity); 
  return maxPrice;
};

const toMaxSorter = () => {
  return goods.sort((a, b) => { return b.price - a.price});
};
const toMinSorter = () => {
  return goods.sort((a, b) => { return a.price - b.price});
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
