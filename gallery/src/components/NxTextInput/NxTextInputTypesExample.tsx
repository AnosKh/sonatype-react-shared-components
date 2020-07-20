/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulTextInput } from '@sonatype/react-shared-components';

export default function NxTextInputSimpleExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  return (
    <div className="nx-form-group">
      <label className="nx-label">
        <span className="nx-label-text">Number</span>
        <NxStatefulTextInput type="number" validator={validator}/>
      </label>
      <label className="nx-label">
        <span className="nx-label-text">Date</span>
        <NxStatefulTextInput type="date" validator={validator}/>
      </label>
      <label className="nx-label">
        <span className="nx-label-text">Email</span>
        <NxStatefulTextInput type="email" validator={validator}/>
      </label>
      <label className="nx-label">
        <span className="nx-label-text">Range</span>
        <NxStatefulTextInput type="range" validator={validator} />
      </label>
    </div>
  );
};