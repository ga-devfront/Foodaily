/* eslint-disable no-new */
class Site {
  constructor(container) {
    this.parent = container;
    this.state = 0;
    this.previousState = 0;
    this.research = '';
    this.restaurants = [];
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
      case 1:
        this.step1(this.research);
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

  createLogo() {
    this.newHtml({
      parent: $('header'),
      element: 'a',
      attr: {
        href: '/foodaily',
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
      class: ['bold', 'white'],
    });
    $('#connection').text('Se connecter');
    $('#subscribe').text('S\'inscrire');
  }

  createSearch() {
    this.newHtml({
      parent: $('main'),
      element: 'section',
      attr: {
        id: 'search',
      },
      class: ['container', 'verticalCenter', 'column', 'center'],
    });
    this.newHtml({
      parent: $('#search'),
      element: 'p',
      attr: {},
      class: ['big', 'white', 'bold', 'spaceBottom'],
    });
    $('#search p').text('Trouver le restaurant qui vous correspond');
    this.newHtml({
      parent: $('#search'),
      element: 'form',
      attr: {},
      class: ['shadowBar', 'container', 'verticalCenter'],
    });
    this.newHtml({
      parent: $('#search form'),
      element: 'label',
      attr: {
        for: 'searchInput',
      },
      class: [],
    });
    this.newHtml({
      parent: $('#search form label'),
      element: 'img',
      attr: {
        src: 'img/localisation.png',
      },
      class: [],
    });
    this.newHtml({
      parent: $('#search form'),
      element: 'input',
      attr: {
        id: 'searchInput',
        type: 'text',
        placeholder: 'Ville, adresse, restaurant, etc...',
      },
      class: [],
    });
    this.newHtml({
      parent: $('#search form'),
      element: 'input',
      attr: {
        id: 'searchBtn',
        type: 'button',
        value: 'Rechercher',
      },
      class: ['white', 'bold'],
    });
  }

  creatCard(settings) {
    this.newHtml({
      parent: $(settings.parent),
      element: 'article',
      attr: {
        id: settings.id,
      },
      class: ['card'],
    });
    this.newHtml({
      parent: $(`#${settings.id}`),
      element: 'aside',
      attr: {},
      class: ['circle'],
    });
    this.newHtml({
      parent: $(`#${settings.id} aside`),
      element: 'p',
      attr: {},
      class: [],
    });
    $(`#${settings.id} aside p`).text(settings.title);
    this.newHtml({
      parent: $(`#${settings.id} aside`),
      element: 'img',
      attr: {
        src: settings.img,
      },
      class: [],
    });
    this.newHtml({
      parent: $(`#${settings.id}`),
      element: 'p',
      attr: {},
      class: [],
    });
    $(`#${settings.id}>p`).text(settings.txt);
  }

  creatIntro() {
    this.newHtml({
      parent: $('main'),
      element: 'section',
      attr: {
        id: 'intro',
      },
      class: ['container', 'center', 'spaceTop'],
    });
    this.creatCard({
      parent: $('#intro'),
      id: 'decouvrir',
      title: 'Decouvrir',
      img: 'img/decouvrir.png',
      txt: 'Decouvrez de nouveaux restaurants allant de la cuisine asiatique à la gastronomie française en passant par la streetfood amériquaine.',
    });
    this.creatCard({
      parent: $('#intro'),
      id: 'reserver',
      title: 'Reserver',
      img: 'img/reserver.png',
      txt: 'Réservez votre table en ligne dans des restaurants du monde entier et profitez d’offres esclusives à Foodaily !',
    });
    this.creatCard({
      parent: $('#intro'),
      id: 'noter',
      title: 'Noter',
      img: 'img/noter.png',
      txt: 'Donnez votre avis et notez votre repas afin d’aider les autres utilisateurs à ce faire un avis sur le restaurant avant même d’y être aller !',
    });
  }

  creatSocial(settings) {
    this.newHtml({
      parent: $(settings.parent),
      element: 'div',
      attr: {
        id: settings.social,
      },
      class: ['social', 'container', 'center', 'verticalCenter'],
    });
    this.newHtml({
      parent: $(`#${settings.social}`),
      element: 'a',
      attr: {
        href: settings.link,
      },
      class: [],
    });
    this.newHtml({
      parent: $(`#${settings.social} a`),
      element: 'img',
      attr: {
        src: settings.img,
        alt: settings.social,
      },
      class: [],
    });
  }

  creatFooter() {
    this.newHtml({
      parent: $('footer'),
      element: 'p',
      attr: {},
      class: [],
    });
    $('footer p').text('Suivez-Nous');
    this.newHtml({
      parent: $('footer'),
      element: 'nav',
      attr: {},
      class: ['container', 'center'],
    });
    this.creatSocial({
      parent: $('footer nav'),
      social: 'facebook',
      link: 'https://www.facebook.com/agdevfront/',
      img: 'img/social/fb.png',
    });
    this.creatSocial({
      parent: $('footer nav'),
      social: 'github',
      link: 'https://github.com/ga-devfront/Foodaily',
      img: 'img/social/github.png',
    });
    this.creatSocial({
      parent: $('footer nav'),
      social: 'instagram',
      link: 'https://www.instagram.com/agdevfront/',
      img: 'img/social/insta.png',
    });
    this.creatSocial({
      parent: $('footer nav'),
      social: 'twitter',
      link: 'https://twitter.com/AgDevfront/',
      img: 'img/social/twitter.png',
    });
  }

  creatRestaurant(settings) {
    this.newHtml({
      parent: settings.parent,
      element: 'element',
      attr: {},
      class: ['container', 'around', 'littleRestaurant'],
    });
  }

  createMarker(place, map) {
    /* eslint-disable-next-line */
    new google.maps.Marker({
      map,
      position: place.geometry.location,
    });
  }

  async creatMap() {
    /* eslint-disable-next-line */
    return new Promise(async (resolveMap) => {
      /* eslint-disable-next-line */
      const geocoder = new google.maps.Geocoder();
      const maPromesse = new Promise((resolveGeo) => {
        geocoder.geocode({
          address: this.research,
        }, (results, status) => {
          if (status === 'OK') {
            resolveGeo(results[0].geometry.location);
          }
        });
      });
      const result = await maPromesse;
      /* eslint-disable-next-line */
      const map = new google.maps.Map(document.getElementById('map'), {
        center: result,
        zoom: 15,
      });
      /* eslint-disable-next-line */
      const placesService = new google.maps.places.PlacesService(map);
      const request = {
        location: result,
        radius: '500',
        type: ['restaurant'],
        fields: ['name', 'formatted_address', 'geometry'],
      };
      placesService.nearbySearch(request, (results, status) => {
        /* eslint-disable-next-line */
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i += 1) {
            window.setTimeout(() => {
              this.createMarker(results[i], map);
            }, 100 * i);

            this.restaurants.push(results[i]);
          }
        }
      });
      resolveMap();
    });
  }

  async creatResult() {
    this.newHtml({
      parent: $('main'),
      element: 'aside',
      attr: {
        id: 'resultName',
      },
      class: ['container', 'verticalCenter', 'column', 'center', 'spaceBottom'],
    });
    this.newHtml({
      parent: $('#resultName'),
      element: 'p',
      attr: {},
      class: ['big', 'white', 'bold'],
    });
    $('#resultName p').text(`Restaurants à ${this.research}`);
    this.newHtml({
      parent: $('main'),
      element: 'article',
      attr: {
        id: 'result',
      },
      class: ['container', 'center', 'column'],
    });
    this.newHtml({
      parent: $('#result'),
      element: 'aside',
      attr: {},
      class: ['container', 'between', 'spaceBottom'],
    });
    this.newHtml({
      parent: $('#result aside'),
      element: 'a',
      attr: {
        id: 'retour',
      },
      class: ['bold', 'white'],
    });
    $('#retour').text('<< Retour');
    $('#retour').click(() => {
      this.state = 0;
    });
    this.newHtml({
      parent: $('#result aside'),
      element: 'p',
      attr: {
        id: 'resultNumber',
      },
      class: ['bold'],
    });
    $('#resultNumber').text('255 Restaurants');
    this.newHtml({
      parent: $('#result'),
      element: 'section',
      attr: {},
      class: ['container', 'around'],
    });
    this.newHtml({
      parent: $('#result section'),
      element: 'div',
      attr: {
        id: 'mapContainer',
      },
      class: [],
    });
    this.newHtml({
      parent: $('#mapContainer'),
      element: 'div',
      attr: {
        id: 'map',
      },
      class: [],
    });
    await this.creatMap();
    this.newHtml({
      parent: $('#result section'),
      element: 'section',
      attr: {
        id: 'resultList',
      },
      class: ['container', 'column', 'center'],
    });
    for (let x = 0; x < 10; x += 1) {
      this.creatRestaurant({
        parent: $('#resultList'),
        name: `restaurant ${x}`,
      });
    }
  }

  fadeIn(element) {
    $(element).css({
      opacity: '100',
      bottom: '0',
    });
  }

  fadeOut(element) {
    $(element).css({
      opacity: '0',
      bottom: '-40px',
    });
  }

  step0() {
    if ($('#logo').val() === undefined && $('#connection').val() === undefined && $('#subscribe').val() === undefined) {
      this.createLogo();
      this.createMenu();
      this.creatFooter();
    }

    let time = 0;
    if (this.previousState === 1) {
      time = 1000;
    }
    this.fadeOut('main');
    window.setTimeout(() => {
      $('main').empty();
      this.createSearch();
      const input = $('#searchInput')[0];
      const options = {
        types: ['(cities)'],
        componentRestrictions: {
          country: ['fr', 'ch'],
        },
      };
      /* eslint-disable-next-line */
      new google.maps.places.Autocomplete(input, options);
      $('#searchBtn').click(() => {
        this.research = $('#searchInput').val();
        this.state = 1;
      });
      this.creatIntro();
      this.fadeIn('header');
      this.fadeIn('main');
      this.fadeIn('footer');
    }, time);
  }

  step1(research) {
    this.fadeOut('main');
    window.setTimeout(() => {
      $('main').empty();
      this.creatResult(research);
      this.fadeIn('main');
    }, 1000);
  }
}

new Site($('body'));
