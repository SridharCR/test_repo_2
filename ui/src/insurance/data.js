import React from 'react';
import InsuranceUpdate from './update_details'
import insurance_data_list from './header.json';

export const caption = 'Insurance Policies - customer wise data';

export const createHead = (withWidth) => {
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

export const head = createHead(false);

export const rows = insurance_data_list.map((insurance_data, index) => ({
  key: `row-${index}-${insurance_data.nm}`,
  cells: [
    {
      key: insurance_data.Policy_id,
      content: insurance_data.Customer_id,
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data.Customer_Gender,
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data['Customer_Income group'],
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data.Customer_Region,
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data.Policy_id,
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data.Policy_id,
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data['Date of Purchase'],
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data.Fuel,
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data.VEHICLE_SEGMENT,
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data.Premium,
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data['bodily injury liability'],
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data['personal injury protection'],
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data['property damage liability'],
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data.collision,
    },
    {
      key: insurance_data.Policy_id,
      content: insurance_data.comprehensive,
    },
    {
      key: insurance_data.Policy_id,
      content: (<InsuranceUpdate data={insurance_data} />)
    }
  ],
}));
