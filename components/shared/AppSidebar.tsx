
import {
    Sidebar,
    SidebarContent,
} from "@/components/ui/sidebar"
import SidebarHeaderComponent from "./SidebarHeaderComponent"
import SidebarFooterComponent from "./SidebarFooterComponent"
import SidebarGroupComponent from "./SidebarGroupComponent"
import MainLinksComponent from "./MainLinksComponent"


export default function AppSidebar() {

    return (
        <Sidebar collapsible="icon">
            <SidebarHeaderComponent />
            <SidebarContent>
                <MainLinksComponent />
                <SidebarGroupComponent />
            </SidebarContent>
            <SidebarFooterComponent />
        </Sidebar>
    )
}
