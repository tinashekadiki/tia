// export interface Insurer {
//     addressLine1: string;
//         addressLine2: string;
//         addressLine3: string;
//         adminEmail: string;
//         adminPhoneNumber: string;
//         adminUsername: string;
//         channel: string;
//         companyEmail: string;
//         companyLogoUrl: string;
//         companyName: string;
//         companyPhoneNumber: string;
//         contactPersonEmail: string;
//         contactPersonFirstName: string;
//         contactPersonLastName: string;
//         contactPersonPhoneNumber: string;
//         registrationNumber: string;
//         primaryColor: string;
//         secondaryColor: string;
//         name: string
//         id: number
//
//     }
//     export interface contactPerson {
//   nhasi:string
//
//     }
export interface Admin {
  email: string;
  phoneNumber: string;
  username: string;
}

export interface ContactPerson {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface CompanyProfile {
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  contactPerson: ContactPerson;
  email: string;
  logoUrl: string;
  name: string;
  phoneNumber: string;
}

export interface Insurer {
  admin: Admin;
  companyProfile: CompanyProfile;
  id: number;
  primaryColor: string;
  registrationNumber: string;
  secondaryColor: string;
  logoUrl : string;
}

