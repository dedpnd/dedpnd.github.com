import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/main.css';

import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, mergeMap, catchError } from 'rxjs/operators';

type simpleResponseObj = {
  name: string,
  html_url: string,
  owner: {
    avatar_url: string
  }
}

const getRepositories = (query: String): Promise<Response> => {
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then((res) => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
}

const renderList = (items: (simpleResponseObj)[]): void => {
  let mainContent: HTMLElement = document.querySelector('#mainContent') as HTMLElement;
  let content: HTMLDivElement = document.createElement('div');
  content.className = 'row';

  if (items.length == 0) {
    mainContent.innerHTML = 'Nothing :(';
    return
  }

  items.forEach((_e: simpleResponseObj) => {
    let card: HTMLDivElement = document.createElement('div');
    card.className = 'card-custom';
    card.innerHTML = `
    <div class="col-md-3">
      <div class="card" style="width: 14rem;">
        <img class="card-img-top"
          src="${_e.owner.avatar_url}"
          alt="img">
        <div class="card-body">
          <h5 class="card-title">${_e.name}</h5>
          <a href=${_e.html_url} target="_blanc" class="btn btn-primary">Go!</a>
        </div>
      </div>
    </div>
    `;

    content.appendChild(card);
  })

  mainContent.innerHTML = '';
  mainContent.append(content);
}

const renderError = (err: String): void => {
  let mainContent: HTMLElement = document.querySelector('#mainContent') as HTMLElement;
  mainContent.innerHTML = `
  <span style="color:red">
    ${err}
  </span>
  `;
}

const searchInput: HTMLElement = document.querySelector('#searchRep__input') as HTMLElement;
const seqSearchInput$: Observable<KeyboardEvent> = fromEvent(searchInput, 'keyup') as Observable<KeyboardEvent>;

seqSearchInput$.pipe(
  map((e: KeyboardEvent): String => (e.currentTarget as HTMLInputElement).value),
  debounceTime(500),
  mergeMap((val: String) => getRepositories(val)),
  catchError(<T>(err: any, obs: Observable<T>) => {
    console.log('Error', err);
    if (err.status) {
      renderError(`${err.status}: ${err.statusText}`);
    }
    return obs
  })
).subscribe((val: any) => {
  renderList(val.items)
})
