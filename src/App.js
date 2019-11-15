import getUser from './GetUser';
import getRepos from './GetRepos';
import './style.css';
const renderData = () => {
  let user = {};
  const handleSubmit = async (e) => {
    const value = document.getElementById('input');
    if (!value.value) { return };
    e.preventDefault();
    user = await getUser(value.value);
    if (user.message === 'Not Found') { return };
    await getRepos(user.login);
    // reset the input value
    value.value = null;
  }

  const InputText = {
    render: () => {
      const view =  /*html*/`
        <div class="content has-text-centered">
          <form id="form">
            <input id="input" type="text" />
            <button type="submit">Search</button>
          </form>
        </div>
      `
      return view
    }
  }
  // create a new div element 
  const newDiv = document.createElement("div");
  // add the newly created element and its content into the DOM 
  const currentDiv = document.getElementById("container");
  // render input and search.
  newDiv.innerHTML = InputText.render();
  // render on top
  currentDiv.append(newDiv);
  // handle submition (search)
  const form = document.getElementById('form');
  form.addEventListener('submit', handleSubmit);
}
renderData();
