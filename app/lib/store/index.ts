/**
 * STATE SHAPE:
 *
 * filters: {
 *  [key:string]: {
 *    keyword: string,
 *    params: Record<string, any>
 *  },
 * },
 * pagination: {
 *  [key:string]: {
 *    [page:number]: Array<{type:string, id:string}>
 *  }
 * },
 * resources: {
 *  [type:string]: {
 *    byIds: {
 *      [id:string]: Record<string, any>
 *    },
 *  },
 * },
 */
export { default as reducers } from './reducers';
export { default as store } from './store';
