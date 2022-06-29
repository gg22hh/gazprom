import React, { useState } from "react";
import { buildingsObj, infoObj, kvartirsObj } from "../../assets/data";

import s from "./AddForm.module.css";

export const AddForm = ({ places, setPlaces }) => {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [info, setInfo] = useState(infoObj);
    const [building, setBuilding] = useState(buildingsObj);
    const [kvartirs, setKvartirs] = useState(kvartirsObj);

    const handleAddForm = async (e) => {
        e.preventDefault();

        const newPlace = {
            id: new Date().getTime(),
            name: name,
            place: [parseFloat(x), parseFloat(y)],
            building: { ...building },
            kvartir: { ...kvartirs },
            info: { ...info },
        };

        const response = await fetch(
            "https://62b48976da3017eabb0cb5ed.mockapi.io/places/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPlace),
            }
        );

        if (response.ok) {
            const newPostToServer = await response.json();
            setPlaces([...places, newPostToServer]);
        } else {
            console.log("error");
        }

        setName("");
        setX("");
        setY("");
        setInfo(infoObj);
        setBuilding(buildingsObj);
        setKvartirs(kvartirsObj);
        setShowForm(false);
    };

    return (
        <>
            <button
                style={{ margin: "20px auto" }}
                onClick={() => setShowForm(true)}
                className={s.button}
            >
                Добавить
            </button>
            {showForm && (
                <form className={s.form} onSubmit={handleAddForm}>
                    <button
                        onClick={() => setShowForm(false)}
                        className={s.close}
                    >
                        &#10006;
                    </button>
                    <h1 className={s.title}>Форма добавления нового здания</h1>
                    <div className={s.block}>
                        <label>Название</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Название"
                        />
                    </div>
                    <div className={s.block}>
                        <label>Координата Х</label>
                        <input
                            type="number"
                            value={x}
                            onChange={(e) => setX(e.target.value)}
                            placeholder="Х"
                        />
                    </div>
                    <div className={s.block}>
                        <label>Координата У</label>
                        <input
                            type="number"
                            value={y}
                            onChange={(e) => setY(e.target.value)}
                            placeholder="У"
                        />
                    </div>

                    <h3 className={s.block__name}>
                        Информация об источнике газоснабжения объекта
                    </h3>
                    <div className={s.block}>
                        <label>Наименование объекта</label>
                        <input
                            type="text"
                            placeholder="Наименование объекта"
                            value={info.name}
                            onChange={(e) =>
                                setInfo({ ...info, name: e.target.value })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Адрес объекта</label>
                        <input
                            type="text"
                            placeholder="Адрес объекта"
                            value={info.adres}
                            onChange={(e) =>
                                setInfo({ ...info, adres: e.target.value })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Источник газоснабжения</label>
                        <input
                            type="text"
                            placeholder="Источник газоснабжения"
                            value={info.istochnik}
                            onChange={(e) =>
                                setInfo({ ...info, istochnik: e.target.value })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>
                            Расстояние от точки подключения до границы учатскa
                        </label>
                        <input
                            type="text"
                            placeholder="Расстояние от точки подключения до границы учатска"
                            value={info.rasst}
                            onChange={(e) =>
                                setInfo({ ...info, rasst: e.target.value })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>
                            Наименование ГСР, снабжающий источник газоснабжения
                        </label>
                        <input
                            type="text"
                            placeholder="Наименование ГСР, снабжающий источник газоснабжения"
                            value={info.nameGSR}
                            onChange={(e) =>
                                setInfo({ ...info, nameGSR: e.target.value })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Собственник источника газоснабжения</label>
                        <input
                            type="text"
                            placeholder="Собственник источника газоснабжения"
                            value={info.sobstvenn}
                            onChange={(e) =>
                                setInfo({ ...info, sobstvenn: e.target.value })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Дополнительная информация</label>
                        <input
                            type="text"
                            placeholder="Дополнительная информация"
                            value={info.dop}
                            onChange={(e) =>
                                setInfo({ ...info, dop: e.target.value })
                            }
                        />
                    </div>
                    <h3 className={s.block__name}>Информация о здании</h3>
                    <div className={s.block}>
                        <label>Дата обследования</label>
                        <input
                            type="text"
                            placeholder="Дата обследования"
                            value={building.date}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    date: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Этажность</label>
                        <input
                            type="text"
                            placeholder="Этажность"
                            value={building.etaj}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    etaj: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Подъездов</label>
                        <input
                            type="text"
                            placeholder="Подъездов"
                            value={building.podezd}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    podezd: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Квартир</label>
                        <input
                            type="text"
                            placeholder="Квартир"
                            value={building.kvartir}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    kvartir: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Коллективный дымоход</label>
                        <input
                            type="text"
                            placeholder="Коллективный дымоход"
                            value={building.kol_dym}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    kol_dym: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>ШРП</label>
                        <input
                            type="text"
                            placeholder="ШРП"
                            value={building.shrp}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    shrp: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Газовые стояки</label>
                        <input
                            type="text"
                            placeholder="Газовые стояки"
                            value={building.gaz_stoyak}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    gaz_stoyak: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Кран (высокая сторона)</label>
                        <input
                            type="text"
                            placeholder="Кран (высокая сторона)"
                            value={building.kran_vis}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    kran_vis: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Кран (низкая сторона)</label>
                        <input
                            type="text"
                            placeholder="Кран (низкая сторона)"
                            value={building.kran_niz}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    kran_niz: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>ИФС</label>
                        <input
                            type="text"
                            placeholder="ИФС"
                            value={building.ifc}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    ifc: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Фильтр</label>
                        <input
                            type="text"
                            placeholder="Фильтр"
                            value={building.filtr}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    filtr: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Подводящий газопровод</label>
                        <input
                            type="text"
                            placeholder="Подводящий газопровод"
                            value={building.pod_gaz}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    pod_gaz: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Диаметр (высокая сторона)</label>
                        <input
                            type="text"
                            placeholder="Диаметр (высокая сторона)"
                            value={building.diametr_vis}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    diametr_vis: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Диаметр (низкая сторона)</label>
                        <input
                            type="text"
                            placeholder="Диаметр (низкая сторона)"
                            value={building.diametr_niz}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    diametr_niz: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Диаметр фасадного газопровода</label>
                        <input
                            type="text"
                            placeholder="Диаметр фасадного газопровода"
                            value={building.diametr_fas}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    diametr_fas: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Футляры через стены и перекрытия</label>
                        <input
                            type="text"
                            placeholder="Футляры через стены и перекрытия"
                            value={building.fultlyar}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    fultlyar: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Наличия коммерческих помещений</label>
                        <input
                            type="text"
                            placeholder="Наличия коммерческих помещений"
                            value={building.kommerchesk}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    kommerchesk: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Охранная зона</label>
                        <input
                            type="text"
                            placeholder="Охранная зона"
                            value={building.ohrann}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    ohrann: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Соответсвие</label>
                        <input
                            type="text"
                            placeholder="Соответсвие"
                            value={building.sootvetsvie}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    sootvetsvie: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Вывод</label>
                        <input
                            type="text"
                            placeholder="Вывод"
                            value={building.vivod}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    vivod: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Прочее</label>
                        <input
                            type="text"
                            placeholder="Прочее"
                            value={building.else}
                            onChange={(e) =>
                                setBuilding({
                                    ...building,
                                    else: e.target.value,
                                })
                            }
                        />
                    </div>
                    <h3 className={s.block__name}>Информация о квартире</h3>
                    <div className={s.block}>
                        <label>Квартира</label>
                        <input
                            type="text"
                            placeholder="Квартира"
                            value={kvartirs.name}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Дата обследования</label>
                        <input
                            type="text"
                            placeholder="Дата обследования"
                            value={kvartirs.date}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    date: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Этаж</label>
                        <input
                            type="text"
                            placeholder="Этаж"
                            value={kvartirs.etaj}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    etaj: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Подъезд</label>
                        <input
                            type="text"
                            placeholder="Подъезд"
                            value={kvartirs.podezd}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    podezd: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Газоиспользующее оборудование</label>
                        <input
                            type="text"
                            placeholder="Газоиспользующее оборудование"
                            value={kvartirs.gaz_ob}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    gaz_ob: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Плита газовая</label>
                        <input
                            type="text"
                            placeholder="Плита газовая"
                            value={kvartirs.plit_gaz}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    plit_gaz: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>ВПГ</label>
                        <input
                            type="text"
                            placeholder="ВПГ"
                            value={kvartirs.vpg}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    vpg: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Котел</label>
                        <input
                            type="text"
                            placeholder="Котел"
                            value={kvartirs.kotel}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    kotel: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Счетчик</label>
                        <input
                            type="text"
                            placeholder="Счетчик"
                            value={kvartirs.schetchik}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    schetchik: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Фильтр</label>
                        <input
                            type="text"
                            placeholder="Фильтр"
                            value={kvartirs.filtr}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    filtr: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>КТЗ</label>
                        <input
                            type="text"
                            placeholder="КТЗ"
                            value={kvartirs.ktz}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    ktz: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Сигнализатор загазованности</label>
                        <input
                            type="text"
                            placeholder="Сигнализатор загазованности"
                            value={kvartirs.signaliz}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    signaliz: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Электромагнитный клапан</label>
                        <input
                            type="text"
                            placeholder="Электромагнитный клапан"
                            value={kvartirs.elect_klap}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    elect_klap: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Кран перед прибором/счетчиком</label>
                        <input
                            type="text"
                            placeholder="Кран перед прибором/счетчиком"
                            value={kvartirs.kran}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    kran: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Футляр через стены/перекрытия</label>
                        <input
                            type="text"
                            placeholder="Футляр через стены/перекрытия"
                            value={kvartirs.fultlyar}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    fultlyar: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Сварные стыки (визуально)</label>
                        <input
                            type="text"
                            placeholder="Сварные стыки (визуально)"
                            value={kvartirs.svarn}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    svarn: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Шланги (сертифицированные)</label>
                        <input
                            type="text"
                            placeholder="Шланги (сертифицированные)"
                            value={kvartirs.shlang}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    shlang: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Вентиляция</label>
                        <input
                            type="text"
                            placeholder="Вентиляция"
                            value={kvartirs.ventil}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    ventil: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Дымоудаление</label>
                        <input
                            type="text"
                            placeholder="Дымоудаление"
                            value={kvartirs.dim_udal}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    dim_udal: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Наличие тяги (вентиляции)</label>
                        <input
                            type="text"
                            placeholder="Наличие тяги (вентиляции)"
                            value={kvartirs.tyag}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    tyag: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Наличие дверей, открывающейся форточки</label>
                        <input
                            type="text"
                            placeholder="Наличие дверей, открывающейся форточки"
                            value={kvartirs.dveri}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    dveri: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Вывод</label>
                        <input
                            type="text"
                            placeholder="Вывод"
                            value={kvartirs.vivod}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    vivod: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={s.block}>
                        <label>Прочее</label>
                        <input
                            type="text"
                            placeholder="Прочее"
                            value={kvartirs.else}
                            onChange={(e) =>
                                setKvartirs({
                                    ...kvartirs,
                                    else: e.target.value,
                                })
                            }
                        />
                    </div>
                    <button className={s.button} type="submit">
                        Добавить
                    </button>
                </form>
            )}
        </>
    );
};
