import * as hubspot from '@hubspot/api-client';
import * as dotenv from 'dotenv';
// import { Company } from './dtos/Company.dto';
dotenv.config();

const hubspotClient = new hubspot.Client({
  apiKey: process.env.CRM_API_KEY,
});

// const company: Company = {
//   companyName: 'company 1',
//   industry: 'no idea',
//   city: 'Dunedin',
//   type: 'Reseller',
// };
// console.log(company);

const company = {
  city: 'Cambridge',
  domain: 'biglytics.net',
  industry: 'Technology',
  name: 'Biglytics',
  phone: '(877) 929-0687',
  state: 'Massachusetts',
};
const SimplePublicObjectInput = { company };
(async () => {
  try {
    const apiResponse = await hubspotClient.crm.companies.basicApi.create(
      SimplePublicObjectInput,
    );
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    console.error(JSON.stringify(e, null, 2));
  }
})();
