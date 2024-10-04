import * as userData from "../data/register.data.json";


export class Util {


  static generateTimestampedEmail(): string {
    const [mailName, domain] = userData.email.split("@");
    return `${mailName}+${Date.now()}@${domain}`;
  }


  static generateTimestampedUsername(): string {
    return `${userData.username}${Date.now()}`;
  }

}