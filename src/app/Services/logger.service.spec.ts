import { LoggerService } from "./logger.service";

describe("LoggerService",()=>{
    let ls:LoggerService = new LoggerService();

    it("Log Method should return undefined",()=>{
        expect(ls.log("Test")).toBeUndefined();  
    });
});

//Arrange 
//Act
//Assert