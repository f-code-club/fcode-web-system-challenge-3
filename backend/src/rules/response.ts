export class ResponseClient {
    status: boolean;
    message: string;
    result?: any;
    constructor({
        status = true,
        message = "Thao tác thành công!",
        result,
    }: { status?: boolean; message?: string; result?: any } = {}) {
        this.status = status;
        this.message = message;
        if (result) {
            this.result = result;
        }
    }
}
