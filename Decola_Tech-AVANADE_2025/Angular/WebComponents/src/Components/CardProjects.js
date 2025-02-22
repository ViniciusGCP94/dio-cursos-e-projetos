class CardProjects extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"});
        
    }

    build(){}; // Construir a parte de elementos

    styles(){}; // Estilizar os elesmentos
}

customElements.define("card-project", CardProjects)