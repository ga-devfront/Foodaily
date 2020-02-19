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

  step0() {
    this.createLogo();
    this.createMenu();
  }

  createLogo() {
    const logoLink = $('<a>');
    const logoImg = $('<img>');
    $('header').append(logoLink);
    $(logoLink).append(logoImg);
    $(logoLink).attr('href', '/foodaily');
    $(logoImg).attr({
      id: 'logo',
      src: 'img/logo.png',
      alt: 'logo Foodaily',
    });
  }

  createMenu() {
    const menu = $('<nav>');
    const connect = $('<a>');
    const subscribe = $('<a>');
    $('header').append(menu);
    $(menu).append(connect);
    $(menu).append(subscribe);
    $(connect).text('Se connecter');
    $(connect).attr('id', 'connection');
    $(subscribe).text('S\'inscrire');
    $(subscribe).attr('id', 'subscribe');
    $(subscribe).addClass('bold');
  }
}

new Site($('body'));
