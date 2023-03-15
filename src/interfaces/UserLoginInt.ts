export interface UserLogin {
    auth: boolean;
    username: string;
    password: string;
    dispatch?: (action: Action) => void;
  }

export interface Action {
  type: string;
  payload: any;
}