class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}


class Interfaz {

    add(product) {

        const div = document.createElement("div");
        div.innerHTML = `
                    <div class="item m-2">
                        Nombre ${product.name}
                        Precio ${product.price}
                        Cantidad ${product.quantity}
                        <button name="borrar" class="btn btn-info">Eliminar</button>
                    </div>
            `

        document.querySelector("#mostrar .card-body").appendChild(div);
        this.showMessage("Agregado exitosamente", "success");
    }

    delete(element) {
        if (element.name === "borrar") {
            element.parentElement.remove();
            this.showMessage("Eliminado exitosamente", "danger");
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));

        // mostrar en pantalla
        const contenedor = document.querySelector(".container");
        const row = document.querySelector(".row");
        contenedor.insertBefore(div, row);


        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 1000);
    }

}

//evento agregar
document.getElementById("submit").addEventListener("click", function(e) {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    const ui = new Interfaz();

    if (name === "" || price === "" || quantity === "") {
        ui.showMessage("Hay campos vacios", "warning")
        return;
    }

    var product = new Product(name, price, quantity);
    ui.add(product);
    e.preventDefault();


});


//evento eliminar
const elemento = document.getElementById("mostrar");
elemento.addEventListener("click", function(e) {
    const borrar = e.target;
    const ui = new Interfaz();
    ui.delete(borrar);
});