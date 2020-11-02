/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxNexusPageHeaderExample from './NxNexusPageHeaderExample';

const nxNexusPageHeaderExampleCode = require('!!raw-loader!./NxNexusPageHeaderExample').default;

const NxNexusPageHeaderPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxNexusPageHeader</code> is a React component encapsulating the Sonatype Nexus
        branded page header logo and structure. This header should only be used for products in the Sonatype Nexus
        family.
      </p>
      <h3 className="nx-h3 nx-tile__subsection-header">Props</h3>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Prop</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Required</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">productInfo</td>
            <td className="nx-cell">object</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              An object containing at least one field: <code className="nx-code">name</code>, the product
              name to display in the header. Additionally, this object may contain
              a <code className="nx-code">version</code> field holding the product's version number to display.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">homeLink</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A URL (typically relative) that navigates to the home page of the application. If this prop is
              present, the hexagon logo in the header will be a link to this home page.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">links</td>
            <td className="nx-cell">array</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              An optional array of objects describing navigation links to display in the middle section of the header.
              Each link object should contain a <code className="nx-code">name</code> to be displayed and
              a <code className="nx-code">href</code> for the link. Additionally, at most one link should include
              a <code className="nx-code">current</code> flag set to true indicating that it should be styled as
              the currently active link.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">children</td>
            <td className="nx-cell">ReactNode</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Optional additional JSX content that will be displayed at the right end of the header. Note that there
              are two sections of extra content divided with a vertical line. Which section(s) are used is a design
              consideration.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Modal Style Classes</h3>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row nx-table-row--header">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">.nx-page-header__extra-content-divider</td>
            <td className="nx-cell">CSS Class</td>
            <td className="nx-cell"></td>
            <td className="nx-cell">
              Applied to a <code className="nx-code">&lt;div&gt;</code> styles a vertical rule between objects.
            </td>
          </tr>
        </tbody>
      </table>
      <p className="nx-p">
        Note that the header below has been tweaked to display in the normal page flow for the sake of this
        demonstration. Normally it would automatically display at the top of the viewport using CSS fixed positioning.
      </p>
      <p className="nx-p">
        It is expected that consuming projects will modify the SCSS to use the correct colours to match their product's
        branding requirements.
      </p>
      <p className="nx-p">
        It is the responsibility of calling code to ensure the that content included in the header fits in a single
        row at all supported resolutions. Behavior of this component when content exceeds the space allowed is
        unspecified.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Nexus Page Header"
                        id="nx-page-header-complex-example"
                        codeExamples={nxNexusPageHeaderExampleCode}
                        liveExample={NxNexusPageHeaderExample}
                        defaultCheckeredBackground={true}>
      An instance of <code className="nx-code">NxNexusPageHeader</code> with branding, navigation and examples of
      extra content.
    </GalleryExampleTile>
  </>;

export default NxNexusPageHeaderPage;