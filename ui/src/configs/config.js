import InsuranceUpdate from '../container/update';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const INSURANCE_URL = "http://192.168.0.12:5000/api/v1/bcg/insurance"


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

const tableHeaderUtil = [
    {
      key: "Customer_id",
      content: "Customer ID",
      isSortable: true,
    },
    {
      key: 'Customer_Gender',
      content: 'Gender',
      shouldTruncate: true,
      isSortable: true,
    },
    {
      key: 'Customer_Income group',
      content: 'Income group',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'Customer_Region',
      content: 'Region',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'Customer_Marital_status',
      content: 'Marital status',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'Policy_id',
      content: 'Policy ID',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'Date of Purchase',
      content: 'Date of purchase',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'Fuel',
      content: 'Fuel',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'VEHICLE_SEGMENT',
      content: 'Vehicle Segment',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'Premium',
      content: 'Premium',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'bodily injury liability',
      content: 'Bodily injury liability',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'personal injury protection',
      content: 'Personal injury protection',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'property damage liability',
      content: 'Property damage liability',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'collision',
      content: 'Collision',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'comprehensive',
      content: 'Comprehensive',
      shouldTruncate: true,
      isSortable: true,

    },
    {
      key: 'more',
      shouldTruncate: true,
    },
  ]


export  { monthNames, INSURANCE_URL, tableHeaderUtil, getRandomString }