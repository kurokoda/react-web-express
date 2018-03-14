import {CALL_API} from '../../middlewares/api';

export const SITES_RECEIVED = Symbol('SITES_RECEIVED');
export const SITE_RECEIVED  = Symbol('SITE_RECEIVED');
export const SITE_POSTED    = Symbol('SITE_POSTED');
export const SITE_PATCHED   = Symbol('SITE_PATCHED');
export const SITE_DELETED   = Symbol('SITE_DELETED');

export function getSites(afterSuccess, afterError) {
  console.log('getSites')
  return {
    [CALL_API]: {
      method     : 'get',
      path       : 'api/site',
      successType: SITES_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getSite(params, afterSuccess, afterError) {
  console.log('getSite', params)
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `api/site/${params.id}`,
      successType: SITE_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function postSite(params, afterSuccess, afterError) {
  console.log('postSite', params)
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : `api/site`,
      successType: SITE_POSTED,
      afterSuccess,
      afterError
    }
  };
}

export function patchSite(params, afterSuccess, afterError) {
  console.log('patchSite', params)
  return {
    [CALL_API]: {
      method     : 'patch',
      body       : params,
      path       : `api/site/${params.id}`,
      successType: SITE_PATCHED,
      afterSuccess,
      afterError
    }
  };
}

export function deleteSite(params, afterSuccess, afterError) {
  console.log('deleteSite', params)
  return {
    [CALL_API]: {
      method     : 'delete',
      path       : `api/site/${params.id}`,
      successType: SITE_DELETED,
      afterSuccess,
      afterError
    }
  };
}
