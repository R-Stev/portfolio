const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AboutPage.vue') },
      // { path: '/about', component: () => import('pages/AboutPage.vue') },
      { path: '/projects', component: () => import('pages/ProjectsPage.vue') }
    ]
  },
  {path: '/wrap', component: () => import('pages/ResponsiveWrapper.vue')},

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
