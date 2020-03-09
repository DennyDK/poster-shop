new Vue({
  el: "#app",
  data: {
    total: 0,
    products: [
      {title: "Product 1", id: 1, price: 9.99},
      {title: "Product 2", id: 2, price: 20.99},
      {title: "Product 3", id: 3, price: 30.55}
    ],
    cart: [],
    search: ""
  },
  methods:{
    addToCart: function(product) {
      this.total+=product.price;
      var found = false;
      for (var i = 0 ; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id){
          this.cart[i].qty++;
          found = true
        }
      }
      if (!found){
        this.cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: 1
        });
      }
    },
    inc(item) {
      // for (var i = 0 ; i < this.cart.length; i++) {
        // if (this.cart[i].id === item.id) {
        //   this.cart[i].qty++
        //   this.total+=this.cart[i].price
        // }
      // }
      item.qty++;
      this.total+=item.price;
    },
    dec(item) {
      // for (var i = 0 ; i < this.cart.length; i++) {
      //   if (this.cart[i].id === item.id) {
      //     this.cart[i].qty--
      //     this.total = this.total - this.cart[i].price
      //     if (this.cart[i].qty === 0){
      //       this.cart.pop(this.cart[i]);
      //     }
      //   }
      // }
      item.qty--;
      this.total-=item.price;
      if (item.qty <= 0) {
        var i = this.cart.indexOf(item);
        this.cart.splice(i,1)
      }
    },
    onSubmit(){
      console.log("submit")
    }
  },
  filters:{
    currency: function(price) {
      return "R".concat(price.toFixed(2));
    }
  }
})