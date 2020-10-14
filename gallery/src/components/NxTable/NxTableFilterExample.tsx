/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow,
  NxFilterInput
} from '@sonatype/react-shared-components';
import { toLower, uniq } from 'ramda';

const tableData = [
  {name: 'Anna', country: 'USA'},
  {name: 'Lean', country: 'France'},
  {name: 'Louis', country: 'France'},
  {name: 'Zach', country: 'Colombia'},
  {name: 'Jimmy', country: 'Germany'}
];

interface Row { name: string; country: string };

const NxTableFilterExample = () => {

  const [rows, setRows] = useState(tableData);
  const [nameFilter, setNameFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  const listId = 'countryList';
  const countries = uniq(tableData.map((row: Row) => {
    return row.country;
  }).sort());

  const applyFilter = (rows: Row[], name: string, country: string) => {
    let filteredRows = rows;
    if (name !== '') {
      filteredRows = filteredRows.filter(
          (row: Row) => toLower(row.name).includes(toLower(name))
      );
    }
    if (country !== '') {
      filteredRows = filteredRows.filter(
          (row: Row) => toLower(row.country).includes(toLower(country))
      );
    }
    return filteredRows;
  };

  const onFilterNameChange = (filter: string) => {
    setNameFilter(filter);
    setRows(applyFilter(tableData, filter, countryFilter));
  };

  const onFilterCountryChange = (filter: string) => {
    setCountryFilter(filter);
    setRows(applyFilter(tableData, nameFilter, filter));
  };

  return (
    <NxTable>
      <NxTableHead>
        <NxTableRow>
          <NxTableCell>Name</NxTableCell>
          <NxTableCell>Country</NxTableCell>
        </NxTableRow>
        <NxTableRow>
          <NxTableCell isFilterHeader>
            <NxFilterInput placeholder="Type a name"
                           onChange={onFilterNameChange}
                           value={nameFilter}/>
          </NxTableCell>
          <NxTableCell isFilterHeader>
            <NxFilterInput placeholder="Select a country"
                           list={listId}
                           onChange={onFilterCountryChange}
                           value={countryFilter}/>
            <datalist id={listId}>
              {
                countries.map((country: string) => (
                  <option key={country} value={country} />
                ))
              }
            </datalist>
          </NxTableCell>
        </NxTableRow>
      </NxTableHead>
      {rows.length === 0 &&
        <NxTableBody emptyMessage="No data" />
      }
      {rows.length > 0 &&
        <NxTableBody>
          {rows.map((row: Row) =>
            <NxTableRow key={row.name.concat(row.country)}>
              <NxTableCell>{row.name}</NxTableCell>
              <NxTableCell>{row.country}</NxTableCell>
            </NxTableRow>
          )}
        </NxTableBody>
      }
    </NxTable>
  );
};

export default NxTableFilterExample;
