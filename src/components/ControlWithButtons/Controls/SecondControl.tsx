import {observer} from "mobx-react-lite";
import secondControlValue from "../../../store/secondControlValue";

/**
 * Контрол с 1 кнопкой справа и 1 кнопкой слева
 */
const SecondControl = observer(() => {
    const {value, alertNumber, alertText, changeValue} = secondControlValue;
    return (
        <>
            <div className="flex flex-row mr-10 justify-center">
                <button
                    className="border-2 p-2 hover:bg-slate-300"
                    onClick={() => alertNumber()}
                >
                    ALERT!<br/>только числа
                </button>
                <input
                    className="border-2 mx-1 p-2 text-center text-xl"
                    value={secondControlValue.value}
                    onChange={(e) => changeValue(e.target.value)}
                />
                <button
                    className="border-2 p-2 hover:bg-slate-300"
                    onClick={() => alertText()}
                >
                    ALERT!
                </button>
            </div>
        </>
    );
})

export default SecondControl;