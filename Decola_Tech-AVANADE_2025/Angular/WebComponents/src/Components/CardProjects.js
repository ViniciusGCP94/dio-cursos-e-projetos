class CardProjects extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){        // Construir a parte de elementos
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "Projects")


        const cardProject1 = document.createElement("div");
        cardProject1.setAttribute("class", "Project1")
        const cardProject2 = document.createElement("div");
        cardProject2.setAttribute("class", "Project2")
        const cardProject3 = document.createElement("div");
        cardProject3.setAttribute("class", "Project3")
        const cardProject4 = document.createElement("div");
        cardProject4.setAttribute("class", "Project4")

        componentRoot.appendChild(cardProject1);
        componentRoot.appendChild(cardProject2);
        componentRoot.appendChild(cardProject3);
        componentRoot.appendChild(cardProject4)

        return componentRoot;
    }; 

    styles(){}; // Estilizar os elesmentos
}

customElements.define("card-project", CardProjects)