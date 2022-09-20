import { colors, goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  let brands = goods.map(x => x.brand);
  for (let key of brands) { if (brand === key) { return goods.filter(x => { return x.brand === key }); }; };
};


/**
 * @param {string} color
 * @returns {*}
 */


const colorFilter = (color) => {
  for (let key in colors) { if (color === key) { return goods.filter(x => { return x.color === key }); }; };
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  let models = goods.map(x => x.model);
  for (let key of models) { if (model === key) { return goods.filter(x => { return x.model === key }); }; };
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  let memoryA = goods.map(x => x.memory);
  for (let key of memoryA) { if (memory === key) { return goods.filter(x => { return x.memory === key }); }; };
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  let priceA = goods.map(x => x.price);
  for (let key of priceA) { if (price === key) { return goods.filter(x => { return x.price === key }); }; };
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => { 
  let countryA = goods.map(x => x.country);
  for (let key of countryA) { if (country === key) { return goods.filter(x => { return x.country === key }); }; };
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => { 
  let osX = goods.map(x => x.os);
  for (let key of osX) { if (os === key) { return goods.filter(x => { return x.os === key }); }; };
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  let x = goods.map(x => x.price);
  for (let w in x) { if (from <= w <= to) { return goods.filter(y => { return y.price >= from && y.price <= to }); }; };
};

const minPriceReducer = () => {
  let costsArr = goods.filter(x => { return x.price === x.price }).map(x => x.price);
  let y = costsArr.reduce((accum, minPrice) => { return Math.min(accum, minPrice) }, Infinity); 
  return y;
};

const maxPriceReducer = () => {
  let costsArr = goods.filter(x => { return x.price === x.price }).map(x => x.price);
  let x = costsArr.reduce((accum, maxPrice) => { return Math.max(accum, maxPrice) }, -Infinity); 
  return x;
};


const toMaxSorter = () => {
  let i = goods.map(t => t);
  return i.sort((a, b) => { return b.price - a.price});
};

const toMinSorter = () => {
  let i = goods.map(t => t);
  return i.sort((a, b) => { return a.price - b.price});
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

//let x = goods.map(y => y.price);
//x.reduce((from, to) => { if (from === x.price) {return x.price >= from} })
//let costsArr = goods.filter(x => { return x.price === x.price }).map(x => x.price)

/*
document.querySelector("body > main > aside > section:nth-child(2) > div")
<div class="sorters">
                <button data-sorter="Max">
                    Max price first
                </button>
                <button data-sorter="Min">
                    Min price first
                </button>
            </div>

*/

/*
if (brand === 'Samsung') { return goods.filter(x => { return x.brand === 'Samsung' }) }
else if (brand === 'Apple') { return goods.filter(x => { return x.brand === 'Apple' }) }
else if (brand === 'Xiaomi') { return goods.filter(x => { return x.brand === 'Xiaomi' }) }
else if (brand === 'Sony') { return goods.filter(x => { return x.brand === 'Sony' }) }
else if (brand === 'Motorola') { return goods.filter(x => { return x.brand === 'Motorola' }) }
*/

/*
if (color === 'white') { return goods.filter((color) => { return color.color === colors.white }) }
else if (color === 'black') { return goods.filter((color) => { return color.color === colors.black }) }
else if (color === 'purple') { return goods.filter((color) => { return color.color === colors.purple }) }
else if (color === 'grey') { return goods.filter((color) => { return color.color === colors.grey }) }
else if (color === 'blue') { return goods.filter((color) => { return color.color === colors.blue }) }
else if (color === 'gold') { return goods.filter((color) => { return color.color === colors.gold }) }
else if (color === 'green') { return goods.filter((color) => { return color.color === colors.green }) }
else if (color === 'red') { return goods.filter((color) => { return color.color === colors.red }) }
else if (color === 'pink') { return goods.filter((color) => { return color.color === colors.pink }) }
*/
