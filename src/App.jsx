import React, { useState } from 'react'
import { Panel } from 'primereact/panel'
import { Slider } from 'primereact/slider'

import 'primeflex/primeflex.css'
// import "primeflex/themes/primeone-light.css";
import 'primereact/resources/themes/lara-light-blue/theme.css'
import './App.css'

function App() {
    const [value, setValue] = useState(null)

    return (
        <>
            <div className="m-10 p-0 pt-2">
                <div className="relative">
                    <div className="bg-primary-100 border-round static p-4 text-gray-800">
                        <p className="p-6 font-bold text-gray-600" pt={{}}>
                            Static
                        </p>
                    </div>
                </div>
            </div>
            <Panel header="Header" toggleable pt={{ header: 'text' }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </Panel>
            <div className="bg-primary fixed bottom-0 left-0 flex w-full p-2 font-semibold opacity-50 md:p-4">
                Absolute
            </div>
            <div className="align-items-center justify-content-start flex">
                <div className="w-4rem h-4rem bg-primary border-round mr-3 p-4 font-bold">
                    1
                </div>
                <div className="w-4rem h-4rem bg-primary align-items-center justify-content-center border-round mr-3 flex p-4 font-bold">
                    2
                </div>
                <div class="w-4rem h-4rem bg-primary align-items-center justify-content-center border-round flex p-4 font-bold">
                    3
                </div>
            </div>
            <div className="card justify-content-center flex">
                <Slider
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    className="w-14rem"
                />
            </div>
        </>
    )
}

export default App
