import {expect, test} from "@playwright/test";

test.describe.only('Json placeholder @smoke', ()=>{
    test('should return post by id', async ()=>{
      const response =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const body = await response.json();

      expect(body).toContainEqual({id: 1})
    })
})