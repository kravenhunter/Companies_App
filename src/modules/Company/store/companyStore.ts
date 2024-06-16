import { types } from 'mobx-state-tree';

const LoyaltyLevel = types.model('LoyaltyLevel', {
  number: types.number,
  name: types.string,
  requiredSum: types.number,
  markToCash: types.number,
  cashToMark: types.number,
});

const CustomerMarkParameters = types.model('CustomerMarkParameters', {
  loyaltyLevel: LoyaltyLevel,
  mark: types.number,
});

const MobileAppDashboard = types.model('MobileAppDashboard', {
  companyName: types.string,
  logo: types.string,
  backgroundColor: types.string,
  mainColor: types.string,
  cardBackgroundColor: types.string,
  textColor: types.string,
  highlightTextColor: types.string,
  accentColor: types.string,
});
const CompanyID = types.model('CompanyID', {
  companyId: types.string,
});
const Company = types.model('Company', {
  company: CompanyID,
  customerMarkParameters: CustomerMarkParameters,
  mobileAppDashboard: MobileAppDashboard,
});

export const CompanyStore = types
  .model('CompanyStore', {
    list: types.array(Company),
    loading: types.boolean,
    error: types.maybeNull(types.string),
    hasEmpryCompany: types.boolean,
    countComamies: types.number,
    currentOffset: types.maybeNull(types.number),
    limit: types.number,
    count_deleted: types.maybeNull(types.number),
  })
  .actions((self) => ({
    resetError() {
      self.error = null;
    },
  }));
