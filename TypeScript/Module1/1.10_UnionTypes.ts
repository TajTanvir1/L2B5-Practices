{
    // Union Types

    type Frontend = 'fakibaz' | 'junior'
    type FullStack = 'frontend' | ' expert'

    type Developer = Frontend | FullStack


    const newDev : Developer = 'junior';


    
    type  User = {
        name : string;
        email: string;
        gender : "Male" | "Female";
        bloodGroup : "A+" | "A-" | "B+" | "B-"
    }

    type FrontendDev = {
        skill: string[];
        designation1 : "Frontend"
    }

    type BackendDev = {
        skill : string[];
        designation2 : "Backend"
    }

    type FullStackDev = FrontendDev & BackendDev;

    const fullstack : FullStackDev ={
        skill : ['Html', 'CSS'],
        designation1: 'Frontend',
        designation2: "Backend"
    }






    //
}