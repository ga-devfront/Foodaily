/* eslint-disable no-new */

class Site {
  constructor(container) {
    this.parent = container;
    this.state = 0;
    this.previousState = 0;
  }

  set state(state) {
    this.previousState = this.state;
    this.state1 = state;
    this.computeState();
  }

  get state() {
    return this.state1;
  }

  set previousState(state) {
    this.previousState1 = state;
  }

  get previousState() {
    return this.previousState1;
  }

  computeState() {
    switch (this.state) {
      case 0:
        this.step0();
        break;
      default:
        this.step0();
    }
  }

  newHtml(settings) {
    const newElement = $(`<${settings.element}>`);
    $(newElement).attr(settings.attr);
    for (let x = 0; settings.class.length > x; x += 1) {
      $(newElement).addClass(settings.class[x]);
    }
    $(settings.parent).append(newElement);
  }

  step0() {
    if ($('#logo').val() === undefined) {
      this.createLogo()
    };
    if ($('#connection').val() === undefined && $('#subscribe').val() === undefined) {
      this.createMenu();
    };
    this.createSearch();
  }

  createLogo() {
    this.newHtml({
      parent: $('header'),
      element: 'a',
      attr: {
        href: '/foodaily'
      },
      class: [],
    });
    this.newHtml({
      parent: $('header a'),
      element: 'img',
      attr: {
        id: 'logo',
        src: 'img/logo.png',
        alt: 'logo Foodaily',
      },
      class: [],
    });
  }

  createMenu() {
    this.newHtml({
      parent: $('header'),
      element: 'nav',
      attr: {},
      class: [],
    });
    this.newHtml({
      parent: $('header nav'),
      element: 'a',
      attr: {
        id: 'connection',
      },
      class: [],
    });
    this.newHtml({
      parent: $('header nav'),
      element: 'a',
      attr: {
        id: 'subscribe',
      },
      class: ['bold'],
    });
    $('#connection').text('Se connecter');
    $('#subscribe').text('S\'inscrire');
  }
  
  createSearch() {
    this.newHtml({
      parent: $('main'),
      element: 'section',
      attr: {id : 'search'},
      class: ['container', 'verticalCenter', 'column', 'center']
    });
    this.newHtml({
      parent: $('#search'),
      element: 'p',
      attr: {},
      class: ['big', 'white', 'bold', 'spaceBottom']
    });
    $('#search p').text('Trouver le restaurant qui vous correspond');
    this.newHtml({
      parent: $('#search'),
      element: 'form',
      attr: {},
      class: ['shadowBar', 'container', 'verticalCenter']
    });
    this.newHtml({
      parent: $('#search form'),
      element: 'label',
      attr: {for: 'searchInput'},
      class: []
    });
    this.newHtml({
      parent: $('#search form label'),
      element: 'img',
      attr: {src: 'img/localisation.png'},
      class: []
    });
    this.newHtml({
      parent: $('#search form'),
      element: 'input',
      attr: {id : 'searchInput',
      type: 'text',
      placeholder: 'Ville, adresse, restaurant, etc...'},
      class: []
    });
    this.newHtml({
      parent: $('#search form'),
      element: 'input',
      attr: {id : 'searchBtn',
    type: 'button',
  value: 'Rechercher'},
  class: ['white', 'bold']
    })
  }
}

new Site($('body'));