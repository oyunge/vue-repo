// el:is used to access Elements in the html
var app = new Vue({
    el: '#app',

    data:{
        message:'hello world',
        name:'ABC',
        price: '2000',
        path:'https://images.unsplash.com/photo-1553680528-62abdfec6544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        link: 'https://github.com/oyunge/form-repo',
    },
    methods:{
        discount:function(){
            cost = this.price -100;
            return cost;
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