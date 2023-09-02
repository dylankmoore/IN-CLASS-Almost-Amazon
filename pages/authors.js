import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyAuthors = () => {
  const domString = '<h1>No Authors Found</h1>';
  renderToDOM('#store', domString);
};

const showAuthors = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  if (array.length < 1) {
    domString += '<h1>No Authors Found</h1>';
  } else {
    array.forEach((item) => {
      domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <p class="card-text">${item.favorite ? '<b><font color="dodgerblue">Favorite</b></font>' : ''}</p>
        <h5 class="card-title">${item.first_name} ${item.last_name}
        ${item.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <hr>
        <div id="buttons">
        <i class="btn btn-success fas me-1" id="view-author-btn--${item.firebaseKey}">View</i>
        <i class="fas btn btn-info me-1" id="update-author--${item.firebaseKey}">Update</i>
        <i class="btn btn-danger fas me-1" id="delete-author-btn--${item.firebaseKey}">Delete</i>
        </div>
      </div>
    </div>
    `;
    });
  }
  renderToDOM('#store', domString);
};

const showFavorites = (array) => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  if (array.length < 1) {
    domString += '<p>No Authors Found</p>';
  } else {
    array.forEach((item) => {
      domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <p class="card-text">${item.favorite ? '<b><font color="dodgerblue">Favorite</b></font>' : ''}</p>
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <hr>
        <i class="btn btn-success fas" id="view-author-btn--${item.firebaseKey}">View</i>
        <i class="fas btn btn-info" id="update-author--${item.firebaseKey}">Update</i>
        <i class="btn btn-danger fas" id="delete-author-btn--${item.firebaseKey}">Delete</i>
      </div>
    </div>`;
    });
    renderToDOM('#store', domString);
  }
};

export { showAuthors, emptyAuthors, showFavorites };
