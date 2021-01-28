import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import {TestService} from "./test.service";


@Controller("tests")
export class TestController{
    constructor(private readonly testService: TestService){}

    @Post()
    addTest(
        @Body('title') testTitle: string,
        @Body('description') testDesc: string,
        @Body('price') testPrice: number,
    ): any{
        const generatedId = this.testService.insertTest(testTitle, testDesc, testPrice);
        return {id: generatedId}
    }
    
    @Get()
    getAllTests(){
        return this.testService.getTests()
    }

    @Get(":id")
    getTest(@Param('id') testId: string) {
        return this.testService.getSingleTest(testId)
    }
}