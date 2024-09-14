import { IFailureProcess,ISuccesProcess } from "../../interface/results/result";

export const FailureProcess = <T>(error:T,status:number):IFailureProcess<T> =>({
    error,
    success: false,
    status
})

export const SuccessProcess = <T>(value:T,status:number):ISuccesProcess<T> =>({
    value,
    success: true,
    status
})