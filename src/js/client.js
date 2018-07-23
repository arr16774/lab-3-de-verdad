const state = {
  mensajes: []

};

const solicitud =fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');


solicitud
  .then(resultado => resultado.json())
  .then(resultadoJSON =>{
    for(let i = 0; i < resultadoJSON.length; i+=1) {
      state.mensajes.push([resultadoJSON[i].title, resultadoJSON[i].isCompleted]);
    }
    console.log(state);
    render(state);
  });


const render = lState => {

  if(root.hasChildNodes()){
    root.innerHTML=null;
  }

  const filtros = document.createElement('div');
  filtros.className = 'filtro-caja';

  const tareas = document.createElement('div');
  tareas.className = 'tareas-caja';

  const agregardiv = document.createElement('div');
  agregardiv.className = 'agregar-caja';

  const agregarinput = document.createElement('input');
  agregarinput.className = 'agregar-input';

  
  const agregarboton = document.createElement('button');
  agregarboton.className = 'agregar-boton';
  agregarboton.innerHTML = 'Agregar';

 
  const btnAll = document.createElement('button');
  btnAll.className = 'boton';
  btnAll.innerHTML = 'ALL';

  const btnCompleted = document.createElement('button');
  btnCompleted.className = 'boton';
  btnCompleted.innerHTML = 'COMPLETED';

  const btnActive = document.createElement('button');
  btnActive.className = 'boton';
  btnActive.innerHTML = 'ACTIVE';

  agregarboton.onclick =() =>{
    state.mensajes.push([agregarinput.value,false]);
    console.log(state.mensajes);
    render(state);
  }

  for(let i = 0; i<state.mensajes.length; i+=1){
    const task = document.createElement('button');
    task.className = `nombretarea ${state.mensajes[i][1]}`;
    task.innerHTML = state.mensajes[i][0];
    tareas.appendChild(task);
  }

  btnActive.onclick = () => {
    tareas.innerHTML=null;
    for(let i = 0; i<state.mensajes.length; i+=1){
      if(state.mensajes[i][1]===false){ 
        const task = document.createElement('button');
        task.className = `nombretarea ${state.mensajes[i][1]}`;
        task.innerHTML = state.mensajes[i][0];
        tareas.appendChild(task);   
      }
    }
  }

  btnCompleted.onclick = () => {
    tareas.innerHTML=null;
    for(let i = 0; i<state.mensajes.length; i+=1){
      if(state.mensajes[i][1]===true){ 
        const task = document.createElement('button');
        task.className = `nombretarea ${state.mensajes[i][1]}`;
        task.innerHTML = state.mensajes[i][0];
        tareas.appendChild(task);   
      }
    }
  }

  btnAll.onclick =() =>{
    tareas.innerHTML = null;
    for(let i = 0; i<state.mensajes.length; i+=1){
      const task = document.createElement('button');
      task.className = `nombretarea ${state.mensajes[i][1]}`;
      task.innerHTML = state.mensajes[i][0];
      tareas.appendChild(task);
    }
  }

 

  root.appendChild(filtros);
  root.appendChild(tareas);
  filtros.appendChild(btnAll);
  filtros.appendChild(btnCompleted);
  filtros.appendChild(btnActive);
  root.appendChild(agregardiv);
  agregardiv.appendChild(agregarinput);
  agregardiv.appendChild(agregarboton);
  
}


render(state);