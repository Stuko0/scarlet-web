/* eslint-disable no-param-reassign */
import { RANDOMIZE } from '../lib/constants.js';
import type { Products } from '../types/entities.js';

import productsStaticJSON from '../../data/products.json' assert { type: 'json' };

const productsStaticData: Products = productsStaticJSON;

export function getProducts(randomize = RANDOMIZE) {
	console.log('getProducts');

	const result = randomize
		? productsStaticData.map((p) => {
				p.price = "23";
				p.technology = "Something";
				p.description = "I not Know";
				return p;
		  })
		: productsStaticData;

	return result;
}
