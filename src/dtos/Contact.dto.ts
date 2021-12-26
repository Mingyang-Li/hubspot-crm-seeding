import { JobTitle } from './JobTitle.dto';
import { LeadStatus } from './LeadStatus.dto';
import { LifeCycleStage } from './LifeCycleStage.dto';

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle?: JobTitle;
  phoneNumber?: string;
  lifeCycleStage?: LifeCycleStage;
  leadStatus?: LeadStatus;
}
