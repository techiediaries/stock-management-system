export const menu: any[] = [
    { title: 'Acceuil', icon: 'dashboard', path: "/dashboard" },
    { title: 'Articles', icon: 'local_activity', path: "", items: [
            { title: "liste des articles", path: "/about" },
            { title: "ajouter article", path: "/about" }
        ]
    },
    { title: "Fournisseurs", icon: "local_activity", path: "", items: [
            { title: "les des fournisseurs", path: "/about"},
            { title: "ajouter un fournisseur", path: "/add-supplier"}
        ]
    },
    { title: "Clients", icon: "local_activity", path: "", items: [
            { title: "les des clients", path: "/about"},
            { title: "ajouter un client", path: "/about"}
        ]
    },
];

export const mockedKPIs: any = {
    valA: {
        indicator: "indicateur 1",
        value: 103
    },
    valB: {
        indicator: "indicateur 2",
        value: 103
    },
    valC: {
        indicator: "indicateur 3",
        value: 103
    }
};

export const mockedDataTable: any = {
    headers: [
        { text: 'Code', value: 'name', sortable: false },
        { text: "nom d'article", value: 'calories' },
        { text: "fournisseur", value: 'fat' },
        { text: "categorie", value: 'carbs' },
        { text: "quantite en stock", value: 'protein' },
        { text: 'details', value: 'iron' },
        { text: "actions", align: 'right'}
    ],
    desserts: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
        },
        {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
        },
        {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
        },
        {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
        },
        {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
        },
        {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
        },
        {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
        },
        {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
        },
        {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
        },
        {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
        },
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
        },
        {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
        },
        {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
        },
        {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
        },
        {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
        },
        {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
        },
        {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
        },
        {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
        },
        {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
        },
        {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
        }
    ]
}
