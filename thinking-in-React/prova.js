





var products = 
[ { category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football' },
  { category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball' },
  { category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball' },
  { category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch' },
  { category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5' },
  { category: 'Electronics',
    price: '$199.99',
    stocked: true,
    name: 'Nexus 7' } ]

    filterText = ''
    inStockOnly = false
    products.filter((product) => {
        const stockCond = !inStockOnly || inStockOnly && product.stocked;
        const nameCond = product.name.toLowerCase().indexOf(filterText) !== -1;
        return stockCond && nameCond;
    }).forEach((product) => {
        console.log(product)
    }
        
    
     


    


/*
        for(i=0; i< json.length; i++ ){
            console.log("Oggetto numero: " + i + " " + JSON.stringify(json[i]) + "\n")
        }
  */      
        