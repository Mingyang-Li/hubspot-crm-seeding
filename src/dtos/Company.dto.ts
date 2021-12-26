import { City } from './City.dto';
import { CompanyType } from './CompanyType.dto';

export interface Company {
  companyName: string;
  industry?: string;
  city?: City;
  type?: CompanyType;
}
