import { useState } from "react";
import { useLocation } from "react-router-dom";

export const useSidebar = (initialState, onSubmit) => {
    const [collapseShow, setCollapseShow] = useState("hidden");
    const location = useLocation();
    const [list, setList] = useState([
        {
            id: 1,
            title: "레이아웃 페이지",
            list: [{ title: "설정", href: "/admin/settings" }],
        },
        {
            id: 2,
            title: "UI 문서화",
            list: [
                { id: "ui-1", title: "색상", href: "/admin/docs/colors" },
                { id: "ui-2", title: "리스트", href: "/admin/docs/list" },
                { id: "ui-3", title: "활동", href: "/admin/docs/activity" },
                { id: "ui-4", title: "알림", href: "/admin/docs/notifications" },
                { id: "ui-5", title: "화신", href: "/admin/docs/avatar" },
                { id: "ui-6", title: "배지", href: "/admin/docs/badge" },
                { id: "ui-7", title: "버튼", href: "/admin/docs/buttons" },
                { id: "ui-8", title: "카드", href: "/admin/docs/cards" },
                { id: "ui-9", title: "슬라이더", href: "/admin/docs/slider" },
                { id: "ui-10", title: "차트", href: "/admin/docs/charts" },
                { id: "ui-11", title: "양식", href: "/admin/docs/forms" },
                { id: "ui-12", title: "아이콘", href: "/admin/docs/icons" },
                { id: "ui-13", title: "모달", href: "/admin/docs/modal" },
                { id: "ui-14", title: "탐색 및 탭", href: "/admin/docs/navigation-tabs" },
                { id: "ui-15", title: "게시판", href: "/admin/docs/board" },
                { id: "ui-16", title: "진전", href: "/admin/docs/progress" },
                { id: "ui-17", title: "스피너", href: "/admin/docs/spinner" },
                { id: "ui-18", title: "토스트", href: "/admin/docs/toast" },
                { id: "ui-19", title: "도구 설명", href: "/admin/docs/tooltip" },
            ],
        },
    ]);

    const toggleCollapse = (e) => {
        setCollapseShow(e);
    }
    
    return { collapseShow, location, list, toggleCollapse };
};
