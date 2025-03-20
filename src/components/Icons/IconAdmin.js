import { PiEnvelope, PiGear, PiLayoutDuotone, PiList, PiListBullets, PiMegaphone, PiPaintBrushDuotone, PiSeatThin, PiUsers } from "react-icons/pi";

const IconsAdmin = (pros) => {
    let html = '';

    switch (pros.icon) {
        case "PiList":
            html = <PiList className={pros.className} />
            break;
        case "PiPaintBrushDuotone":
            html = <PiPaintBrushDuotone className={pros.className} />
            break;
        case "PiListBullets":
            html = <PiListBullets className={pros.className} />
            break;
        case "PiLayoutDuotone":
            html = <PiLayoutDuotone className={pros.className} />
            break;
        case "PiUsers":
            html = <PiUsers className={pros.className} />
            break;
        case "PiGear":
            html = <PiGear className={pros.className} />
            break;
        case "PiMegaphone":
            html = <PiMegaphone className={pros.className} />
            break;
        case "PiEnvelope":
            html = <PiEnvelope className={pros.className} />
            break;




    }

    return html;
}

export default IconsAdmin;