import {observer} from "mobx-react-lite";
import { CountryInfo } from "../../api/apiService";
import autocomplitStore from "../../store/autocomplitStore";

const ControlAutocomplit = observer(() => {
    const {loading, value, mode, clues, changeValue, changeMode} = autocomplitStore;
    let tooltips: Array<CountryInfo> = [...clues];
    if (!mode && clues.length > 3) tooltips = [...clues.slice(0, 3)];
    if (mode && clues.length > 10) tooltips = [...clues.slice(0, 10)];

    return (
        <div className="p-8 text-center w-full">
           <h1 className="mb-10 text-3xl font-semibold w-full text-center">Контрол-автокомплит</h1>
           <div className="flex flex-row justify-center">
                <div>
                    <input
                        className="border-2 mr-1 p-2 text-center text-xl w-96 h-24"
                        value={value}
                        onChange={(e) => changeValue(e.target.value)}
                    />
                    {loading && <div className="border border-t-0 w-96">Загрузка...</div>}
                    {clues.length > 0 && 
                        <>
                            {tooltips.map((item, index)=>{
                                return (
                                    <div
                                        key={index + item.name}
                                        className="border border-white hover:border-black w-96 p-1 bg-slate-200 flex flex-row justify-between cursor-pointer"
                                        onClick={()=>{changeValue(item.name)}}
                                    >
                                        <div className="text-start">
                                            <p className="text-sm font-semibold">{item.name}</p>
                                            <p className="text-xs">{item.fullName}</p>
                                        </div>
                                        <img src={item.flag} className="h-6 my-auto"/>
                                    </div>
                                );
                            })}
                        </>
                    }
                    </div>

                <div className="flex flex-col justify-start">
                    <button
                        className={`border-2 p-2 mb-1 shadow-sm hover:bg-slate-300 ${!mode ? 'bg-slate-300' : ''}`}
                        onClick={() => changeMode(false)}
                    >
                        3 подсказки
                    </button>
                    <button
                        className={`border-2 p-2 shadow-sm hover:bg-slate-300 ${mode ? 'bg-slate-300' : ''}`}
                        onClick={() => changeMode(true)}
                    >
                        10 подсказок
                    </button>
                </div>
            </div>
        </div>
    );
})

export default ControlAutocomplit;