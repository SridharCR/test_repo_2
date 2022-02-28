import React from 'react';

import DynamicTable from '@atlaskit/dynamic-table';

import { head, rows } from './data';

export default function Insurance() {
  console.log("Sridhar head",head)
  console.log("Sridhar rows",rows)
  return (
    <DynamicTable
      head={head}
      rows={rows}
      rowsPerPage={15}
      defaultPage={1}
      loadingSpinnerSize="large"
      isRankable
    />
  );
}