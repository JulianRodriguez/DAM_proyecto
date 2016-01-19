var stage;
     
function inicializar() 
{   
    stage = new createjs.Stage('escenario');
	
	var movieColor = '#ffeb3b';
	var genreColor = '#42a5f5';
	
	crearElemento('Regreso al Futuro',movieColor);
	crearElemento('El Viaje de Chihiro',movieColor);
	crearElemento('Odisea en el Espacio',movieColor);
	crearElemento('Star Wars V',movieColor);
	crearElemento('Whiplash',movieColor);
	crearElemento('Toy Story',movieColor);
	crearElemento('Animación',genreColor);
	crearElemento('Ciencia Ficción',genreColor);
	crearElemento('Drama',genreColor);
}

function crearElemento(nombre,color)
{
	var figura;
	var texto;
	var grupo;
	var tamaniotexto;
	var tamanioFiguraW;
	var tamanioFiguraH;
	
	grupo = new createjs.Container();
   
	
	grupo.addEventListener('mousedown', startDrag); // Escucha la pulsación del botón del ratón
	grupo.addEventListener('pressmove', drag);   // Escucha movimiento del ratón, después de haber sido pulsado
	grupo.addEventListener('mouseup', stopDrag); // Escucha la liberación del botón del ratón

	texto = new createjs.Text(nombre, "20px Arial", "black"); 
	texto.textBaseline = "top";
	tamaniotexto = texto.getBounds();
	texto.x = -tamaniotexto.width/2;
	texto.y = -tamaniotexto.height/2;

	figura = new createjs.Shape();
	tamanioFiguraW = tamaniotexto.width + 30;
	tamanioFiguraH = tamaniotexto.height + 20;
	figura.graphics
        .setStrokeStyle(1)
        .beginStroke('black')
        .beginFill(color)
        .drawRoundRect(-tamanioFiguraW/2, -tamanioFiguraH/2, tamanioFiguraW, tamanioFiguraH, 5);
	
	grupo.x = ((stage.canvas.width - tamanioFiguraW) * Math.random()) + tamanioFiguraW/2;
	grupo.y = ((stage.canvas.height - tamanioFiguraH) * Math.random()) + tamanioFiguraH/2;

	grupo.addChild(figura, texto);
	grupo.offsetX = 0;
	grupo.offsetY = 0;

	stage.addChild(grupo);
	stage.update();
}

function startDrag(event) 
{
// Esta función sirve para que al arrastrar no se haga desde el punto central del grupo, 
// sino desde aquel punto donde se hizo click
	var grupo = event.currentTarget;
	var offset = grupo.globalToLocal(event.stageX, event.stageY);

// Se evitaran problemas si el grupo estuviera escalado
	grupo.offsetX = offset.x * grupo.scaleX; 
	grupo.offsetY = offset.y * grupo.scaleY;
}

function drag(event)
{
    var grupo = event.currentTarget;

// La nueva posicion se calcula como las coordenadas en pantalla donde se hizo click menos
// el desfase (dentro del grupo) calculado en la funcion startDrag
	grupo.x = event.stageX - grupo.offsetX;
	grupo.y = event.stageY - grupo.offsetY;
	stage.update();
}

function stopDrag(event)
{
	var grupo = event.currentTarget;

	grupo.x = event.stageX - grupo.offsetX;
	grupo.y = event.stageY - grupo.offsetY;
	stage.update();
}