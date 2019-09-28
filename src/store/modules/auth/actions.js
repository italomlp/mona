const PREFIX = '@auth';

export const TYPES = {
  signInRequest: `${PREFIX}/SIGN_IN_REQUEST`,
  signUpRequest: `${PREFIX}/SIGN_UP_REQUEST`,
  signInSuccess: `${PREFIX}/SIGN_IN_SUCCESS`,
  signFailure: `${PREFIX}/SIGN_FAILURE`,
  signOut: `${PREFIX}/SIGN_OUT`,
};

export function signInRequest(email, password) {
  return {
    type: TYPES.signInRequest,
    payload: { email, password },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: TYPES.signUpRequest,
    payload: { name, email, password },
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
export function signOut() {
  return {
    type: TYPES.signOut,
  };
}
