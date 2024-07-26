export class ResponseDto {

    message: string;
    timestamp: Date;
  
    constructor(message: string, timestamp: Date) {
      this.message = message;
      this.timestamp = timestamp;
    }
}
