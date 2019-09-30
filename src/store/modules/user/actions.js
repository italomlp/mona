const PREFIX = '@user';

export const TYPES = {
  updateProfileRequest: `${PREFIX}/UPDATE_PROFILE_REQUEST`,
  updateProfileSuccess: `${PREFIX}/UPDATE_PROFILE_SUCCESS`,
  updateProfileFailure: `${PREFIX}/UPDATE_PROFILE_FAILURE`,
};

export function updateProfileRequest(data) {
  return {
    type: TYPES.updateProfileRequest,
    payload: { data },
  };
}
export function updateProfileSuccess(profile) {
  return {
    type: TYPES.updateProfileSuccess,
    payload: { profile },
  };
}
export function updateProfileFailure() {
  return {
    type: TYPES.updateProfileFailure,
  };
}
