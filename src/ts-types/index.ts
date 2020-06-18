/**
 * @description 
 * @author ronffy
 * @Date 2019-11-15 19:39:47
 * @LastEditTime 2020-06-18 10:12:31
 * @LastEditors ronffy
 */
export type RequestResponse = {
  success: boolean
  message: string
  statusCode: number
  data: object | any[]
  [props: string]: any
}


export type ArrayAct = 'push' | 'pop' | 'shift' | 'unshift' | 'slice' | 'splice' | 'indexof' | 'includes'