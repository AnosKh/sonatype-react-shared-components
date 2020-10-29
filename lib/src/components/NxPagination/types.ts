/**
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ValidationMap } from 'react';
import * as PropTypes from 'prop-types';

export interface Props {
  className?: string | null;
  pageCount: number;
  currentPage: number;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean | null;
}

export const propTypes: ValidationMap<Props> = {
  className: PropTypes.string,
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};