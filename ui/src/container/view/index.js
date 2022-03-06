import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios'
import Button from '@atlaskit/button/standard-button';
import Pagination from '@atlaskit/pagination';  
import DynamicTable from '@atlaskit/dynamic-table';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import InsuranceUpdate from '../update';

import TextField from '@atlaskit/textfield';
import './index.css'

const NoRecordFound = ({content, img, width = '100%'}) => {
  return (
          <p> {content || 'No Records Found'}</p>
  )
}

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
  const [isLoading, setLoading] = useState(false);

  const [get_data, setData] = useState(null)
  let data = get_data?.results

// 0 - 0 to 10
// 1 - 11 to 20
// 2 - 21 to 30
  
const handleRefetch = (page = 0, limit = 10, searchValue) => {
  setLoading(true);
  var computePage = parseInt(page) * 10
  var computeLimit = 10
  var url = "http://192.168.0.12:5000/api/v1/bcg/insurance?page=" + computePage + "&limit=" + computeLimit
  console.log("url",  url)
  axios.get(url).then(e => {
      var _dataListLength = e.data.length
      setData(e.data)
      // pagination = ([...Array(Math.ceil(_dataListLength / pageCount))].map((_, index) => index + 1))
  }).finally(() => {
      setLoading(false);
  });
}

  useEffect(() => {
    handleRefetch()
  }, [])
  let totalRecord = get_data?.totalcount[0].count
  let pages = [...Array(Math.ceil(totalRecord/10) + 1).keys()]
  pages.shift()
  // let pagination;
  const head = useMemo(() => createHead(false));
  var rows;
  console.log("count sridhar", get_data)
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
      <div className='search-group'>
        <div className='search-group-items'>
          <DropdownMenu trigger="Search by">
            <DropdownItemGroup>
              <DropdownItem>Customer_id</DropdownItem>
              <DropdownItem>Policy_id</DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        </div>
        <div className='search-group-items'>
          <TextField  type='number' aria-label="default text field" />
        </div>
        <div className='search-group-items'>
          <Button>Search</Button>
        </div>
      </div>
      <DynamicTable
        head={head}
        rows={rows}
        isFixedSize={false}
        emptyView={<NoRecordFound />}
        isLoading={isLoading}
        defaultPageSize={1}
        loadingSpinnerSize="large"
        isRankable
      />
      <div className="pagination-div">
          <Pagination onChange={async (ev, p) => {
              handleRefetch(p - 1);
          }} pages={pages} />
      </div>
    </div>
  );
}