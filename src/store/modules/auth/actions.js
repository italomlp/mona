const PREFIX = '@auth';

export const TYPES = {
  signInRequest: `${PREFIX}/SIGN_IN_REQUEST`,
  signInSuccess: `${PREFIX}/SIGN_IN_SUCCESS`,
  signFailure: `${PREFIX}/SIGN_FAILURE`,
};

export function signInRequest(email, password) {
  return {
    type: TYPES.signInRequest,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: TYPES.signInSuccess,
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: TYPES.signFailure,
  };
}
