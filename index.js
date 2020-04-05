// el:is used to access Elements in the html
// var app = new Vue({
//     el: '#app',

//     data:{
//         message:'hello world',
//         name:'ABC',
//         price: '2000',
//         path:'https://images.unsplash.com/photo-1553680528-62abdfec6544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//         link: 'https://github.com/oyunge/form-repo',
//     },
//     methods:{
//         discount:function(){
//             cost = this.price -100;
//             return cost;
//         },
//         add:function(){
//             var a = 20;
//             var b = 30;
//             var c ;

//             c = a + b;
//             return c;
//         }

//     }
// });
                    // VUE EVENTS

                    // var app = new Vue({
                    //  el:'#app',

                    //  data:{
                    //  temp: 0,

                    //  },
                    //  methods:{
                    //  increase:function(){
                    //      this.temp++;
                    //  },
                    //  decrease:function() {
                    //     this.temp--; 
                    //  }
                    // }

                    // });


                        //   EVENT MODIFIER
                    //      var app = new Vue({
                    //  el:'#app',

                    //  data:{
                    //  temp: 0,

                    //  },
                    //  methods:{
                    //  increase:function(){
                    //      this.temp++;
                    //  },
                    //  decrease:function() {
                    //     this.temp--; 
                    //  }
                    // }

                    //  });


                    // KEY PRESSED EVENT

                    // var app = new Vue({
                    //  el:'#app',
                      
                    //  data:{


                    //  },
                     
                    //  keypressed:function() {
                    //  console.log("keypressed");
                      
                    //  }
                    // });

                    // TWO WAY DATA BINDING
                //    var app = new Vue({
                //        el:'#app',

                //        data:{

                //         message:'',
                //        }
                //    });

                //    DYNAMIC CSS CLASSES asssignment
                // var app = new Vue({
                // el:'#app',

                // data:{
                //     gate:'true',
                   

                // },
                // gate:function(){
                //     if(this.gate==true){
                //        document.write("gate closed");
                //     }
                //     else {
                //      document.write("gate closed");
                //     }
                // }


                // });

    // //    VUE METHODS
    // var app = new Vue({
    //     el: '#app',
    
    //     data:{
        
    //         price: '2000',
    //     },
    //     methods:{
    //         discount:function(){
    //             cost = this.price -100;
    //             return cost ;
    //         },
    //         add:function(){
    //             var a = 20;
    //             var b = 30;
    //             var c ;
    
    //             c = a + b;
    //             return c;
    //         }
    
    //     }
    // });

        // DATA BINDING

    // var app = new vue({
    // el:'#app',

    // data:{

    //    path:'https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    // }


    // });

            // LOOP
            // var app = new Vue ({
            //  el:'#app',
            //  data:{
               
            //     students:["john", "sam" ,"john" ,"bruce" ,"joash"],

            //  }


            // });


            // LOOP /ARRAY OF OBJECTS
            // var app= new Vue({
            // el:'#app',
            // data:{
            //  players:[
            //      {name:'john' ,score:'5'},
            //      {name:'sam' ,score:'3'},
            //      {name:'alex' ,score:'6'},
            //      {name:'joash' ,score:'2'},
            //  ],


            // }
            // });


                //   VUE INSTANCES /HOW TO ACCESS INFORMATION BTWN TWO DIV INSTANCES
                    //    var app = new Vue({
                    //      el:'#app',
                    //      data:{
                        
                    //      value:1000,
                    //      price:200,
                    //      },
                    //        methods:{



                    //        }
                    //    });

                    //    var demo = new Vue({
                    //        el:'#demo',
                    //        data:{
                    //        value:2000,
                    //        },
                    //        methods:{
                    //         f1:function(){
                    //             var z;
                    //             z = app.price + this.value;
                    //             return z;
                    //         },
                    //        }
                    //    });


                                // VUE COMPONENT
                        //   Vue.component("mycomponent" ,{
                        //     template:'<p>This is my component {{name}} - {{temperature}} <button v-on:click="changetemp()" >click Here</button></p> ',

                        //     data:function(){
                        //       return{
                        //           name:'Joash',
                        //           temperature:100,
                        //       }
                        //     },
                        //     methods:{
                        //         changetemp:function(){
                        //              this.temperature=this.temperature + 10;
                        //         },
                        //     },
                        //   });
                        //   var app = new Vue({
                        //          el:'#app',
                        //          data:{
                                
                        //          value:1000,
                        //          price:200,
                        //          },
                        //         });

                                       //   VUE REFERENCING
                                var app = new Vue({
                                    el:'#app',
                                    data:{
                                    
                                      intr:'',
                                    },
                                    methods:{
                                        calc:function(){
                                           this.intr = (this.$refs.principal.value * this.$refs.year.value * this.$refs.rate.value )/100;
                                        }
                                    }

                                });