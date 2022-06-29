import DG from "2gis-maps";
import { useEffect } from "react";

export const Map = ({ places }) => {
    useEffect(() => {
        let map;
        map = DG.map("map-container", {
            center: [42.96789913375842, 47.51181100753268],
            zoom: 13,
        });

        places.map((item, i) => {
            return DG.marker(item.place)
                .addTo(map)
                .bindPopup(
                    `<div class="popup"><div class="popup__name">${item.name}</div>
						<div class="popup__info">
						<div class="popup__info-item">
							<div><strong>Информация об источнике газоснабжения объекта</strong></div>
							<div><strong>Наименование объекта:</strong> ${item.info.name}</div>
							<div><strong>Адрес объекта:</strong> ${item.info.adres}</div>
							<div><strong>Источник газоснабжения:</strong> ${item.info.istochnik}</div>
							<div><strong>Расстояние от точки подключения до границы учатска:</strong> ${item.info.rasst}</div>
							<div><strong>Наименование ГСР, снабжающий источник газоснабжения:</strong> ${item.info.nameGSR}</div>
							<div><strong>Собственник источника газоснабжения:</strong> ${item.info.sobstvenn}</div>
							<div><strong>Дополнительная информация:</strong> ${item.info.dop}</div>
						</div>
						<div class="popup__info-item">
							<div><strong>Дата обследования:</strong> ${item.building.date}</div>
							<div><strong>Этажность:</strong> ${item.building.etaj}</div>
							<div><strong>Подъездов:</strong> ${item.building.podezd}</div>
							<div><strong>Квартир:</strong> ${item.building.kvartir}</div>
							<div><strong>Коллективный дымоход:</strong> ${item.building.kol_dym}</div>
							<div><strong>ШРП:</strong> ${item.building.shrp}</div>
							<div><strong>Газовые стояки:</strong> ${item.building.gaz_stoyak}</div>
							<div><strong>Кран (высокая сторона):</strong> ${item.building.kran_niz}</div>
							<div><strong>Кран (низкая сторона):</strong> ${item.building.kran_vis}</div>
							<div><strong>ИФС:</strong> ${item.building.ifc}</div>
							<div><strong>Фильтр:</strong> ${item.building.filtr}</div>
							<div><strong>Подводящий газопровод:</strong> ${item.building.pod_gaz}</div>
							<div><strong>Диаметр (высокая сторона):</strong> ${item.building.diametr_vis}</div>
							<div><strong>Диаметр (низкая сторона):</strong> ${item.building.diametr_niz}</div>
							<div><strong>Диаметр фасадного газопровода:</strong> ${item.building.diametr_fas}</div>
							<div><strong>Футляры через стены и перекрытия:</strong> ${item.building.fultlyar}</div>
							<div><strong>Наличия коммерческих помещений:</strong> ${item.building.kommerchesk}</div>
							<div><strong>Охранная зона:</strong> ${item.building.ohrann}</div>
							<div><strong>Соответсвие:</strong> ${item.building.sootvetsvie}</div>
							<div><strong>Вывод:</strong> ${item.building.vivod}</div>
							<div><strong>Прочее:</strong> ${item.building.else}</div>
						</div>
						<div class="popup__info-item">
							<div><strong>Квартира:</strong> ${item.kvartir.name}</div>
							<div><strong>Дата обследования:</strong> ${item.kvartir.date}</div>
							<div><strong>Этаж:</strong> ${item.kvartir.etaj}</div>
							<div><strong>Подъезд:</strong> ${item.kvartir.podezd}</div>
							<div><strong>Газоиспользующее оборудование:</strong> ${item.kvartir.gaz_ob}</div>
							<div><strong>Плита газовая:</strong> ${item.kvartir.plit_gaz}</div>
							<div><strong>ВПГ:</strong> ${item.kvartir.vpg}</div>
							<div><strong>Котел:</strong> ${item.kvartir.kotel}</div>
							<div><strong>Счетчик:</strong> ${item.kvartir.schetchik}</div>
							<div><strong>Фильтр:</strong> ${item.kvartir.filtr}</div>
							<div><strong>КТЗ:</strong> ${item.kvartir.ktz}</div>
							<div><strong>Сигнализатор загазованности:</strong> ${item.kvartir.signaliz}</div>
							<div><strong>Электромагнитный клапан:</strong> ${item.kvartir.elect_klap}</div>
							<div><strong>Кран перед прибором/счетчиком:</strong> ${item.kvartir.kran}</div>
							<div><strong>Футляр через стены/перекрытия:</strong> ${item.kvartir.fultlyar}</div>
							<div><strong>Сварные стыки (визуально):</strong> ${item.kvartir.svarn}</div>
							<div><strong>Шланги (сертифицированные):</strong> ${item.kvartir.shlang}</div>
							<div><strong>Вентиляция:</strong> ${item.kvartir.ventil}</div>
							<div><strong>Дымоудаление:</strong> ${item.kvartir.dim_udal}</div>
							<div><strong>Наличие тяги (вентиляции):</strong> ${item.kvartir.tyag}</div>
							<div><strong>Наличие дверей, открывающейся форточки:</strong> ${item.kvartir.dveri}</div>
							<div><strong>Вывод:</strong> ${item.kvartir.vivod}</div>
							<div><strong>Прочее:</strong> ${item.kvartir.else}</div>
						</div>
						
						</div>
					</div>`
                );
        });

        return () => map && map.remove();
    }, [places]);
    return (
        <div
            id="map-container"
            style={{ width: "65vw", height: "100vh" }}
        ></div>
    );
};
