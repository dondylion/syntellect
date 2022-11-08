import {observer} from "mobx-react-lite";
import controlWithButtonsStore from "../../store/controlWithButtonsStore";
import FirstControl from "./Controls/FirstControl";
import SecondControl from "./Controls/SecondControl";

const ControlWithButtons = observer (() => {
    const {mode, changeMode} = controlWithButtonsStore;

    return (
        <div className="p-8 min-w-[50vw] lg:min-h-[100vh] lg:border-r-8 lg:border-b-0 md:border-b-8 md:min-h-[45vh]">
            <h1 className="mb-8 text-3xl font-semibold w-full text-center">Контрол с кнопками</h1>
            <div className="flex flex-row justify-center text-xl font-semibold mb-8">
                <span
                    className={`mr-5 cursor-pointer ${!mode ? 'border-b-2 border-black' : ''}`}
                    onClick={()=>{
                        if (mode) changeMode();
                    }}
                >
                    Hello, World!
                </span>
                <span
                    className={`cursor-pointer ${mode ? 'border-b-2 border-black' : ''}`}
                    onClick={()=>{
                        if (!mode) changeMode();
                    }}
                >
                    Alert!
                </span>
            </div>
            <div className="w-full text-center">
                    {!mode && <FirstControl/>}
                    {mode && <SecondControl/>}
            </div>
        </div>
    );
})

export default ControlWithButtons;