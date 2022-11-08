import firstControlValue from "../../../store/firstControlValue";
import {observer} from "mobx-react-lite";

/**
 * Контрол с двумя кнопками справа
 */
const FirstControl = observer(() => {
    const {value, changeValue} = firstControlValue;

    return (
        <>
            <div className="flex flex-row justify-center">
                <input
                    className="border-2 mr-1 p-2 text-center text-xl"
                    value={value}
                    onChange={(e) => changeValue(e.target.value)}
                />
                <div className="flex flex-col justify-start">
                    <button
                        className="border-2 p-2 mb-1 shadow-sm hover:bg-slate-300"
                        onClick={() => changeValue('')}
                    >
                        Очистить
                    </button>
                    <button
                        className="border-2 p-2 shadow-sm hover:bg-slate-300"
                        onClick={() => changeValue('Hello, World!')}
                    >
                        Привет, мир!
                    </button>
                </div>
            </div>
        </>
    );
})

export default FirstControl;