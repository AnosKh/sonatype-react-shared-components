/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCheckbox } from '@sonatype/react-shared-components';
import { NxRadio } from '@sonatype/react-shared-components';

import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function NxFormLayoutExample() {
  return (
    <form className="nx-form">
      <div className="nx-form-row">
        <div className="nx-form-group">
          <label className="nx-label">
            <span className="nx-label__text">Horizontal layout</span>
            <span className="nx-sub-label">
              <NxFontAwesomeIcon icon={faCalendar}/>
              <span>Sub-label with icon.</span>
            </span>
            <input type="text" className="nx-text-input"/>
          </label>
        </div>
        <div className="nx-form-group">
          <label className="nx-label">
            <span className="nx-label__text">Second column</span>
            <span className="nx-sub-label">This is a sub-label.</span>
            <input type="text" className="nx-text-input"/>
          </label>
        </div>
        <div className="nx-form-group">
          <button className="nx-btn" type="button">Button</button>
        </div>
      </div>
      <div className="nx-form-row">
        <fieldset className="nx-fieldset">
          <legend className="nx-label nx-label--optional">Checkboxes</legend>
          <NxCheckbox isChecked={false}>Checkbox 1</NxCheckbox>
          <NxCheckbox isChecked={true}>Checkbox 2</NxCheckbox>
          <NxCheckbox isChecked={false}>Checkbox 3</NxCheckbox>
        </fieldset>
        <fieldset className="nx-fieldset">
          <legend className="nx-label">Radio buttons</legend>
          <NxRadio name="demo1" value="demo1" isChecked={true}>Radio Button 1</NxRadio>
          <NxRadio name="demo2" value="demo2" isChecked={false}>Radio Button 2</NxRadio>
          <NxRadio name="demo3" value="demo3" isChecked={true}>Radio Button 3</NxRadio>
        </fieldset>
      </div>
    </form>
  );
}
