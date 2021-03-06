/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { simpleTest } = require('./testUtils');

describe('NxTreeViewRadioSelect', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTreeViewRadioSelect');
  });

  const selector = '#nx-tree-view-radio-select-example .nx-tree-view--select';

  it('looks right', simpleTest(selector));
});
