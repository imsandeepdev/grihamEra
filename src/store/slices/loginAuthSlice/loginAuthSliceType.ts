export type REQUEST = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  payload: {
    Logincode: string;
    password: string;
    deviceNo: string;
  };
};
export type INITIAL_STATE = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};
export type State = {
  error: string | null | undefined;
  authLoginState: ServerResponse;
};
export type ServerResponse = {
  status: INITIAL_STATE;
  response: Response;
};

interface Response {}

export type Payload = Omit<REQUEST, 'status'>;
