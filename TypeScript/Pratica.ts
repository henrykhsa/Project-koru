// Praticando TS

//interface é um molde de dados que define a estrutura de um objeto
interface Address {
    street: string;
    city: string;
    zipCode: string;
}

// Interface Pessoa
interface Person {
    name: string; //wellington
    birthDate: Date; // new Date("1990-01-01")  
    cpf: string; // "123.456.789-00" (12345678900)
}

interface Employee extends Person {
    employeeID: number; //123
    department?: string; // "TI" // opcional
}

interface Product {
    productID: number; // 1
    productName: string; // "Smartphone"
    price: number; // 2500
    category: string; // "Eletrônicos" // opcional
}

const productsList: Product[] = [
    { productID: 1, productName: "Smartphone", price: 2500, category: "Eletrônicos" },
    { productID: 2, productName: "Notebook", price: 4500, category: "Eletrônicos" },
    { productID: 3, productName: "Camiseta", price: 100, category: "Roupas" },
];

// MAP
const productNames = productsList.map(product => product.productName);
console.log("Product Names:", productNames);