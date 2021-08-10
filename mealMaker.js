let menu={
    _courses:{
                _appetizers:[],
                _mains:[],
                _desserts:[],
                get mains(){
                return this._mains;
              }
              ,get appetizers(){
                return this._appetizers;
              },
              get desserts(){
                return this._desserts;
              },
              set appetizers(name){
                this._appetizers = name;
              },
              set mains(name){
                this._appetizers = name;
              },
              set desserts(name){
                this._desserts = name;
              },
          },
    get courses(){
     return {appetizers:this._courses.appetizers,
             mains:this._courses.mains,
             desserts:this._courses.desserts,    
            }
    },
    addDishTCourse: function(courseName,dishName,dishPrice){
            let dish = {
              name:dishName,
              price:dishPrice,
            }
            switch(courseName){
              case 'mains': this._courses.mains.push(dish);
              break;
              case 'appetizers': this._courses.appetizers.push(dish);
              break;
              case 'desserts': this._courses.desserts.push(dish);
              break;
  
            }
      },
      getRandomDishFromCourse: function(courseName){
          let dishes = this._courses[courseName];
          let randomIndex = Math.floor(Math.random()*dishes.length)
          return dishes[randomIndex];
      },
      generateRandomMeal:function(){
          let appetizer = getRandomDishFromCourse('appetizers');
          let main = getRandomDishFromCourse('mains');
          let dessert = getRandomDishFromCourse('desserts');
          const totalPrice = appetizer.price + main.price + dessert.price;
          return `Appetizer: ${appetizer.dishName}, Main: ${main.dishName},
          Desert:${dessert.dishName}, Total:${totalPrice} `
      }
      
  
  
  }