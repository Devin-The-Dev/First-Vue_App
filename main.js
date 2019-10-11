var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'They go on your feet',
        image: './socks.jpg',
        anchorWord: 'Click Here!',
        link: 'https://www.freedomskateshop.at/en/accessories/socks/stance-x-deathwish-socks-l-xl?action_ms=1',
        inventory: 10,
        onSale: true,
        details: ["80% cotton", '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: "gray",
                variantSize: ["Small", "Medium", "Large"]
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantSize: ["Small", "Medium", "Large"]
            }
        ]
    }
});