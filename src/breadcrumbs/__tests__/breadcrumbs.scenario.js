/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {StyledLink} from '../../link/index.js';
import {Breadcrumbs} from '../index.js';

export default function() {
  return (
    <Breadcrumbs>
      <StyledLink href="#">Parent Page</StyledLink>
      <StyledLink href="#">Sub-Parent Page</StyledLink>
      <span>Current Page</span>
    </Breadcrumbs>
  );
}
