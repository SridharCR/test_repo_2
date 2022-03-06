import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios'
import Button from '@atlaskit/button/standard-button';
import Pagination from '@atlaskit/pagination';
import DynamicTable from '@atlaskit/dynamic-table';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import { tableHeaderUtil, getRandomString, INSURANCE_URL } from '../../configs/config'
import InsuranceUpdate from '../update'

import TextField from '@atlaskit/textfield';
import './index.css'

const NoRecordFound = ({ content, img, width = '100%' }) => {
  return (
    <p> {content || 'No Records Found'}</p>
  )
}

const createHead = (withWidth) => {
  return {
    cells: tableHeaderUtil
  };
};


export default function Insurance() {
  const [isLoading, setLoading] = useState(false);

  const [get_data, setData] = useState(null)
  const [pagination, setPagination] = useState([0,10])
  let data = get_data?.results

  const handleRefetch = (page = 0, limit = 10) => {
    setLoading(true);
    var computePage = parseInt(page) * 10
    var computeLimit = 10
    var url = `${INSURANCE_URL}?page=${computePage}&limit=${computeLimit}`
    console.log("url", url)
    axios.get(url).then(e => { setData(e.data) }).finally(() => {
      setLoading(false);
      setPagination([page, limit])
    });
  }

  useEffect(() => {
    handleRefetch()
  }, [])
  let totalRecord = get_data?.totalcount[0].count
  let pages;
  if (get_data) {
    pages = [...Array(Math.ceil(totalRecord / 10) + 1).keys()]
    pages.shift()
  }
  else {
    pages = [1]
  }
  const head = useMemo(() => createHead(false));
  var rows;

  if (data) {
    rows = data.map((insurance_data) => ({
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
          content: (<InsuranceUpdate data={insurance_data} handler={handleRefetch} pagination={pagination}/>)
        }
      ]

    }));
  }

  return (
    <div className='insurance-policies'>
      <div className='search-group'>
        {/* <div className='search-group-items'>
          <DropdownMenu trigger="Search by">
            <DropdownItemGroup>
              <DropdownItem>Customer_id</DropdownItem>
              <DropdownItem>Policy_id</DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        </div>
        <div className='search-group-items'>
          <TextField type='number' aria-label="default text field" />
        </div>
        <div className='search-group-items'>
          <Button>Search</Button>
        </div> */}
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