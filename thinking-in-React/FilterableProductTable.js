import React from 'react'

export const FilterableProductTable = React.createClass({
    
    getInitialState(){ //essendo in un componente creato coon il metodo React.createClass() inizilizzo lo stato in questo modo invece che con il classico costruttore con this.state = ....
        return {
            inStockOnly: false ,
            filterText:'' } //ricordiamoci si setarlo nel render come state
    }, 

    
    render() { 
       const products = this.props.products    
       const {inStockOnly, filterText } = this.state //setiamo lo stato nel render
        return (
            <div>

                
                <SearchBar 
                inStockOnly= {inStockOnly} 
                filterText = {filterText} 
                />
               
                
               
                <ProductTable 
                inStockOnly= {inStockOnly} 
                filterText = {filterText} 
                products={products}  
                />
            </div>
        )
    }
})

export const SearchBar = React.createClass({
    render() {//textInput = React.createRef();
        return (
            <div>

            </div>

        )
    }
})

export const ProductTable = React.createClass({
    render() {
        const {products, inStockOnly, filterText } = this.props  // catturiamo l due var che repparesentano lo stato settandoli come props
        let categoriaPrecedente = '' //memorizzo la categoria precdente
        const rigaStampa = []       //array da passa re finale per renderizzare i comp
        
        
        products.filter((product) => {
            const stockCond = !inStockOnly || inStockOnly && product.stocked;
            const nameCond = product.name.toLowerCase().indexOf(filterText) !== -1;

            return stockCond && nameCond;
        }).forEach((product) => { 
            //Si occupa di stampare la categoria prima degli oggetti
            //se la categoria sarà uguale non stamperà più la cat
            //stampera nuivamente solo quando ci sarà un cambio di cat.
            if( product.category != categoriaPrecedente){
                categoriaPrecedente = product.category 
                rigaStampa.push(<ProductCategoryRow
                     key={categoriaPrecedente}
                     categoria= {product.category}
                     /> 
                )
                }
                //Push gli oggetti nell array
            rigaStampa.push(<ProductRow
                 key={product.name}
                 product = {product}
                 />  
            )
        })

        return ( 

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                 </thead>
             <tbody>
                <tr>{rigaStampa}</tr> {/* Pusho l'array dove dentro passare ai vari comp le var*/}
            </tbody>
            </table>
        )
        
    }

})

//Figlio di Product Table
export const ProductRow = React.createClass({
    
  
 
    render() {
        
        return (
            <div>
                

            </div>
        )
    }

})

//Figlio di Product Table
export const ProductCategoryRow = React.createClass({
    
    
    render() {
        
        
        return (
            <div>


            </div>
        )
    }

})





















/*

class ProductTable extends React.Component {
    render() {
      const rows = [];
      let lastCategory = null;
      
      this.props.products.forEach((product) => {
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
      });

















//Esempio parent e figlio
/*
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        this.outputEvent = this.outputEvent.bind(this);
    }
    outputEvent(event) {
        // the event context comes from the Child
        this.setState({ count: this.state.count++ });
    }

    render() {
        const variable = 5;
        return (
            <div>
                Count: { this.state.count }
                <Child clickHandler={this.outputEvent} />
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        return (
            <button onClick={this.props.clickHandler}>
                Add One More
            </button>
        );
    }
}
*/




