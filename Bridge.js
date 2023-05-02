class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getPrice() {
        return this.price;
    }

}

class View {
    constructor(product) {
        this.product = product;
    }

    render() {
        throw new Error("Metoda render trebuie implementată în clasa derivată!");
    }
}

class ListView extends View {
    render() {
        return `
      <div class="product">
        <h2>${this.product.getName()}</h2>
        <p>${this.product.getDescription()}</p>
        <p>Preț: ${this.product.getPrice()} MDL</p>
      </div>
    `;
    }
}

class TableView extends View {
    render() {
        return `
      <tr>
        <td>${this.product.getName()}</td>
        <td>${this.product.getDescription()}</td>
        <td>${this.product.getPrice()} MDL</td>
      </tr>
    `;
    }
}

// Exemplu de utilizare
const products = [
    new Product("Minge de fotbal", "Minge de fotbal pentru copii", 100),
    new Product("Rachetă de tenis", "Rachetă de tenis pentru adulți", 120),
    new Product("Mingi de ping pong", "Pachet de 6 mingi de ping pong", 50,)
];

const listView = new ListView(products[0]);
const tableView = new TableView(products[1]);

const productList = "<div class='product-list'>" + products.map(product => listView.render(product)).join("") + "</div>";
const tableBody = "<tbody>" + products.map(product => tableView.render(product)).join("") + "</tbody>";

console.log(productList);
console.log(tableBody);