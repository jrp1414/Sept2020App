

export class LoggerService {
    log(message):void{
        console.log(new Date()+" :");
        console.log(message);
    }
}