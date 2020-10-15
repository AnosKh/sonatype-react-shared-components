/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';

export interface Props {
  id?: string | null;
  percent: number;
  outerRadius: number;
  innerRadius: number;
  fillColors: string[];
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  id: PropTypes.string,
  percent: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
  innerRadius: PropTypes.number.isRequired,
  fillColors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
