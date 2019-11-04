var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'They go on your feet',
        image: './socks.jpg',
        inStock: true,
        anchorWord: 'Click Here!',
        link: 'https://www.freedomskateshop.at/en/accessories/socks/stance-x-deathwish-socks-l-xl?action_ms=1',
        inventory: 10,
        onSale: true,
        details: ["80% cotton", '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: "gray",
                variantImage: "./socks.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./blue.jpg"
            }
        ],
        sizes: ["Small", "Medium", "Large"],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        // ES6
        decrementCart() {
            this.cart -= 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
});