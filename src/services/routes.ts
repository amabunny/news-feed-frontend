export class RoutesService {
  /**
   * @summary Функция, генерирующая роут на основании переданных параметров.
   * Маршрут определяется по схеме /url/:id
   * При передаче словаря в качестве аргумента, подставляет переданные значения в схему, делая
   * /url/1
   */
  private static __createRoute(
    routeScheme: string,
    params?: Record<string, string>
  ) {
    if (!params) return routeScheme;

    /** @summary Регулярка для поиска матчей в url таких, как :id, :category, :product и т.д. */
    const paramsRegExp = /:\w+/g;

    let modifiedRoute = routeScheme;
    let routeParam = paramsRegExp.exec(routeScheme);

    while (routeParam !== null) {
      const [routeParamMatch] = routeParam;
      const appliedParam = params[routeParamMatch.replace(':', '')];

      modifiedRoute = modifiedRoute.replace(routeParamMatch, appliedParam);
      routeParam = paramsRegExp.exec(routeScheme);
    }

    return modifiedRoute;
  }

  static getIndex() {
    return '/';
  }

  static getNewsId(params?: { id: string }) {
    return RoutesService.__createRoute(`/news/:id`, params);
  }

  static getPublishNews() {
    return '/publish';
  }

  static getNewsItemEdit(params?: { id: string }) {
    return RoutesService.__createRoute(`/news/edit/:id`, params);
  }

  static getAbout() {
    return '/about';
  }
}
