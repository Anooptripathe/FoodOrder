import { Injectable, OnInit } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id:number):Foods
  {
    return this.getAll().find(food=>food.id===id)!;
  }


  getAllFoodByTag(tag:string):Foods[]
  {
    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food=>food.tags?.includes(tag))
  }

  getAllTag():Tag[]
  {
    return[
      {
        name:'All',count:14
      },
      {
        name:'pizza',count:2
      },
      {
        name:'chicken',count:6
      },
      {
        name:'juice',count:9
      },
      {
        name:'chinese',count:5
      },
      {
        name:'icecream',count:3
      },
    ];
  }

  getAll():Foods[]{
    return [
     {
      id:1,
      name:'juice',
      cookTime:'5-10',
      price:10,
      favourite:false,
      origins:['india'],
      star:4.5,
      imageUrl:'/assets/item1.jfif',
      tags:['drinks','refreshment','juice'],

     },
     {
      id:2,
      name:'burger',
      cookTime:'15-20',
      price:30,
      favourite:false,
      origins:['italy'],
      star:4.8,
      imageUrl:'/assets/item 2.jfif',
      tags:['Fastfood','snacks','fun','burger'],

     }
     ,
     {
      id:3,
      name:'chicken',
      cookTime:'16-20',
      price:30,
      favourite:false,
      origins:['italy'],
      star:4.8,
      imageUrl:'/assets/item3.jfif',
      tags:['non veg','meal','party','chicken'],

     }
     ,
     {
      id:4,
      name:'icecream',
      cookTime:'30-40',
      price:80,
      favourite:false,
      origins:['italy'],
      star:4.8,
      imageUrl:'/assets/item 4.jfif',
      tags:['Fastfood','cold','icecream'],

     }
     ,
     {
      id:5,
      name:'momos',
      cookTime:'17-20',
      price:30,
      favourite:false,
      origins:['italy'],
      star:4.8,
      imageUrl:'/assets/item 5.jfif',
      tags:['Fastfood','chinese','fun'],

     }
     ,
     {
      id:6,
      name:'pizza',
      cookTime:'15-20',
      price:30,
      favourite:true,
      origins:['italy'],
      star:4.8,
      imageUrl:'/assets/item 6.jfif',
      tags:['Fastfood','italy','pizza'],

     }
    ];
  }
}
