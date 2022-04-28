import { filters, sorters, reducers } from '../index';
import { colors, countries, OS } from '../goods';

describe('all functions', () => {
  describe('filters', () => {
    describe('brandFilter', () => {
      it('returns correct array', () => {
        expect(filters.brandFilter('Motorola')).toStrictEqual([
          {
            brand: 'Motorola',
            model: 'Moto G60',
            memory: 128,
            price: 8999,
            haveDiscount: true,
            isStoredInFacility: true,
            color: colors.grey,
            country: countries.usa,
            os: OS.android,
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/220713124.jpg',
          },
        ]);
      });
    });

    describe('colorFilter', () => {
      it('returns correct array', () => {
        expect(filters.colorFilter(colors.blue)).toStrictEqual([
          {
            brand: 'Samsung',
            color: 'blue',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: false,
            memory: 128,
            model: 'Galaxy A52',
            os: 'Android',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/166279502.jpg',
            price: 10999,
          },
        ]);
      });
    });

    describe('modelFilter', () => {
      it('returns correct array', () => {
        expect(filters.modelFilter('iPhone 13 mini')).toStrictEqual([
          {
            brand: 'Apple',
            color: 'green',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 512,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221273383.jpg',
            price: 35999,
          },
          {
            brand: 'Apple',
            color: 'red',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 512,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221273383.jpg',
            price: 35999,
          },
          {
            brand: 'Apple',
            color: 'pink',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221268401.jpg',
            price: 25999,
          },
        ]);
      });
    });

    describe('memoryFilter', () => {
      it('returns correct array', () => {
        expect(filters.memoryFilter(64)).toStrictEqual([
          {
            brand: 'Apple',
            color: 'purple',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 11',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/37393876.jpg',
            price: 19999,
          },
          {
            brand: 'Xiaomi',
            color: 'grey',
            country: 'China',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Redmi Note 10S',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/179450853.jpg',
            price: 8999,
          },
          {
            brand: 'Samsung',
            color: 'white',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Galaxy M12',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
            price: 6499,
          },
          {
            brand: 'Apple',
            color: 'green',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 12',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/173867780.jpg',
            price: 24999,
          },
          {
            brand: 'Apple',
            color: 'purple',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 12',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/173867780.jpg',
            price: 24999,
          },
          {
            brand: 'Samsung',
            color: 'black',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Galaxy M12',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
            price: 6499,
          },
        ]);
      });
    });

    describe('priceFilter', () => {
      it('returns correct array', () => {
        expect(filters.priceFilter(8999)).toStrictEqual([
          {
            brand: 'Xiaomi',
            color: 'grey',
            country: 'China',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Redmi Note 10S',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/179450853.jpg',
            price: 8999,
          },
          {
            brand: 'Motorola',
            color: 'grey',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Moto G60',
            os: 'Android',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/220713124.jpg',
            price: 8999,
          },
        ]);
      });
    });

    describe('countryFilter', () => {
      it('returns correct array', () => {
        expect(filters.countryFilter(countries.usa)).toStrictEqual([
          {
            brand: 'Apple',
            color: 'purple',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 11',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/37393876.jpg',
            price: 19999,
          },
          {
            brand: 'Apple',
            color: 'red',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 256,
            model: 'iPhone 13',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221212843.jpg',
            price: 33999,
          },
          {
            brand: 'Apple',
            color: 'green',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 512,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221273383.jpg',
            price: 35999,
          },
          {
            brand: 'Apple',
            color: 'gold',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 13 Pro Max',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221216158.jpg',
            price: 43999,
          },
          {
            brand: 'Apple',
            color: 'green',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 12',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/173867780.jpg',
            price: 24999,
          },
          {
            brand: 'Apple',
            color: 'purple',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 12',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/173867780.jpg',
            price: 24999,
          },
          {
            brand: 'Motorola',
            color: 'grey',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Moto G60',
            os: 'Android',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/220713124.jpg',
            price: 8999,
          },
          {
            brand: 'Apple',
            color: 'red',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 512,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221273383.jpg',
            price: 35999,
          },
          {
            brand: 'Apple',
            color: 'black',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 256,
            model: 'iPhone 13',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221212843.jpg',
            price: 33999,
          },
          {
            brand: 'Apple',
            color: 'purple',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 12',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/175435401.jpg',
            price: 27999,
          },
          {
            brand: 'Apple',
            color: 'pink',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 13',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/221214152.jpg',
            price: 29999,
          },
          {
            brand: 'Apple',
            color: 'pink',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221268401.jpg',
            price: 25999,
          },
          {
            brand: 'Apple',
            color: 'gold',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 256,
            model: 'iPhone 13 Pro Max',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221268401.jpg',
            price: 48999,
          },
        ]);
      });
    });

    describe('osFilter', () => {
      it('returns correct array', () => {
        expect(filters.osFilter(OS.android)).toStrictEqual([
          {
            brand: 'Samsung',
            color: 'white',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Galaxy M52',
            os: 'Android',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/225753307.jpg',
            price: 12999,
          },
          {
            brand: 'Xiaomi',
            color: 'grey',
            country: 'China',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Redmi Note 10S',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/179450853.jpg',
            price: 8999,
          },
          {
            brand: 'Samsung',
            color: 'blue',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: false,
            memory: 128,
            model: 'Galaxy A52',
            os: 'Android',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/166279502.jpg',
            price: 10999,
          },
          {
            brand: 'Xiaomi',
            color: 'grey',
            country: 'China',
            haveDiscount: false,
            isStoredInFacility: false,
            memory: 128,
            model: 'Redmi Note 11',
            os: 'Android',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/250762458.jpg',
            price: 8499,
          },
          {
            brand: 'Samsung',
            color: 'white',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Galaxy M12',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
            price: 6499,
          },
          {
            brand: 'Samsung',
            color: 'purple',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Galaxy A32',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/165917377.jpg',
            price: 9499,
          },
          {
            brand: 'Samsung',
            color: 'green',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Galaxy M52',
            os: 'Android',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/225753307.jpg',
            price: 12999,
          },
          {
            brand: 'Sony',
            color: 'black',
            country: 'Japan',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 512,
            model: 'Xperia 1 III',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/215587054.jpg',
            price: 39999,
          },
          {
            brand: 'Sony',
            color: 'gold',
            country: 'Japan',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 512,
            model: 'Xperia 1 III',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/215587054.jpg',
            price: 39999,
          },
          {
            brand: 'Samsung',
            color: 'black',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Galaxy M12',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
            price: 6499,
          },
          {
            brand: 'Motorola',
            color: 'grey',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Moto G60',
            os: 'Android',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/220713124.jpg',
            price: 8999,
          },
        ]);
      });
    });

    describe('rangeFilter', () => {
      it('returns correct array', () => {
        expect(filters.rangeFilter(0, 10000)).toStrictEqual([
          {
            brand: 'Xiaomi',
            color: 'grey',
            country: 'China',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Redmi Note 10S',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/179450853.jpg',
            price: 8999,
          },
          {
            brand: 'Xiaomi',
            color: 'grey',
            country: 'China',
            haveDiscount: false,
            isStoredInFacility: false,
            memory: 128,
            model: 'Redmi Note 11',
            os: 'Android',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/250762458.jpg',
            price: 8499,
          },
          {
            brand: 'Samsung',
            color: 'white',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Galaxy M12',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
            price: 6499,
          },
          {
            brand: 'Samsung',
            color: 'purple',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Galaxy A32',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/165917377.jpg',
            price: 9499,
          },
          {
            brand: 'Samsung',
            color: 'black',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Galaxy M12',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
            price: 6499,
          },
          {
            brand: 'Motorola',
            color: 'grey',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Moto G60',
            os: 'Android',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/220713124.jpg',
            price: 8999,
          },
        ]);
      });
    });
  });

  describe('reducers', () => {
    describe('minPriceReducer', () => {
      it('returns minimum', () => {
        expect(reducers.minPriceReducer()).toStrictEqual(6499);
      });
    });

    describe('maxPriceReducer', () => {
      it('returns minimum', () => {
        expect(reducers.maxPriceReducer()).toStrictEqual(48999);
      });
    });
  });

  describe('sorter', function () {
    describe('toMaxSorter', () => {
      it('returns correct array', () => {
        expect(sorters.toMaxSorter()).toStrictEqual([
          {
            brand: 'Apple',
            color: 'gold',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 256,
            model: 'iPhone 13 Pro Max',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221268401.jpg',
            price: 48999,
          },
          {
            brand: 'Apple',
            color: 'gold',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 13 Pro Max',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221216158.jpg',
            price: 43999,
          },
          {
            brand: 'Sony',
            color: 'black',
            country: 'Japan',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 512,
            model: 'Xperia 1 III',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/215587054.jpg',
            price: 39999,
          },
          {
            brand: 'Sony',
            color: 'gold',
            country: 'Japan',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 512,
            model: 'Xperia 1 III',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/215587054.jpg',
            price: 39999,
          },
          {
            brand: 'Apple',
            color: 'green',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 512,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221273383.jpg',
            price: 35999,
          },
          {
            brand: 'Apple',
            color: 'red',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 512,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221273383.jpg',
            price: 35999,
          },
          {
            brand: 'Apple',
            color: 'red',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 256,
            model: 'iPhone 13',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221212843.jpg',
            price: 33999,
          },
          {
            brand: 'Apple',
            color: 'black',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 256,
            model: 'iPhone 13',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221212843.jpg',
            price: 33999,
          },
          {
            brand: 'Apple',
            color: 'pink',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 13',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/221214152.jpg',
            price: 29999,
          },
          {
            brand: 'Apple',
            color: 'purple',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 12',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/175435401.jpg',
            price: 27999,
          },
          {
            brand: 'Apple',
            color: 'pink',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221268401.jpg',
            price: 25999,
          },
          {
            brand: 'Apple',
            color: 'green',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 12',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/173867780.jpg',
            price: 24999,
          },
          {
            brand: 'Apple',
            color: 'purple',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 12',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/173867780.jpg',
            price: 24999,
          },
          {
            brand: 'Apple',
            color: 'purple',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 11',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/37393876.jpg',
            price: 19999,
          },
          {
            brand: 'Samsung',
            color: 'white',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Galaxy M52',
            os: 'Android',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/225753307.jpg',
            price: 12999,
          },
          {
            brand: 'Samsung',
            color: 'green',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Galaxy M52',
            os: 'Android',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/225753307.jpg',
            price: 12999,
          },
          {
            brand: 'Samsung',
            color: 'blue',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: false,
            memory: 128,
            model: 'Galaxy A52',
            os: 'Android',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/166279502.jpg',
            price: 10999,
          },
          {
            brand: 'Samsung',
            color: 'purple',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Galaxy A32',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/165917377.jpg',
            price: 9499,
          },
          {
            brand: 'Xiaomi',
            color: 'grey',
            country: 'China',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Redmi Note 10S',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/179450853.jpg',
            price: 8999,
          },
          {
            brand: 'Motorola',
            color: 'grey',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Moto G60',
            os: 'Android',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/220713124.jpg',
            price: 8999,
          },
          {
            brand: 'Xiaomi',
            color: 'grey',
            country: 'China',
            haveDiscount: false,
            isStoredInFacility: false,
            memory: 128,
            model: 'Redmi Note 11',
            os: 'Android',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/250762458.jpg',
            price: 8499,
          },
          {
            brand: 'Samsung',
            color: 'white',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Galaxy M12',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
            price: 6499,
          },
          {
            brand: 'Samsung',
            color: 'black',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Galaxy M12',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
            price: 6499,
          },
        ]);
      });
    });

    describe('toMinSorter', () => {
      it('returns correct array', () => {
        expect(sorters.toMinSorter()).toStrictEqual([
          {
            brand: 'Samsung',
            color: 'white',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Galaxy M12',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
            price: 6499,
          },
          {
            brand: 'Samsung',
            color: 'black',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Galaxy M12',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
            price: 6499,
          },
          {
            brand: 'Xiaomi',
            color: 'grey',
            country: 'China',
            haveDiscount: false,
            isStoredInFacility: false,
            memory: 128,
            model: 'Redmi Note 11',
            os: 'Android',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/250762458.jpg',
            price: 8499,
          },
          {
            brand: 'Xiaomi',
            color: 'grey',
            country: 'China',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 64,
            model: 'Redmi Note 10S',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/179450853.jpg',
            price: 8999,
          },
          {
            brand: 'Motorola',
            color: 'grey',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Moto G60',
            os: 'Android',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/220713124.jpg',
            price: 8999,
          },
          {
            brand: 'Samsung',
            color: 'purple',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Galaxy A32',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/165917377.jpg',
            price: 9499,
          },
          {
            brand: 'Samsung',
            color: 'blue',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: false,
            memory: 128,
            model: 'Galaxy A52',
            os: 'Android',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/166279502.jpg',
            price: 10999,
          },
          {
            brand: 'Samsung',
            color: 'white',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Galaxy M52',
            os: 'Android',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/225753307.jpg',
            price: 12999,
          },
          {
            brand: 'Samsung',
            color: 'green',
            country: 'Korea',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'Galaxy M52',
            os: 'Android',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/225753307.jpg',
            price: 12999,
          },
          {
            brand: 'Apple',
            color: 'purple',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 11',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/37393876.jpg',
            price: 19999,
          },
          {
            brand: 'Apple',
            color: 'green',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 12',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/173867780.jpg',
            price: 24999,
          },
          {
            brand: 'Apple',
            color: 'purple',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 64,
            model: 'iPhone 12',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/173867780.jpg',
            price: 24999,
          },
          {
            brand: 'Apple',
            color: 'pink',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221268401.jpg',
            price: 25999,
          },
          {
            brand: 'Apple',
            color: 'purple',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 12',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/175435401.jpg',
            price: 27999,
          },
          {
            brand: 'Apple',
            color: 'pink',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 13',
            os: 'iOS',
            photo:
              'https://content.rozetka.com.ua/goods/images/big/221214152.jpg',
            price: 29999,
          },
          {
            brand: 'Apple',
            color: 'red',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 256,
            model: 'iPhone 13',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221212843.jpg',
            price: 33999,
          },
          {
            brand: 'Apple',
            color: 'black',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 256,
            model: 'iPhone 13',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221212843.jpg',
            price: 33999,
          },
          {
            brand: 'Apple',
            color: 'green',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 512,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221273383.jpg',
            price: 35999,
          },
          {
            brand: 'Apple',
            color: 'red',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 512,
            model: 'iPhone 13 mini',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221273383.jpg',
            price: 35999,
          },
          {
            brand: 'Sony',
            color: 'black',
            country: 'Japan',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 512,
            model: 'Xperia 1 III',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/215587054.jpg',
            price: 39999,
          },
          {
            brand: 'Sony',
            color: 'gold',
            country: 'Japan',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 512,
            model: 'Xperia 1 III',
            os: 'Android',
            photo:
              'https://content1.rozetka.com.ua/goods/images/big/215587054.jpg',
            price: 39999,
          },
          {
            brand: 'Apple',
            color: 'gold',
            country: 'USA',
            haveDiscount: true,
            isStoredInFacility: true,
            memory: 128,
            model: 'iPhone 13 Pro Max',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221216158.jpg',
            price: 43999,
          },
          {
            brand: 'Apple',
            color: 'gold',
            country: 'USA',
            haveDiscount: false,
            isStoredInFacility: true,
            memory: 256,
            model: 'iPhone 13 Pro Max',
            os: 'iOS',
            photo:
              'https://content2.rozetka.com.ua/goods/images/big/221268401.jpg',
            price: 48999,
          },
        ]);
      });
    });
  });
});
