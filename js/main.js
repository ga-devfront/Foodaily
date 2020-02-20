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
    this.creatInto();
    this.creatFooter();
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
      attr: {
        id: 'search'
      },
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
      attr: {
        for: 'searchInput'
      },
      class: []
    });
    this.newHtml({
      parent: $('#search form label'),
      element: 'img',
      attr: {
        src: 'img/localisation.png'
      },
      class: []
    });
    this.newHtml({
      parent: $('#search form'),
      element: 'input',
      attr: {
        id: 'searchInput',
        type: 'text',
        placeholder: 'Ville, adresse, restaurant, etc...'
      },
      class: []
    });
    this.newHtml({
      parent: $('#search form'),
      element: 'input',
      attr: {
        id: 'searchBtn',
        type: 'button',
        value: 'Rechercher'
      },
      class: ['white', 'bold']
    });
  }

  creatCard(settings) {
    this.newHtml({
      parent: $(settings.parent),
      element: 'article',
      attr: {
        id: settings.id
      },
      class: ['card']
    });
    this.newHtml({
      parent: $(`#${settings.id}`),
      element: 'aside',
      attr: {},
      class: ['circle']
    });
    this.newHtml({
      parent: $(`#${settings.id} aside`),
      element: 'p',
      attr: {},
      class: []
    });
    $(`#${settings.id} aside p`).text(settings.title);
    this.newHtml({
      parent: $(`#${settings.id} aside`),
      element: 'img',
      attr: {
        src: settings.img
      },
      class: []
    });
    this.newHtml({
      parent: $(`#${settings.id}`),
      element: 'p',
      attr: {},
      class: []
    });
    $(`#${settings.id}>p`).text(settings.txt);
  }

  creatInto() {
    this.newHtml({
      parent: $('main'),
      element: 'section',
      attr: {
        id: 'intro'
      },
      class: ['container', 'center', 'spaceTop']
    });
    this.creatCard({
      parent: $('#intro'),
      id: 'decouvrir',
      title: 'Decouvrir',
      img: 'img/decouvrir.png',
      txt: 'Decouvrez de nouveaux restaurants allant de la cuisine asiatique à la gastronomie française en passant par la streetfood amériquaine.'
    });
    this.creatCard({
      parent: $('#intro'),
      id: 'reserver',
      title: 'Reserver',
      img: 'img/reserver.png',
      txt: 'Réservez votre table en ligne dans des restaurants du monde entier et profitez d’offres esclusives à Foodaily !'
    });
    this.creatCard({
      parent: $('#intro'),
      id: 'noter',
      title: 'Noter',
      img: 'img/noter.png',
      txt: 'Donnez votre avis et notez votre repas afin d’aider les autres utilisateurs à ce faire un avis sur le restaurant avant même d’y être aller !'
    });
  }

  creatSocial(settings) {
    this.newHtml({
      parent: $(settings.parent),
      element: 'div',
      attr: {
        id: settings.social
      },
      class: ['social', 'container', 'center', 'verticalCenter']
    });
    this.newHtml({
      parent: $(`#${settings.social}`),
      element: 'a',
      attr: {
        href: settings.link
      },
      class: []
    });
    this.newHtml({
      parent: $(`#${settings.social} a`),
      element: 'img',
      attr: {
        src: settings.img,
        alt: settings.social
      },
      class: []
    });
  }

  creatFooter() {
    this.newHtml({
      parent: $('footer'),
      element: 'p',
      attr: {},
      class: []
    });
    $('footer p').text('Suivez-Nous');
    this.newHtml({
      parent: $('footer'),
      element: 'nav',
      attr: {},
      class: ['container', 'center']
    });
    this.creatSocial({
      parent: $('footer nav'),
      social: 'facebook',
      link: 'https://www.facebook.com/agdevfront/',
      img: 'img/social/fb.png'
    });
    this.creatSocial({
      parent: $('footer nav'),
      social: 'github',
      link: 'https://github.com/ga-devfront/Foodaily',
      img: 'img/social/github.png'
    });
    this.creatSocial({
      parent: $('footer nav'),
      social: 'instagram',
      link: 'https://www.instagram.com/agdevfront/',
      img: 'img/social/insta.png'
    });
    this.creatSocial({
      parent: $('footer nav'),
      social: 'twitter',
      link: 'https://twitter.com/AgDevfront/',
      img: 'img/social/twitter.png'
    });
  }
}

new Site($('body'));