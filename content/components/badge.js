// Copyright 2015, 2016 Parity Technologies (UK) Ltd.
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

import classnames from 'classnames';
import { h } from 'preact';

import styles from './badge.css';

const Badge = ({ children, ...props }) => {
  const { className = '', size = 16, src, style = {}, title } = props;

  const imgClassName = classnames(styles.badge, className);

  return (
    <img
      className={ imgClassName }
      src={ src }
      style={ { height: size, width: size, ...style } }
      title={ title }
    />
  );
};

export default Badge;
