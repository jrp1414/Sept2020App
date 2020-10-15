export interface Student {
 StudentId:number;
 FirstName:string;
 LastName:string;
 MobileNo:string;
 EmailId:string;
 NotificationType:string;
 Address:Address;
};

export interface Address{
    AddressId:number;
    AddLine1:string;
    AddLine2:string;
    AddLine3:string;
    City:string;
    State:string;
}

export var studentList:Student[]=[
    {
        StudentId:1,
        FirstName:"Ram",
        LastName:"Sharma",
        MobileNo:"898848488",
        EmailId:"ram@gmail.com",
        NotificationType:"email",
        Address:{
            AddressId:1,
            AddLine1:"Handewadi Road",
            AddLine2:"Satav Nagar",
            AddLine3:"JSPM",
            City:"Pune",
            State:"Maharashtra"
        }
    },
    {
        StudentId:2,
        FirstName:"Amol",
        LastName:"Pathak",
        MobileNo:"9855896899",
        EmailId:"amol@gmail.com",
        NotificationType:"email",
        Address:{
            AddressId:2,
            AddLine1:"Magarpatta Road",
            AddLine2:"Hadapsar",
            AddLine3:"JSPM",
            City:"Pune",
            State:"Maharashtra"
        }
    },
    {
        StudentId:3,
        FirstName:"Subhasis",
        LastName:"Dutta",
        MobileNo:"858589658",
        EmailId:"subhasis@gmail.com",
        NotificationType:"mobile",
        Address:{
            AddressId:3,
            AddLine1:"Bhubaneswar",
            AddLine2:"Bhubaneswar",
            AddLine3:"BBSR",
            City:"Bhubaneswar",
            State:"Odisha"
        }
    }

];