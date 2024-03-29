export interface Quote {
    firstName:string,
    lastName: string,
    organization: string,
    email: string,
    phoneNumber: string,
    street1: string,
    street2: string,
    city: string,
    state: string,
    zipCode: string,
    services: Array<string>,
    propertyType: Array<string>,
    sqFootage: number,
    bedrooms: number,
    bathrooms: number,
    offices: number,
    firstDate: string,
    secondDate: string,
    arrivalTimes: Array<string>
}