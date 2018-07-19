const state = {
  filtros: 0

};

const render = lState => {

  const filtros = document.createElement('div');
  filtros.className = 'filtro-caja';


  const btnAll = document.createElement('button');
  btnAll.className = 'boton';
  btnAll.innerHTML = 'ALL';

  const btnCompleted = document.createElement('button');
  btnCompleted.className = 'boton';
  btnCompleted.innerHTML = 'COMPLETED';

  const btnActive = document.createElement('button');
  btnActive.className = 'boton';
  btnActive.innerHTML = 'ACTIVE';


  root.appendChild(filtros);
  filtros.appendChild(btnAll);
  filtros.appendChild(btnCompleted);
  filtros.appendChild(btnActive);
}
render(state);