import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();
  let domString = '';
  domString += `
   <div class="text-white ms-5 details">
     <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${obj.email}">${obj.email}</a><BR>
      </div>
     <div class="auth-buttons">
       <i id="update-author--${obj.firebaseKey}" class="fas btn btn-info">Update</i>
       <i id="delete-author-btn--${obj.firebaseKey}" class="btn btn-danger fas" style="margin-left:10px;">Delete</i>
     </div></div>
   </div>
    </div>
    <div class="mt-2 d-flex flex-wrap gap-2">
   <div class="text-white ms-5 details">
   <hr>
   <h4>Books</h4>
    `;

  obj.books.forEach((item) => {
    domString += `
    <div class="mt-2 d-flex flex-row">
        <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;" style="width: 300px;" background-color:"black;">
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.title}</h5>
              <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
              <hr><center>
              <i class="btn btn-success fas" id="view-book-btn--${item.firebaseKey}">View</i>
              <i id="edit-book-btn--${item.firebaseKey}" class="fas btn btn-info">Update</i>
              <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas">Delete</i></center>
          </div>
        </div>
    </div>`;
  });

  renderToDOM('#view', domString);
};

export default viewAuthor;
