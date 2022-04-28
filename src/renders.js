import { goods } from './goods.js';
import { filters, reducers, sorters } from './index.js';

const summary = goods.reduce(
  (prev, { brand, country, os, color, model, memory, price }) => {
    prev.brand.add(brand);
    prev.color.add(color);
    prev.model.add(model);
    prev.memory.add(memory);
    prev.price.add(price);
    prev.country.add(country);
    prev.os.add(os);

    return prev;
  },
  {
    brand: new Set(),
    color: new Set(),
    model: new Set(),
    memory: new Set(),
    price: new Set(),
    country: new Set(),
    os: new Set(),
  }
);

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');

  Object.keys(summary).forEach((filter, filterIndex) => {
    const filterElem = document.createElement('section');
    filterElem.innerHTML = `
    <h2 class="section__title">
        ${filter[0].toUpperCase()}${filter.slice(1)}
    </h2>
`;
    const div = document.createElement('div');
    filterElem.append(div);
    sidebar.append(filterElem);

    summary[filter].forEach((item) => {
      const button = document.createElement('button');
      button.innerText = item;
      button.addEventListener('click', () => {
        const array = filters[`${filter}Filter`](item);

        renderList(array);
      });

      div.append(button);
    });
  });

  renderList(goods);

  function renderList(goods) {
    const list = document.querySelector('.list');
    list.innerHTML = '';

    goods.forEach(
      ({
        isStoredInFacility,
        photo,
        brand,
        model,
        haveDiscount,
        price,
        color,
        country,
        os,
        memory,
      }) => {
        const item = document.createElement('li');
        item.innerHTML = `
${haveDiscount ? '<div class="discount">Discount</div>' : ''}
<img src=${photo} />
<div class="content">
    <h3>${brand} - ${model}</h3>
    <p class="${!isStoredInFacility && 'through'}">${price} ₴</p>
    <div class="flex">color: <span class="color" style="background-color: ${color}"></span></div>
    <div class="flex">
        Country: ${country}
    </div>
    <div class="flex">
        Memory: ${memory}GB
    </div>
    <div class="flex">
        OS: ${os}
    </div>
</div>
`;

        list.append(item);
      }
    );
  }

  const rangeFrom = document.querySelector(
    'label:first-child input[type=range]'
  );
  const rangeTo = document.querySelector('label:last-child input[type=range]');
  rangeFrom.setAttribute('min', reducers.minPriceReducer().toString());
  rangeFrom.setAttribute('max', reducers.maxPriceReducer().toString());
  rangeFrom.value = reducers.minPriceReducer();
  rangeTo.setAttribute('min', reducers.minPriceReducer().toString());
  rangeTo.setAttribute('max', reducers.maxPriceReducer().toString());
  rangeTo.value = reducers.maxPriceReducer();

  rangeTo.addEventListener('change', (event) => {
    event.currentTarget.nextSibling.innerText = event.currentTarget.value;
    renderList(filters.rangeFilter(+rangeFrom.value, +rangeTo.value));
  });

  rangeFrom.addEventListener('change', (event) => {
    event.currentTarget.nextSibling.innerText = event.currentTarget.value;
    renderList(filters.rangeFilter(+rangeFrom.value, +rangeTo.value));
  });

  document.querySelectorAll('.sorters button').forEach((button) => {
    button.addEventListener('click', () => {
      const attr = button.getAttribute('data-sorter');
      renderList(sorters[`to${attr}Sorter`]());
    });
  });
});
