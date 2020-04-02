// el:is used to access Elements in the html
// var app = new Vue({
//     el: '#app',

//     data:{
//         message:'hello world',
//         name:'ABC',
//         price: '2000',
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



    //    VUE METHODS
    var app = new Vue({
        el: '#app',
    
        data:{
        
            price: '2000',
        },
        methods:{
            discount:function(){
                cost = this.price -100;
                return cost ;
            },
            add:function(){
                var a = 20;
                var b = 30;
                var c ;
    
                c = a + b;
                return c;
            }
    
        }
    });
