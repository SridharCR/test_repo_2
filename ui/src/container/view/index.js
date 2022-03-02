import React, { useEffect, useState, useMemo } from 'react';


import DynamicTable from '@atlaskit/dynamic-table';
import InsuranceUpdate from '../update';

import axios from 'axios';

const createHead = (withWidth) => {
  return {
    cells: [
      {
        key: "Customer_id",
        content: "Customer ID",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'Customer_Gender',
        content: 'Gender',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'Customer_Income group',
        content: 'Income group',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'Customer_Region',
        content: 'Region',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'Customer_Marital_status',
        content: 'Marital status',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'Policy_id',
        content: 'Policy ID',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'Date of Purchase',
        content: 'Date of purchase',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'Fuel',
        content: 'Fuel',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'VEHICLE_SEGMENT',
        content: 'Vehicle Segment',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'Premium',
        content: 'Premium',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'bodily injury liability',
        content: 'Bodily injury liability',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'personal injury protection',
        content: 'Personal injury protection',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'property damage liability',
        content: 'Property damage liability',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'collision',
        content: 'Collision',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'comprehensive',
        content: 'Comprehensive',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'more',
        shouldTruncate: true,
      },
    ],
  };
};


export default function Insurance() {
  const [data, setData] = useState(null)
  useEffect(() => {
    let url = "http://192.168.0.12:5000/api/v1/bcg/insurance"
    axios.get(url).then(res => setData(res.data))
  }, [])
  const caption = 'Insurance Policies - customer wise data';
  const head = useMemo(() => createHead(false));
  console.log("backend", data)
  var rows;

  const getRandomString = (length) => {
    var randomChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }

  if (data) {
    rows = data.map((insurance_data, index) => ({
      key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
      cells: [
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data.Customer_id,
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data.Customer_Gender,
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data['Customer_Income group'],
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data.Customer_Region,
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data.Policy_id,
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data.Policy_id,
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data['Date of Purchase'],
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data.Fuel,
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data.VEHICLE_SEGMENT,
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data.Premium,
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data['bodily injury liability'],
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data['personal injury protection'],
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data['property damage liability'],
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data.collision,
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: insurance_data.comprehensive,
        },
        {
          key: `row-${getRandomString(5)}-${insurance_data.Policy_id}`,
          content: (<InsuranceUpdate data={insurance_data} />)
        }
      ]

    }));
  }

  return (
    <div>
      <DynamicTable
        head={head}
        rows={rows}
        rowsPerPage={15}
        defaultPage={1}
        loadingSpinnerSize="large"
        isRankable
      />
    </div>
  );
}