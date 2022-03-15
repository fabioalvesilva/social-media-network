import { IUser } from "./IUser";

export interface IIntroductionRequest{
  
    id: string;
    userFrom: IUser;
    userMiddle: IUser;
    requestMessage: IUser;
    presentationMessage: string;
    introductionRequestState: string;
    active: string;
  }