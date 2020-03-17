/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import { NxRadio } from '@sonatype/react-shared-components';

export default function NxRadioNowrapExample() {
  const [color, setColor] = useState<string | null>('red');

  const appliedColor = color || 'black';

  return (
    <>
      <p style={{color: appliedColor}}>Selected Color: {color}</p>

      <div style={{width: '40px', border: '1px solid red'}}>
        Some text
        {' '}
        <NxRadio name="color3" value="red" onChange={setColor} isChecked={color === 'red'}>
          <span style={{color: 'red'}}>Red color</span>
        </NxRadio>
        {' '}
        <NxRadio name="color3" value="green" onChange={setColor} isChecked={color === 'green'}>
          <span style={{color: 'green'}}>Green color</span>
        </NxRadio>
        {' '}
        some other text
      </div>
    </>
  );
}
