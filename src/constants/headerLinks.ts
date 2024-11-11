interface IHeaderRoute {
    route: string;
    name: string;
}

export enum ERoutes {
    main = '/',
    catalog = '/catalog',
    delivery = '/delivery',
    contact = '/contacts',
}

export const headerLinks: IHeaderRoute[] = [
    {
        route: ERoutes.main,
        name: 'Главная'
    },
    {
        route: ERoutes.catalog,
        name: 'Каталог'
    },
    {
        route: ERoutes.delivery,
        name: 'Доставка'
    },
    {
        route: ERoutes.contact,
        name: 'Контакты'
    }
]
