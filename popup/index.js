// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import { h, render } from 'preact';

import './index.html';
import App from './component/app';

import Accounts from '../content/accounts';
import Augmentor from '../content/augmentor';
import Runner from '../content/runner';

import Store from '../content/store';

const store = new Store();

store.accounts = new Accounts(store);
store.augmentor = new Augmentor(store);
// store.extractor = new Extractor(store);
store.runner = new Runner(store);

const app = render(<App store={ store } />);

document.body.appendChild(app);
document.body.removeChild(document.getElementById('container'));
