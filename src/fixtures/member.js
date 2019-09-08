import { createSpec, faker, derived } from '@helpscout/helix'
import { makeEntity, makeEntities } from './utils' 

export const MemberSpec = createSpec({
  // Private Properties
  _prob25: faker.random.number({ min: 1, max: 4 }),
  _prob33: faker.random.number({ min: 1, max: 3 }),
  _prob50: faker.random.number({ min: 1, max: 2 }),
  _avatar: faker.image.avatar(),
  _company: faker.company.companyName(),
  _job: faker.name.jobTitle(),
  _firstName: faker.name.firstName(),
  _lastName: faker.name.lastName(),
  
  // Public Properties
  avatar: derived(({ _avatar, _prob50 }) => {
    switch (_prob50) {
      case 1:
        return null;
      default:
        return _avatar;
    }
  }),
  initials: derived(({ _firstName, _lastName }) => {
    if (_firstName && _lastName) {
      return `${_firstName.slice(0, 1)}${_lastName.slice(0, 1)}`;
    } else if (_firstName) {
      return _firstName.slice(0, 1);
    } else {
      _lastName.slice(0, 1);
    }
  }),
  job: derived(({ _company, _job, _prob33 }) => {
    switch (_prob33) {
      case 1:
        return null;
      case 2:
        return _job;
      case 3:
        return `${_job}, ${_company}`;
    }
  }),
  name: derived(({ _firstName, _lastName, _prob25 }) => {
    switch (_prob25) {
      case 1:
        return _firstName;
      case 2:
        return _lastName;
      default:
        return `${_firstName} ${_lastName}`;
    }
  }),
});

export const makeMember = makeEntity.bind(null, MemberSpec);
export const makeMembers = makeEntities.bind(null, MemberSpec);
