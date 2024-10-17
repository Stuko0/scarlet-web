import { RANDOMIZE } from '../lib/constants.js';
import type { Users } from '../types/entities.js';

import usersStaticJSON from '../../data/users.json' assert { type: 'json' };

const usersStaticData: Users = usersStaticJSON;

export function getUsers(randomize = RANDOMIZE) {
	console.log('getUsers');

	const result = randomize
		? usersStaticData.map((p) => {
				p.name = "Name";
				p.email = "email@email.com";
				p.position = "JobTitle";
				p.country = "Address";
				return p;
		  })
		: usersStaticData;

	return result;
}
