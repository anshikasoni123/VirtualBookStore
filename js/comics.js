AFRAME.registerComponent("comics",{
    init:function(){
          this.placesContainer = this.el;
          this.createCards();
    },
    createCards : function(){
        const comics = [
            {
                id : "super-man",
                title: "SUPER MAN",
                url:"./assets/comics/superman.jpg",
            },
            {
                id : "spider-man",
                title: "SPIDER MAN",
                url:"./assets/comics/spiderman.jpg",
            },
            {
                id : "captain-aero",
                title: "CAPTAIN AERO",
                url:"./assets/comics/captainaero.jpg",
            },
            {
                id : "outer-space",
                title: "OUTER SPACE",
                url:"./assets/comics/outerspace.jpg",
            }
        ];

        let previousXPosition = -60;

        for(var item of comics){
            const posX = previousXPosition + 25;
            const posY = 10;
            const posZ = -40;
            const position = {x:posX,y:posY,z:posZ}
            previousXPosition = posX;

            const borderEl = this.createBorder(position,item.id);
            const comicEl = this.createComics(item);
            borderEl.appendChild(comicEl);
            const titleEl = this.createTitle(position,item);
            borderEl.appendChild(titleEl);
    
            this.placesContainer.appendChild(borderEl);
        }

        
    },
    createBorder: function(position,id){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id",id);
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:1,
            height:28,
        });
        entityEl.setAttribute("material",{
            color:"black",
            opacity:0
        });
        entityEl.setAttribute("position",position);
        return entityEl
    },
    createComics: function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:20,
            height:28
        });
        entityEl.setAttribute("material",{
            src:item.url
        });
        return entityEl
    },
    createTitle: function(position,item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:70,
            color:"black",
            value:item.title
        });
        const elPosition = position;
        elPosition.y = -25;
        entityEl.setAttribute("position",elPosition)
        return entityEl
    }
})