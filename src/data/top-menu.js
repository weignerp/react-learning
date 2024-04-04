const menuItems = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
            toast.current.show({
                severity: 'success',
                summary: 'Success',
                detail: 'File created',
                life: 3000,
            })
        },
    },
    {
        label: 'Features',
        icon: 'pi pi-star',
        url: 'features',
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'About',
                icon: 'pi pi-bolt',
                shortcut: '⌘+S',
                template: itemRenderer,
                command: () => {
                    navigateTo('about')
                },
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server',
                shortcut: '⌘+B',
                template: itemRenderer,
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil',
                shortcut: '⌘+U',
                template: itemRenderer,
            },
            {
                separator: true,
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette',
                        badge: 2,
                        template: itemRenderer,
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette',
                        badge: 3,
                        template: itemRenderer,
                    },
                ],
            },
        ],
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: 3,
        template: itemRenderer,
    },
]

export default menuItems
