import { Injectable, NotFoundException } from "@nestjs/common";
import { Test } from "./test.model"

@Injectable()
export class TestService{
    private tests: Test[] = [];

    insertTest(title: string, desc: string, price: number){
        const prodId = this.hashId()
        const newTest = new Test(prodId, title, desc, price)
        console.log(newTest)
        this.tests.push(newTest);
        return prodId
    }

    getTests(){
        return [...this.tests]
    }


    getSingleTest(testId: string){
        const test = this.findTest(testId)[0]
        return {...test};

    }


    private findTest(id: string): [Test, number]{
       const testIndex =  this.tests.findIndex((tests) => tests.id === id)
       const test = this.tests[testIndex]
       if(!test){
           throw new NotFoundException("could not find test.")  
       }
       return [test, testIndex]
    }


    private hashId(){
        let result = "";
        let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let charactersLength = characters.length;
            for (let i = 0; i < charactersLength; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
              }
        return result;
    }
}