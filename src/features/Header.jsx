import React, { useRef, useState } from 'react'
import { locale, addLocale } from 'primereact/api'
import cs from 'primelocale/cs'
import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'
import { Badge } from 'primereact/badge'
import { Avatar } from 'primereact/avatar'
import { Toast } from 'primereact/toast'
import { Calendar } from 'primereact/calendar'
import { useNavigate } from 'react-router-dom'

function Header() {
    const toast = useRef(null)
    addLocale('cs', cs.cs)

    const [date, setDate] = useState(null)
    const navigate = useNavigate()

    const navigateTo = (url) => {
        navigate(url)
    }

    const itemRenderer = (item) => (
        <a className="align-items-center p-menuitem-link flex">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && (
                <span className="border-1 surface-border border-round surface-100 ml-auto p-1 text-xs">
                    {item.shortcut}
                </span>
            )}
        </a>
    )
    const items = [
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
                    label: 'Přišláplá kočička',
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

    const start = (
        <img
            alt="logo"
            src="https://primefaces.org/cdn/primereact/images/logo.png"
            height="40"
            className="mr-2"
        ></img>
    )
    const end = (
        <div className="align-items-center flex gap-2">
            <InputText
                placeholder="Search"
                type="text"
                className="w-8rem sm:w-auto"
            />
            <Avatar
                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                shape="circle"
            />
        </div>
    )

    return (
        <div className="card">
            <Menubar
                className="shadow-2"
                model={items}
                pt={{
                    action: ({ props, state, context }) => ({
                        className: context.active
                            ? 'bg-primary-800 border-round-sm'
                            : undefined,
                    }),
                    menuitem: ({ props, state, context }) => ({
                        style: {
                            'flex-wrap': 'wrap',
                        },
                    }),
                }}
                start={start}
                end={end}
            />
            <Toast ref={toast} />
        </div>
    )
}

export default Header
