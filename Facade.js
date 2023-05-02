// Modulul de produse
class Products {
    static getProduct(productId) {
        // Funcție care returnează detaliile produsului pe baza ID-ului
    }

    static addProduct(productData) {
        // Funcție care adaugă un produs nou în baza de date
    }

    static updateProduct(productId, productData) {
        // Funcție care actualizează detaliile unui produs existent în baza de date
    }

    static deleteProduct(productId) {
        // Funcție care șterge un produs din baza de date pe baza ID-ului
    }
}

// Interfața simplificată pentru a face apeluri la funcții complexe din spatele scenei
class ProductFacade {
    static getProduct(productId) {
        const product = Products.getProduct(productId);
        // Aici putem efectua orice operații suplimentare pentru a returna doar informațiile necesare
        return product;
    }

    static addProduct(productData) {
        Products.addProduct(productData);
        // Aici putem efectua orice operații suplimentare după adăugarea produsului
    }

    static updateProduct(productId, productData) {
        Products.updateProduct(productId, productData);
        // Aici putem efectua orice operații suplimentare după actualizarea produsului
    }

    static deleteProduct(productId) {
        Products.deleteProduct(productId);
        // Aici putem efectua orice operații suplimentare după ștergerea produsului
    }
}
