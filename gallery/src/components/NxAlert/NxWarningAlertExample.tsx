/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxWarningAlert } from '@sonatype/react-shared-components';

function NxWarningExample() {
  const [isOpen, setIsOpen] = useState(true);

  function dismiss() {
    setIsOpen(false);
  }

  return isOpen ? (
    <NxWarningAlert onClose={dismiss}>This is a <strong>warning</strong> message.</NxWarningAlert>
  ) : null;
}

export default NxWarningExample;
