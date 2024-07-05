//
// Constant variables

export class Constant {
  // Sidebar navbar
  //
  // Start: navbar array
  public static navbar = [

    {
      head: 'Complexe',
    },

    {
      name: 'Home',
      icon: '<i class="ri-home-4-line fs-5"></i>',
      link: '/app/compt/user',
    },

    {
      name: 'Créer nouvelle complexe',
      icon: '<i class="ri-add-circle-line fs-5"></i>',
      link: '/app/compt/user/add',
    },









    {
      name: 'Home',
      icon: '<i class="ri-home-4-line fs-5"></i>',
      link: '/app/home',
    },
    {
      name: 'Subscriptions ',
      icon: '<i class="ri-album-line fs-5"></i>',
      link: '/app/album',
    },
    {
      name: 'Offers',
      icon: '<i class="ri-mic-line fs-5"></i>',
      link: '/app/artist',
    },
    {
      head: 'Evenement',
    },
    {
      name: 'Actuel',
      icon: '<i class="ri-calendar-event-line fs-5"></i>',
      link: '/app/event',
    },
    {
      name: 'Statistique',
      icon: '<i class="ri-bar-chart-line fs-5"></i>',
      link: '/app/song',
    },
    {
      name: 'Créer nouvelle event',
      icon: '<i class="ri-add-circle-line fs-5"></i>',
      link: '/app/event/add',
    },

    {
      head: 'Your Activity',
    },
    {
      name: 'Purchase page',

      icon: '',
      link: '/app/panier',
    },

    {
      name: 'Favorites',
      icon: '<i class="ri-heart-line fs-5"></i>',
      link: '/app/favorites',
    },
    {
      name: 'History',
      icon: '<i class="ri-history-line fs-5"></i>',
      link: '/app/history',
    },

    {
      head: 'Extra',
    },
    {
      name: '404 Page',
      icon: '<i class="ri-error-warning-line fs-5"></i>',
      link: '/404',
    },
  ];
  // End: navbar array

  // Top header menu
  //
  // Start: header menu array
  public static menu = [
    {
      name: 'Discover',
      link: '/app',
    },
    {
      name: 'Pricing',
      link: '/landing',
      fragment: 'pricing',
    },
    {
      name: 'About us',
      link: '/about',
    },
    {
      name: 'Search',
      link: '/blog',
    },
    {
      name: 'Contact us',
      link: '/contact',
    },
  ];
  // End: header array

  // Login user dropdown options
  //
  // Start: options array
  public static options = [
    {
      name: 'Profile',
      icon: '<i class="ri-user-3-line fs-5"></i>',
      link: '/app/profile',
    },
    {
      name: 'Favorites',
      icon: '<i class="ri-heart-line fs-5"></i>',
      link: '/app/favorites',
    },
    {
      name: 'Settings',
      icon: '<i class="ri-settings-line fs-5"></i>',
      link: '/app/settings',
    },
    {
      name: 'Plan',
      icon: '<i class="ri-money-dollar-circle-line fs-5"></i>',
      link: '/app/plan',
    },
  ];
  // End: options array

  // End: languages array

  // Social links
  //
  // Start: social array
  public static social = [
    {
      icon: '<i class="ri-facebook-fill fs-6"></i>',
      link: '#',
    },
    {
      icon: '<i class="ri-twitter-fill fs-6"></i>',
      link: '#',
    },
    {
      icon: '<i class="ri-instagram-fill fs-6"></i>',
      link: '#',
    },
    {
      icon: '<i class="ri-pinterest-fill fs-6"></i>',
      link: '#',
    },
    {
      icon: '<i class="ri-youtube-fill fs-6"></i>',
      link: '#',
    },
  ];
  // End: social array

  // Default user object is use to show user data after login.
  // You can remove this after integration
  public static DEFAULT_USER = {
    name: 'Souhaiel Amri',
    cover: './assets/images/users/thumb.jpg',
    role: 'admin',
  };

  // Brand object
  public static BRAND = {
    name: 'Subflex',
    link: '/',
    logo: './assets/images/logos/logo.svg',
    email: 'info@listenapp.com',
  };

  // Mobile app data
  public static APP = [
    {
      name: 'Google Play',
      icon: '<i class="ri-google-play-fill"></i>',
      link: '#',
    },
    {
      name: 'App Store',
      icon: '<i class="ri-app-store-fill"></i>',
      link: '#',
    },
  ];

  // Objects to view header & footer for landing and app pages.
  public static HEADER_VIEW = {
    landing: 'landing',
    app: 'app',
  };

  public static FOOTER_VIEW = {
    landing: 'landing',
    app: 'app',
  };

  // Invalid form status string.
  public static FORM_INVALID = 'INVALID';

  // Interceptor header string
  public static INTERCEPTOR_SKIP_HEADER = 'X-Skip-Interceptor';

  // Local storage keys
  public static USER_KEY = 'user';
  public static THEME_SKIN = 'skin';
  public static SONG_KEY = 'songs';

  // Attribute names
  public static SIDEBAR_TOGGLE = 'data-sidebar-toggle';
  public static SEARCH_RESULTS = 'data-search-results';
  public static THEME_DARK = 'data-theme';
  public static HEADER = 'data-header';
  public static SIDEBAR = 'data-sidebar';
  public static PLAYER = 'data-player';

  // Flag to show theme setting options
  public static SETTINGS_VIEW = true;

  // Enable for theme dark mode
  public static DARK_MODE = false;

  // Components theme :: ['yellow', 'orange', 'red', 'green', 'blue', 'purple', 'indigo', 'dark']
  public static HEADER_THEME = 'blue';
  public static SIDEBAR_THEME = 'blue';
  public static PLAYER_THEME = 'blue';

  // Global HTML classes
  public static ACTIVE = 'active';
  public static SHOW = 'show';
}
