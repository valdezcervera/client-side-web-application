import getData from './ApiClient'
let result = {};
const GetUser = async (name) => {
  const URL = `https://api.github.com/users/${name}`
  result = new Object(await getData(URL))
  // create the html with user info to later insert in ternary operator
  const userInfo = 
  `
    <svg class="icon content" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
    <div class="column">
      <h3 class="has-text-centered">@${result.login}</h3>
      <h2 class="has-text-centered">${result.name}</h2>
      <h4 class="has-text-centered">${result.bio}</h6>
    </div>
  `
  const Main = {
    render: () => {
      const view =  /*html*/`
      <div class="content has-text-centered">
        ${result.message==='Not Found' ? result.message : userInfo}
      </div>
        `
      return view
    },
  };
  // create a new div element 
  const newDiv = document.createElement("div");
  // add the newly created element and its content into the DOM 
  const currentDiv = document.getElementById("container");
  newDiv.innerHTML = Main.render();
  currentDiv.append(newDiv);
  return result;
}

export default GetUser;
