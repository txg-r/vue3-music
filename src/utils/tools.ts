import { ElMessage } from "element-plus";
import type { Response } from "@/models/response";

/**
 * 处理响应，弹出提示框
 */
type Call<T> = (data: T) => any;

export function resolveRes<T>(res: Response<T>, successCode: number, successCall?: Call<T>, errorCall?: Call<T>, elMsg = true) {
    if (res.code == successCode) {
        if (elMsg) {
            ElMessage({
                message: res.message,
                type: "success",
            });
        }
        return successCall ? successCall(res.data) : null;
    }
    if (elMsg) {
        ElMessage({
            message: res.message,
            type: "error",
        });
    }
    return errorCall ? errorCall(res.data) : null;
}

export function resolveResPromise<T>(promise: Promise<Response<T>>, successCode: number, successCall?: Call<T>, errorCall?: Call<T>, elMsg = true) {
    promise.then(res => {
        resolveRes(res, successCode, successCall, errorCall, elMsg)
    }).catch(() => {
        ElMessage({
            message: "网络异常",
            type: "error",
        });
    })
}