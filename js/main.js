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
    this.createLogo();
    this.createMenu();
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
      attr: {
      },
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
}

new Site($('body'));