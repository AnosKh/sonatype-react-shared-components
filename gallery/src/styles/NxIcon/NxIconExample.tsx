/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxIconExample = () =>
  <div className="nx-btn-bar">
    <button className="nx-btn">
      {/* First icon has no left margin due to being in a horizontal container */}
      <svg className="nx-icon" style={{ height: '1em', width: '1em' }} viewBox="-1 -1 2 2">
        <circle r="1" />
      </svg>
      {/* Second icon has no left margin due to being immediately preceded by another icon */}
      <svg className="nx-icon" style={{ height: '1em', width: '1em' }} viewBox="-1 -1 2 2">
        <rect width="2" height="2" x="-1" y="-1" />
      </svg>
      <span>Some text between icons</span>
      {/* Third icon has both margins */}
      <svg className="nx-icon" style={{ height: '1em', width: '1em' }} viewBox="-1 -1 2 2">
        <rect width="2" height="2" x="-1" y="-1" />
      </svg>
      {/*
        * fourth icon has no left margin due to being preceded by another icon and no right margin due to being
        * the last element in a horizontal container
        */}
      <svg className="nx-icon" style={{ height: '1em', width: '1em' }} viewBox="-1 -1 2 2">
        <circle r="1" />
      </svg>
    </button>
  </div>;

export default NxIconExample;
