import React from "react";
import s from "./EditForm.module.css";

export const EditForm = ({
   changedName,
   changedX,
   changedY,
   setChangedName,
   setChangedX,
   setChangedY,
   setShow,
   places,
   setPlaces,
   position,
   info,
   setInfo,
   building,
   setBuilding,
   kvartirs,
   setKvartirs,
}) => {
   const changePost = async (e) => {
      e.preventDefault();

      let updatedPosts = places.some((item) => item._id === position);

      updatedPosts = {
         ...updatedPosts,
         name: changedName,
         place: [parseFloat(changedX), parseFloat(changedY)],
         info: { ...info },
         building: { ...building },
         kvartir: { ...kvartirs },
      };

      const response = await fetch(
         "https://gaz-back.herokuapp.com/buildings/" + position,
         {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPosts),
         }
      );

      if (response.ok) {
         const updatedPostFromServer = await response.json();
         setPlaces(
            places.map((post) => {
               if (post._id === updatedPostFromServer._id) {
                  return updatedPostFromServer;
               }

               return post;
            })
         );
      } else {
         console.log(`Error`);
      }

      setShow(false);
   };
   return (
      <>
         <form onSubmit={changePost} className={s.form}>
            <button className={s.close} onClick={() => setShow(false)}>
               &#10006;
            </button>
            <h1>Форма изменения данных</h1>
            <div className={s.block}>
               <label>Название</label>
               <input
                  value={changedName}
                  onChange={(e) => setChangedName(e.target.value)}
                  type="text"
                  required
               />
            </div>
            <div className={s.block}>
               <label>Координата Х</label>
               <input
                  value={changedX}
                  onChange={(e) => setChangedX(e.target.value)}
                  type="text"
                  required
               />
            </div>
            <div className={s.block}>
               <label>Координата У</label>
               <input
                  value={changedY}
                  onChange={(e) => setChangedY(e.target.value)}
                  type="text"
                  required
               />
            </div>
            <h3 className={s.block__name}>
               Информация об источнике газоснабжения объекта
            </h3>
            <div className={s.block}>
               <label>Наименование объекта</label>
               <input
                  type="text"
                  required
                  placeholder="Наименование объекта"
                  value={info.name}
                  onChange={(e) => setInfo({ ...info, name: e.target.value })}
               />
            </div>
            <div className={s.block}>
               <label>Адрес объекта</label>
               <input
                  type="text"
                  required
                  placeholder="Адрес объекта"
                  value={info.adres}
                  onChange={(e) => setInfo({ ...info, adres: e.target.value })}
               />
            </div>
            <div className={s.block}>
               <label>Источник газоснабжения</label>
               <input
                  type="text"
                  required
                  placeholder="Источник газоснабжения"
                  value={info.istochnik}
                  onChange={(e) =>
                     setInfo({ ...info, istochnik: e.target.value })
                  }
               />
            </div>
            <div className={s.block}>
               <label>Расстояние от точки подключения до границы учатскa</label>
               <input
                  type="text"
                  required
                  placeholder="Расстояние от точки подключения до границы учатска"
                  value={info.rasst}
                  onChange={(e) => setInfo({ ...info, rasst: e.target.value })}
               />
            </div>
            <div className={s.block}>
               <label>
                  Наименование ГСР, снабжающий источник газоснабжения
               </label>
               <input
                  type="text"
                  required
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
                  required
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
                  required
                  placeholder="Дополнительная информация"
                  value={info.dop}
                  onChange={(e) => setInfo({ ...info, dop: e.target.value })}
               />
            </div>
            <h3 className={s.block__name}>Информация о здании</h3>
            <div className={s.block}>
               <label>Дата обследования</label>
               <input
                  type="text"
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
               Изменить
            </button>
         </form>
         <div onClick={() => setShow(false)} className={s.overlay}></div>
      </>
   );
};
